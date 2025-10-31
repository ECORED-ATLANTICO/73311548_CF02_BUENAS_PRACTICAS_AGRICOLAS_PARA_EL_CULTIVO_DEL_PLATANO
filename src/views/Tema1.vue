<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manejo del cultivo
 
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          p.mb-0 El manejo del cultivo del plátano constituye la base sobre la cual se estructura toda la productividad y competitividad de esta actividad agrícola. Comprende un conjunto de prácticas técnicas planificadas que buscan garantizar el óptimo desarrollo vegetativo de la planta, la obtención de frutos de alta calidad y la sostenibilidad del sistema productivo. Su aplicación adecuada no solo influye en la eficiencia de los procesos de siembra, nutrición, riego y protección fitosanitaria, sino que también fortalece la capacidad del productor para responder a las exigencias de los mercados, optimizar costos y mantener la conservación de los recursos naturales.

    //- Col8
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-8.mx-auto.bg-color-secundario.py-2.px-3.curvas
          p.mb-0.text-center
            b Los aspectos que hacen parte del manejo del cultivo de plátano son los siguientes:

    //- Acordion
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Selección del terreno y preparación del suelo").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Evaluación de la topografía, textura y fertilidad del suelo.
            li Implementación de prácticas de conservación como terrazas o barreras vivas.
            li Labranza adecuada para mejorar la aireación y retención de agua.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen Decorativa')
      
      .row(titulo="Selección de material de siembra").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Uso de hijuelos sanos o vitroplantas libres de plagas y enfermedades.
            li Selección de variedades adaptadas a la región y con potencial de mercado.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen Decorativa')
      
      .row(titulo="Siembra").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Definición del marco de plantación (distancia entre plantas y surcos) según condiciones agroecológicas.
            li Apertura de hoyos con medidas estandarizadas y aplicación de materia orgánica.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img04.png', alt='Imagen Decorativa')
      
      .row(titulo="Fertilización y nutrición").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Aplicación balanceada de fertilizantes químicos y abonos orgánicos.
            li Planes de fertilización basados en análisis de suelos y foliares.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img05.png', alt='Imagen Decorativa')
      
      .row(titulo="Riego y drenaje").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Implementación de sistemas de riego (por surcos, aspersión o goteo).
            li Construcción de drenajes para evitar encharcamientos que afectan las raíces.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img06.png', alt='Imagen Decorativa')
      
      .row(titulo="Manejo de sombra y microclima").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Uso de cultivos asociados o barreras naturales para proteger del viento.
            li Regulación de la luminosidad para un adecuado crecimiento.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img07.png', alt='Imagen Decorativa')
      
      .row(titulo="Monitoreo y registro de labores").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Implementación de bitácoras o registros de campo.
            li Evaluación periódica del crecimiento, desarrollo y estado fitosanitario.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img08.png', alt='Imagen Decorativa')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
