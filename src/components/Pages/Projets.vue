<script setup>
const coPain = new URL("../../assets/img/carousel/co-pain_1.jpg", import.meta.url);
const dzume = new URL("../../assets/img/carousel/dzume_4.jpg", import.meta.url);
const gelification = new URL("../../assets/img/carousel/gelification_8.jpg", import.meta.url);
const maif = new URL("../../assets/img/carousel/maif_0.jpg", import.meta.url);
const stBrieuc = new URL("../../assets/img/carousel/st_brieuc_5.jpg", import.meta.url);
</script>
<template>
    <ul class="mosaique">
        <li>
            <a class="projet">
                <img :src="coPain.href" />
            </a>
        </li>
        <li>
            <a href="" class="projet"><img :src="dzume.href" /></a>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.mosaique {
    margin-top: 10rem;
    margin-left: 52px;
    margin-right: 52px;
}
.projet {
    cursor: pointer;

    img {
        &:hover {
            transform: rotate(180deg) scale(2) translate(40px, 60px);
        }
        transition: all 0.8s ease-in-out;
        transform: rotate(0);
        object-fit: cover;
        width: 320px;
    }
}
</style>
