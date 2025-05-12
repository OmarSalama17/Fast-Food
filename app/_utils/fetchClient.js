const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL = 'http://localhost:1337/api';

async function fetchClient(endpoint, options = {}) {
const res = await fetch(`${apiURL}${endpoint}`, {
    headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    ...(options.headers || {}),
    },
    ...options,
});

if (!res.ok) {
    throw new Error(`Fetch error: ${res.status}`);
}

return res.json();
}

export default fetchClient;
