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
    // max-width: 500px;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    .mask {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
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
        max-width: 100%;
    }
}
</style>
