const net = require("net");

const HOSTNAME = "localhost";
const PORT = 3000;

const socket = net.connect(PORT, HOSTNAME);

socket.write("World");

socket.on("data", (data) => {
  console.log(data.toString());
});
