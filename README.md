# 📘 Mock Authentication System — React + Vite

A fully functional React auth flow (Register → Login → Profile) built with **Vite + React**, styled with Bootstrap, and using **`localStorage` as MY-STORAGE**.
This project demonstrates reusable components, state management, navigation, and protected routes without a backend.
---

## 📁 Project Structure

```
mock-auth-app/
│
├── index.html
├── package.json
├── vite.config.js
│
└── src/
    ├── main.jsx        ← Entry point
    ├── App.jsx         ← Router + auth state
    │
    ├── components/
    │   ├── Input.jsx   ← Reusable input field
    │   ├── Button.jsx  ← Reusable button (primary / secondary / danger)
    │   └── Card.jsx    ← Reusable card wrapper
    │
    ├── pages/
    │   ├── Register.jsx    ← Registration form
    │   ├── Login.jsx       ← Login form + credential check
    │   └── Profile.jsx     ← Protected profile view
    │
    └── utils/
        └── storage.js      ← MY-STORAGE wrapper (localStorage)

```

---

## 🗄️ MY-STORAGE Decision

> **MY-STORAGE = `localStorage`**

`localStorage` is the standard browser API for persisting key-value data without a backend:
- Survives page refreshes and browser restarts (unlike `sessionStorage`)
- Synchronous and simple (no IndexedDB complexity needed for this scope)
- Universally supported

The `src/utils/storage.js` module wraps it with `get`, `save`, and `clear` methods.

**Keys used:**
| Key | Value |
|---|---|
| `user_data` | `{ fullName, email, password }` |
| `auth_token` | Random string + Date |

---

## 🚀 Getting Started

```bash
# Install deps (in the mock-auth-app folder)
npm install

# Start dev server
npm run dev
```

---


## 🔐 Reusable Components

| Component | Props |
|---|---|
| `<Input />` | `label`, `type`, `placeholder`, `value`, `onChange` |
| `<Button />` | `text`, `onClick`, `variant`, `type` |
| `<Card />` | `children` |

These components enforce the DRY principle and keep UI consistent.
---
## 🔐 Authentication Flow

### 1. Registration
- User enters **Full Name**, **Email**, **Password**
- Data is saved to `localStorage` under **user_data**
- User is redirected to the **Login** page

### 2. Login
- User enters **Email + Password**
- Credentials are validated against the stored **user_data**
- If valid:
  - A mock token is generated
  - Token is saved to **auth_token**
  - User is redirected to the **Profile** page

### 3. Profile (Protected Route)
- Page loads **only if** `auth_token` exists
- Displays user information using the reusable **<Card />** component
- Logout clears the token and redirects the user back to **Login**

---

## 🧭 Routing

Routing is handled inside `App.jsx` using **React Router**.

| Route | Page |
|-------|-------|
| `/register` | Registration |
| `/login` | Login |
| `/profile` | Protected Profile |
| `/` | Redirects to `/register` |

---

## ⚠️ Security Note

This is a **demo only**. Never store plain-text passwords in `localStorage` in a real application. Use hashed passwords + a real backend with secure sessions or JWTs.