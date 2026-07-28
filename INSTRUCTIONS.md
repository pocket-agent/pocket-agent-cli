# Agent instructions — pocket-agent-cli

Terminal client for the Pocket Agent monorepo. Pairs with the Python agent, API worker, and web app.

## Commands

```bash
cd apps/cli && npm install
npm run build
pocket-agent-cli setup          # config/user-setup.yaml (all-local)
pocket-agent-cli profile show
pocket-agent-cli profile set hosted-ui-home-agent
pocket-agent-cli status         # API + Pocket Node health
pocket-agent-cli stack          # print dev terminals
```

Dev without global link: `npm run dev -- status`

## Monorepo

- Config: `../../config/user-setup.yaml` (shared with `pocket-agent setup`)
- Docs: [MONOREPO.md](MONOREPO.md), [../../docs/APPS_ARCHITECTURE.md](../../docs/APPS_ARCHITECTURE.md)

## Deploy

Desktop install only — `npm link` or future packaged binary. Not Cloudflare.
