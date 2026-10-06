import { expect, test } from 'claude-code/testing'

import { ACCENTS, accentFor, MIX } from './accents'
import { duration, goalWatch, pick } from './register'

test('pick is stable and stays in the list', () => {
  const list = ACCENTS.rolo.working
  const a = pick(list, 'Sauteing-x')
  expect(pick(list, 'Sauteing-x')).toBe(a)
  expect(list.includes(a)).toBe(true)
})

test('every accent has phrases, unknown falls back to rolo', () => {
  for (const a of Object.values(ACCENTS)) {
    expect(a.working.length > 0 && a.done.length > 0).toBe(true)
  }
  expect(accentFor('paisa')).toBe(ACCENTS.paisa)
  expect(accentFor('mix')).toBe(MIX)
  expect(accentFor('klingon')).toBe(ACCENTS.rolo)
})

test('goal celebrates on its closing row, not when set', () => {
  const isEnd = goalWatch()
  expect(isEnd('goal_status')).toBe(false) // set
  expect(isEnd('queued_command')).toBe(false)
  expect(isEnd('goal_status')).toBe(true) // met
  expect(isEnd('goal_status')).toBe(false) // next goal set
  expect(isEnd('goal_status')).toBe(true)
})

test('duration reads like the engine line', () => {
  expect(duration(3_200)).toBe('3s')
  expect(duration(64_000)).toBe('1m 4s')
})
