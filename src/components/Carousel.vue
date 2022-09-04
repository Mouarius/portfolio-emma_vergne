<script setup>
import { onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
const delay = 10000;
const imagePath = "/src/assets/img/carousel";
const state = reactive({
    transitioning: false,
    slides: [
        //TODO: make an easier way to modify the images (loading them from json file easily editable ?)
        { id: 0, src: `${imagePath}/buche_2.jpg`, alt: "" },
        { id: 1, src: `${imagePath}/co-pain_1.jpg`, alt: "" },
        { id: 2, src: `${imagePath}/co-pain_4.jpg`, alt: "" },
        { id: 3, src: `${imagePath}/dzume_4.jpg`, alt: "" },
        { id: 4, src: `${imagePath}/dzume_7.jpg`, alt: "" },
        { id: 5, src: `${imagePath}/dzume_10.jpg`, alt: "" },
        { id: 6, src: `${imagePath}/dzume_11.jpg`, alt: "" },
        { id: 7, src: `${imagePath}/gelification_4.jpg`, alt: "" },
        { id: 8, src: `${imagePath}/gelification_6.jpg`, alt: "" },
        { id: 9, src: `${imagePath}/gelification_8.jpg`, alt: "" },
        { id: 10, src: `${imagePath}/maif_0.jpg`, alt: "" },
        { id: 12, src: `${imagePath}/maif_7.jpg`, alt: "" },
        { id: 13, src: `${imagePath}/st_brieuc_1.jpg`, alt: "" },
        { id: 14, src: `${imagePath}/st_brieuc_5.jpg`, alt: "" },
    ],
    innerStyles: {},
    width: 0,
    height: 0,
    step: window.innerWidth,
});

onBeforeMount(() => {
    window.addEventListener("resize", updateDimensions);
});

onMounted(() => {
    updateDimensions();
    resetTranslation();
    setInterval(() => {
        next();
    }, delay);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateDimensions);
});

function updateDimensions() {
    state.width = document.documentElement.clientWidth;
    state.height = document.documentElement.clientHeight;
    state.step = state.width;
    resetTranslation();
}

function next() {
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
    state.innerStyles = { transform: `translateX(-${2 * state.step}px)` };
}

function moveRight() {
    state.innerStyles = { transform: `translateX(0)` };
}
function resetTranslation() {
    state.innerStyles = { transition: "none", transform: `translateX(-${state.step}px)` };
}
</script>

<template>
    <div class="carousel">
        <div class="inner" :style="state.innerStyles">
            <img v-for="slide in state.slides" class="slide" :src="slide.src" :alt="slide.alt" :key="slide.id" :style="{ width: `${state.width}px` }" />
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
    display: inline-flex;
    flex-direction: row;
    height: 100vh;
    white-space: nowrap;
    transition: transform 1s ease-in-out;
}
.slide {
    display: inline-flex;
    object-fit: cover;
    box-sizing: border-box;
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
