<template>
  <div id="app">
    <header>
      <img src="./assets/headshot.jpg" alt="TreeLink Logo" class="logo" />
      <h1>Josh Bousada</h1>
      <p style="margin: 0;">Real Estate Agent</p>
    </header>
    <LinkList :links="links" />
    <div class="social-icons">
      <a href="https://twitter.com/yourprofile" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="https://instagram.com/yourprofile" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://facebook.com/yourprofile" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
    </div>
    <footer>
      <p>&copy; 2024 Josh Bousada. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import LinkList from './components/LinkList.vue'

export default {
  name: 'App',
  components: {
    LinkList
  },
  data() {
    return {
      links: [
        { id: 1, name: 'Placeholder 1', url: 'https://github.com/yourusername' },
        { id: 2, name: 'Placeholder 2', url: 'https://linkedin.com/in/yourusername' },
        { id: 3, name: 'Placeholder 3', url: 'https://yourportfolio.com' },
        { id: 4, name: 'Placeholder 4', url: 'https://yourblog.com' },
      ]
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
}

header {
  margin-bottom: 25px;
}

.logo {
  width: 100px;                     /* Sets the width of the logo */
  height: 100px;                    /* Ensures the logo is square for perfect rounding */
  border-radius: 50%;               /* Makes the logo circular */
  object-fit: cover;                /* Ensures the image covers the container without distortion */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
  border: 2px solid #fff;           /* Optional: Adds a white border for a cleaner look */
  transition: transform 0.3s, box-shadow 0.3s; /* Adds smooth transitions for hover effects */
}

.logo:hover {
  transform: scale(1.05);                    /* Slightly enlarges the logo on hover */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* Intensifies the shadow on hover */
}

@media (max-width: 600px) {
  .logo {
    width: 80px;
    height: 80px;
  }
}

@media (min-width: 1200px) {
  .logo {
    width: 120px;
    height: 120px;
  }
}

h1 {
  font-size: 2.0em;
  margin-bottom: 2px;
}

/* Container for the social icons */
.social-icons {
    display: flex; /* Aligns children in a row */
    justify-content: center; /* Centers the icons horizontally */
    align-items: center; /* Centers the icons vertically within the container */
    background-color: transparent; /* Set to desired background or keep transparent */
    padding: 15px 0; /* Vertical padding */
}

/* Styling for each icon link */
.social-icons a {
    color: white; /* White color for icons */
    margin: 0 10px; /* Horizontal spacing between icons */
    font-size: 24px; /* Size of the icons */
    text-decoration: none; /* Removes underline from links */
    transition: color 0.3s ease; /* Smooth transition for hover effect */
}

/* Hover effect for icons */
.social-icons a:hover {
    color: #1da1f2; /* Change to desired hover color, e.g., Twitter blue */
}

/* Responsive adjustments */
@media (max-width: 600px) {
    .social-icons a {
        font-size: 20px; /* Smaller icons on smaller screens */
        margin: 0 7px; /* Reduced spacing */
    }
}

footer {
  margin-top: 20px;
  font-size: 0.9em;
  color: #999;
}
</style>