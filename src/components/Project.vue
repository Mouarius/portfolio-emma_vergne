<script setup>
import { onMounted, onUnmounted, reactive, ref, shallowRef, watch, watchEffect } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { projectList } from "../data/projects";

import ProjectHeader from "./ProjectHeader.vue";
import ProjectFooter from "./ProjectFooter.vue";

const route = useRoute();
const router = useRouter();

const project = shallowRef(projectList.find((p) => p.id === route.params.project_id));
const ComponentToRender = shallowRef(project.value.component);

const overlayElement = ref();
const scrollValue = ref(0);
const goTopButton = ref(false);

function findProject(projectId) {
    return projectList.find((p) => p.id === projectId);
}

const scrollTop = () => {
    return overlayElement.value.scrollTo(0, 0);
};

const updateScroll = () => {
    return (scrollValue.value = overlayElement.value.scrollTop);
};

const updateProject = (projectId) => {
    project.value = findProject(projectId);
    ComponentToRender.value = project.value.component;
};

//TODO: Smooth transition to next/prev projects

const toNextProject = () => {
    const projectIndex = projectList.findIndex((proj) => proj.id === project.value.id);
    const nextProject = projectIndex === projectList.length - 1 ? projectList[0] : projectList[projectIndex + 1];
    router.push(`/projets/${nextProject.id}`);
    scrollTop();
};
const toPrevProject = () => {
    const projectIndex = projectList.findIndex((proj) => proj.id === project.value.id);
    const prevProject = projectIndex === 0 ? projectList[projectList.length - 1] : projectList[projectIndex - 1];
    router.push(`/projets/${prevProject.id}`);
    scrollTop();
};

watch(
    () => route.params,
    () => {
        if (!route.params.project_id) return;
        updateProject(route.params.project_id);
    }
);

watch(scrollValue, () => {
    if (scrollValue.value >= window.outerHeight / 2) {
        return (goTopButton.value = true);
    }
    return (goTopButton.value = false);
});

onMounted(() => {
    project.value = projectList.find((p) => p.id === route.params.project_id);

    overlayElement.value = document.getElementById("project-overlay");
    overlayElement.value.addEventListener("scroll", updateScroll);
});

onUnmounted(() => {
    overlayElement.value.removeEventListener("scroll", updateScroll);
});
</script>

<template>
    <div id="project-overlay" class="overlay">
        <button @click="scrollTop" v-if="goTopButton" id="go-top"><font-awesome-icon icon="fa-solid fa-chevron-up" /></button>
        <article>
            <ProjectHeader :title="project.title" :subtitle="project.subtitle" :information="project.information.description" :date="project.information.date" :projectId="project.id" />
            <div class="article-body">
                <ComponentToRender></ComponentToRender>
            </div>
            <ProjectFooter :toNextProject="toNextProject" :toPrevProject="toPrevProject" />
        </article>
    </div>
</template>

<style lang="scss">
#go-top {
    position: fixed;
    z-index: 10;
    bottom: 2rem;
    right: 2rem;
    height: 3rem;
    width: 3rem;
    font-size: 1.6rem;
    background-color: rgb(11, 11, 11);
    color: white;
    border: none;
    border-radius: 100%;
}
.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
    scroll-behavior: smooth;
    z-index: 10;
    background-color: white;
    padding: 0 1.2rem;
    padding-bottom: 8rem;

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
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 760px;

    p {
        margin-bottom: 1rem;
        line-height: 1.5rem;
    }
    em {
        font-weight: 700;
    }
    i {
        font-style: italic;
    }

    img:not(.cover-image) {
        width: 100%;
    }

    header {
        position: relative;
        display: flex;
        box-sizing: border-box;
        padding-top: 2rem;
        padding-bottom: 5rem;
        height: 100vh;
        width: 100%;
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
            bottom: 4vh;
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
