<img src=".github/pocket-agent-image.png" width="200" alt="Pocket Agent" align="left"/>

<div>
<h3>pocket-agent-cli</h3>
<p>
Terminal client for <strong>Pocket Agent</strong> — write setup profiles, probe the local stack, and print dev commands for Pocket Node and the API worker.
</p>
<a href="https://github.com/pocket-agent/pocket-agent-desktop-app/releases"><img src="https://img.shields.io/badge/Download%20for%20macOS-007ec6?style=flat-square&logo=apple" width="175" alt="Download for macOS"/></a>
</div>

<br/><br/>

<div align="center">

[![Release](https://img.shields.io/github/v/release/pocket-agent/pocket-agent-cli)](https://github.com/pocket-agent/pocket-agent-cli/releases)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/pocket-agent/pocket-agent-cli/blob/main/LICENSE)
[![Node](https://img.shields.io/badge/Node-20+-blue)](https://github.com/pocket-agent/pocket-agent-cli)

<br/>
<br/>

<img src=".github/screenshot.png" width="824" alt="Pocket Agent" style="border-radius: 5px;"/><br/>

</div>

<hr>

## Features

| Command | Description |
|---------|-------------|
| `setup` | Write `config/user-setup.yaml` |
| `profile show` / `profile set` | Connection profiles |
| `status` | Probe API worker and Pocket Node |
| `stack` | Print local dev terminal commands |

Uses `@pocket-agent/sdk` for `ConnectionProfile` and `UserSetup`.

## Requirements

- **Node 20+**
- Built `@pocket-agent/sdk` sibling (workspace or npm)

## Install

```bash
npm install -g pocket-agent-cli
```

Or from source: `npm install && npm run build` in this repo.

## Quick start

```bash
cd ../pocket-agent-sdk && npm run build
npm install && npm run build
npx pocket-agent-cli setup
npx pocket-agent-cli status
```

Config: `../config/user-setup.yaml` (shared with `pocket-agent setup` in a full workspace).

## Development

```bash
git clone https://github.com/pocket-agent/pocket-agent-cli.git
cd pocket-agent-cli
npm install && npm run build
```

See [INSTRUCTIONS.md](INSTRUCTIONS.md).

## Documentation

| Doc | Description |
|-----|-------------|
| [INSTRUCTIONS.md](INSTRUCTIONS.md) | CLI scope |
| [CHANGELOG.md](CHANGELOG.md) | Release history |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contributing |

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Security

To report a vulnerability, see [SECURITY.md](SECURITY.md).

## License

pocket-agent-cli is released under the [MIT License](LICENSE).
