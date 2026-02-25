import { WhatsappJob } from "./entities/index.js";
import { logger, consumer } from "./config/index.js";
import { wrapError } from "./utils.js";

try {
    await consumer.connect()
    await consumer.subscribe({ topic: 'price-events' })
    const whatsappJob = new WhatsappJob();
    
    await consumer.run({
        eachMessage: async ({ _, __, message }) => {
            await whatsappJob.run(message.value.toString());
        },
    });
    
    logger.info("SUCCESS STARTING NOTIFICATION SERVICE!");
} catch (err) {
    logger.error(wrapError('ERROR STARTING NOTIFICATION SERVICE:', err));
}
