#!/usr/bin/env node
import { Command } from "commander";
import type { ConnectionProfile } from "@pocket-agent/sdk";
import { CONNECTION_PROFILES } from "@pocket-agent/sdk";
import {
  runProfileSet,
  runProfileShow,
  runSetup,
  runStack,
  runStatus,
} from "./commands.js";

const program = new Command();

program
  .name("pocket-agent-cli")
  .description("Pocket Agent terminal client — setup, profiles, monitoring")
  .version("0.1.0");

program
  .command("setup")
  .description("Write config/user-setup.yaml (all-local by default)")
  .option(
    "--profile <profile>",
    "all-local | hosted-ui-home-agent | cloud-only",
    "all-local"
  )
  .action(async (opts: { profile: ConnectionProfile }) => {
    await runSetup(opts.profile);
  });

program
  .command("profile")
  .description("Show or set connection profile")
  .argument("[action]", "show | set")
  .argument("[value]", "profile name when using set")
  .action(async (action?: string, value?: string) => {
    if (!action || action === "show") {
      await runProfileShow();
      return;
    }
    if (action === "set" && value) {
      const allowed = [...CONNECTION_PROFILES];
      if (!allowed.includes(value as ConnectionProfile)) {
        console.error(`Invalid profile. Choose: ${allowed.join(", ")}`);
        process.exit(1);
      }
      await runProfileSet(value as ConnectionProfile);
      return;
    }
    console.error("Usage: pocket-agent-cli profile show | profile set <name>");
    process.exit(1);
  });

program
  .command("status")
  .description("Check API worker and Pocket Node health")
  .action(async () => {
    await runStatus();
  });

program
  .command("stack")
  .description("Print local dev stack commands")
  .action(() => {
    runStack();
  });

program.parse();
