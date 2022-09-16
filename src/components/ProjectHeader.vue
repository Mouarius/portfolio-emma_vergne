<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps(["title", "subtitle", "information", "date"]);
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

const goBack = () => {
    return router.push("/projets/");
};

const goDown = () => {
    document.querySelector(".article-body").scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
    updateCoverImage(route.params.project_id);
});
</script>
<template>
    <header>
        <button class="back" @click="goBack"><font-awesome-icon icon="fa-standard fa-xmark" fixed-width size="none" /></button>
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
