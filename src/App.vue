<script setup>
import MenuHaut from "./components/MenuHaut.vue";
import Carousel from "./components/Carousel.vue";
</script>

<template>
    <Carousel></Carousel>
    <MenuHaut></MenuHaut>
    <div class="curriculum">
        <header>
            <h1>Emma Vergne</h1>
            <p>Je suis une designer culinaire</p>
        </header>
    </div>
</template>

<style scoped>
.curriculum {
    font-family: "Public Sans", serif;
}
.curriculum h1 {
    font-family: "Inknut Antiqua", serif;
    font-size: 2.4rem;
}
</style>
