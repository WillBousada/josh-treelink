// src/plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add the icons to the library
library.add(faInstagram, faFacebook, faTwitter)

export { FontAwesomeIcon }