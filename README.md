# rabbitMQL

Learning about RabbitMQ and Pub/Sub system.

RabbitMQ server listens at port 5672.

Piublisher stablishes a TCP connection between the server. Two way communication.

Consumer stablishes a TCP connection using Advanced Message Protocol Connection(AMPC).

A Channel is a logical connection in between the connections. Multiplexing is used. Data can be shared using multiple channels in the same singular TCP connection.

Exchange queues are situated in the server.

