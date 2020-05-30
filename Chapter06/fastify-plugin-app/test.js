fastify.route({
  method: "GET",
  url: "/",
  handler: function (request, reply) {
    reply.send({ message: "Hello world!" });
  },
});
