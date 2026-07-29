# pocket-agent-cli

Terminal client — setup profiles, health checks, dev stack hints.

Workspace: [../docs/WORKSPACE_LAYOUT.md](../docs/WORKSPACE_LAYOUT.md)

## Commands

```bash
npm install
npm run build
npx pocket-agent-cli setup
npx pocket-agent-cli profile show
npx pocket-agent-cli status
npx pocket-agent-cli stack
```

Config: `../config/user-setup.yaml` (shared with `pocket-agent setup`).

## Dev without global link

```bash
npm run dev -- status
```

See [INSTRUCTIONS.md](INSTRUCTIONS.md).
