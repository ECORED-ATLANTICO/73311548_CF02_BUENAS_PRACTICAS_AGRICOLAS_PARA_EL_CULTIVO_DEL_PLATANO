<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Calidad en el sector agrícola


    .container.mb-5
      p.mb-5 Las labores culturales son actividades realizadas de manera periódica en el campo con el objetivo de asegurar el buen desarrollo de la planta, mejorar la calidad del fruto y prevenir problemas productivos. Estas prácticas permiten mantener la sanidad del cultivo, optimizar el uso de nutrientes y garantizar frutos que cumplan con los estándares de las Buenas Prácticas Agrícolas (BPA). Entre las más representativas se encuentran:
      .row.mb-5
        .col-12.col-lg-8.mx-auto.mb-5
          //- Infografía con modales
          ImagenInfograficaB.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img01.png', alt='Texto que describa la imagen')
            
            div(x="32%" y="105%" numero="1" tooltip="Control de maleza")
              .row.justify-content-center.m-0
                .col-lg-12.position-relative
                  img.hojas-platano-icono(src='@/assets/curso/temas/img02.svg', alt='hojas')
                  .number-platano 
                    span 1
                  .row.p-3.p-lg-0.align-items-center.modal-content-card
                    .col-lg-3.p-0.d-none.d-lg-block           
                      img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen decorativa')
                    .col-lg-8
                      .px-lg-4
                        h5 Control de maleza
                        p Consiste en eliminar o reducir la vegetación no deseada que compite con el plátano por agua, nutrientes y luz. Puede realizarse de manera manual, mecánica o con métodos químicos controlados, priorizando siempre alternativas sostenibles para proteger el suelo y la biodiversidad.


            div(x="38%" y="105%" numero="2" tooltip="Plateo")
              .row.justify-content-center.m-0
                .col-lg-12.position-relative
                  img.hojas-platano-icono(src='@/assets/curso/temas/img02.svg', alt='hojas')
                  .number-platano 
                    span 2
                  .row.p-3.p-lg-0.align-items-center.modal-content-card
                    .col-lg-3.p-0.d-none.d-lg-block           
                      img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
                    .col-lg-8
                      .px-lg-4
                        h5 Plateo
                        p Es la limpieza del área circular alrededor del pseudotallo de la planta, con un diámetro aproximado de 1 a 1,5 metros. Favorece la aireación de la raíz, mejora la absorción de nutrientes y facilita la aplicación de fertilizantes y riego.
            
            div(x="44%" y="105%" numero="3" tooltip="Desmache")
              .row.justify-content-center.m-0
                .col-lg-12.position-relative
                  img.hojas-platano-icono(src='@/assets/curso/temas/img02.svg', alt='hojas')
                  .number-platano 
                    span 3
                  .row.p-3.p-lg-0.align-items-center.modal-content-card
                    .col-lg-3.p-0.d-none.d-lg-block           
                      img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
                    .col-lg-8
                      .px-lg-4
                        h5 Desmache
                        p Se refiere a la eliminación de hojas viejas, secas o deterioradas que pueden convertirse en reservorios de plagas y enfermedades. Esta práctica permite que la planta concentre energía en el desarrollo de hojas activas y del racimo.
           
            div(x="50%" y="105%" numero="4" tooltip="Desguasque")
              .row.justify-content-center.m-0
                .col-lg-12.position-relative
                  img.hojas-platano-icono(src='@/assets/curso/temas/img02.svg', alt='hojas')
                  .number-platano 
                    span 4
                  .row.p-3.p-lg-0.align-items-center.modal-content-card
                    .col-lg-3.p-0.d-none.d-lg-block           
                      img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
                    .col-lg-8
                      .px-lg-4
                        h5 Desguasque
                        p Es el corte de hojas que, aunque estén verdes, impiden el adecuado desarrollo del racimo o restan energía a la producción. También se utiliza para permitir mayor entrada de luz y ventilación en la planta.
           
            div(x="56%" y="105%" numero="5" tooltip="Deshije")
              .row.justify-content-center.m-0
                .col-lg-12.position-relative
                  img.hojas-platano-icono(src='@/assets/curso/temas/img02.svg', alt='hojas')
                  .number-platano 
                    span 5
                  .row.p-3.p-lg-0.align-items-center.modal-content-card
                    .col-lg-3.p-0.d-none.d-lg-block           
                      img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
                    .col-lg-8
                      .px-lg-4
                        h5 Deshije
                        p Implica la eliminación de brotes secundarios (hijuelos) que nacen alrededor de la planta madre. Se dejan únicamente los necesarios para la renovación del cultivo (generalmente 1 o 2), evitando la competencia y garantizando la continuidad productiva.
           

            div(x="62%" y="105%" numero="6" tooltip="Amarre")
              .row.justify-content-center.m-0
                .col-lg-12.position-relative
                  img.hojas-platano-icono(src='@/assets/curso/temas/img02.svg', alt='hojas')
                  .number-platano 
                    span 6
                  .row.p-3.p-lg-0.align-items-center.modal-content-card
                    .col-lg-3.p-0.d-none.d-lg-block           
                      img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
                    .col-lg-8
                      .px-lg-4
                        h5 Amarre
                        p Consiste en colocar soportes (generalmente cuerdas, estacas o varas) a la planta para evitar que se quiebre por el peso del racimo o por la acción del viento. Aporta estabilidad y asegura la producción.

            div(x="68%" y="105%" numero="7" tooltip="Embolse")
              .row.justify-content-center.m-0
                .col-lg-12.position-relative
                  img.hojas-platano-icono(src='@/assets/curso/temas/img02.svg', alt='hojas')
                  .number-platano 
                    span 7
                  .row.p-3.p-lg-0.align-items-center.modal-content-card
                    .col-lg-3.p-0.d-none.d-lg-block           
                      img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
                    .col-lg-8
                      .px-lg-4
                        h5 Embolse
                        p Es la colocación de bolsas plásticas microperforadas alrededor del racimo en desarrollo. Su objetivo es proteger los frutos de insectos, plagas, daños mecánicos y variaciones climáticas, además de mejorar la apariencia del plátano al momento de la cosecha.

           
            
          
</template>

<script>
export default {
  name: 'Tema2',
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
