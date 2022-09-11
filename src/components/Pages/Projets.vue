<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Projet from "../Projet.vue";

const coPain = new URL("../../assets/img/carousel/co-pain_1.jpg", import.meta.url);
const dzume = new URL("../../assets/img/carousel/dzume_4.jpg", import.meta.url);
const gelification = new URL("../../assets/img/carousel/gelification_8.jpg", import.meta.url);
const maif = new URL("../../assets/img/carousel/maif_0.jpg", import.meta.url);
const stBrieuc = new URL("../../assets/img/carousel/st_brieuc_5.jpg", import.meta.url);

//TODO : Charger des images plus petites pour les miniatures, et déjà recadrées
//TODO : Responsive

const route = useRoute();
const overlay = ref(false);

onMounted(() => {
    if (route.params.project_id) {
        return (overlay.value = true);
    }
    overlay.value = false;
});

watch(route, (oldRoute, newRoute) => {
    if (newRoute.params.project_id) {
        return (overlay.value = true);
    }
    overlay.value = false;
});

const listeProjets = [
    { id: "offrande_epicurienne", name: "Offrande Epicurienne", img: coPain },
    { id: "dzume", name: "Dzûme", img: dzume },
    { id: "maif", name: "Maif Social Club", img: maif },
    { id: "maif", name: "Maif Social Club", img: maif },
    { id: "maif", name: "Maif Social Club", img: maif },
    { id: "maif", name: "Maif Social Club", img: maif },
    { id: "maif", name: "Maif Social Club", img: maif },
];
</script>

<template>
    <ul class="mosaique">
        <li v-for="projet in listeProjets" :key="projet.id" class="tile" :style="{ backgroundImage: `url(${projet.img.href})` }">
            <RouterLink :to="`/projets/${projet.id}`">
                <div class="mask">
                    <h2>{{ projet.name }}</h2>
                </div>
            </RouterLink>
        </li>
    </ul>
    <Transition>
        <Projet v-if="overlay"></Projet>
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
