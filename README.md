# Kappa Theta Pi – Portfolio Website

A simple, responsive portfolio built with **HTML**, **CSS**, and **JavaScript**.  
This project showcases your skills, projects, and contact information — and can be easily deployed using **Vercel**.

---

## Project Structure

```
my-portfolio/
├── index.html       # Main webpage
├── style.css        # Styling for layout and components
├── script.js        # JavaScript for interactions
└── assets/          # Folder for images and other media
```

---

## ow to Edit and Customize

### 1. Update Your Information

Open `index.html` and edit:

- Your **name** in the `<title>` tag and header
- The **About Me** section text
- The **Projects** section (titles, descriptions, and image names)
- The **Contact** section email link (`mailto:`)

Example:

```html
<a href="mailto:yourname@email.com" class="contact-btn">Email Me</a>
```

---

### 2. Customize Styles

Open `style.css` and adjust:

- **Colors** (backgrounds, buttons, text)
- **Fonts** (change the `font-family` under `body`)
- **Layout and spacing** as desired

💡 Tip: Use [Google Fonts](https://fonts.google.com/) for new fonts — add them in the `<head>` of `index.html`.

---

### 3. Add or Replace Images

Put all images inside the `assets/` folder.  
Then reference them in `index.html` like:

```html
<img src="assets/my-new-project.jpg" alt="My Project Screenshot" />
```

---

### 4. Add More Projects

Duplicate one of the existing project cards inside the `<div class="project-grid">`:

```html
<div class="project-card">
  <img src="assets/project3.jpg" alt="Project 3" />
  <h3>New Cool Project</h3>
  <p>A short description of your new project.</p>
</div>
```

---

## Deploying to Vercel

You can deploy this project on **Vercel** in two simple ways.

### Option 1: Upload Directly

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **“Add New Project” → “Upload”**
3. Drag and drop your **my-portfolio/** folder
4. Click **Deploy**
5. Your site will be live at a URL like:  
   `https://your-site-name.vercel.app`

---

### Option 2: Deploy from GitHub (Recommended)

1. Initialize a local git repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Push it to a new GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Go to **Vercel → “Add New Project” → “Import Git Repository”**
4. Select your repo and click **Deploy**

✅ Every time you push updates to GitHub, Vercel will automatically redeploy your site.

---

## Custom Domain (Optional)

1. In your Vercel project dashboard, go to **Settings → Domains**
2. Add your custom domain (e.g. `andonlafreniere.com`)
3. Update your DNS settings as shown in Vercel
4. Your portfolio will be live on your custom domain within minutes

---

## Maintenance Tips

- Edit locally in VS Code for the best experience
- Use `git pull` before editing to stay up to date
- Use `git push` after edits to automatically redeploy

---

### Example Live URL

Once deployed, your portfolio will be live at:

```
https://yourname.vercel.app
```

---

**Built by [Andon Lafreniere](https://github.com/Andon-LaFreniere)** ✨
