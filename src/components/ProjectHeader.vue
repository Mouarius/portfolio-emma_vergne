<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["coverImage", "title", "subtitle", "information"]);
const router = useRouter();

const goBack = () => {
    return router.back();
};

const goDown = () => {
    document.querySelector(".article-body").scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
    <header>
        <button class="back" @click="goBack"><font-awesome-icon icon="fa-standard fa-xmark" /></button>
        <img class="cover-image" :src="coverImage" alt="" />
        <div class="project-info">
            <h1>{{ title }}</h1>
            <h4>{{ subtitle }}</h4>
            <div class="information">{{ information }}</div>
        </div>
        <button class="down" @click="goDown">
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </button>
    </header>
</template>
