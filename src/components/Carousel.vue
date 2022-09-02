<script setup>
import { onMounted, reactive, ref } from "vue";
const state = reactive({
    transitioning: false,
    slides: [
        { id: 0, src: "/src/assets/img/carousel/pexels-elevate-1267320.jpg", alt: "" },
        { id: 1, src: "/src/assets/img/carousel/pexels-ella-olsson-1640773.jpg", alt: "" },
        { id: 2, src: "/src/assets/img/carousel/pexels-elle-hughes-1660030.jpg", alt: "" },
    ],
});
const innerStyles = reactive({});
const step = window.innerWidth;

onMounted(() => {
    resetTranslation();
});

function next() {
    if (state.transitioning) return;
    state.transitioning = true;
    moveLeft();
    setTimeout(() => {
        const slide = state.slides.shift();
        state.slides.push(slide);
        resetTranslation();
        state.transitioning = false;
    }, 1000);
}
function previous() {
    if (state.transitioning) return;
    state.transitioning = true;
    moveRight();
    setTimeout(() => {
        const slide = state.slides.pop();
        state.slides.unshift(slide);
        resetTranslation();
        state.transitioning = false;
    }, 1000);
}

function moveLeft() {
    innerStyles.transition = "transform 1s ease";
    innerStyles.transform = `translateX(-${2 * step}px)`;
}

function moveRight() {
    innerStyles.transition = "transform 1s ease";
    innerStyles.transform = `translateX(0)`;
}
function resetTranslation() {
    innerStyles.transition = "none";
    innerStyles.transform = `translate(-${step}px)`;
}
</script>

<template>
    <div class="carousel">
        <div class="inner" :style="innerStyles">
            <img v-for="slide in state.slides" class="slide" :src="slide.src" :alt="slide.alt" :key="slide.id" />
        </div>
        <button class="prev" @click="previous"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
        <button class="next" @click="next"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
    </div>
</template>

<style scoped>
.carousel {
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
}
.inner {
    display: flex;
    flex-direction: row;
    height: 100%;
}
.slide {
    display: inline-flex;
    position: relative;
    object-fit: cover;
    width: 100vw;
    height: 100%;
}
button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    background: none;
    border: none;
    font-size: 24px;
}
.prev {
    left: 24px;
}
.next {
    right: 24px;
}
</style>
