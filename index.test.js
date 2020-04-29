const test = require("ava")
require('./index')

test("eat goes in the start", t => {
  const a = [1, 2]
  a.eat(0)
  t.deepEqual(a, [0, 1, 2])
})

test("vomit comes out the start", t => {
  t.deepEqual([1, 2].vomit(), 1)
})

test("poop comes out the end", t => {
  t.deepEqual([1, 2].poop(), 2)
})

test("ꓽO goes in the end", t => {
  const a = [1, 2]
  a.ꓽO(3)
  t.deepEqual(a, [1, 2, 3])
})