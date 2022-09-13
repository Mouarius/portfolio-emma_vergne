<script setup>
import { useRoute } from "vue-router";

import ProjectHeader from "./ProjectHeader.vue";

const props = defineProps(["projectList"]);

const route = useRoute();

const project = props.projectList.find((p) => p.id === route.params.project_id);
const ComponentToRender = project.component;
</script>

<template>
    <div class="overlay">
        <article>
            <ProjectHeader :title="project.title" :subtitle="project.subtitle" :information="project.information.description" :coverImage="project.img" />
            <div class="article-body">
                <ComponentToRender></ComponentToRender>
            </div>
        </article>
    </div>
</template>

<style lang="scss">
.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
    z-index: 20;
    background-color: white;
    padding-bottom: 72px;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
}

button.back {
    font-size: 2rem;
    border: none;
    background: none;
    cursor: pointer;
    margin-bottom: 1rem;
}
article {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 760px;

    img:not(.cover-image) {
        width: 100%;
    }

    header {
        position: relative;
        height: 100vh;
        padding-top: 5vh;
        padding-bottom: 15vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .cover-image {
            object-fit: cover;
            width: 100%;
            height: 70%;
        }
        .down {
            cursor: pointer;
            background: none;
            border: none;
            position: absolute;
            font-size: 1.8rem;
            text-align: center;
            bottom: 8vh;
            width: 100%;
        }
        h1 {
            margin-bottom: 1rem;
            margin-top: 2rem;
        }
        .information {
            margin-top: 0.4rem;
        }
    }
    .article-body {
        padding-top: 4rem;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;

        .separator {
            border-bottom: solid 1px black;
        }
        section {
            grid-column: span 1;
            padding-bottom: 2rem;
        }
        .span-all {
            grid-column: span 1;
        }
        .span-min {
            grid-column: span 1;
        }
        .span-med {
            grid-column: span 1;
        }
        .span-large {
            grid-column: span 1;
        }

        h2 {
            margin-bottom: 1.2rem;
        }
        h3 {
            margin-bottom: 1rem;
        }

        .introduction {
            border-left: solid 3px;
            padding: 0 2rem;
        }
        @media screen and (min-width: 576px) {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 2rem;
            row-gap: 4rem;
            section {
                grid-column: span 2;
            }

            .span-all {
                grid-column: span 2;
            }
            .span-min {
                grid-column: span 1;
            }
            .span-med {
                grid-column: span 1;
            }
            .span-large {
                grid-column: span 1;
            }
        }
        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(6, 1fr);
            column-gap: 2rem;
            row-gap: 6rem;
            section {
                grid-column: span 6;
            }

            .span-all {
                grid-column: span 6;
            }
            .span-min {
                grid-column: span 2;
            }
            .span-med {
                grid-column: span 3;
            }
            .span-large {
                grid-column: span 4;
            }
        }
    }
}
</style>
