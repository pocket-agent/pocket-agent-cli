# Pocket Agent CLI (`apps/cli`)

Terminal client for **pocket-agent-cli** — setup wizard, connection profiles, and health checks. Desktop install only (not deployed to Cloudflare).

Monorepo: [../../README.md](../../README.md) · Architecture: [../../docs/APPS_ARCHITECTURE.md](../../docs/APPS_ARCHITECTURE.md)

## Install (monorepo)

```bash
cd apps/cli
npm install
npm link   # optional — global `pocket-agent-cli` command
```

Or run without linking:

```bash
npm run dev -- status
npm run dev -- stack
```

## Commands

| Command | Description |
|---------|-------------|
| `setup [--profile all-local]` | Write `config/user-setup.yaml` at monorepo root |
| `profile show` | Print current profile JSON |
| `profile set <name>` | `all-local`, `hosted-ui-home-agent`, `cloud-only` |
| `status` | Probe API worker `/status` and agent `/health` |
| `stack` | Print local dev terminal commands |

## Connection profiles

| Profile | Typical use |
|---------|-------------|
| `all-local` | Web + API worker + agent on localhost (default) |
| `hosted-ui-home-agent` | Cloudflare Pages + Worker + tunnel to home |
| `cloud-only` | Hosted UI + Worker without Pocket Node |

Profiles are stored in `config/user-setup.yaml` (same as `pocket-agent setup` on the Python side).

## Environment

CLI reads monorepo root by finding `config/setup.defaults.yaml`. No secrets in the CLI package — Google OAuth stays in web/desktop.

## Nested git

This folder is a separate git repository inside the monorepo (`pocket-agent/pocket-agent-cli`).

## Related

- [MONOREPO.md](MONOREPO.md)
- [Python agent](../../src/pocket_agent/) — `pocket-agent serve`
- [Web](../web/) · [API](../api/) · [Desktop](../desktop/)
