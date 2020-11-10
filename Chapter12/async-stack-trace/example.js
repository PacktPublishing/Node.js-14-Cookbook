foo().then(
  () => console.log("success"),
  (error) => console.error(error.stack)
);

async function foo() {
  await bar();
}

async function bar() {
  await Promise.resolve();
  throw new Error("Fail");
}
