import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parse, stringify } from "yaml";
import type { ConnectionProfile, UserSetup } from "pocket-agent-sdk";

export type { ConnectionProfile, UserSetup };

export function findWorkspaceRoot(start = process.cwd()): string {
  let dir = start;
  for (let i = 0; i < 10; i++) {
    if (existsSync(path.join(dir, "config", "modules.yaml"))) {
      return dir;
    }
    if (
      existsSync(path.join(dir, "config", "setup.defaults.yaml")) &&
      existsSync(path.join(dir, "pocket-agent", "pyproject.toml"))
    ) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return start;
}

/** @deprecated use findWorkspaceRoot */
export function findMonorepoRoot(start = process.cwd()): string {
  return findWorkspaceRoot(start);
}

export async function loadUserSetup(root: string): Promise<UserSetup | null> {
  const file = path.join(root, "config", "user-setup.yaml");
  if (!existsSync(file)) return null;
  const text = await readFile(file, "utf8");
  return parse(text) as UserSetup;
}

export async function writeUserSetup(root: string, data: UserSetup): Promise<void> {
  const defaultsPath = path.join(root, "config", "setup.defaults.yaml");
  const target = path.join(root, "config", "user-setup.yaml");
  let base: UserSetup = {};
  if (existsSync(defaultsPath)) {
    base = parse(await readFile(defaultsPath, "utf8")) as UserSetup;
  }
  const merged = { ...base, ...data, profile: data.profile ?? base.profile };
  await writeFile(target, stringify(merged), "utf8");
}

export function apiUrl(setup: UserSetup | null): string {
  return setup?.api?.url ?? "http://localhost:8788";
}

export function agentUrl(setup: UserSetup | null): string {
  return setup?.agent?.url ?? "http://127.0.0.1:8787";
}
