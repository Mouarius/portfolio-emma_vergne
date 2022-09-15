<script setup>
import image0 from "../../../assets/img/offrande/offrande0-large.jpg";
import image1 from "../../../assets/img/offrande/offrande1-medium.jpg";
import image2 from "../../../assets/img/offrande/offrande2-medium.jpg";
import image3 from "../../../assets/img/offrande/offrande3-medium.jpg";
import image4 from "../../../assets/img/offrande/offrande4-medium.jpg";
import ImageCarousel from "../../ImageCarousel.vue";
</script>
<template>
    <section class="introduction span-all">
        <h2>Qu’est ce que vous évoque une offrande épicurienne ?</h2>
        <p>
            Pour moi, une offrande épicurienne ça m’évoque le partage, l’invitation à un véritable festin autour duquel on bavarderait autour d’une belle tablée avec des gens qu’on aime. Cela m’a
            rappelé les films que j’ai vu et revu durant mon enfance : <i>L’aile ou la cuisse</i>, <i>Le retour de Don Camillo</i>. Des films qui rendent hommage à la bouffe et à la convivialité d’un
            repas. Une offrande épicurienne c’est quelque chose que l’on va partager avec ses convives et qui nous accompagnent à table. <br />
            Une offrande épicurienne c’est le partage des bonnes choses, des mets simples mais qui nous font tous plaisir !
        </p>
    </section>

    <div class="description span-med">
        <p>
            Objet sacré de la convivialité, pierre angulaire de la table française, la miche de pain trône sur nos tablées, est rompue, coupée, tronçonnée, distribuée, partagée. Empreint de
            superstitions et de symboliques, le pain ne se retourne pas, se voit bénir d’une croix, on le réglemente et on le mange. Mais avant tout le pain c’est une affaire d’amitié.
        </p>
        <p>
            Etymologiquement, on devient copains, <i>co-pains</i>, compagnons de pain et compagnons de de galères. Entre amis on le rompt allègrement mais en tout cas jamais de petits pains
            individuels. A bat le pain de mie, l’uniformisation, l’individualisation du pain, partageons à battons rompus notre pain quotidien.
        </p>
        <p>Copain, Co - Pain : étymologiquement, copain était une altération populaire de compain (en ancien français, cas sujet de compagnon), <i>« qui partage le même pain »</i></p>
    </div>
    <img :src="image3" class="span-med" />

    <img :src="image2" class="span-all" />
    <div class="span-all">
        <p>
            Copain est un projet de céramique <em>souvenir qu’on garde d’un repas partagé ensemble,</em> entre copains. On ramène son pain et on offre l’ustensile avec lequel nous l’avons cuit. Le
            pain est cuit sous une céramique qui va contenir la matière et la former durant la cuisson. Cette plaque devient <em>objet d’ornementation</em> une fois que le pain est démoulé.
        </p>
    </div>

    <h2>Gallerie</h2>
    <ImageCarousel :images-url="[image0, image2, image3]" :delay="8000" class="span-all" />
</template>
