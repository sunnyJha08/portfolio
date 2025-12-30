type RateLimitEntry = {
  count: number;
  resetTime: number;
};

const store = new Map<string, RateLimitEntry>();

export function checkContactRateLimit(ip: string) {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetTime) {
    store.set(ip, {
      count: 1,
      resetTime: now + 12 * 60 * 60 * 1000,
    });
    return { allowed: true };
  }

  if (entry.count >= 2) {
    const hoursLeft = Math.ceil((entry.resetTime - now) / (60 * 60 * 1000));
    return {
      allowed: false,
      message: `Rate limit exceeded. Try again in ${hoursLeft} hour(s).`,
    };
  }

  entry.count++;
  return { allowed: true };
}
