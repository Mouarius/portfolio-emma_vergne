<script setup>
import { onMounted } from "vue";
import Carousel from "../Carousel.vue";
import Curiculum from "../Curiculum.vue";
onMounted(() => {
    window.scrollTo(0, 0);
});
</script>
<template>
    <Carousel></Carousel>
    <Curiculum></Curiculum>
</template>
<style lang="scss" scoped></style>
