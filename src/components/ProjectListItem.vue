<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["name", "projectId", "image"]);
const router = useRouter();

function goToProject() {
    return router.push(`/projets/${props.projectId}`);
}
</script>
<template>
    <li :style="{ backgroundImage: `url(${image})` }">
        <div class="mask" @click="goToProject">
            <h2>{{ name }}</h2>
        </div>
    </li>
</template>
<style lang="scss" scoped>
li {
    position: relative;
    background-clip: border-box;
    background-size: cover;
    min-width: 200px;
    min-height: 220px;
    aspect-ratio: 1 / 1;

    cursor: pointer;

    .mask {
        display: flex;
        position: absolute;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        opacity: 0;
        width: 100%;
        height: 100%;

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
}
</style>
