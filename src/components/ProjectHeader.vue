<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["projectId", "title", "subtitle", "information", "date"]);
const router = useRouter();

const coverImageUrl = new URL(`../assets/img/${props.projectId}/${props.projectId}0-xlarge.jpg`, import.meta.url).href;

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
        <img class="cover-image" :src="coverImageUrl" alt="" />
        <div class="project-info">
            <h1>{{ title }}</h1>
            <h4>{{ subtitle }}</h4>
            <div class="information">{{ date }} • {{ information }}</div>
        </div>
        <button class="down" @click="goDown">
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </button>
    </header>
</template>
