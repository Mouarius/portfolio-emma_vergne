import coverMaif from "../assets/img/maif_algues/maif_algues0-small.jpg";
import coverDzume from "../assets/img/dzume/dzume4-small.jpg";
import coverOffrande from "../assets/img/offrande/offrande0-small.jpg";
import coverEstran from "../assets/img/carte_estran/carte_estran1-small.jpg";
import coverBuche from "../assets/img/buche/buche0-small.jpg";
import coverGelification from "../assets/img/edition_gelification/edition_gelification8-small.jpg";
import DzumeVue from "../components/Pages/Projets/Dzume.vue";
import MaifVue from "../components/Pages/Projets/Maif.vue";
import OffrandeEpicurienneVue from "../components/Pages/Projets/OffrandeEpicurienne.vue";
import CarteEstranVue from "../components/Pages/Projets/CarteEstran.vue";
import GelificationVue from "../components/Pages/Projets/Gelification.vue";

import WorkInProgressVue from "../components/Pages/Projets/WorkInProgress.vue";

export const projectList = [
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
        title: "Carte de l'estran",
        subtitle: "Comment cueillir et déguster nos algues et plantes maritimes ?",
        img: coverEstran,
        information: {
            date: "2020",
            description: "Workshop à Saint-Brieuc - Cartographie de cueillette et recettes culinaires sur les plantes de l'estran.",
        },
        component: CarteEstranVue,
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
        component: WorkInProgressVue,
    },
    {
        id: "edition_gelification",
        name: "Gelification",
        title: "Gelification",
        subtitle: "Réalisation de micro-éditions pour des procédés culinaires",
        img: coverGelification,
        information: {
            date: "2021",
            description: "Travail en commun de graphisme par le master Design et Culinaire de Reims.",
        },
        component: GelificationVue,
    },
];
