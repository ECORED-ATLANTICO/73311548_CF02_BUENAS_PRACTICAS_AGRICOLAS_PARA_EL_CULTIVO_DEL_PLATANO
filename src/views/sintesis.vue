<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
     
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
          p Dentro de las buenas prácticas agrícolas para la cosecha y poscosecha del plátano, se abarcan procesos que permiten garantizar la calidad y competitividad del producto en el mercado. Estos procesos incluyen técnicas específicas para la recolección, clasificación, almacenamiento y transporte, asegurando que el fruto mantenga sus propiedades óptimas.
          p Durante la cosecha, se seleccionan los racimos en su punto ideal de maduración, evitando daños que afecten su comercialización. La poscosecha por su parte, abarca el manejo adecuado del producto, la aplicación de medidas de saneamiento, limpieza y desinfección, así como la implementación de sistemas de identificación y trazabilidad, que permiten rastrear el origen del plátano y retirar lotes con problemas de calidad.
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/sintesis01.png', alt='Imagen Decorativa')

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Las buenas prácticas agrícolas en la cosecha y poscosecha del plátano buscan asegurar calidad y competitividad mediante una recolección en el punto óptimo, manejo cuidadoso, saneamiento, limpieza, desinfección y trazabilidad del producto. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
