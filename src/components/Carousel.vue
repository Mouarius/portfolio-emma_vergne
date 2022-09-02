<script setup>
import { onMounted, reactive, ref } from "vue";
const delay = 10000;
const state = reactive({
    transitioning: false,
    slides: [
        //TODO: prendre tous les fichiers dans le dossier carousel
        { id: 0, src: "/src/assets/img/carousel/pexels-elevate-1267320.jpg", alt: "" },
        { id: 1, src: "/src/assets/img/carousel/pexels-ella-olsson-1640773.jpg", alt: "" },
        { id: 2, src: "/src/assets/img/carousel/pexels-elle-hughes-1660030.jpg", alt: "" },
    ],
    innerStyles: {},
});
let step = window.innerWidth;

onMounted(() => {
    resetTranslation();
    setInterval(() => {
        next();
    }, delay);
});

let start = Date.now();
function next() {
    start = Date.now();
    if (state.transitioning) return;
    state.transitioning = true;
    moveLeft();
    setTimeout(() => {
        const slide = state.slides.shift();
        state.slides.push(slide);
        resetTranslation();
        state.transitioning = false;
    }, 1200);
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
    }, 1200);
}

function moveLeft() {
    console.log(Date.now() - start);
    state.innerStyles = { transform: `translateX(-${2 * step}px)` };
}

function moveRight() {
    state.innerStyles = { transform: `translateX(0)` };
}
function resetTranslation() {
    state.innerStyles = { transition: "none", transform: `translateX(-${step}px)` };
}
</script>

<template>
    <div class="carousel">
        <div class="inner" :style="state.innerStyles">
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
    white-space: nowrap;
    transition: transform 1s ease-in-out;
}
.slide {
    display: inline-flex;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
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
