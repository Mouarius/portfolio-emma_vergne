<script setup>
const props = defineProps(["toPrevProject", "toNextProject"]);

function onButtonHover(e) {
    console.log(e.target);
    e.target.firstChild.classList.toggle("active");
}
</script>
<template>
    <footer class="project-footer">
        <button @mouseenter="onButtonHover" @mouseleave="onButtonHover" @click="toPrevProject" class="previous-project">
            <img class="arrow left-arrow" src="../assets/icon-arrow-left.svg" /> projet précédent
        </button>
        <button @mouseenter="onButtonHover" @mouseleave="onButtonHover" @click="toNextProject" class="next-project">
            <img class="arrow right-arrow" src="../assets/icon-arrow-right.svg" />projet suivant
        </button>
    </footer>
</template>
<style lang="scss" scoped>
.project-footer {
    display: flex;
    flex-direction: row;
    margin-top: 4rem;
    width: 100%;
    justify-content: space-between;
    button {
        font-family: "Space Grotesk", sans-serif;
        font-size: 1em;
        font-weight: 600;
        border: none;
        background: none;
        transform: none;
        &:hover {
            text-decoration: underline;
        }
    }
    img {
        height: 32px;
    }
    .arrow {
        transition: transform 0.4s ease;
    }

    .right-arrow.active {
        transform: translateX(10px);
    }
    .left-arrow.active {
        transform: translateX(-10px);
    }
}
</style>
