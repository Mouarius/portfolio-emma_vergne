<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import anime from "animejs/lib/anime";
let springLength = ref(0);
let xPos = ref(0);
let yPos = ref(0);
let dx = ref(0);
let dy = ref(0);
let svgElement = ref(null);
let springContainerElement = ref(null);
let springStyle = reactive({});

let springAnimation;

function moveSpring(e) {
    xPos.value = e.clientX;
    yPos.value = e.clientY;
    dx.value = xPos.value - springContainerElement.value.offsetLeft - springContainerElement.value.offsetWidth / 2;
    dy.value = yPos.value - springContainerElement.value.offsetTop - springContainerElement.value.offsetHeight / 2;
    // console.log(`xPos : ${xPos.value}, yPos : ${yPos.value}`, `dx : ${dx.value}, dy : ${dy.value}`);
    springStyle.transform = `translate(${dx.value}px, ${dy.value}px)`;
}

function animateSpring() {
    return (springAnimation = anime({
        targets: ".spring-path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        delay: function (el, i) {
            return i * 500;
        },
        duration: function (el, i) {
            return 600 - 300 * i;
        },
        loop: false,
    }));
}

function onCardHover() {}

onMounted(() => {
    window.addEventListener("mousemove", moveSpring);
    window.addEventListener("keydown", () => {
        springAnimation.restart();
    });
    springLength.value = document.querySelector(".spring-path").getTotalLength();
    animateSpring();
});

onUnmounted(() => {
    window.removeEventListener("mousemove", moveSpring);
});
</script>

<template>
    <div id="spring-container" ref="springContainerElement" :style="springStyle">
        <svg ref="svgElement" id="spring" width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                class="spring-path spring-start"
                d="M4.31701 23.4939C-1.97173 31.189 2.10754 44.7664 11 48C18.6577 50.7846 26.37 42.6 28.5 35.5C30.7854 27.8819 25 17.5 18.5 22.5C12 27.5 14.9944 37.5461 20.5 39.8485C24.4912 41.5175 29.162 42.7299 34 39.8485C38.838 36.967 43.198 32.2665 45 26.5C47.5 18.5 43.5 8 33 4 "
                stroke="black"
                stroke-width="2"
                stroke-linecap="square"
            />
            <path class="spring-path spring-end" d="M33 4L35 14.5M33 4L43.5 1.5" stroke="black" stroke-width="2" stroke-linecap="square" />
        </svg>
    </div>
</template>
<style scoped>
#spring-container {
    position: fixed;
    z-index: 1000;
    display: block;
    pointer-events: none;
}
</style>
