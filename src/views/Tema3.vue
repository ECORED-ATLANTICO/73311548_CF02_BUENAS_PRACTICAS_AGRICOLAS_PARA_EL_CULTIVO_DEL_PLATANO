<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manejo fitosanitario

    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          p.mb-0 El manejo fitosanitario en el cultivo del plátano son las prácticas preventivas, de monitoreo y de control que buscan proteger las plantas contra plagas, enfermedades y desórdenes fisiológicos que afectan la productividad y la calidad del fruto. Aplicado bajo el enfoque de las buenas prácticas agrícolas (BPA), prioriza métodos integrados y sostenibles que reduzcan el uso indiscriminado de agroquímicos, protejan el ambiente y aseguren la inocuidad del alimento.
    
    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Aspectos claves en el manejo fitosanitario
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen Decorativa')

    //- Tarjeta slider
    .tarjeta.p-4.bg-color-secundario-a10
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Prevención
            ul.bullets
              li Selección de materiales de siembra sano (hijuelos libres de plagas o vitroplatas certificadas).
              li Manejo adecuado del suelo y drenajes para evitar enfermedades radiculares.
              li Implementación de prácticas culturales como deshoje, plateo y deshije que reduce focos de infestación. 

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Monitoreo constante
            ul.bullets
              li Inspección periódica y racimos para detectar síntomas tempranos de plagas o enfermedades.
              li Uso de registros de campo y mapas de incidencia para identificar ares críticas.

        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Principales plagas y enfermedades del platano
            ul.bullets
              li 
                b Sigatka negra 
                  i (Mycosphaerella fijiensis): 
                | enfermedad foliar que reduce la fotosíntesis y afecta el llenaod del racimo.
              li 
                b Moco de plátano: 
                  i (Ralstonia solanacearum): 
                | bacteria que marchita y mata plantas enteras.
              li 
                b Picudo negro 
                  i (Cosmopolites sordidus): 
                | insecto barrenador del pseudotallao de debilita la planta.
              li 
                b Nematodos 
                  i (Radopholus simils, Helicotylenchus spp): 
                | dañan las raíces y reducen la absorción de nutrientes y agua.
        
        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Control integrado de plagas
            ul.bullets
              li 
                b Cultura: 
                | eliminación de plantas enfermas, rotación de cultivos, control de malezas y buen drenaje.
              li 
                b Biológicos: 
                | uso de microorganismos benéficos o depredadores naturales.

              li 
                b Químicos: 
                | aplicación racional de agroquímicos autorizados siguiendo dosis, periodos de carencia y normas de seguridad.


        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen ilustrativa')
          .col-sm-10.col-lg-7.col-xl-6
            h5 Bioseguridad en la finca
            ul.bullets
              li Desinfección de herramientas y calzado para evitar la dispersión de patógenos.
              li Restricción del ingreso de visitantes o vehículos sin control sanitario.
              li Manejo adecuado de desechos vegetales.


        

</template>

<script>
export default {
  name: 'Tema3',
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
