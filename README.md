# FoodGram 🍔📸

FoodGram is a full-stack social food platform where users can discover food, share posts, interact with other food lovers, follow creators, and connect with food partners.

The project combines a modern React frontend with a Node.js/Express backend and MongoDB for persistent data.

## ✨ Features

- 👤 User authentication and profile management
- 🍽️ Create and discover food posts
- ❤️ Like, save, comment, and interact with posts
- 👥 Follow and unfollow other users
- 🔔 Notifications for social activity
- 🏪 Food partner support
- 📷 Image upload and media handling
- 🔐 Protected backend routes and JWT-based authentication
- 📱 Responsive modern frontend

## 🏗️ Architecture

```text
FoodGram/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── scripts/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
└── LICENSE
```

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- React Router
- Axios
- Framer Motion
- Lucide React

### Backend

- Node.js
- Express 5
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Cookie Parser
- Multer
- ImageKit
- UUID

## 🚀 Live Demo

The frontend is currently deployed at:

**https://food-app-nine-liard.vercel.app**

## ⚙️ Getting Started

### Prerequisites

Install the following before running the project:

- Node.js 18+
- npm
- MongoDB or MongoDB Atlas

### 1. Clone the repository

```bash
git clone https://github.com/RitikPuranik/FoodGram.git
cd FoodGram
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Fill in the required MongoDB, JWT, and media-storage configuration in `.env`.

Start the backend:

```bash
npm run dev
```

For production-style startup:

```bash
npm start
```

### 3. Set up the frontend

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## 🔐 Environment Variables

Do not commit real credentials or API keys.

The repository includes example environment files at:

- `backend/.env.example`
- `frontend/.env.example`

Configure values for the database, authentication, API endpoints, and media services as required by your deployment.

## 🔌 Backend API Areas

The backend is organized around separate controllers, models, middlewares, and routes for major application features, including:

- Authentication
- Food posts
- Profiles
- Follows
- Notifications
- Food partners

This structure keeps business logic separated by responsibility and makes the backend easier to extend.

## 🧪 Scripts

### Backend

```bash
npm run dev      # Development server with nodemon
npm start        # Start server with Node.js
npm test         # Placeholder test command
```

### Frontend

```bash
npm run dev      # Start Vite development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔒 Security

- Keep `.env` files out of source control.
- Use a strong JWT secret in production.
- Never expose database credentials or private API keys in frontend code.
- Use HTTPS for production deployments.
- Validate and authorize protected API operations on the backend.

## 🤝 Contributing

Contributions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Run the relevant lint/build checks.
5. Commit your changes with a clear message.
6. Push the branch and open a pull request.

## 📄 License

FoodGram is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for the complete license text.

## 👤 Author

**Ritik Puranik**

GitHub: https://github.com/RitikPuranik

---

Built with React, Node.js, Express, and MongoDB ❤️
