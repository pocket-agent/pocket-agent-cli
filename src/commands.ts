import {
  type ConnectionProfile,
  findMonorepoRoot,
  loadUserSetup,
  writeUserSetup,
  apiUrl,
  agentUrl,
} from "./lib/paths.js";

export async function runSetup(profile?: ConnectionProfile): Promise<void> {
  const root = findMonorepoRoot();
  await writeUserSetup(root, {
    profile: profile ?? "all-local",
  });
  console.log(`Created config/user-setup.yaml (profile: ${profile ?? "all-local"})`);
  console.log(`Monorepo root: ${root}`);
}

export async function runProfileShow(): Promise<void> {
  const root = findMonorepoRoot();
  const setup = await loadUserSetup(root);
  if (!setup) {
    console.log("No config/user-setup.yaml — run: pocket-agent-cli setup");
    return;
  }
  console.log(JSON.stringify(setup, null, 2));
}

export async function runProfileSet(profile: ConnectionProfile): Promise<void> {
  const root = findMonorepoRoot();
  const setup = (await loadUserSetup(root)) ?? {};
  setup.profile = profile;
  await writeUserSetup(root, setup);
  console.log(`Profile set to: ${profile}`);
}

export async function runStatus(): Promise<void> {
  const root = findMonorepoRoot();
  const setup = await loadUserSetup(root);
  const api = apiUrl(setup);
  const agent = agentUrl(setup);

  console.log(`Profile: ${setup?.profile ?? "unknown"}`);
  console.log(`API:   ${api}`);
  console.log(`Agent: ${agent}`);

  try {
    const apiRes = await fetch(`${api}/status`);
    const apiJson = await apiRes.json();
    console.log("\nAPI worker /status:");
    console.log(JSON.stringify(apiJson.data ?? apiJson, null, 2));
  } catch (error) {
    console.error("\nAPI worker unreachable:", error instanceof Error ? error.message : error);
  }

  try {
    const agentRes = await fetch(`${agent}/health`);
    const agentJson = await agentRes.json();
    console.log("\nPocket Node /health:");
    console.log(JSON.stringify(agentJson.data ?? agentJson, null, 2));
  } catch (error) {
    console.error("\nPocket Node unreachable:", error instanceof Error ? error.message : error);
  }
}

export function runStack(): void {
  const root = findMonorepoRoot();
  console.log(`
Pocket Agent — local dev stack

Terminal 1 — Pocket Node
  cd ${root}
  pocket-agent serve

Terminal 2 — API worker
  cd ${root}/apps/api && npm run dev

Terminal 3 — Web
  cd ${root}/apps/web && bun run dev

Optional — Desktop
  cd ${root}/apps/desktop && npm run dev

Monitor: http://localhost:5173/monitor
`);
}
