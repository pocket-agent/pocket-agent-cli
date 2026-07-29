# Agent instructions — pocket-agent-cli

**Scope:** Node.js CLI only. Global rules: [../INSTRUCTIONS.md](../INSTRUCTIONS.md).

## Commands

| Command | Purpose |
|---------|---------|
| `setup` | Write `../config/user-setup.yaml` |
| `profile show` / `profile set` | Connection profiles |
| `status` | Probe API + Pocket Node |
| `stack` | Print local dev terminal commands |

## Workspace paths

- Config: `../config/user-setup.yaml`
- Workspace root: parent of `../pocket-agent/` with `config/modules.yaml`

## Shared types

`ConnectionProfile` and `UserSetup` come from **`@pocket-agent/sdk`**. `lib/paths.ts` only handles workspace filesystem paths and YAML I/O.

## Source

```
src/
  index.ts
  commands.ts
  lib/paths.ts   # findWorkspaceRoot(), loadUserSetup()
```

## Do not add here

- HTTP worker routes → `../pocket-agent-api-app/`
- Web UI → `../pocket-agent-web-app/`
- Agent logic → `../pocket-agent/`
- Shared types → `../pocket-agent-sdk/`

## Deploy

Desktop install — `npm link` or packaged binary. Not Cloudflare.
