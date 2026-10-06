import type { Register } from 'claude-code'

import { accentFor, GOAL_MET } from './accents'

// Hash the engine's sampled word so one turn keeps one phrase across redraws.
export const pick = (list: string[], seed: string) => {
  let h = 0
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) | 0
  return list[Math.abs(h) % list.length] ?? list[0]!
}

export const duration = (ms: number) => {
  const s = Math.round(ms / 1000)
  return s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`
}

// The engine raises no goal event. A /goal writes a 'goal_status' row when it is
// set and another when it ends, and the row carries no text a hook can read, so
// every second one is the end.
// ponytail: counts rows; a goal that fails or is cleared early also ends on an even row and celebrates too.
export const goalWatch = () => {
  let rows = 0
  return (name: string | undefined) => name === 'goal_status' && ++rows % 2 === 0
}

export const register: Register = (on, options) => {
  const accent = accentFor(options.accent)
  const isGoalEnd = goalWatch()

  on('ui.render', { component: 'Spinner' }, ($, e, next) =>
    next({ ...e, props: { ...e.props, word: pick(accent.working, e.props.word + e.requestId) } }),
  )

  // Drawn whole: rewriting the word alone would leave the engine's English 'for'.
  on('ui.render', { component: 'TurnDuration' }, ($, e) => {
    const { Text } = $.ui.resolve(e)
    const word = pick(accent.done, e.props.word + e.requestId)
    return <Text dimColor>✻ {word} · {duration(e.props.durationMs)}</Text>
  })

  on('session.append', async ($, e, next) => {
    const result = await next(e)
    if (!e.agentId && isGoalEnd(e.message.name)) $.ui.toast(GOAL_MET)
    return result
  })
}
