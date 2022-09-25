<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps(["title", "subtitle", "information", "date", "closeProject"]);
const router = useRouter();
const route = useRoute();

const fetchImage = (projectId) => {
    return new URL(`../assets/img/${projectId}/${projectId}0-xlarge.jpg`, import.meta.url).href;
};

const coverImageUrl = ref(fetchImage(props.projectId));

const updateCoverImage = (projectId) => {
    return (coverImageUrl.value = fetchImage(route.params.project_id));
};

watch(
    () => route.params,
    () => {
        if (!route.params.project_id) return;
        updateCoverImage(route.params.project_id);
    }
);

const goDown = () => {
    document.querySelector(".article-body").scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
    updateCoverImage(route.params.project_id);
});
</script>
<template>
    <header>
        <button class="back" @click="closeProject">
            <img src="../assets/icon-close.svg" alt="" />
        </button>
        <img class="cover-image" :src="coverImageUrl" alt="" />
        <div class="project-info">
            <h1>{{ title }}</h1>
            <h4>{{ subtitle }}</h4>
            <div class="information">{{ date }} • {{ information }}</div>
        </div>
        <!-- <button class="down" @click="goDown">
            <font-awesome-icon icon="fa-solid fa-chevron-down" fixed-width size="lg" />
        </button> -->
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    box-sizing: border-box;
    padding-top: 2rem;
    padding-bottom: 5rem;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .cover-image {
        object-fit: cover;
        width: 100%;
        height: 70%;
    }
    .down {
        cursor: pointer;
        background: none;
        border: none;
        position: absolute;
        text-align: center;
        bottom: 4vh;
        width: 100%;
    }
    h1 {
        margin-bottom: 1rem;
        margin-top: 2rem;
    }
    .information {
        margin-top: 0.4rem;
    }
}
</style>
