/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons/faCopyright'
/* add icons to the library */
library.add(faFacebook, faInstagram, faWhatsapp, faCopyright)

export { FontAwesomeIcon }
