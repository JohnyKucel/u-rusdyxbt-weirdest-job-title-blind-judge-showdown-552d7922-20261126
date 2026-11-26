import { mkdirSync, writeFileSync } from "node:fs";

// One job title, 60 characters or fewer and nothing else.
// A real-sounding job with one hilariously specific twist: funerals
// are solemn and respectable, retired mascots are anything but.
const ENTRY = "Funeral Director for Retired Mascots";

// The gate allows 1 to 60 characters; refuse to write an entry that breaks it.
if (ENTRY.length < 1 || ENTRY.length > 60) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-60`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
