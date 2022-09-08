<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import OffrandeEpicurienne from "./Pages/Projets/OffrandeEpicurienne.vue";
import Maif from "./Pages/Projets/Maif.vue";
import Dzume from "./Pages/Projets/Dzume.vue";

const router = useRouter();
const route = useRoute();

const projectId = ref("");

onMounted(() => {
    projectId.value = route.params.project_id;
    // scrollTo(0, 0);
});

const goBack = () => {
    return router.back();
};
</script>
<template>
    <div class="overlay">
        <div class="project-view">
            <button class="back" @click="goBack"><font-awesome-icon icon="fa-standard fa-xmark" /></button>
            <OffrandeEpicurienne v-if="projectId === 'offrande_epicurienne'"></OffrandeEpicurienne>
            <Maif v-if="projectId === 'maif'"></Maif>
            <Dzume v-if="projectId === 'dzume'"></Dzume>
        </div>
    </div>
</template>
<style lang="scss">
.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
    z-index: 20;
    background-color: white;
    padding: 32px 52px;
    padding-bottom: 72px;
}
.project-view {
    display: block;
    max-width: 760px;

    button.back {
        font-size: 2rem;
        border: none;
        background: none;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    header {
        margin-bottom: 4rem;
        .cover-image {
            width: 100%;
        }
        h1 {
            margin-bottom: 1rem;
            margin-top: 2rem;
        }
        h2 {
            font-family: "Public Sans", sans-serif;
            font-size: 1.6rem;
            font-weight: 200;
        }
    }
}
</style>
