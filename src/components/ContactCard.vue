<template>
    <div class="card rot-left">
        <h3>Emma · Vergne</h3>
        <div class="photo"></div>
        <address>
            <a class="telephone anim-lev-top" href="tel:+33684163629">+33 6 84 16 36 29</a>
            <br />
            <a class="anim-lev-bot" href="mailto:contact@emma-vergne.fr"> contact@emma-vergne.fr </a> <br /><br />
            2 rue du Président Franklin Roosevelt <br />
            51000 Reims
        </address>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.telephone::before {
    content: "cliquez pour appeler !";
    display: block;
    position: absolute;
    right: 0;
    opacity: 0;
    font-size: 1rem;
    color: blue;
    transition: opacity 01s;
    transition: transform 0.5s ease;
    transform: translate(0);
}
.telephone:hover {
    &::before {
        opacity: 1;
        transform: translate(1.4rem, -1.1rem);
    }
}

.e-mail::before {
    content: "appeler";
    display: block;
    position: absolute;
    right: 0;
    opacity: 0;
    font-size: 1rem;
    color: blue;
    transition: opacity 0.3s;
    transition: transform 0.4s ease;
}
.e-mail:hover {
    &::before {
        opacity: 1;
        transform: translate(1.4rem, -1.2rem);
    }
}

.card {
    position: relative;
    border: solid 3px black;
    border-radius: 28px;
    min-width: 22rem;
    width: 22rem;
    height: 11rem;

    margin-top: 60px;
    margin-bottom: 60px;
    padding: 2rem 2.4rem;

    font-size: 1.2rem;
    font-weight: 600;
    .photo {
        display: inline-block;
        position: absolute;
        height: 5.4rem;
        width: 5.4rem;
        border-radius: 100%;
        background-color: rgb(206, 206, 206);
        border: solid 2px black;
        right: 2rem;
        top: 1.6rem;
    }
    a {
        color: black;
        text-decoration: none;
        background-color: white;
    }
    address {
        margin-top: 3rem;
    }
    h3 {
        font-weight: 800;
        font-size: 1.4rem;
    }
}
.rot-right {
    transition: transform 0.2s ease;
    transform-origin: center;
    transform: rotate(4deg);
    &:hover {
        transform: rotate(8deg);
    }
}
.rot-left {
    transition: transform 0.2s ease;
    transform-origin: center;
    transform: rotate(-4deg);
    &:hover {
        transform: rotate(-8deg);
    }
}
.anim-lev-top {
    display: inline-block;
    transition: transform 0.2s ease;
    &:hover {
        transform: translate(2px, -4px);
    }
}
.anim-lev-bot {
    display: inline-block;
    transition: transform 0.2s ease;
    &:hover {
        transform: translate(2px, 4px);
    }
}
</style>
