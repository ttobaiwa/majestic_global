// import { useEffect } from 'react';

// import '../../node_modules/mlj-cookie/dist/cookieconsent.css';
// import '../../node_modules/mlj-cookie/dist/cookieconsent.js';

// export default function CookieConsent() {
//     useEffect(() => {
//         const cc = window.initCookieConsent();

//         cc.run({
//             // your config
//             revision: 1,
//             languages: {
//                 en: {
//                     consent_modal: {
//                         // ...,
//                         description: 'Usual description ... {{revision_message}}',
//                         revision_message: '<br> Dude, my terms have changed. Sorry for bothering you again!',
//                         // ...
//                     },
//                     // ...
//                 }
//             },
//             gui_options: {
//                 consent_modal: {
//                     layout: 'cloud',               // box/cloud/bar
//                     position: 'bottom center',     // bottom/middle/top + left/right/center
//                     transition: 'slide',           // zoom/slide
//                     swap_buttons: false            // enable to invert buttons
//                 },
//                 settings_modal: {
//                     layout: 'box',                 // box/bar
//                     // position: 'left',           // left/right
//                     transition: 'slide'            // zoom/slide
//                 }
//             }
//         });

//     }, []);
//     return null;
// }
