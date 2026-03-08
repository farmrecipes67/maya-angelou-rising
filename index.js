'use strict';

/**
 * maya-angelou-rising
 * An npm package inspired by Maya Angelou
 * An npm package inspired by Maya Angelou — generates empowering, resilient verses about identity, strength, and rising above.
 */

const poems = [
  "This is a placeholder poem in the style of Maya Angelou.",
  "Replace these with generated or curated verses.",
  "Each invocation returns a random selection."
];

/**
 * Returns a random poem inspired by Maya Angelou
 * @returns {string} A poem string
 */
function getPoem() {
  const idx = Math.floor(Math.random() * poems.length);
  return poems[idx];
}

/**
 * Returns all poems in the collection
 * @returns {string[]} Array of poem strings
 */
function getAllPoems() {
  return poems.slice();
}

module.exports = { getPoem, getAllPoems };

if (require.main === module) {
  console.log(getPoem());
}
