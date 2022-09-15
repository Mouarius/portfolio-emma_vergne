<script setup>
import ProjectList from "../ProjectList.vue";
</script>

<template>
    <ProjectList />
</template>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
