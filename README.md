# 📈 Tradex — Full Stack Stock Trading Dashboard

Tradex is a **full-stack stock trading dashboard** inspired by platforms like **Zerodha Kite**.
It allows users to **sign up, log in, view holdings, positions, and orders**, and place **buy orders from a watchlist** in a simulated trading environment.

The project demonstrates **full-stack development using React, Node.js, Express, and MongoDB**.

---

# 🚀 Features

### 🔐 Authentication

* User Signup
* User Login
* Demo login mode for guest users
* Session handled using `localStorage`

### 📊 Trading Dashboard

* Watchlist with live UI interaction
* Buy stocks directly from watchlist
* Orders table with user-specific data
* Holdings and positions display
* Demo trading data support

### ⚡ User-Specific Data

Each user has their own:

* Orders
* Holdings
* Positions

Data is filtered using `userId` stored in MongoDB.

### 🎨 Modern UI

* Dark trading UI inspired by real platforms
* Clean tables for orders and holdings
* Responsive dashboard layout

---

# 🏗 Tech Stack

### Frontend

* React
* Bootstrap
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Database

* MongoDB Atlas

---

# 📂 Project Structure

```
STOCK_TRADING
│
├── frontend/        # Landing page + authentication (port 3000)
│
├── dashboard/       # Trading dashboard (port 3001)
│
├── backend/         # Express API server (port 3002)
│   ├── model
│   │   ├── OrdersSchema.js
│   │   ├── HoldingsSchema.js
│   │   ├── PositionsSchema.js
│   │   └── UserModel.js
│   │
│   └── index.js
│
└── README.md
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/tradex.git
cd tradex
```

---

### 2️⃣ Install dependencies

Frontend

```
cd frontend
npm install
```

Dashboard

```
cd dashboard
npm install
```

Backend

```
cd backend
npm install
```

---

# ▶️ Running the Project

Start the backend:

```
cd backend
node index.js
```

Start frontend:

```
cd frontend
npm start
```

Start dashboard:

```
cd dashboard
npm start
```

---

# 🌐 Ports Used

| Service     | Port |
| ----------- | ---- |
| Frontend    | 3000 |
| Dashboard   | 3001 |
| Backend API | 3002 |

---

# 📡 API Endpoints

### Authentication

```
POST /signup
POST /login
```

### Trading Data

```
GET /allOrders/:userId
GET /allHoldings/:userId
GET /allPositions/:userId
POST /newOrder
```

---

# 🗄 Database Models

### User

```
username
email
password
```

### Orders

```
userId
name
qty
price
mode
```

### Holdings

```
userId
name
qty
avg
price
net
day
```

### Positions

```
userId
product
name
qty
avg
price
net
day
isLoss
```

---

# 🧪 Demo Mode

Users can explore the dashboard using **Demo Login** without creating an account.

Demo mode loads predefined:

* Orders
* Holdings
* Positions

---

# 📸 Screenshots

### Dashboard

* Watchlist with buy option
* Orders table
* Holdings and positions

*(Add screenshots here if uploading to GitHub)*

---

# 🔮 Future Improvements

* Real-time stock price updates
* Portfolio value tracking
* Buy/Sell order matching
* Order history charts
* WebSocket live updates
* Password hashing with bcrypt
* JWT authentication

---

# 👨‍💻 Author

**Varun**

Engineering Student
Full Stack Developer (Learning)

---

# ⭐ Contributing

Contributions, issues, and feature requests are welcome.

---

# 📜 License

This project is licensed under the MIT License.
