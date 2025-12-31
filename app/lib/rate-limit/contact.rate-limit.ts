// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Helper function to check rate limit
function checkRateLimit(ip: string): { allowed: boolean; message?: string } {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);

  // If no record or reset time passed, allow and create new record
  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 12 * 60 * 60 * 1000, // 12 hours from now
    });
    return { allowed: true };
  }

  // Check if limit exceeded
  if (limit.count >= 2) {
    const hoursLeft = Math.ceil((limit.resetTime - now) / (60 * 60 * 1000));
    return {
      allowed: false,
      message: `Retry in ${hoursLeft} hour(s) or email sunnyjha98971@gmail.com`,
    };
  }

  // Increment count
  limit.count++;
  return { allowed: true };
}

export { checkRateLimit };
