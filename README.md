Design Agency Landing Page
A responsive landing page for a design agency, built from a Figma design.

🌐 Live Demo
You can view the live site here:
https://ваша-ссылка-на-github-pages/

🛠 Technologies
HTML5 (semantic markup)

CSS3 (Grid, Flexbox, Mobile-First approach)

Vanilla JavaScript (custom image slider logic)

GitHub Pages (hosting)

✨ Key Feature: Image Slider
The main feature of this project is a custom image slider built with pure JavaScript.

Dynamic steps: Calculates the slide width and gap using offsetWidth and getComputedStyle.

Smart boundaries: Uses array length (totalSlides - 1) to prevent scrolling into empty space, so it works with any number of images.

Smooth transitions: Uses CSS transform: translateX() for performance.

📱 Responsive Design
The layout is fully responsive and adapts to mobile (375px), tablet (768px), and desktop (1440px) screens.

💡 What I learned
How to center a slider and calculate offsets relative to an initial index.

How to avoid the overflow: hidden trap that clips box-shadow (by moving control buttons outside the slider container).

How to write clean, readable JavaScript code using an activeIndex variable.
