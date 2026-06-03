import { startCLI } from "./chat/cli.js";

startCLI().catch((error) => {
  console.error({ error });
  process.exit(1);
});
