<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de Saneamiento

    .bloque-texto-g.bg-color-secundario-a20.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Son las acciones preventivas y correctivas orientadas a garantizar la inocuidad del plátano, la protección de los trabajadores y la sostenibilidad ambiental. Forma parte esencial de las Buenas Prácticas Agrícolas (BPA), ya que establece procedimientos claros para el manejo higiénico de las áreas de producción, el control de plagas y enfermedades, y el mantenimiento de condiciones seguras en la finca. Su implementación asegura que el fruto cumpla con los requisitos sanitarios exigidos por los mercados.



    //- Col9 (Slider) y Col3
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-3.mb-4.mb-lg-0.d-xl-block.d-none(data-aos="fade-left")
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img02.png', alt='Imagen Decorativa')
      .col-12.col-xl-9.mb-4.mb-lg-0
        TabsA.color-acento-contenido
          .tarjeta.p-5(titulo="Limpieza y desinfección de áreas")
            h4 Limpieza y desinfección de áreas
            p Mantener las zonas de cultivo, centros de acopio, bodegas y áreas de empaque libres de desechos, residuos orgánicos o plásticos. Se deben usar desinfectantes aprobados para evitar proliferación de microorganismos.

          .tarjeta.p-5(titulo="Manejo de residuos sólidos y líquidos")
            h4 Manejo de residuos sólidos y líquidos
            p Clasificación y disposición adecuada de empaques vacíos de agroquímicos bajo la normativa ambiental; también la disposición de residuos orgánicos en compostaje o lombricultora.
            p Lo que corresponde a líquidos, evitar vertimientos que contaminen fuentes de agua.
          
          .tarjeta.p-5(titulo="Control de plagas y vectores")
            h4 Control de plagas y vectores
            p Implementar medidas de bioseguridad para evitar el ingreso de plagas a las áreas de cultivo y empaque. Usar trampas y controles biológicos antes que productos químicos. Finalmente se debe hacer registro y monitoreo permanente.

          .tarjeta.p-5(titulo="Agua de uso agrícola y sanitario")
            h4 Agua de uso agrícola y sanitario
            p Garantizar que el agua empleada para riego, lavado y desinfección cumpla parámetros de calidad; además de protección de fuentes hídricas con franjas de amortiguación.
          
          .tarjeta.p-5(titulo="Mantenimiento de instalaciones y equipos")
            h4 Mantenimiento de instalaciones y equipos
            p Revisión periódica de bodegas, herramientas y áreas de empaque.
            p Se deben hacer registros de limpieza, calibración y desinfección de equipos.

          .tarjeta.p-5(titulo="Capacitación del personal")
            h4 Capacitación del personal
            p Formación en higiene personal, uso adecuado de equipos de protección, disposición de residuos y protocolos de emergencia.
            p Promoción de la responsabilidad compartida en la aplicación del plan.

   




</template>

<script>
export default {
  name: 'Tema5',
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
