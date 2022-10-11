<script setup>
import ProjectListItem from "./ProjectListItem.vue";
import { projectList } from "../data/projects";
import { ref } from "vue";
import Spring from "./UI/Spring.vue";

let springVisible = ref(false);
</script>

<template>
    <Spring v-if="springVisible" />

    <ul class="project-list">
        <ProjectListItem
            v-for="project in projectList"
            :key="project.id"
            :project-id="project.id"
            :name="project.name"
            :image="project.img"
            @mouseenter="
                () => {
                    springVisible = true;
                }
            "
            @mouseleave="
                () => {
                    springVisible = false;
                }
            "
        />
    </ul>
</template>

<style lang="scss" scoped>
ul.project-list {
    display: grid;
    margin: 0 1.4rem;
    margin-top: 10rem;
    margin-bottom: 5rem;

    grid-template-columns: 100%;
    grid-column: span 1;
    grid-row: span 1;
    overflow: hidden;
    gap: 1rem 1rem;
    @media screen and (min-width: 576px) {
        grid-template-columns: repeat(2, minmax(200px, auto));
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(200px, auto));
    }
}
</style>
