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

function onBeforeEnter(el) {
    console.log("ta");
}

function changeVisibility(link) {
    link.visible = !link.visible;
}

function onEnter(el, done) {
    let i = 0;
    let interval = setInterval(() => {
        navLinks[i].visible = !navLinks[i].visible;
        i++;
        if (i >= navLinks.length) clearInterval(interval);
    }, 100);
    done();
}
function onLeave(el, done) {
    let i = 0;
    let interval = setInterval(() => {
        navLinks[i].visible = !navLinks[i].visible;
        i++;
        if (i >= navLinks.length) clearInterval(interval);
    }, 100);
    done();
}

const toggleMenu = () => {
    menuIsOpened.value = !menuIsOpened.value;
};
</script>

<template>
    <header id="page-header">
        <router-link class="link" to="/"><h1>Emma Vergne</h1></router-link>
        <button class="toggle-menu-icon" v-if="menuIsSmall" @click="toggleMenu">
            <font-awesome-icon v-if="!menuIsOpened" icon="fa-solid fa-bars"> </font-awesome-icon>
            <font-awesome-icon v-else icon="fa-solid fa-xmark"></font-awesome-icon>
        </button>
        <transition @enter="onEnter" @leave="onLeave">
            <ul v-if="menuIsOpened" class="menu-droite menu-small" tag="ul">
                <li v-for="(link, index) in navLinks" :class="{ visible: link.visible }" :key="index" @click="toggleMenu" :data-index="index">
                    <a v-if="link.name === 'instagram'" href="https://www.instagram.com/emmavergne/" @click="toggleMenu" class="instagram"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                    <router-link v-else :to="link.href" class="link">{{ link.name }}</router-link>
                </li>
            </ul>
        </transition>
        <ul v-if="!menuIsSmall" class="menu-droite menu-large" tag="ul">
            <li v-for="(link, index) in navLinks" :class="{ visible: link.visible }" :key="index" @click="toggleMenu" :data-index="index">
                <a v-if="link.name === 'instagram'" href="https://www.instagram.com/emmavergne/" @click="toggleMenu" class="instagram"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                <router-link v-else :to="link.href" class="link">{{ link.name }}</router-link>
            </li>
        </ul>
    </header>
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
#page-header {
    font-family: "Inknut Antiqua", serif;

    position: fixed;
    display: block;
    z-index: 10;
    width: 100%;
    padding: 0 2rem;
    top: 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    padding-top: 1.8rem;
    box-sizing: border-box;

    li {
        cursor: pointer;
        text-align: center;
        transition: transform 0.2s ease;
        transform-origin: center;
        &:hover {
            transform: rotate(-10deg);
        }
    }
    h1 {
        font-weight: 600;
        text-shadow: 2px 2px rgb(230, 230, 230);
    }
    .menu-droite {
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

    a {
        color: black;
        cursor: pointer;
        text-decoration: none;
    }
    .toggle-menu-icon {
        z-index: 10;
        font-size: 1.6rem;
        background: none;
        border: none;
        cursor: pointer;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.8rem;
        width: 1.8rem;
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
</style>
