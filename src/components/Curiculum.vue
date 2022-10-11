<script setup>
import ContactCard from "./ContactCard.vue";
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
    gsap.to(".mes-projets", {
        rotation: 6,
        duration: 0.4,
        repeat: Infinity,
        ease: "none",
        yoyo: true,
    });
});
</script>

<template>
    <div class="curriculum">
        <ul class="prompt">
            <li class="prompt-line">Bonjour,</li>
            <li class="prompt-line">
                je m'appelle
                <div class="field"><em class="fill-in rot-right">Emma Vergne</em></div>
            </li>
            <li class="prompt-line">
                et je suis
                <div class="field"><em class="fill-in rot-left">Designer Culinaire</em></div>
            </li>
            <li class="prompt-line">
                diplômée de
                <div class="field">
                    <a href="https://designculinaire.esaddereims.fr/" about="Site internet du Master Design Culinaire" class="fill-in rot-right">
                        <em> ESAD de Reims </em>
                    </a>
                </div>
                .
            </li>
            <li class="prompt-line">
                Si vous le voulez, vous pouvez aller voir
                <div class="field">
                    <span class="fill-in rot-right mes-projets">
                        <RouterLink to="/projets"> {{ ">" }} mes projets {{ "<" }} </RouterLink>
                    </span>
                </div>
                .
            </li>
            <li class="prompt-line">On peut même en discuter :</li>
        </ul>
        <ContactCard class="rot-left"></ContactCard>
    </div>
</template>

<style lang="scss" scoped>
.curriculum {
    font-family: "Public Sans", sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .prompt {
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        line-break: normal;
        max-width: 56rem;
        font-size: 1.8rem;
        line-height: 100%;
        margin: 0 1.4rem;
        margin-top: 3rem;
        padding: 3rem 2rem;

        li:last-child {
            margin-top: 6rem;
        }

        .description {
            margin-top: 1rem;
            width: 48rem;
        }
        .prompt-line {
            font-family: "Space Grotesk", sans-serif;
            font-weight: 600;
            margin-bottom: 1rem;
            a {
                color: rgb(150, 148, 255);
                text-shadow: -2px 2px rgb(23, 23, 31);
                &:hover {
                    text-decoration: underline;
                }
            }

            .field {
                display: inline-block;
                position: relative;
                padding-left: 1rem;
                border-bottom: dotted 4px black;
                height: 100%;
                bottom: 0.3rem;
                font-family: "Inknut Antiqua";
            }
            .fill-in {
                display: inline-block;
                color: rgb(252, 170, 18);
                text-shadow: -2px 2px rgb(27, 18, 2);
                // transform-origin: right;

                // transition: transform 0.1s ease;
                // transform: translate(0, 5px) rotate(2deg);
                // &:hover {
                //     transform: translate(0, -30px) rotate(-1deg);
                // }
            }
        }
        @media screen and (min-width: 576px) {
            font-size: 1.8rem;
            margin: 0 2rem;
            margin-top: 4rem;
            line-height: 110%;
            li {
                margin-bottom: 1.6rem;
            }
            .field {
                bottom: 0.6rem;
                border-bottom: dotted 5px black !important;
            }
        }
        @media screen and (min-width: 756px) {
            font-size: 2rem;
            margin-top: 4rem;
            li {
                margin-bottom: 2rem;
            }
            .field {
                bottom: 0.6rem;
                border-bottom: dotted 5px black !important;
            }
            .prompt-line .fill-in {
                text-shadow: -3px 3px rgb(27, 18, 2);
            }
            .prompt-line a {
                text-shadow: -3px 3px rgb(23, 23, 31);
            }
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
    transition: transform 0.1s ease;
    transform: translate(0, -5px) rotate(-2deg);
    &:hover {
        transform: translate(3px, -3px) rotate(2deg);
    }
}
.rot-right {
    transition: transform 0.1s ease;
    transform: translate(0, -5px) rotate(2deg);
    &:hover {
        transform: translate(-3px, -3px) rotate(-2deg);
    }
}
.mes-projets {
    transform: none;
}
</style>
