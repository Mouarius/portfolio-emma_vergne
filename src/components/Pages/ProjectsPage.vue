<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import ProjectList from "../ProjectList.vue";

import coverMaif from "../../assets/img/projets/maif_algues/resize/maif_algues0_grande.jpg";
import coverDzume from "../../assets/img/projets/dzume/resize/dzume4_grande.jpg";
import coverOffrande from "../../assets/img/projets/offrande/resize/offrande0_grande.jpg";
import DzumeVue from "./Projets/Dzume.vue";
import MaifVue from "./Projets/Maif.vue";
import OffrandeEpicurienneVue from "./Projets/OffrandeEpicurienne.vue";

//TODO : Charger des images plus petites pour les miniatures, et déjà recadrées
//TODO : Responsive

const route = useRoute();
const overlay = ref(false);
const projectId = ref("");

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
    {
        id: "offrande_epicurienne",
        name: "Offrande Epicurienne",
        title: "Offrande Epicurienne : Co-pain",
        subtitle: "Projet de diplôme ESAD de Reims",
        img: coverOffrande,
        information: {
            date: "2022",
            description: "Information rapide sur le projet",
        },
        component: OffrandeEpicurienneVue,
    },
];

// onMounted(() => {
//     if (route.params.project_id) {
//         projectId.value = route.params.project_id;
//         updateProjectToDisplay(projectId.value);
//         return (overlay.value = true);
//     }
//     overlay.value = false;
// });

// watch(route, (oldRoute, newRoute) => {
//     if (newRoute.params.project_id) {
//         projectId.value = route.params.project_id;
//         updateProjectToDisplay(projectId.value);
//         return (overlay.value = true);
//     }
//     overlay.value = false;
// });
</script>

<template>
    <ProjectList :project-list="projectList" />
    <RouterView :project-list="projectList"></RouterView>
    <!-- <Transition>
        <Project v-if="overlay" :project="projectToDisplay"></Project>
    </Transition> -->
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
</style>
