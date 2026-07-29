# pocket-agent-cli

Terminal client for the open-source **[Pocket Agent](https://github.com/pocket-agent)** ecosystem · **v0.1.0**

Setup profiles, health checks, and local dev stack hints.

## What's included (0.1.0)

| Command | Description |
|---------|-------------|
| `setup` | Write `config/user-setup.yaml` |
| `profile show` / `profile set` | Connection profiles |
| `status` | Probe API worker and Pocket Node |
| `stack` | Print local dev terminal commands |

Uses `@pocket-agent/sdk` for `ConnectionProfile` and `UserSetup`.

## Quick start

```bash
cd ../pocket-agent-sdk && npm run build
npm install && npm run build
npx pocket-agent-cli setup
npx pocket-agent-cli status
```

Config: `../config/user-setup.yaml` (shared with `pocket-agent setup`).

## Docs

[INSTRUCTIONS.md](INSTRUCTIONS.md) · [CHANGELOG.md](CHANGELOG.md) · [../docs/WORKSPACE_LAYOUT.md](../docs/WORKSPACE_LAYOUT.md)
