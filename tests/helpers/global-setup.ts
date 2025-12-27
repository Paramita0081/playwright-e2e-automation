/*import { type FullConfig } from "@playwright/test";
import path from "path";
import fs from "fs";

async function globalSetup(config: FullConfig) {
  if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    //delete playwright results
    const resultsPath = path.resolve(process.cwd(), "playwright-report");
    console.log("directory to delete: ", resultsPath);

    if (fs.existsSync(resultsPath)) {
      fs.rmSync(resultsPath, { recursive: true, force: true });
    }
  }
}*/
