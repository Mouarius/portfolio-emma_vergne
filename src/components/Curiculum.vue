<script setup>
import ContactCard from "./ContactCard.vue";
</script>

<template>
    <div class="curriculum">
        <header>
            <h1>Emma · Vergne</h1>
            <p class="description">
                Suspendisse maximus ligula et tellus fermentum, nec faucibus libero fermentum. Quisque vitae dolor gravida justo suscipit congue a nec dolor. Sed vel ipsum id magna condimentum
                faucibus vel sed eros. Praesent vitae vehicula eros, ac laoreet mi.
            </p>
        </header>
        <section>
            <ul class="path">
                <li class="breakpoint rot-left">
                    <h2>Mon parcours</h2>
                    <p>description</p>
                </li>
                <li class="breakpoint rot-right">
                    <h2>Ma démarche</h2>
                    <p>description</p>
                </li>
                <li class="breakpoint rot-left">
                    <h2>Mes travaux</h2>
                    <p>description</p>
                </li>
            </ul>
            <div class="contact">
                <h2 class="rot-right">On en discute ?</h2>
                <ContactCard></ContactCard>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.curriculum {
    font-family: "Public Sans", serif;
    border: solid 1px green;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
        font-family: "Inknut Antiqua", serif;
        font-size: 2.8rem;
        margin-top: 48px;
    }
    h2 {
        font-family: "Inknut Antiqua", serif;
        font-size: 1.8rem;
        cursor: default;
    }

    header {
        text-align: center;

        .description {
            margin-top: 1rem;
            width: 48rem;
        }
    }
    .breakpoint {
        transform-origin: center;
        display: block;
        text-align: center;
        margin-top: 60px;
    }
    .contact {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
.rot-left {
    transition: transform 0.2s linear;
    transform: rotate(-4deg);
    &:hover {
        transform: rotate(-8deg);
    }
}
.rot-right {
    transition: transform 0.2s linear;
    transform: rotate(4deg);
    &:hover {
        transform: rotate(8deg);
    }
}
</style>
