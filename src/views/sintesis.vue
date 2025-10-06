<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
     
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
          p Las prácticas agrícolas para el cultivo del plátano comprenden acciones orientadas a lograr una producción eficiente, inocua y sostenible. Estas incluyen el manejo adecuado del suelo, agua y semillas, el uso responsable de insumos agrícolas, agroquímicos y abonos orgánicos, así como el mantenimiento de instalaciones, equipos y herramientas en condiciones óptimas. 
          p La implementación de estas prácticas conlleva beneficios, aunque también implica retos en costos y capacitación. Además, se prioriza la seguridad y el bienestar del trabajador. Finalmente, el plan de manejo ambiental integra acciones de conservación de recursos naturales, disposición adecuada de residuos y cuidado de la biodiversidad, asegurando que la producción de plátano sea rentable, responsable y alineada con las exigencias del sector agrícola.
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/sintesis01.png', alt='imagen decorativa')

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
