import coverMaif from "../assets/img/projets/maif_algues/resize/maif_algues0_grande.jpg";
import coverDzume from "../assets/img/projets/dzume/resize/dzume4_grande.jpg";
import coverOffrande from "../assets/img/projets/offrande/resize/offrande0_grande.jpg";
import DzumeVue from "./Pages/Projets/Dzume.vue";
import MaifVue from "./Pages/Projets/Maif.vue";
import OffrandeEpicurienneVue from "./Pages/Projets/OffrandeEpicurienne.vue";

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
