<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Plan de limpieza y desinfección

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema6/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-blue-gradient
            .px-4
              p.mb-0 El plan de limpieza y desinfección constituye un pilar esencial de las buenas prácticas agrícolas (BPA), ya que establece procedimientos estandarizados para garantizar que las instalaciones, equipos, utensilios, áreas de manejo y transporte del plátano se mantengan en condiciones higiénicas óptimas. Su aplicación previene la proliferación de microorganismos, la contaminación cruzada y la presencia de residuos que puedan comprometer la inocuidad y calidad del fruto. Además, contribuye a la seguridad de los trabajadores y a la sostenibilidad del sistema productivo, al integrar acciones programadas de higiene con el uso responsable de insumos químicos autorizados.


    //- Tabla
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-secundario.mb-4.z-2
          h5 Tabla 2.
          span Implementación del plan de limpieza y desinfección.

        .tabla-a.color-secundario.mb-4.mb-lg-5
          table
            caption 
              b Fuente: 
              | SENA, 2025.
            thead
              tr(style="background-color: #ECEEF1;")
                th Componente
                th Desventajas
            tbody
              tr
                td Áreas de aplicación
                td 
                  ul.bullets.text-left
                    li 
                      b Áreas de cultivo: 
                      | eliminación de restos de plantas, hojas y desechos orgánicos.
                    li 
                      b Centros de acopio y bodegas: 
                      | limpieza diaria de pisos, paredes, techos y sistemas de ventilación.
                    li 
                      b Plantas de empaque: 
                      | lavado y desinfección de mesas, guacales, tanques y utensilios de clasificación.
                    li 
                      b Vehículos de transporte: 
                      | desinfección periódica para evitar contaminación cruzada entre lotes.

              tr(style="background-color: #E8F5F5;")
                td Frecuencia y Programación
                td
                   ul.bullets.text-left
                    li 
                      b Diaria: 
                      |  limpieza de utensilios, guacales, cajas y mesas de trabajo.
                    li 
                      b Semanal: 
                      | lavado de bodegas, áreas de empaque y herramientas de corte.
                    li 
                      b Mensual o trimestral: 
                      | desinfección profunda de instalaciones, control de plagas y mantenimiento de equipos.
                 
              tr
                td Métodos y Procedimientos
                td
                  ul.bullets.text-left
                    li 
                      b Limpieza mecánica: 
                      | retiro manual de residuos sólidos, hojas secas, tierra y materiales plásticos.
                    li 
                      b Limpieza con agua: 
                      | uso de agua potable o tratada para el lavado de superficies.
                    li 
                      b Desinfección química: 
                      | aplicación de soluciones cloradas, amonios cuaternarios u otros desinfectantes probados en concentraciones seguras.
                    li 
                      b Desinfección física: 
                      | uso de vapor o calor, cuando sea aplicable.


              tr(style="background-color: #E8F5F5;")
                td Equipos y utensilios
                td
                  ul.bullets.text-left
                    li Herramientas de corte (machetes, cuchillos) desinfectadas antes y después de cada uso.
                    li Guacales, cajas y empaques lavados con agua y detergente biodegradable.
                    li Equipos de riego y tanques revisados y desinfectados periódicamente.
                 
              tr
                td Registros y trazabilidad
                td
                  ul.bullets.text-left
                    li Cada actividad de limpieza y desinfección debe registrarse con fecha, responsable, área intervenida y producto utilizado.
                    li   Los registros permiten verificar la implementación del plan y facilitan auditorías internas o externas de certificación.
              
              tr(style="background-color: #E8F5F5;")
                td Capacitación del personal
                td 
                  ul.bullets.text-left
                    li Entrenamiento en técnicas de limpieza, uso adecuado de productos químicos y medidas de bioseguridad.
                    li Concienciación sobre la importancia de la higiene personal (lavado de manos, uso de ropa limpia, equipos de protección)
              




</template>

<script>
export default {
  name: 'Tema6',
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
