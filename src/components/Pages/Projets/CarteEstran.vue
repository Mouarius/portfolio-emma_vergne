<script setup>
import ImageCarousel from "../../ImageCarousel.vue";
import image0 from "../../../assets/img/carte_estran/carte_estran0-medium.jpg";
import image1 from "../../../assets/img/carte_estran/carte_estran1-medium.jpg";
import image2 from "../../../assets/img/carte_estran/carte_estran2-medium.jpg";
import image3 from "../../../assets/img/carte_estran/carte_estran3-medium.jpg";
import image4 from "../../../assets/img/carte_estran/carte_estran4-medium.jpg";
import image5 from "../../../assets/img/carte_estran/carte_estran5-medium.jpg";
import image6 from "../../../assets/img/carte_estran/carte_estran6-medium.jpg";
</script>
<template>
    <section class="introduction">
        <h2>L'estran ?</h2>
        <p>
            L’estran est la zone du littoral comprise entre le niveau de la haute mer et celui de la basse mer. Symboliquement, l’estran rappelle <em>l’osmose des éléments naturels</em>. C’est une
            zone de transit, de passage d’un état à l’autre et de rencontre deux territoires et écosystèmes. Ce lieu est composé de faunes et de flores éclectiques et pourtant reliées par leur
            territoire commun. <br />
            Les différentes espèces de l’écosystème présent sur l’estran se complètent et évoluent avec les passages des mouvements de l’eau.
        </p>
    </section>
    <section>
        <p>Découverte de l’Estran est une <strong>planche botanique</strong>, <strong>cartographie</strong> et <strong>recueil de recettes</strong> autour des végétaux de cet écosystème.</p>
        <img class="span-med" src="../../../assets/img/carte_estran/carte_estran2-medium.jpg" alt="" />
    </section>

    <section class="span-all">
        <p>
            Ce dépliant regroupe les végétaux non pas par espèce mais par lieu de vie. Les 13 espèces représentées sur cette planche sont celles que l’on retrouvera sur la carte de l’estran. Les
            différentes espèces sont classifiées par couleurs selon leurs familles.
        </p>
        <p>
            Sur l’estran il y a les plantes du littoral, les plantes maritimes et les algues classés en trois parties : les vertes, les brunes et les rouges. Ces informations sont présentées comme
            complément de la carte. La légende donne les aspects distinctifs des espèces afin de mieux les reconnaitre et les caractéristiques gustatives de chacune d’entre elles. La carte donne les
            noms et les informations sur la localisation des espèces et sur leurs saisonnalités.
        </p>
        <img src="../../../assets/img/carte_estran/carte_estran6-medium.jpg" alt="" />
    </section>
    <img class="span-all" src="../../../assets/img/carte_estran/carte_estran3-medium.jpg" alt="" />
    <p class="span-all">
        Au dos de cette carte, six recettes sont proposées à base d’algues et de diverses plantes du littoral. Les recettes peuvent être réalisées à partir des récoltes sur l’estran ou de produits
        similaires achetés en commerce. Ces recettes sont proposées pour <strong>intégrer progressivement ces végétaux maritimes dans l’alimentation </strong>de celles et ceux qui le souhaitent.
    </p>
    <ImageCarousel class="span-all" :images-url="[image0, image1, image2, image3, image4, image5, image6]" />
</template>
<style lang="scss" scoped></style>
