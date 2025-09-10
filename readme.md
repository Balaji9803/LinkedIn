# OG Courses Demo

A simple Node.js + Express + EJS project to showcase Open Graph meta tags for course pages, with LinkedIn share integration.

---

## **Steps to Run and Use This Project**

### 1. **Clone or Download the Repository**
Download or clone this repo to your local machine.

### 2. **Install Dependencies**
Open your terminal in the project folder and run:
```bash
npm install
```

### 3. **Project Structure**
- `server.js` — Main Express server (ES module)
- `data.js` — Mock course data (ES module export)
- `views/course.ejs` — EJS template for course pages
- `package.json` — Contains `"type": "module"` for ES modules

### 4. **Start the Server**
Run:
```bash
npm start
```
This starts the server on [http://localhost:3000](http://localhost:3000).

### 5. **Open Course Pages**
Visit these URLs in your browser:
- [http://localhost:3000/course/1](http://localhost:3000/course/1)
- [http://localhost:3000/course/2](http://localhost:3000/course/2)

### 6. **Features on Course Page**
- Displays course title, description, and image.
- Shows the canonical URL for sharing.
- Includes Open Graph and Twitter meta tags for rich social previews.
- **LinkedIn Share Button:**  
  Click the "Share on LinkedIn" button to open LinkedIn's share dialog.  
  LinkedIn will use the meta tags from your page for the share preview.

### 7. **How LinkedIn Sharing Works**
- The button opens LinkedIn’s share dialog with the current course page URL.
- LinkedIn fetches your page and uses the Open Graph meta tags for the preview (title, description, image).

---

## **Customization**
- Add more courses in `data.js`.
- Edit the EJS template in `views/course.ejs` for custom layout or meta tags.

---

## **Tech Stack**
- Node.js (ES Modules)
- Express.js
- EJS (templating)

---