
import { rateLimit } from 'express-rate-limit'

const limit = rateLimit({
    windowMs: 60000,
    limit: 60,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: {
        error:"You sand to many request in a given amount of time"
    }
});

export default limit