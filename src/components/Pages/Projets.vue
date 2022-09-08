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
const mozaicView = ref(true);

onMounted(() => {
    if (route.params.project_id) {
        return (mozaicView.value = false);
    }
    route.value = true;
});

watch(route, (oldRoute, newRoute) => {
    if (newRoute.params.project_id) {
        return (mozaicView.value = false);
    }
    mozaicView.value = true;
});

const listeProjets = [
    { id: "offrande_epicurienne", name: "Offrande Epicurienne", img: coPain },
    { id: "dzume", name: "Dzûme", img: dzume },
    { id: "maif", name: "Maif Social Club", img: maif },
];
</script>

<template>
    <ul class="mosaique" v-if="mozaicView">
        <li v-for="projet in listeProjets" :key="projet.id" class="projet" :style="{ backgroundImage: `url(${projet.img.href})` }">
            <RouterLink :to="`/projets/${projet.id}`">
                <div class="mask">
                    <h2>{{ projet.name }}</h2>
                </div>
            </RouterLink>
        </li>
    </ul>
    <Projet v-else></Projet>
</template>
<style lang="scss" scoped>
.mosaique {
    margin-top: 10rem;
    margin-left: 52px;
    margin-right: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.projet {
    position: relative;
    margin: 1rem;
    background-clip: border-box;
    background-size: cover;
    width: 320px;
    height: 320px;
    .mask {
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
