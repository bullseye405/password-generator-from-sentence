# 🔐 PhraseLock – Password Generator from Sentence

A simple and secure password generator that turns your memorable phrases into strong, complex passwords.  
Built with **React**, **TypeScript**, and **Material UI**.

---

## 🎯 Goals for UI & UX Upgrade

Transform PhraseLock from a basic tool into a polished, portfolio-ready app with beautiful design, strong interactivity, and clear value for users.

---

## ✅ To-Do List

### 🎨 Design & Layout

- [ ] Wrap main UI inside a `Paper` or `Card` for depth and padding
- [ ] Center layout and apply spacing using `Box`, `py`, `my`, etc.
- [ ] Add **AppBar/Header** with:
  - App name ("PhraseLock")
  - GitHub link
- [ ] Add **footer**:  
  `© 2025 Samir Prajapati · Open Source`
- [ ] Typography improvements:
  - App title: `Typography variant="h4"` (bold, centered)
  - Subtitle with purpose: `variant="subtitle1"`
  - Consistent font styles across sections (`body1`, `subtitle2`, etc.)

---

### 🌙 Dark Mode

- [ ] Add toggle button to switch between light and dark themes

---

### ⚙️ Functionality

- [ ] Add "Copy to Clipboard" for generated password
  - Use:  
    ```ts
    navigator.clipboard.writeText(password);
    ```
  - Show a success alert/snackbar after copying

- [ ] Track recently generated passwords in local state
- [ ] Add password strength progress bar (already exists — improve style)
- [ ] Improve password strength list:
  - Use hover effect on `ListItem`
  - Use `Divider` between sections
  - Add heading: "Password Criteria"
- [ ] Add slider and checkboxes with better layout/spacing
- [ ] Display a few sample/demo phrases:
        Try: “My cat is Zuko 2023” or “I drink 2 coffees a day”

---

### 🧪 Future Enhancements

- [ ] Auto-clear clipboard after 30 seconds
- [ ] Toggle private mode (blurred password)
- [ ] Show password entropy score
- [ ] Add animated transitions (on password generation or hover)
- [ ] Add landing page with app intro (above the input)

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)

---

## 📸 Screenshots

*(Coming soon – add mockups or screenshots here)*

---

## 🔗 Useful Links

- [Live Demo](#) (Add link if deployed)
- [GitHub Repo](#)
- [Upwork Profile – Samir Prajapati](https://www.upwork.com/freelancers/~01fba7ca6af5995f8d)

---

## 👋 Author

**Samir Prajapati**  
Passionate React/TypeScript developer focused on building meaningful tools and user-friendly products.

---

