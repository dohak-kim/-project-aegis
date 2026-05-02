export default async function handler(req: any, res: any) {
  const pathParts = Array.isArray(req.query.path) ? req.query.path : [req.query.path];
  const pathStr = pathParts.filter(Boolean).join('/');

  const queryParams: Record<string, string> = {};
  Object.keys(req.query).forEach(k => {
    if (k !== 'path') queryParams[k] = req.query[k];
  });
  const queryString = new URLSearchParams(queryParams).toString();
  const targetUrl = `https://openapi.naver.com/${pathStr}${queryString ? '?' + queryString : ''}`;

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: {
      'X-Naver-Client-Id':     process.env.VITE_NAVER_CLIENT_ID     || '',
      'X-Naver-Client-Secret': process.env.VITE_NAVER_CLIENT_SECRET || '',
      'Content-Type': 'application/json',
    },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
