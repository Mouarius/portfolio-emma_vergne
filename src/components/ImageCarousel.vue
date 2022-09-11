<script setup>
import { onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";

const props = defineProps(["delay", "imagesUrl"]);

const delay = props.delay ?? 10000;

const carouselRef = ref(null);

const state = reactive({
    transitioning: false,
    slides: props.imagesUrl,
    //TODO: make an easier way to modify the images (loading them from json file easily editable ?)
    //TODO: make a random order for the photos
    //! Attention ! Importer les images une par une ! Je ne sais pas comment faire autrement...
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
    state.width = carouselRef.value.clientWidth;
    state.height = carouselRef.value.clientHeight;
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
    <div class="carousel" ref="carouselRef">
        <div class="inner" :style="state.innerStyles">
            <img v-for="(slide, index) in state.slides" class="slide" :src="slide" :key="index" :style="{ width: `${state.width}px` }" />
        </div>
        <button class="prev" @click="previous"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
        <button class="next" @click="next"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
    </div>
</template>

<style scoped>
.carousel {
    position: relative;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}
.inner {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    transition: transform 1s ease-in-out;
}
.slide {
    display: inline-flex;
    object-fit: contain;
    box-sizing: border-box;
    max-height: 600px;
}
button {
    position: absolute;
    top: 50%;
    cursor: pointer;
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
