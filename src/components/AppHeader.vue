<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { gsap } from "gsap";

const dim = reactive({ w: 0, h: 0 });

const menuIsSmall = ref(false);
const menuIsOpened = ref(false);

const navLinks = reactive([
    {
        name: "accueil",
        visible: false,
        href: "/",
    },
    {
        name: "projets",
        visible: false,
        href: "/projets",
    },
    {
        name: "contact",
        visible: false,
        href: "/contact",
    },
    {
        name: "instagram",
        visible: false,
        href: "https://www.instagram.com/emmavergne/",
    },
]);

const updateDimensions = () => {
    dim.w = document.documentElement.clientWidth;
    dim.h = document.documentElement.clientHeight;
    if (dim.w <= 576) {
        return (menuIsSmall.value = true);
    }
    menuIsSmall.value = false;
};

onMounted(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateDimensions);
});

function onBeforeEnter(el, done) {
    let i = 0;
    let interval = setInterval(() => {
        navLinks[i].visible = !navLinks[i].visible;
        i++;
        if (i >= navLinks.length) clearInterval(interval);
    }, 100);
}
function onLeave(el, done) {
    let i = 0;
    let interval = setInterval(() => {
        navLinks[i].visible = !navLinks[i].visible;
        i++;
        if (i >= navLinks.length) clearInterval(interval);
    }, 100);
    gsap.to(el, {
        opacity: 0,
        duration: 0.4,
        onComplete: done,
    });
}

const toggleMenu = () => {
    menuIsOpened.value = !menuIsOpened.value;
};
</script>

<template>
    <header id="page-header">
        <router-link class="link" to="/"><h1 id="page-title">Emma Vergne</h1></router-link>
        <nav>
            <button class="toggle-menu-icon" v-if="menuIsSmall" @click="toggleMenu">
                <img v-if="!menuIsOpened" src="../assets/icon-menu.svg" />
                <img v-else src="../assets/icon-close.svg" />
            </button>
            <transition @enter="onBeforeEnter" @leave="onLeave" name="fade">
                <ul v-if="menuIsOpened && menuIsSmall" class="menu-small">
                    <li v-for="(link, index) in navLinks" :class="{ visible: link.visible }" :key="index" @click="toggleMenu" :data-index="index">
                        <a v-if="link.name === 'instagram'" href="https://www.instagram.com/emmavergne/" @click="toggleMenu" class="instagram"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                        <router-link v-else :to="link.href" class="link">{{ link.name }}</router-link>
                    </li>
                </ul>
            </transition>
            <ul v-if="!menuIsSmall" class="menu-large">
                <li v-for="(link, index) in navLinks" :class="{ visible: link.visible }" :key="index" :data-index="index">
                    <a v-if="link.name === 'instagram'" href="https://www.instagram.com/emmavergne/" class="instagram"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                    <router-link v-else :to="link.href" class="link">{{ link.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s linear;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

<style lang="scss" scoped>
#page-header {
    position: fixed;
    display: block;
    z-index: 10;
    left: 0;
    right: 0;
    padding: 0 1.4rem;
    padding-bottom: 2rem;
    padding-top: 1.8rem;
    height: 6rem;
    top: 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    box-sizing: border-box;

    @media screen and (min-width: 576px) {
        padding: 0 1.4rem;
        padding-top: 1.8rem;
    }
    #page-title {
        font-weight: 600;
        text-shadow: 2px 2px rgb(230, 230, 230);
    }
    a {
        color: black;
        cursor: pointer;
        text-decoration: none;
    }

    li {
        cursor: pointer;
        text-align: center;
        transition: transform 0.2s ease;
        transform-origin: center;
        &:hover {
            transform: rotate(-10deg);
        }
    }
    nav {
        font-family: "Space Grotesk", sans-serif;
        font-weight: 500;
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            li {
                padding-left: 1.4rem;
            }
        }
        .menu-small {
            position: fixed;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: white;
            top: 0;
            right: 0;
            left: 0;
            height: 100%;
            li {
                padding: 1.4rem 0;
                font-size: 1.6rem;
                opacity: 0;
                transition: transform 0.2s ease;
                transform: translateY(20px);
            }
            .visible {
                opacity: 1;
                transform: translate(0);
            }
        }

        .toggle-menu-icon {
            z-index: 10;
            position: relative;
            font-size: 1.6rem;
            background: none;
            border: none;
            cursor: pointer;
            text-align: center;
            display: flex;
            align-items: center;
            width: 32px;
            height: 32px;
            justify-content: center;
        }
        .instagram {
            color: black;
            font-size: 1.6rem;
        }
        @media screen and (min-width: 768px) {
            li {
                font-size: 1.2rem;
                padding-left: 2rem;
            }
        }
    }
}
</style>
