<script setup>
import ProjectList from "../ProjectList.vue";

import coverMaif from "../../assets/img/maif_algues/maif_algues0-small.jpg";
import coverDzume from "../../assets/img/dzume/dzume4-small.jpg";
import coverOffrande from "../../assets/img/offrande/offrande0-small.jpg";
import coverEstran from "../../assets/img/carte_estran/carte_estran1-small.jpg";
import coverBuche from "../../assets/img/buche/buche0-small.jpg";
import coverGelification from "../../assets/img/edition_gelification/edition_gelification6-small.jpg";
import DzumeVue from "./Projets/Dzume.vue";
import MaifVue from "./Projets/Maif.vue";
import OffrandeEpicurienneVue from "./Projets/OffrandeEpicurienne.vue";

//TODO : Charger des images plus petites pour les miniatures, et déjà recadrées
//TODO : Responsive

const projectList = [
    {
        id: "dzume",
        name: "Dzûme",
        title: "La table d'entreprise - Dzûme",
        subtitle: "Projet de diplôme ESAD de Reims",
        img: coverDzume,
        information: {
            date: "2022",
            description: "Réalisation d'un événement de design culinaire sur mesure pour des entreprises particulières.",
        },
        component: DzumeVue,
    },
    {
        id: "carte_estran",
        name: "Carte de l'estran",
        title: "Edition : Carte de l'estran",
        subtitle: "Cartographie et recettes culinaires sur les plantes de l'estran",
        img: coverEstran,
        information: {
            date: "2021",
            description: "Projet de graphisme",
        },
        component: OffrandeEpicurienneVue,
    },
    {
        id: "maif_algues",
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
        id: "offrande",
        name: "Offrande Epicurienne",
        title: "Offrande Epicurienne : Co-pain",
        subtitle: "Projet de d'étude en master de Design Culinaire",
        img: coverOffrande,
        information: {
            date: "2021",
            description: "Information rapide sur le projet",
        },
        component: OffrandeEpicurienneVue,
    },

    {
        id: "buche",
        name: "Distance",
        title: "Distance",
        subtitle: "Une bûche pour l'année 2020",
        img: coverBuche,
        information: {
            date: "2020",
            description: "A compléter",
        },
        component: OffrandeEpicurienneVue,
    },
    {
        id: "edition_gelification",
        name: "Gelification",
        title: "Gelification",
        subtitle: "Réalisation de micro-éditions pour des procédés culinaires",
        img: coverGelification,
        information: {
            date: "2020",
            description: "A compléter",
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
