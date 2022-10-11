<script setup>
const props = defineProps(["direction", "onClick"]);
function onButtonHover(e) {
    e.target.firstChild.classList.toggle("active");
}
</script>
<template>
    <button class="chevron-button" @click="onClick" @mouseenter="onButtonHover" @mouseleave="onButtonHover">
        <img v-if="direction === 'left'" class="chevron left-chevron" src="../../assets/icon-chevron-left.svg" alt="" />
        <img v-else-if="direction === 'right'" class="chevron right-chevron" src="../../assets/icon-chevron-right.svg" alt="" />
    </button>
</template>
<style lang="scss" scoped>
button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 24px;
}
.chevron {
    transition: transform 0.2s ease;
}
.right-chevron.active {
    transform: translateX(8px);
}
.left-chevron.active {
    transform: translateX(-8px);
}
</style>
