# 🔗 URL Shortener

A simple and fast URL Shortener built with **Node.js**, **Express.js**, **MongoDB Atlas**, and **Vanilla JavaScript**.

🌐 **Live Demo:** https://url-shortener-ldhb.onrender.com/

---

## 📸 Preview

Paste a long URL, click **Generate**, and instantly get a shortened link that redirects to the original URL.

---

## ✨ Features

- 🔗 Shorten long URLs
- 🚀 Instant redirection
- 📊 Track visitor/click count
- ☁️ MongoDB Atlas database
- 🌍 Live deployment on Render
- 📱 Responsive UI
- ⚡ Fast and lightweight

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- ShortID

---

## 📂 Project Structure

```
url-shortener/
│
├── controllers/
│   └── url.js
│
├── models/
│   └── url.js
│
├── routes/
│   └── url.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── config.js
├── index.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Akarshio/url-shortener.git
```

Move into the project

```bash
cd url-shortener
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

Start the server

```bash
npm start
```

Open

```
http://localhost:3002
```

---

## 🚀 API Endpoints

### Create Short URL

```http
POST /url
```

Body

```json
{
  "originalurl": "https://google.com"
}
```

Response

```json
{
  "msg": "done",
  "shortUrl": "http://localhost:3002/abc123"
}
```

---

### Redirect

```http
GET /:shortId
```

Example

```
http://localhost:3002/abc123
```

---

### Visitor Count

```http
GET /visitors/:shortId
```

Response

```json
{
  "totalClicks": 5
}
```

---

## 🌐 Live Demo

https://url-shortener-ldhb.onrender.com/

---

## 💡 Future Improvements

- Custom short URLs
- QR Code generation
- User authentication
- URL expiration
- Copy-to-clipboard button
- Dashboard with analytics
- Link management
- Rate limiting

---

## 👨‍💻 Author

**Akarsh Gupta**

GitHub: https://github.com/Akarshio

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!