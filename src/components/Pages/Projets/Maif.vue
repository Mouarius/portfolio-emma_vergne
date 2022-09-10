<script setup>
import { useRouter } from "vue-router";
import image0 from "../../../assets/img/projets/maif_algues/resize/maif_algues0_grande.jpg";
import image1 from "../../../assets/img/projets/maif_algues/resize/maif_algues1_grande.jpg";
import image2 from "../../../assets/img/projets/maif_algues/resize/maif_algues2_grande.jpg";
import image3 from "../../../assets/img/projets/maif_algues/resize/maif_algues3_grande.jpg";
import image4 from "../../../assets/img/projets/maif_algues/resize/maif_algues4_grande.jpg";
import image5 from "../../../assets/img/projets/maif_algues/resize/maif_algues5_grande.jpg";
import image6 from "../../../assets/img/projets/maif_algues/resize/maif_algues6_grande.jpg";
import image7 from "../../../assets/img/projets/maif_algues/resize/maif_algues7_grande.jpg";
// const imgCover = new URL("../../../assets/img/projets/maif_algues/resize/maif_algues0_grande.jpg", import.meta.url).href;

const router = useRouter();

const goBack = () => {
    return router.back();
};

const goDown = () => {
    document.querySelector(".article-body").scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
    <article>
        <header>
            <button class="back" @click="goBack"><font-awesome-icon icon="fa-standard fa-xmark" /></button>
            <img class="cover-image" :src="image0" alt="" />
            <div class="project-info">
                <h1>Algues, processus de transformations</h1>
                <h4>Exposition au Maif social club</h4>
                <div class="information">information rapide, qui a travaillé, dates, lieu etc</div>
            </div>
            <button class="down" @click="goDown">
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </button>
        </header>
        <div class="article-body">
            <section class="introduction span-all">
                <h2>Introduction</h2>
                <p>
                    Ce projet est une exploration sensible et plastique des étapes de transformation des algues dans l'industrie. Cette recherche est transcrite dans unecollection de papiers
                    didactiques. Les papiers produits racontent les changements et transformations des algues avant leur consommation. Ils sensibilisent les consommateurs sur certaines étapes deleurs
                    métamorphoses par un travail plastique et poétique de la matière. Ces papiers prennent tout leur sens lorsqu'ils deviennent packaging de ses même produits : agar agar, paillettes
                    d'algues et nori. Les papiers ont été réalisé dans le moulin à papier de Saint- Léonard-de-Noblat datant du 16ème siècle.
                </p>
            </section>

            <img :src="image6" class="span-large" />

            <div class="description span-min">
                <h4>Papier Nori</h4>
                <p>
                    Ce papier reprend le procédé de fabrication des feuilles de Nori, inspirée de la fabrication du papier au Japon. Pour la création du papier Nori, le papier est gaufré, c'est-à-dire
                    moulé pour lui donner du volume. Pour cette création, le volume gaufré représente la forme originelle de l'algue avant sa récolte, organique et aléatoire. Le motif apparait en
                    relief, donnant ainsi vie au papier.
                </p>
            </div>

            <img :src="image2" class="span-large" />
            <div class="description span-min">
                <h4>Papier Laitue de mer</h4>
                <p>
                    Le papier laitue de mer reprend le principe de déshydratation et de réhydratation des algues. Le papier est fabriqué à partir de fibres de papier recyclé, il permet donc de
                    produire du papier à l'infini. À partir des différents types de papiers récupérés, une pâte à papier est créée. Elle est ensuite broyée et mélangée aux algues. La pâte à papier est
                    ensuite incorporée dans de grande cuve d’eau.
                </p>
            </div>

            <img :src="image4" class="span-large" />
            <div class="description span-min">
                <h4>Papier Agar Agar</h4>
                <p>
                    Le papier agar agar reprend le principe d'ébouillonnement des algues et de leur perte de pigmentation. Le papier représente la diffusion et la déambulation de la couleur lors du
                    processus de transformation des algues rouges en industrie. En effet, avant de devenir une poudre blanche, l'agar agar est une algue rouge. Pour être consommées, l'algue rouge
                    devient verte et finit par se dépigmenter, avant de devenir blanche.
                </p>
            </div>
            <div class="carousel span-all"></div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.carousel {
    background-color: red;
    height: 20rem;
}
</style>
