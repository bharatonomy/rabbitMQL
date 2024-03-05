import amqplib from "amqplib";

const msg = { number: 19 };
async function connect() {
  try {
    const connection = await amqplib.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    console.log(`Job sent successfully ${msg.number}`);
  } catch (ex) {
    console.error(ex);
  }
}
