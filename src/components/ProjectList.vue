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
.project-list {
    margin-top: 10rem;
    margin-left: 52px;
    margin-right: 52px;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    gap: 1rem 1rem;
    @media screen and (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem 1rem;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.6rem 1.6rem;
    }
}
</style>
