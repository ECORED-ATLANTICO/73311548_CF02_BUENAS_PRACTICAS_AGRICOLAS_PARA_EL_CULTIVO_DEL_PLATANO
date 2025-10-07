<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ventajas y desventajas de la implementación de las BPA

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen Decorativa')
          div.texto-tarjeta.bg-blue-gradient
            .px-4
              p.mb-0 La cosecha del plátano es una de las etapas más críticas del ciclo productivo, pues de ella depende la calidad final del fruto que llegará al consumidor y, por tanto, la competitividad del cultivo en el mercado. En esta fase se definen parámetros relacionados con el estado de madurez fisiológica, el manejo del racimo y las condiciones en que es recolectado. Una cosecha adecuada garantiza la prolongación de la vida útil del plátano, minimiza pérdidas poscosecha y asegura que el producto cumpla con los estándares de calidad.

    //- Tabla
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-secundario.mb-4.z-2
          h5 Tabla 1.
          span Colores de cosecha de plátano

        .tabla-a.color-secundario.z-2.mb-4.mb-lg-5
          table
            caption 
              b Fuente: 
              | Mejía 2013; SENA, 2004; NTC 1190
            thead
              tr(style="background-color: #ECEEF1;")
                th Grado de Madurez (GM)
                th GM1
                th GM2
                th GM3
                th GM4
                th GM5
            tbody
              tr
                td 
                  b Detalle
                td Fruto bien desarrollado de color verde oscuro. 
                td El color verde pierde intensidad
                td Aparecen unas leves tonalidades amarillas
                td El color amarillo se acentpua y el pedúnculo sigue verde
                td El fruto se ve totalmente amarillo
              tr(style="background-color: #E8F5F5;")
                td 
                  b Imagen
                td 
                  img(src='@/assets/curso/temas/tema4/img02.png', alt='Imagen Decorativa').w-auto.mx-auto
                td 
                  img(src='@/assets/curso/temas/tema4/img03.png', alt='Imagen Decorativa').w-auto.mx-auto
                td 
                  img(src='@/assets/curso/temas/tema4/img04.png', alt='Imagen Decorativa').w-auto.mx-auto
                td 
                  img(src='@/assets/curso/temas/tema4/img05.png', alt='Imagen Decorativa').w-auto.mx-auto
                td 
                  img(src='@/assets/curso/temas/tema4/img06.png', alt='Imagen Decorativa').w-auto.mx-auto
              tr
                td 
                  b Color de referencia
                td 
                  img(src='@/assets/curso/temas/tema4/img07.png', alt='Imagen Decorativa').w-auto.mx-auto
                td 
                  img(src='@/assets/curso/temas/tema4/img08.png', alt='Imagen Decorativa').w-auto.mx-auto
                td 
                  img(src='@/assets/curso/temas/tema4/img09.png', alt='Imagen Decorativa').w-auto.mx-auto
                td 
                  img(src='@/assets/curso/temas/tema4/img10.png', alt='Imagen Decorativa').w-auto.mx-auto
                td 
                  img(src='@/assets/curso/temas/tema4/img11.png', alt='Imagen Decorativa').w-auto.mx-auto

    //- Imagen Col-4 y Slider Col-8
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img12.png', alt='Imagen ilustrativa' data-aos='fade-left')
      .col-lg-8.p-5.bg-slider.tarjeta(data-aos='fade-right')
        .tarjeta.tarjeta--blanca.p-4.py-5
          SlyderA(tipo="b")
            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img13.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Momento de corte (madurez fisiológica)
                p.mb-0 El racimo debe cortarse cuando los frutos completan su desarrollo, pero aún están verdes. Generalmente, esto ocurre entre 12 y 14 semanas después de la floración, dependiendo de la variedad y condiciones climáticas.
            
            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img14.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Criterios de madurez del fruto
                p.mb-0 
                  b a. 
                  | Llenado completo y forma abultada de los dedos.
                p.mb-0 
                  b b. 
                  | Color verde brillante uniforme.
                p.mb-0 
                  b c. 
                  | Ángulos menos marcados en la superficie del fruto (signo de llenado).
            
            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img15.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Técnica de corte
                p.mb-0 Se utiliza machete o cuchillo bien afilado. Además, el racimo debe sostenerse con cuidado para evitar golpes o caídas que deterioren los frutos.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img16.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Condiciones de higiene
                p.mb-0 Uso de herramientas limpias y desinfectadas.  Estas deben evitar contacto con el suelo para prevenir contaminación.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img17.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Manejo del racimo
                p.mb-0 Colocar los racimos en espumas, colchonetas o guacales para evitar daños mecánicos. Por otro lado, no apilar en exceso.
                     
            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img18.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Destino de la cosecha
                p.mb-0 Para mercado local, se permite un nivel de madurez más avanzado. Para exportación, el corte debe hacerse en estado verde fisiológico para soportar transporte prolongado.
               
    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Defectos más comunes del plátano 
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen Decorativa')


    p.mb-5 Es importante identificar y minimizar los defectos que pueden afectar la presentación y aceptación del producto en el mercado de exportación. A continuación, se enlistan los defectos más frecuentes que pueden presentarse en los plátanos:

    //- Col8 (Slider) y Col4
    .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-8.mb-4.mb-lg-0
            .custom-slider
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.bg-cards-leaves.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema4/img19.svg' alt='Imagen Decorativa').w-auto.mx-auto
                  h5.text-center Operacionales.
                  ul.bullets
                    li Daño por insectos.
                    li Cicatriz roja.
                    li Mancha roja.
                    li 
                      i Speckling 
                      | (manchas oscuras dispersas)

                .tarjeta.bg-cards-leaves.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema4/img20.svg' alt='Imagen Decorativa').w-auto.mx-auto
                  h5.text-center No operacionales.
                  ul.bullets
                    li Cicatriz de manejo.
                    li Látex seco.
                    li Trips.
                    li Látex gelatinoso.
                
                .tarjeta.bg-cards-leaves.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema4/img21.svg' alt='Imagen Decorativa').w-auto.mx-auto
                  h5.text-center Extraordinarios.
                  ul.bullets
                    li Cuello roto.
                    li Desgarre.
                    li Punta de cigarro.
                    li Mutilado.

                .tarjeta.bg-cards-leaves.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema4/img22.svg' alt='Imagen Decorativa').w-auto.mx-auto
                  h5.text-center Recurrentes.
                  ul.bullets
                    li  Vitola baja.
                    li  Vitola alta.
                    li  Dedo corto.
                    li  Suciedad.
                    li  Fruta madura.
          .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img38.png', alt='Imagen Decorativa')

    separador 

    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_4_1 4.1 Poscosecha

    //- Col8 (Slider) y Col4
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img23.png', alt='Imagen Decorativa')
      .col-12.col-lg-8.mb-4.mb-lg-0
        p Prácticas posteriores a la recolección del racimo, que buscan conservar la calidad del fruto hasta su llegada al consumidor final. Incluye procesos de manipulación, clasificación, lavado, desinfección y empaque, los cuales reducen pérdidas, mejoran la presentación y garantizan inocuidad.
        p Cuando los frutos alcanzan su punto de madurez, inicia la etapa de cosecha, en la cual los racimos son recolectados con cuidado para evitar daños mecánicos. Posteriormente, el proceso de poscosecha se encarga de preservar la calidad del producto mediante actividades como limpieza, clasificación y embalaje, asegurando su adecuada presentación y conservación para la distribución.
        p Estas dos etapas finales son determinantes para mantener la integridad del fruto y optimizar su valor en el mercado, cerrando así el ciclo productivo del plátano con estándares de calidad que favorecen su competitividad comercial.
          
    .row.align-items-center.justify-content-center.bg-color-secundario-a60.tarjeta.p-4.mb-5
      .col-sm-12.col-lg-2.col-xl-1
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img24.svg', alt='Imagen ilustrativa').mx-auto.w-auto
      .col-sm-12.col-lg-8.col-xl-9.mb-3.mb-lg-0
        h3.mb-2.color-primario Diagrama de operaciones para poscosecha de plátano. 
        p.mb-0.text-white En el recurso relacionado a continuación se muestra a través de un diagrama, el proceso de operaciones para la poscosecha de plátano:
      .col-sm-12.col-lg-2.col-xl-2
        a.boton.color-acento-botones(:href="obtenerLink('/downloads/DI_DIAGRAMA_OPERACIONES__CF02_7331548.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    separador

    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_4_2 4.2 Empacado y transporte del plátano

    //- Col8 (Slider) y Col4
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img25.png', alt='Imagen Decorativa')
      .col-12.col-lg-8.mb-4.mb-lg-0
        p Son fases determinantes para conservar la calidad del fruto desde la finca hasta el consumidor final. En el empacado, los plátanos previamente seleccionados y clasificados son organizados en cajas de cartón corrugado, guacales plásticos o de madera, con separadores y protectores que evitan golpes y fricción entre los frutos. Este proceso se realiza bajo condiciones higiénicas, garantizando trazabilidad mediante etiquetas que incluyen información del productor, lote y fecha de corte, lo cual es clave para mercados internacionales. El transporte, por su parte, debe efectuarse en vehículos limpios y desinfectados, con una adecuada ventilación y, en el caso de exportaciones, bajo condiciones controladas de temperatura entre 14 y 16 °C. Durante el traslado se debe evitar la sobrecarga y la manipulación brusca que pueda generar magulladuras, rajaduras o deterioro en la piel del fruto, lo cual afectaría su vida útil y calidad comercial. Un adecuado empacado y transporte no solo reduce pérdidas poscosecha, sino que también fortalece la inocuidad, la competitividad y la aceptación del plátano en los mercados nacionales e internacionales.
      

    //- subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Esquema de empacado y transporte del plátano
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen Decorativa')

    p.mb-4 Es importante identificar y minimizar los defectos que pueden afectar la presentación y aceptación del producto en el mercado de exportación. A continuación, se enlistan los defectos más frecuentes que pueden presentarse en los plátanos:


    //- Tabs
    TabsB.color-acento-contenido(data-aos="fade-left")
      .py-4.py-md-5(titulo="Selección y clasificación" :icono="require('@/assets/curso/temas/tema4/img26.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.mb-4.mb-md-0
            h5 Selección y clasificación
            p Frutos sanos, de tamaño y forma uniforme, donde se eliminan los plátanos con defectos o daños.
          .col-12.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/img32.png', alt='Imagen Decorativa')

      .py-4.py-md-5(titulo="Preparación para el empaque" :icono="require('@/assets/curso/temas/tema4/img27.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.mb-4.mb-md-0
            h5 Preparación para el empaque
            p Se hace un lavado y desinfección de los frutos. Posterior a esto se escurren y se secan para evitar humedad excesiva.
          .col-12.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/img33.png', alt='Imagen Decorativa')

      .py-4.py-md-5(titulo="Empacado" :icono="require('@/assets/curso/temas/tema4/img28.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.mb-4.mb-md-0
            h5 Empacado
            p Para esto se usan cajas de cartón corrugado, guacales plásticos o de madera. Además de Separadores o protectores internos (papel, plásticos perforados, espuma). Finalmente, el etiquetado con información de trazabilidad (lote, productor, fecha).
          .col-12.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/img34.png', alt='Imagen Decorativa')

      .py-4.py-md-5(titulo="Almacenamiento Temporal" :icono="require('@/assets/curso/temas/tema4/img29.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.mb-4.mb-md-0
            h5 Almacenamiento Temporal
            p El área debe estar limpia, fresca y ventilada; así mismo evitar exposición directa al sol o a la lluvia.
          .col-12.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/img35.png', alt='Imagen Decorativa')

      .py-4.py-md-5(titulo="Transporte" :icono="require('@/assets/curso/temas/tema4/img30.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.mb-4.mb-md-0
            h5 Transporte
            p Vehículos limpios y desinfectados. La carga debe estar ordenada para evitar golpes y presión excesiva.
            p En exportación: control de temperatura (14–16 °C) y buena ventilación.

          .col-12.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/img36.png', alt='Imagen Decorativa')

      .py-4.py-md-5(titulo="Llegada al destino" :icono="require('@/assets/curso/temas/tema4/img31.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.mb-4.mb-md-0
            h5 Llegada al destino
            p El descargue debe ser cuidadoso. Luego se hace la verificación de la calidad del lote para poder finalizar con la distribución al mercado local o internacional.
          .col-12.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/img37.png', alt='Imagen Decorativa')



    
     
</template>

<script>
export default {
  name: 'Tema4',
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
