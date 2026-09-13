import rateLimit from 'express-rate-limit';

export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    error: 'অত্যধিক রিকোয়েস্ট পাঠানো হয়েছে। অনুগ্রহ করে ১৫ মিনিট পর আবার চেষ্টা করুন।'
  }
});

export const strictLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: {
    status: 429,
    error: 'সিকিউরিটি লিমিট অতিক্রম করেছে। কিছু সময় পর চেষ্টা করুন।'
  }
});
