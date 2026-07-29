# Contributing

Thanks for contributing to **pocket-agent-cli** — part of the [Pocket Agent](https://github.com/pocket-agent) ecosystem.

Repository scaffolding was bootstrapped from [@open-templates](https://github.com/open-templates) GitHub templates.

## Setup

```bash
git clone https://github.com/pocket-agent/pocket-agent-cli.git
cd pocket-agent-cli
cd ../pocket-agent-sdk && npm run build
npm install && npm run build
```

In a full workspace clone, sibling repos live under the same org folder — see [../docs/WORKSPACE_LAYOUT.md](../docs/WORKSPACE_LAYOUT.md).

## Pull requests

1. Branch from `main`.
2. Keep changes focused; update [CHANGELOG.md](CHANGELOG.md) for user-visible changes.
3. Run `npm run build` before opening a PR.

## Commit style

[Conventional commits](https://www.conventionalcommits.org/) preferred — batched into [CHANGELOG.md](CHANGELOG.md) per release.

## License

MIT — see [LICENSE](LICENSE).

---

## Repository documents

[README](README.md) | [INSTRUCTIONS](INSTRUCTIONS.md) | [CHANGELOG](CHANGELOG.md) | **CONTRIBUTING** | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
