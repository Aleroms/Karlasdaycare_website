/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
  faYelp,
} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons/faCopyright'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faFacebook, faInstagram, faWhatsapp, faCopyright, faYelp, faTiktok, faArrowUp)

export { FontAwesomeIcon }
