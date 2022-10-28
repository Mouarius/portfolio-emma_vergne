<script setup>
import image0 from "../../../assets/img/edition_gelification/edition_gelification0-medium.jpg";
import image1 from "../../../assets/img/edition_gelification/edition_gelification1-medium.jpg";
import image2 from "../../../assets/img/edition_gelification/edition_gelification2-medium.jpg";
import image3 from "../../../assets/img/edition_gelification/edition_gelification3-medium.jpg";
import image4 from "../../../assets/img/edition_gelification/edition_gelification4-medium.jpg";
import image5 from "../../../assets/img/edition_gelification/edition_gelification5-medium.jpg";
import image6 from "../../../assets/img/edition_gelification/edition_gelification6-medium.jpg";
import image7 from "../../../assets/img/edition_gelification/edition_gelification7-medium.jpg";
import image8 from "../../../assets/img/edition_gelification/edition_gelification8-medium.jpg";
import ImageCarousel from "../../ImageCarousel.vue";
</script>
<template>
    <section class="introduction span-all">
        <h2>Un travail d'édition commun</h2>
        <p>
            La collection Recette et transformation rassemble cinq livrets, chacun proposant des recettes axées sur une technique de transformation des aliments. Dans les livres déjà parus, on
            retrouve la déshydratation par <i>Berengère Brault</i>, l’émulsion par <i>Agathe Gerbaud</i>, la fermentation par <i>Chloé Chevron</i>, le fumage par <i>Estelle Sage</i>, la gélification
            par <i>Emma Vergne</i>.
        </p>
    </section>
    <img :src="image8" class="span-all" />
    <div class="description span-all">
        <p>
            En chimie, la gélification est un processus créant une formation d’un gel. C’est un passage de l’état fluide ou liquide à un état presque solide appelé : état gel. Elle est produite en
            cuisine naturellement ou par l’apport de gélifiants qui augmentent la viscosité d’un liquide.
        </p>
        <p>
            Dans cette édition « Gélification », dix recettes autour de ce principe physique sont proposées. Ces recettes permettent de découvrir différents gélifiants : xanthane, carraghénanes, agar
            agar ou gélatine. Pour chaque recette, le gélifiant est proposé sous forme d’un échantillon avec le dosage nécessaire pour la recette. En complément de l’échantillon, la température de
            fusion est indiquée ainsi que des instructions pour utiliser au mieux ces gélifiants.
        </p>
    </div>
    <ImageCarousel :images-url="[image1, image2, image3, image4, image5, image6, image7]" :delay="8000" class="span-all" />
</template>
<style lang="scss" scoped></style>
