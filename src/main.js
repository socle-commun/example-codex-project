import { greet } from './utils.js';

export function main() {
  console.log('Codex agent running');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
