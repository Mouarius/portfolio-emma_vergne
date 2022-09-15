<script setup>
import ProjectListItem from "./ProjectListItem.vue";

const props = defineProps(["projectList"]);
</script>

<template>
    <ul class="project-list">
        <ProjectListItem v-for="project in projectList" :key="project.id" :project-id="project.id" :name="project.name" :image="project.img" />
    </ul>
</template>

<style lang="scss" scoped>
ul.project-list {
    display: grid;
    margin: 0 1.4rem;
    margin-top: 10rem;
    position: relative;
    height: 100%;
    grid-template-columns: 100%;
    grid-auto-columns: auto;
    overflow: hidden;
    grid-auto-flow: row;
    // grid-template-rows: auto;
    gap: 1rem 1rem;
    @media screen and (min-width: 576px) {
        grid-template-columns: repeat(2, minmax(200px, auto));
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(200px, auto));
    }
}
</style>
