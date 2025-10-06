<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/intro/img01.png', alt='imagen decorativa')
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          .container
            .row.align-items-center(data-aos="fade-left").tarjeta.bg-color-secundario-a10.p-4
              .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
                p.mb-0 El componente formativo “Buenas prácticas agrícolas y competitividad productiva del cultivo del plátano, orienta al aprendiz en la aplicación de BPA a lo largo del ciclo productivo, asegurando el desarrollo de la planta, la calidad del fruto y la prevención de plagas. Incluye prácticas de cosecha, poscosecha, empaque y transporte, junto con planes de saneamiento e inocuidad que cumplen normativas de mercado. Además, integra el bienestar laboral y la protección sanitaria, fortaleciendo la sostenibilidad y competitividad del sector. Bienvenido a este componente formativo.
              .col-8.col-md-10.col-lg-3.mb-4.mb-lg-0.mx-auto
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/intro/img02.svg', alt='imagen decorativa')

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
