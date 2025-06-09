import { describe, it, expect } from 'vitest';
import { main } from '../src/main.js';

describe('main', () => {
  it('runs without throwing', () => {
    expect(() => main()).not.toThrow();
  });
});
