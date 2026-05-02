export default async function handler(req: any, res: any) {
  const pathParts = Array.isArray(req.query.path) ? req.query.path : [req.query.path];
  const pathStr = pathParts.filter(Boolean).join('/');

  const queryParams: Record<string, string> = {};
  Object.keys(req.query).forEach(k => {
    if (k !== 'path') queryParams[k] = req.query[k];
  });
  const queryString = new URLSearchParams(queryParams).toString();
  const targetUrl = `https://api.naver.com/${pathStr}${queryString ? '?' + queryString : ''}`;

  // HMAC signature is generated client-side — forward as-is
  const response = await fetch(targetUrl, {
    method: req.method,
    headers: {
      'X-Timestamp': req.headers['x-timestamp'] || '',
      'X-API-KEY':   req.headers['x-api-key']   || process.env.VITE_NAVER_AD_API_KEY  || '',
      'X-Customer':  req.headers['x-customer']   || process.env.VITE_NAVER_AD_CUSTOMER_ID || '',
      'X-Signature': req.headers['x-signature']  || '',
      'Content-Type': 'application/json',
    },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
