<script setup>
import { onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";

import bucheUrl from "../assets/img/buche/buche0-xlarge.jpg";
import offrandeUrl from "../assets/img/offrande/offrande0-xlarge.jpg";
import dzume1Url from "../assets/img/dzume/dzume4-xlarge.jpg";
import dzume2Url from "../assets/img/dzume/dzume11-xlarge.jpg";
import gelificationUrl from "../assets/img/edition_gelification/edition_gelification4-xlarge.jpg";
import { useRouter } from "vue-router";

const delay = 10000;
const router = useRouter();

const images = [bucheUrl, offrandeUrl, dzume1Url, dzume2Url, gelificationUrl];
const slideImages = images.map((img) => {
    return { src: img, href: `/projets/${img.match(/(\w+)-/)[1].slice(0, -1)}` };
});

const state = reactive({
    transitioning: false,
    slides: slideImages,
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

function goToProject(link) {
    return router.push(link);
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
            <img @click="goToProject(slide.href)" v-for="(slide, index) in state.slides" class="slide" :src="slide.src" :key="index" :style="{ width: `${state.width}px` }" />
        </div>
        <button class="prev" @click="previous"><img src="../assets/icon-chevron-left.svg" alt="" /></button>
        <button class="next" @click="next"><img src="../assets/icon-chevron-right.svg" alt="" /></button>
    </div>
</template>

<style lang="scss" scoped>
.carousel {
    overflow: hidden;
    position: relative;
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
    &:hover {
        cursor: pointer;
    }
}
button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    background: none;
    border: none;
}

.prev {
    left: 1rem;
}
.next {
    right: 1rem;
}
</style>
