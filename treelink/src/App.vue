<template>
  <div id="app" style="padding-left: 10px;padding-right: 10px;">

    <header>
      <img src="./assets/headshot.jpeg" alt="TreeLink Logo" class="logo" />
      <h1>Josh Bousada</h1>
      <p style="margin: 0;">Real Estate Agent</p>
    </header>

    <!-- Button Links -->
    <LinkList :links="links" />

    <!-- Social Icons -->
    <div class="social-icons">
      <a href="https://www.instagram.com/joshbousada.realestate/profilecard/?igsh=aHc3a2V1czI1cG9o" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/joshbousada?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://www.facebook.com/share/19UoTHfX4z/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
    </div>

    <footer>
      <p>&copy;{{ currentYear }} Josh Bousada. All rights reserved.</p>
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
        { id: 1, name: 'Matheson Group Reality', url: 'https://jeffmatheson.exprealty.com/' },
      ],
      currentYear: new Date().getFullYear(),
    }
  },

}
</script>

<style scoped>

header {
  margin-bottom: 25px;
}

.logo {
  width: 110px;                     /* Sets the width of the logo */
  height: 110px;                    /* Ensures the logo is square for perfect rounding */
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
    margin: 0 12px; /* Horizontal spacing between icons */
    font-size: 24px; /* Size of the icons */
    text-decoration: none; /* Removes underline from links */
    transition: color 0.3s ease; /* Smooth transition for hover effect */
}

/* Hover effect for icons */
.social-icons a:hover {
    color: #1da1f2; /* Change to desired hover color, e.g., Twitter blue */
}

footer {
  margin-top: 20px;
  font-size: 0.9em;
  color: #999;
}
</style>