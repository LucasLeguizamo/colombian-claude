# colombian-claude

A Claude Code mod that makes Claude talk like a Colombian while it works.

```
✻ Atascado en el trancón… (12s · 1.2k tokens)
✻ Listo, sumercé · 12s
```

Instead of `Sauteing…` and `Baked for 3s`, the spinner says what a Colombian would be doing, in the accent you pick. When a `/goal` finishes, Claude welcomes you with **"Bienvenido a la patria milagro"**.

## Install

```
/plugin install colombian-claude --marketplace LucasLeguizamo/colombian-claude
```

## Pick your accent

Open `/config`, find **colombian-claude → Accent**, and choose one:

| Option | Accent | While working | When done |
| --- | --- | --- | --- |
| `rolo` (default) | Bogotá | Atascado en el trancón · Esperando el TransMilenio · Tomando onces | Listo, sumercé · Melo, chino · Firmes |
| `paisa` | Antioquia | Voleando machete · Subiendo en el Metrocable · Pidiendo una arepa con quesito | Listo, pues · Qué chimba, parce · Ave María, quedó |
| `costeno` | Caribbean coast | Bailando champeta · Cogiendo fresco bajo el palo e' mango · Prendiendo el picó | Ajá, quedó · Eche, qué nota · Nojoda, quedó bacano |
| `caleno` | Valle del Cauca | Bailando salsa · Pidiendo un cholao · Esperando el MÍO | Ve, qué bacano · Listo, mirá · Oís, quedó |
| `santandereano` | Santander | Comiendo hormigas culonas · Bajando al Chicamocha · Hágale, mano | Listo, mano · Quedó bien verraco, mano |
| `pastuso` | Nariño | Comiendo cuy · Achachay, qué frío · Subiendo al Galeras | Ya está, ve · Quedó bonito, ve |
| `llanero` | Eastern plains | Asando la mamona · Templando el arpa · Cantando un joropo | Listo, compae · Quedó como es |
| `boyacense` | Boyacá | Sembrando papa · Pasando el páramo · Poniéndome la ruana | Listo, sumercé · Ya quedó, mi señor |
| `mix` | All of them | Anything above | Anything above |

Each turn picks one phrase and keeps it until the turn ends.

## Add your own phrases

Everything lives in [`hooks/accents.ts`](hooks/accents.ts): one `working` and one `done` list per accent. Add a line, open a PR. New accents are welcome too (chocoano, huilense, tolimense, cundiboyacense…): add an entry and its name to `userConfig.accent.options` in [`.claude-plugin/plugin.json`](.claude-plugin/plugin.json).

## How it works

It is a [Claude Code function-hooks mod](https://claude.dev/blog/getting-started-with-claude-code-mods/), a single module in [`hooks/register.tsx`](hooks/register.tsx):

- `ui.render` on `Spinner` and `TurnDuration` swaps the engine's word for one from your accent (the spinner keeps its time, tokens and effort; the closing line is redrawn as `✻ <phrase> · 12s`).
- `session.append` watches for the row the engine writes when a `/goal` ends and shows a toast.

**Known limitation:** Claude Code has no "goal met" event for mods yet. A goal writes one status row when it is set and another when it ends, and mods can't read which is which, so the toast fires on every second row. A goal that fails or is cleared early celebrates too.

## Develop

```
claude plugin validate .
claude plugin test .
claude --plugin-dir .
```

## License

MIT
