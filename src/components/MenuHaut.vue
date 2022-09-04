<script setup></script>

<template>
    <header>
        <h1>Emma Vergne</h1>
        <div class="menu-droite">
            <a href="/projets">projets</a><a href="/contact" class="contact">contact</a
            ><a href="https://www.instagram.com/emmavergne/" class="instagram"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        </div>
    </header>
</template>

<style scoped>
header {
    font-family: "Inknut Antiqua", serif;
    font-size: 1.6rem;

    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    padding-left: 1.6em;
    padding-right: 1.6em;
    padding-top: 1em;
}
h1 {
    font-weight: 600;
}
.menu-droite {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    justify-content: space-between;
}
a {
    padding-left: 2rem;
    color: black;
    text-decoration: none;
}
.instagram {
    font-size: 1.6rem;
}
</style>
