import { twilioClient, logger } from '../config/index.js';
import { FROM_NUMBER } from '../constants.js';
import { getUniqueStrings } from '../utils.js';

class WhatsappJob {
    async run(data) {
        try {
            const { rate, weight } = JSON.parse(data) ?? {};

            const notification = `Gold rate is Rs. ${rate?.toLocaleString()} per ${weight}`;
            const messages = await twilioClient.messages.list({ to: FROM_NUMBER });
            const recipients = getUniqueStrings(messages.map((message) => message?.from));

            const promises = [];

            recipients.forEach((to_number) => {
                promises.push(twilioClient.messages.create({
                    from: FROM_NUMBER,
                    to: to_number,
                    body: notification,
                    /* Instead of body, we can also use content templates with parameters like this.
                        // contentSid: process.env.TWILIO_TEMPLATE_SID,
                        // contentVariables: JSON.stringify({ rate, weight }),
                    */
                }));
            });

            await Promise.all(promises);
            logger.info('SUCCESS COMPLETING JOB, NOTIFICATIONS SENT!');
        } catch (err) {
            logger.error('ERROR SENDING NOTIFICATION:', err);
        }

    }
}

export default WhatsappJob;
