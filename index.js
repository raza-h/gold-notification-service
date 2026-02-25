import { WhatsappJob } from "./entities/index.js";
import { logger, consumer } from "./config/index.js";

try {
    await consumer.connect()
    await consumer.subscribe({ topic: 'price-events' })
    const whatsappJob = new WhatsappJob();
    
    await consumer.run({
        eachMessage: async ({ _, __, message }) => {
            whatsappJob.run(message.value.toString());
        },
    });
    
    logger.info("SUCCESS STARTING NOTIFICATION SERVICE!");
} catch (err) {
    logger.error(`ERROR STARTING NOTIFICATION SERVICE:`, err);
}
