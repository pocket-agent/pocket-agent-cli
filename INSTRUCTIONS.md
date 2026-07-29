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

## Source

```
src/
  index.ts
  commands.ts
  lib/paths.ts   # findWorkspaceRoot()
```

## Do not add here

- HTTP worker routes → `../pocket-agent-api/`
- Web UI → `../pocket-agent-web/`
- Agent logic → `../pocket-agent/`

## Deploy

Desktop install — `npm link` or packaged binary. Not Cloudflare.
