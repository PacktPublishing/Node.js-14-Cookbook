'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('default root route', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: '/'
  })
  t.deepEqual(JSON.parse(res.payload), { root: true })
})

// inject callback style:
//
// test('default root route', (t) => {
//   t.plan(2)
//   const app = build(t)
//
//   app.inject({
//     url: '/'
//   }, (err, res) => {
//     t.error(err)
//     t.deepEqual(JSON.parse(res.payload), { root: true })
//   })
// })
