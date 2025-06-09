import { describe, it, expect } from 'vitest';
import { greet } from '../src/utils.js';

describe('utils', () => {
  it('greet returns greeting', () => {
    expect(greet('Codex')).toBe('Hello Codex');
  });
});
