# Monorepo layout (`apps/cli`)

Package **pocket-agent-cli** — terminal client for setup, profiles, and health checks.

## Paths

| Context | Path |
|---------|------|
| Monorepo root | `../../` |
| This package | `apps/cli/` |
| User config | `../../config/user-setup.yaml` |

## Standalone vs monorepo

| Mode | How to work |
|------|-------------|
| **Monorepo** | Run from `apps/cli/`; config lives at repo root |
| **Standalone** | Clone `pocket-agent-cli` alone; point to a Pocket Agent install path (future) |

`package.json` uses `repository.directory: "apps/cli"`.

## Deploy

**Desktop install only** — `npm link` or package as global npm/bun binary. Not deployed to Cloudflare.

## Pairing

Uses the same connection profiles as `pocket-agent setup` and `VITE_CONNECTION_PROFILE` in web.
