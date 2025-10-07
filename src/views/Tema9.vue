<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Inocuidad en el plátano y protección sanitaria

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema6/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-blue-gradient
            .px-4
              p.mb-0 La inocuidad en el plátano y la protección sanitaria constituyen un eje esencial dentro de las buenas prácticas agrícolas (BPA), ya que garantizan que el fruto llegue al consumidor libre de contaminantes físicos, químicos y biológicos que puedan afectar su salud. Este tema integra medidas técnicas, higiénicas y fitosanitarias orientadas a reducir riesgos durante el ciclo productivo, desde la siembra hasta la poscosecha. La inocuidad no solo responde a las exigencias normativas nacionales e internacionales, sino que también fortalece la competitividad del plátano colombiano en mercados globales, donde los estándares de calidad y seguridad alimentaria son cada vez más rigurosos.




      .container(data-aos="fade-right")
        .row.align-items-center
          .col-12.col-md-12.col-lg-10.mx-auto
            PasosA.color-secundario.mb-5(tipo="n")
              .row.align-items-center.justify-content-center
                .col-md-8.mb-4.mb-md-0.order-2.order-lg-1
                  h5 Concepto de inocuidad
                  ul.bullets
                    li La inocuidad es la garantía de que el plátano no representará riesgos para la salud del consumidor cuando se produce, manipula y transporta bajo condiciones seguras.
                    li Incluye la prevención de contaminaciones cruzadas y la aplicación de medidas de higiene en todas las fases del proceso agrícola.
                .col-md-4.mb-4.mb-md-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema9/img02.svg', alt='Texto que describa la imagen').w-auto.mx-auto

              .row.align-items-center.justify-content-center
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema9/img03.svg', alt='Texto que describa la imagen').w-auto.mx-auto
                .col-md-8.text-left
                  h5 Presupuesto base cero (PBC).
                  ul.bullets
                    li 
                      b Físicos: 
                      | piedras, restos de metal o plásticos en el empaque.
                    li 
                      b Químicos: 
                      | residuos de plaguicidas, fertilizantes o desinfectantes mal aplicados.
                    li 
                      b Biológicos: 
                      | bacterias (coliformes), hongos, virus o parásitos transmitidos por agua, suelo o manipulación inadecuada.
                  
              .row.align-items-center.justify-content-center
                .col-md-8.mb-4.mb-md-0.order-2.order-lg-1
                  h5 Medidas de protección sanitaria en campo
                  ul.bullets
                    li Uso racional y controlado de agroquímicos, cumpliendo tiempos de carencia y aplicando dosis  seguras.
                    li Manejo sanitario de suelos y aguas, evitando contaminación por aguas residuales o descargas industriales.
                    li Implementación de Manejo Integrado de Plagas (MIP), priorizando métodos biológicos y culturales sobre los químicos.
                    li Prácticas de higiene del personal (lavado de manos, uso de ropa limpia y equipos de protección).
                .col-md-4.mb-4.mb-md-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema9/img04.svg', alt='Texto que describa la imagen').w-auto.mx-auto

              .row.align-items-center.justify-content-center
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema9/img05.svg', alt='Texto que describa la imagen').w-auto.mx-auto
                .col-md-8.mb-4.mb-md-0.text-left
                  h5 Medidas de protección sanitaria en poscosecha
                  ul.bullets
                    li Lavado de frutos con agua limpia y desinfectada.
                    li Clasificación y selección de plátanos libres de defectos, daños mecánicos o presencia de hongos.
                    li Uso de materiales de empaque limpios, resistentes y certificados para el contacto con alimentos.
                    li Transporte en condiciones higiénicas, evitando contaminación cruzada con otras cargas.
              
              .row.align-items-center.justify-content-center
                .col-md-8.mb-4.mb-md-0.order-2.order-lg-1
                  h5 Normatividad y certificaciones relacionadas
                  ul.bullets
                    li 
                      b NTC 5400: 
                      | establece los requisitos de Buenas Prácticas Agrícolas para frutas y hortalizas en Colombia.
                    li 
                      b Resolución ICA 4174 de 2009: 
                      | reglamenta la producción primaria y certificación de BPA en el país.
                    li 
                      b 
                        i Codex Alimentarius: 
                      | directrices internacionales sobre inocuidad alimentaria.
                    li Certificaciones como GlobalG.A.P., 
                      i Rainforest Alliance y Fair Trade 
                      | incluyen criterios de inocuidad y sanidad que fortalecen la competitividad del sector.
                .col-md-4.mb-4.mb-md-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema9/img06.svg', alt='Texto que describa la imagen').w-auto.mx-auto
              
              .row.align-items-center.justify-content-center
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema9/img07.svg', alt='Texto que describa la imagen').w-auto.mx-auto
                .col-md-8.mb-4.mb-md-0.text-left
                  h5 Beneficios de garantizar inocuidad y sanidad
                  ul.bullets
                    li   Protección de la salud del consumidor.
                    li   Acceso a mercados internacionales que exigen altos estándares de calidad.
                    li   Disminución de pérdidas económicas por rechazo de lotes contaminados.
                    li   Mejora en la imagen y confianza hacia el productor y la cadena de valor del plátano.
                    li   Contribución a la sostenibilidad y responsabilidad social del sector agrícola


</template>

<script>
export default {
  name: 'Tema9',
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
