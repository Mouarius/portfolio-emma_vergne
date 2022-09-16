<script setup>
const props = defineProps(["toPrevProject", "toNextProject"]);
</script>
<template>
    <footer class="project-footer">
        <button @click="toPrevProject" class="previous-project">{{ "<" }} projet précédent</button>
        <button @click="toNextProject" class="next-project">projet suivant {{ ">" }}</button>
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
        font-family: "Inknut Antiqua", sans-serif;
        font-size: 1em;
        font-weight: 600;
        border: none;
        background: none;
        transform: none;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
