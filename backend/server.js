require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // ── Keep-alive: self-ping every 4 minutes to prevent idle shutdown ──
  const KEEP_ALIVE_INTERVAL = 4 * 60 * 1000; // 4 minutes in ms
  const backendUrl = process.env.BACKEND_URL;

  if (backendUrl) {
    const client = backendUrl.startsWith('https') ? require('https') : require('http');

    setInterval(() => {
      client
        .get(backendUrl, (res) => {
          console.log(`[Keep-Alive] Pinged ${backendUrl} — Status: ${res.statusCode}`);
        })
        .on('error', (err) => {
          console.error(`[Keep-Alive] Ping failed:`, err.message);
        });
    }, KEEP_ALIVE_INTERVAL);

    console.log(`[Keep-Alive] Self-ping scheduled every 4 minutes → ${backendUrl}`);
  } else {
    console.warn('[Keep-Alive] BACKEND_URL not set in .env — skipping self-ping');
  }
});
