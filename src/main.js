import { createApp } from "vue";
import "./style/reset.css";
import "./style.css";
import App from "./App.vue";
import HomePage from "./components/Pages/HomePage.vue";
import ProjectsPage from "./components/Pages/ProjectsPage.vue";
import ContactPage from "./components/Pages/ContactPage.vue";
import Project from "./components/Project.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronLeft, faChevronRight, faChevronDown, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { createWebHistory, createRouter } from "vue-router";

export const carouselImages = import.meta.glob("./assets/img/carousel/*.jpg"); /** */

const routes = [
    { path: "/", component: HomePage },
    {
        path: "/projets",
        component: ProjectsPage,
        children: [
            {
                path: ":project_id",
                component: Project,
            },
        ],
    },
    { path: "/contact", component: ContactPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

library.add(faXmark, faChevronLeft, faChevronRight, faChevronDown, faInstagram, faBars);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
