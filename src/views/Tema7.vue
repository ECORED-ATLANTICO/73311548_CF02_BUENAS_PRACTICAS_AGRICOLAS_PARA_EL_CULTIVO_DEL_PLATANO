<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Identificación, trazabilidad y procedimiento de retiro

    .bloque-texto-g.bg-color-secundario-a20.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Garantizar la correcta identificación y trazabilidad de los productos permite dar cumplimiento a los estándares internacionales de calidad, facilitar su seguimiento en la cadena de suministro y responder de manera eficiente ante posibles incidentes de seguridad alimentaria.


    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Identificación
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen Decorativa')

    p La identificación de los productos es un requisito indispensable en los mercados internacionales, ya que permite conocer información clave sobre su origen y procesamiento. A través de las etiquetas, se especifican detalles como la fecha de elaboración y empaque, el número de lote y otros datos relevantes.
    p.mb-5 Las etiquetas de frutas y hortalizas deben cumplir con estándares de calidad y contener la siguiente información:


     //- Col8 (Slider) y Col4
    .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema7/img02.png', alt='Imagen Decorativa')

          .col-12.col-lg-8.mb-4.mb-lg-0
            .custom-slider
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.bg-cards-leaves.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema7/img09.svg' alt='Imagen Decorativa').w-auto.mx-auto
                  ul.bullets
                    li País de origen.
                    li Naturaleza del producto: nombre de la especie empacada y, en algunos mercados, la variedad específica.


                .tarjeta.bg-cards-leaves.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema7/img10.svg' alt='Imagen Decorativa').w-auto.mx-auto
                  ul.bullets
                    li Especificaciones comerciales: tamaño, clasificación y uso de conservantes.
                    li Identificación del productor: nombre, dirección y código de la marca registrada.
                
                .tarjeta.bg-cards-leaves.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema7/img11.svg' alt='Imagen Decorativa').w-auto.mx-auto
                  ul.bullets
                    li Visibilidad: toda la información debe estar impresa en un mismo lado del empaque, asegurando su fácil lectura.

         
    //- Figura
    .mb-5(data-aos="zoom-in-down")
        .titulo-sexto.mb-4
          h5 Figura 1. 
            span Fijación de factores y proyecciones 
        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema7/img03.png', alt='Se muestra cual es la información que se debe relacionar para la generación de etiquetas en frutas y verduras').mx-auto.d-none.d-md-block
            img(src='@/assets/curso/temas/tema7/img03m.png', alt='Se muestra cual es la información que se debe relacionar para la generación de etiquetas en frutas y verduras').mx-auto.d-block.d-md-none

          figcaption 
            b Fuente: 
            | Mejía 2013; SENA, 2004; NTC 1190

    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Trazabilidad o rastreabilidad
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen Decorativa')


    //- Cajon
    .cajon.bg-color-secundario-a10.p-4.mb-5
      p.mb-0 La trazabilidad es un aspecto muy importante dentro de la unidad productiva, ya que permite realizar un seguimiento detallado del producto a lo largo de toda la cadena de producción. Implementar un sistema documental adecuado facilita el registro de información relevante sobre cada lote, permitiendo analizar y solucionar de manera efectiva cualquier problema de seguridad alimentaria.



    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-1
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Proceso de trazabilidad
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen Decorativa')


    //- TabsC
    TabsC.color-acento-contenido.mb-5
      .p-4.py-5.bg-color-primario-p5(titulo="Identificación en campo")
        .row.align-items-center.justify-content-center
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h5.mb-4 Identificación en campo
            ul.bullets
              li Cada lote o parcela se identifica con códigos únicos (número de lote, fecha de siembra, variedad de plátano). 
              li Se registran datos de labores culturales, aplicación de agroquímicos, fertilización y riego.
          .col-12.col-md-8.col-lg-4
            figure
              img.my-3(src='@/assets/curso/temas/tema7/img04.png', alt='Imagen Decorativa')

      .p-4.py-5.bg-color-primario-p5(titulo="Registro en cosecha y poscosecha")
        .row.align-items-center.justify-content-center
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h5.mb-4 Registro en cosecha y poscosecha
            ul.bullets
              li Los racimos cosechados se etiquetan o marcan con información del lote de origen. 
              li En la planta de empaque se registran fecha de cosecha, clasificación, y resultados de control de calidad.
          .col-12.col-md-8.col-lg-4
            figure
              img.my-3(src='@/assets/curso/temas/tema7/img05.png', alt='Imagen Decorativa')

      .p-4.py-5.bg-color-primario-p5(titulo="Empaque y transporte")
        .row.align-items-center.justify-content-center
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h5.mb-4 Empaque y transporte
            ul.bullets
              li Cada caja o guacal lleva un código de identificación que permite saber de qué lote proviene. 
              li Se documenta la ruta de distribución y destino del producto.
          .col-12.col-md-8.col-lg-4
            figure
              img.my-3(src='@/assets/curso/temas/tema7/img06.png', alt='Imagen Decorativa')

      .p-4.py-5.bg-color-primario-p5(titulo="Seguimiento en comercialización")
        .row.align-items-center.justify-content-center
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h5.mb-4 Seguimiento en comercialización
            ul.bullets
              li Los clientes o distribuidores reciben el plátano con información trazable. 
              li Ante cualquier reclamo, es posible rastrear el lote hasta su origen en finca.
          .col-12.col-md-8.col-lg-4
            figure
              img.my-3(src='@/assets/curso/temas/tema7/img07.png', alt='Imagen Decorativa')

    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-1
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Procedimiento de retiro
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen Decorativa')

    p.mb-5 El procedimiento de retiro constituye una herramienta preventiva y correctiva que facilita la identificación y retiro inmediato de lotes que puedan representar riesgos sanitarios o de calidad, protegiendo tanto la salud del consumidor como la reputación del productor y la competitividad del sector.
    
    //- Imagen Col-4 y Slider Col-8
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema7/img08.png', alt='Imagen ilustrativa' data-aos='fade-left')
      .col-lg-8.p-5.bg-slider.tarjeta(data-aos='fade-right')
        .tarjeta.tarjeta--blanca.p-4.py-5
          SlyderA(tipo="b")
            .tarjeta
              h5.mb-4 Detección del problema
              ul.bullets
                li Pueden ser identificados en finca, planta de empaque, transporte, centro de distribución.
                li Ejemplo: presencia de residuos de agroquímicos por encima del limite permitido, plátano en mal estado o contaminación  microbiológica.
            .tarjeta
              h5.mb-4 Activación del plan de retiro
              ul.bullets
                li El responsable de calidad o trazabilidad activa el protocolo.
                li Se identifican los lotes afectados a través de los registros de trazabilidad.
            .tarjeta
              h5.mb-4 Retiro del producto
              ul.bullets
                li Detencion de la distrbucion del lote. 
                li Recolección o  bloqueo del producto en bodegas, centros de acopio o puntos de venta.
 
            .tarjeta
              h5.mb-4 Comunicación
              ul.bullets
                li Se informa inmediatamente a distribuidores, clientes, y de ser necesario a las autoridades sanitarias (INVIMA).
            .tarjeta
              h5.mb-4 Destino del producto retirado
              ul.bullets
                li El plátano retirado puede ser destruido, desnaturalizado o destinado a usos no alimentarios (ej.compostaje, alimentación animal) según el tipo de riesgo registrado.
            .tarjeta
              h5.mb-4 Control y retroalimentación
              ul.bullets
                li Documentación del proceso de retiro con fecha, responsable, lote afectado y acciones correctivas.
                li El caso sirve para mejorar el sistema de control y evitar que se repita.


</template>

<script>
export default {
  name: 'Tema7',
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
