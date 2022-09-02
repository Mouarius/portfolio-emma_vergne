import { createApp } from "vue";
import "./style/reset.css";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram);
library.add(faChevronRight);
library.add(faChevronLeft);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
