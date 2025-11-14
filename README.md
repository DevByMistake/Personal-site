# 📁 Portfolio Website

A simple and clean personal portfolio website built using **HTML**,
**CSS**, and a small amount of **JavaScript** to automatically update
the **current time and date**.\
This project showcases my skills, projects, and ways to contact me in a
visually appealing and responsive layout.

## 🚀 Features

-   **Responsive Design** -- Works smoothly on desktop, tablet, and
    mobile devices.\
-   **Clean UI** -- Minimalistic layout designed for clarity and
    readability.\
-   **Auto-Updating Time & Date** -- A lightweight JavaScript script
    updates the displayed time and date in real time.\
-   **Project Showcase** -- Sections dedicated to highlighting my work
    and accomplishments.\
-   **Contact Section** -- Easy ways for visitors to reach out.

## 🛠️ Technologies Used

-   **HTML5** -- Structure and semantic markup\
-   **CSS3** -- Styling, layout, animations\
-   **JavaScript (Vanilla JS)** -- Real-time date and time functionality

## 📂 Project Structure

    /
    ├── index.html
    ├── style.css
    ├── script.js
    └── assets/
        ├── images/
        └── icons/

## ⚙️ JavaScript Functionality

The site includes a small script that:

-   Fetches the current system time and date\
-   Automatically updates them every second\
-   Displays them in a predefined format on the webpage

``` js
function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString();
  document.getElementById("date").textContent = now.toLocaleDateString();
}

setInterval(updateTime, 1000);
updateTime();
```

## 📦 How to Use

1.  Download or clone the repository:

        git clone <your-repo-url>

2.  Open `index.html` in any web browser.

3.  Customize content in `index.html` and styling in `style.css`.

4.  Update or expand JavaScript features in `script.js` as needed.

## 📄 License

This project is released under the **MIT License**.

## 🙌 Acknowledgements

Thank you for checking out my portfolio!\
Feel free to reach out if you'd like to collaborate or say hello.
