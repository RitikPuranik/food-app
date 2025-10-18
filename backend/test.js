require('dotenv').config();
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('IMAGEKIT_PUBLIC_KEY:', process.env.IMAGEKIT_PUBLIC_KEY);
console.log('All env vars loaded:', Object.keys(process.env).filter(k => k.includes('IMAGEKIT')));
