<script setup>
import { onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
import ChevronButton from "./UI/ChevronButton.vue";

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
    displayedImage: null,
});

function hideImage() {
    return (state.displayedImage = null);
}

function displayImage(image) {
    return (state.displayedImage = image);
}

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
            <img v-for="(slide, index) in state.slides" class="slide" :src="slide" @click="displayImage(slide)" :key="index" :style="{ width: `${state.width}px` }" />
        </div>
        <ChevronButton class="button-prev" direction="left" :on-click="previous" />
        <ChevronButton class="button-next" direction="right" :on-click="next" />
        <div @click="hideImage" v-if="state.displayedImage" class="big-image">
            <img :src="state.displayedImage" alt="" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.big-image {
    position: fixed;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.205);
    img {
        position: relative;
        object-fit: scale-down;
        max-width: 90%;
        max-height: 90%;
    }
}
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
    max-height: 300px;
    transition: filter 0.2s;
    &:hover {
        cursor: pointer;
        filter: brightness(90%);
    }
}
.chevron-button {
    position: absolute;
    top: 50%;
}
.button-prev {
    left: 24px;
}
.button-next {
    right: 24px;
}
@media screen and (min-width: 768px) {
    .slide {
        max-height: 600px;
    }
}
</style>
