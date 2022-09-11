<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Projet from "../Projet.vue";

import coverMaif from "../../assets/img/projets/maif_algues/resize/maif_algues0_grande.jpg";
import coverDzume from "../../assets/img/projets/dzume/resize/dzume4_grande.jpg";

import MaifVue from "./Projets/Maif.vue";
import DzumeVue from "./Projets/Dzume.vue";

const coPain = new URL("../../assets/img/carousel/co-pain_1.jpg", import.meta.url);
const dzume = new URL("../../assets/img/carousel/dzume_4.jpg", import.meta.url);
const gelification = new URL("../../assets/img/carousel/gelification_8.jpg", import.meta.url);
const stBrieuc = new URL("../../assets/img/carousel/st_brieuc_5.jpg", import.meta.url);

//TODO : Charger des images plus petites pour les miniatures, et déjà recadrées
//TODO : Responsive

const projectList = [
    {
        id: "dzume",
        name: "Dzûme",
        title: "La table d'entreprise",
        subtitle: "Projet de diplôme ESAD de Reims",
        img: coverDzume,
        information: {
            date: "2022",
            description: "Information rapide sur le projet",
        },
        component: DzumeVue,
    },
    {
        id: "maif",
        name: "Maif Social Club",
        title: "Algues, processus de transformations",
        subtitle: "Exposition au Maif Social Club",
        img: coverMaif,
        information: {
            date: "2021",
            description: "Information rapide sur le projet",
        },
        component: MaifVue,
    },
];

const route = useRoute();
const overlay = ref(false);
const projectId = ref("");
const projectToDisplay = reactive({});

const updateProjectToDisplay = (id) => {
    const project = projectList.find((p) => p.id === id);
    projectToDisplay.id = project.id;
    projectToDisplay.name = project.name;
    projectToDisplay.title = project.title;
    projectToDisplay.subtitle = project.subtitle;
    projectToDisplay.img = project.img;
    projectToDisplay.information = project.information;
    projectToDisplay.component = project.component;
};

onMounted(() => {
    if (route.params.project_id) {
        projectId.value = route.params.project_id;
        updateProjectToDisplay(projectId.value);
        return (overlay.value = true);
    }
    overlay.value = false;
});

watch(route, (oldRoute, newRoute) => {
    if (newRoute.params.project_id) {
        projectId.value = route.params.project_id;
        updateProjectToDisplay(projectId.value);
        return (overlay.value = true);
    }
    overlay.value = false;
});
</script>

<template>
    <ul class="mosaique">
        <li v-for="project in projectList" :key="project.id" class="tile" :style="{ backgroundImage: `url(${project.img})` }">
            <RouterLink :to="`/projets/${project.id}`">
                <div class="mask">
                    <h2>{{ project.name }}</h2>
                </div>
            </RouterLink>
        </li>
    </ul>
    <Transition>
        <Projet v-if="overlay" :project="projectToDisplay"></Projet>
    </Transition>
</template>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.mosaique {
    margin-top: 10rem;
    margin-left: 52px;
    margin-right: 52px;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    gap: 1rem 1rem;
    @media screen and (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem 1rem;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.6rem 1.6rem;
    }
}
.tile {
    position: relative;
    background-clip: border-box;
    background-size: cover;
    width: 100%;
    aspect-ratio: 1;
    a .mask {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        transition: opacity 0.6s;
        &:hover {
            opacity: 1;
        }
    }
    h2 {
        text-align: center;
        cursor: pointer;
    }
    img {
        transition: all 0.8s ease-in-out;
    }
}
</style>
