import { createApp } from "vue";
import "./style/reset.css";
import "./style.css";
import App from "./App.vue";
import Home from "./components/Pages/Home.vue";
import Projets from "./components/Pages/Projets.vue";
import Projet from "./components/Projet.vue";
import Contact from "./components/Pages/Contact.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { createWebHistory, createRouter } from "vue-router";

export const carouselImages = import.meta.glob("./assets/img/carousel/*.jpg"); /** */

const routes = [
    { path: "/", component: Home },
    {
        path: "/projets",
        component: Projets,
        children: [
            {
                path: ":project_id",
                component: Projet,
            },
        ],
    },
    { path: "/contact", component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

library.add(faInstagram);
library.add(faChevronRight);
library.add(faChevronLeft);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
