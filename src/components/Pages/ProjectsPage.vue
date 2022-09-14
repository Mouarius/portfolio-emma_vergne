<script setup>
import ProjectList from "../ProjectList.vue";

import coverMaif from "../../assets/img/maif_algues/maif_algues0-small.jpg";
import coverDzume from "../../assets/img/dzume/dzume4-small.jpg";
import coverOffrande from "../../assets/img/offrande/offrande4-small.jpg";
import DzumeVue from "./Projets/Dzume.vue";
import MaifVue from "./Projets/Maif.vue";
import OffrandeEpicurienneVue from "./Projets/OffrandeEpicurienne.vue";

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
</script>

<template>
    <ProjectList :project-list="projectList" />

    <RouterView v-slot="{ Component }" :project-list="projectList">
        <Transition>
            <component :is="Component" />
        </Transition>
    </RouterView>
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
