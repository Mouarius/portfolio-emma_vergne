<script setup>
const props = defineProps(["name", "projectId", "image"]);
</script>
<template>
    <li :style="{ backgroundImage: `url(${image})` }">
        <RouterLink :to="`/projets/${projectId}`">
            <div class="mask">
                <h2>{{ name }}</h2>
            </div>
        </RouterLink>
    </li>
</template>
<style lang="scss" scoped>
li {
    position: relative;
    background-clip: border-box;
    background-size: cover;
    width: 100%;
    aspect-ratio: 1;
    a .mask {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        transition: opacity 0.6s;
        &:hover {
            opacity: 1;
        }
    }
    h2 {
        text-align: center;
        cursor: pointer;
    }
    img {
        transition: all 0.8s ease-in-out;
    }
}
</style>
