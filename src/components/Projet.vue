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
});

const goBack = () => {
    return router.back();
};
</script>
<template>
    <div class="project-view">
        <button @click="goBack">back</button>
        <OffrandeEpicurienne v-if="projectId === 'offrande_epicurienne'"></OffrandeEpicurienne>
        <Maif v-if="projectId === 'maif'"></Maif>
        <Dzume v-if="projectId === 'dzume'"></Dzume>
    </div>
</template>
<style lang="scss">
.project-view {
    position: relative;
    display: block;
    margin-top: 10rem;
    margin-left: 52px;
    margin-right: 52px;
}
</style>
