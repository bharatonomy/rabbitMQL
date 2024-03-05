import amqplib from "amqplib";

async function connect() {
  try {
    const connection = await amqplib.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");

    channel.consume("jobs", (message) => {
      console.log(message);
    });

    console.log("Waiting for messages.");
  } catch (ex) {
    console.error(ex);
  }
}
