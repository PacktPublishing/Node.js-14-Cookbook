async function routes(fastify) {
  fastify.get("/", async (request, reply) => {
    return { message: "Hello world!" };
  });
}

module.exports = routes;
