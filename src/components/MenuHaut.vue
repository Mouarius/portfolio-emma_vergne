<script setup></script>

<template>
    <header>
        <router-link class="link" to="/"><h1>Emma Vergne</h1></router-link>
        <ul class="menu-droite">
            <li><router-link class="link projets" to="/projets">projets</router-link></li>
            <li><router-link class="link contact" to="/contact">contact</router-link></li>
            <li>
                <a href="https://www.instagram.com/emmavergne/" class="link instagram"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </li>
        </ul>
    </header>
</template>

<style scoped>
header {
    font-family: "Inknut Antiqua", serif;
    font-size: 2rem;

    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    padding-left: 52px;
    padding-right: 52px;
    padding-top: 1em;
}
h1 {
    font-weight: 600;
    text-shadow: 2px 2px rgb(230, 230, 230);
}
.menu-droite {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    justify-content: space-between;
}
.link {
    color: black;
    cursor: pointer;
    text-decoration: none;
}
li {
    padding-left: 2rem;
}
.instagram {
    color: black;
    font-size: 1.6rem;
}
</style>
