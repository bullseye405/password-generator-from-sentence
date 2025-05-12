# 🛠 PhraseLock – Development Plan

> Plan before code. A step-by-step checklist to turn your password generator into a polished, portfolio-ready app.

---

## 🧭 PHASE 1: PRODUCT STRATEGY

### 🎯 Define Purpose
- [x] Turn memorable phrases into strong passwords
- [x] Add a short one-liner description to the UI  
  _“Turn your favorite phrase into a strong, secure password — and actually remember it.”_

### 👤 Target Users
- [ ] Security-conscious users
- [ ] Freelancers who need good password hygiene
- [ ] Non-tech people who reuse weak passwords

### 🧪 Key Goals
- [ ] Easy to use (zero learning curve)
- [ ] Clear visual feedback (strength, criteria)
- [ ] Looks clean and professional
- [ ] Builds trust through UI polish

---

## 🧱 PHASE 2: DESIGN & UI STRUCTURE

### 🖼 UI Layout Plan
- [ ] **Header**
  - App name: “PhraseLock”
  - GitHub link
  - Optional dark/light toggle
- [x] **Hero Section**
  - App title
  - Subtitle with purpose
  - Example input phrases
- [x] **Main Generator Tool**
  - Phrase input field
  - Strength meter
  - Password preview box
  - Checkboxes for custom rules
  - Slider for length
  - Generate button
  - Copy to clipboard
- [ ] **Recent Passwords** (Optional)
- [ ] **Footer**
  - Your name
  - © Year, open source mention

### 💅 Styling Goals
- [x] Wrap sections in `Paper` or `Card`
- [x] Use spacing and alignment with `Box`
- [x] Use `Typography` variants consistently
- [x] Use `Divider` to break sections
- [x] Responsive layout
- [ ] Animations on hover or interaction

---

## ⚙️ PHASE 3: FUNCTIONALITY

### 🔐 Password Logic
- [x] Convert phrase into password
- [x] Show strength level (Low/Med/High)
- [ ] Add entropy score (optional, later)
- [ ] Auto-clear clipboard after timeout

### 📋 Features
- [ ] Copy password to clipboard with feedback
- [ ] Show snackbar/toast on copy
- [ ] Checkboxes to toggle rules (symbols, digits, caps)
- [x] Slider for password length
- [x] Password preview visibility toggle
- [ ] Recent generated passwords (optional)
- [ ] Suggested example phrases

---

## 🚀 PHASE 4: POLISH & LAUNCH

### 🧹 Polish & Testing
- [ ] Clean, readable code structure
- [ ] Reusable components
- [ ] Fully responsive layout
- [ ] Light and dark theme work well
- [ ] Accessible (aria labels, color contrast, etc.)
- [ ] Handle empty inputs or errors

### 📸 Media & Docs
- [ ] Add screenshots (light and dark)
- [ ] Optional demo GIF or video
- [ ] Update `README.md` with:
  - App intro
  - Features list
  - Tech stack
  - How to run
  - Screenshots
  - Future ideas

---

## 💼 PHASE 5: DEPLOY & SHARE

### 🌐 Deploy
- [x] Deploy app to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- [ ] Optional: add custom domain

### 📣 Share
- [ ] Add to portfolio site (if available)
- [ ] Add project link to Upwork profile
- [ ] Mention it when sending proposals

---

## 🧪 BONUS IDEAS (Future)
- [ ] Add private mode (blur/lock password output)
- [ ] Generate QR code for password
- [ ] Allow saving encrypted password phrase (locally)
- [ ] Theme customization (fonts, spacing, contrast)
