# Centre Point Navi Mumbai Website (Clone)

A full-stack recreation of [centrepointnavimumbai.com](https://centrepointnavimumbai.com/) — a boutique hotel in Turbhe, Navi Mumbai — built with a Vite + React frontend and a Node/Express + MongoDB backend.

## Stack
- **Frontend:** Vite, React, React Router
- **Backend:** Node.js, Express, Mongoose (MongoDB)

## Project Structure
```
frontend/   Vite React app (pages: Home, Accommodation, Dining, Amenities, Gallery, Contact)
backend/    Express API + MongoDB connection + Contact form storage
```

## Setup

### 1. Start MongoDB locally
```bash
mkdir -p ~/mongodb-data/centrepointnavimumbai
mongod --dbpath ~/mongodb-data/centrepointnavimumbai --logpath ~/mongodb-data/logs/centrepointnavimumbai.log --port 27017 --bind_ip 127.0.0.1 --fork
```

### 2. Backend
```bash
cd backend
npm install
npm run dev        # or: npm start
```
On successful startup you should see:
```
MongoDB connected successfully
Server running on http://localhost:5050
```
Configure the database via `backend/.env` (`MONGO_URI`, `PORT`). Default assumes a local MongoDB at `mongodb://127.0.0.1:27017/centrepointnavimumbai`.

### 3. Frontend
```bash
cd frontend
npm install
npm run dev         # http://localhost:5173
```
The Vite dev server proxies `/api/*` requests to the backend on port `5050` (see `vite.config.js`).

## Notes
- Port `5000` is commonly occupied on macOS by AirPlay/Control Center, so the backend defaults to port `5050` instead.
- The Contact page form (`/contact`) posts to `POST /api/contact`, which persists submissions to MongoDB via the `Contact` model.
- "Book Now" buttons link out to the hotel's real AxisRooms booking engine; "Careers" links out to `careers.centrepointgroup.in`.
- Images in `frontend/src/assets/images` were pulled from the live reference site for visual fidelity. Replace them with your own licensed/owned photography before any public or commercial deployment.
- A copy of the official hotel fact sheet is served from `frontend/public/downloads/` and linked from the footer.
# Centre-Point-navi-Mumbai-Web
