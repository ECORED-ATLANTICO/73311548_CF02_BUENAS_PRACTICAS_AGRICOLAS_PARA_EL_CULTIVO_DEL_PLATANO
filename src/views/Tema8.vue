<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Bienestar laboral y seguridad de los trabajadores

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema6/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-blue-gradient
            .px-4
              p.mb-0 El bienestar laboral y la seguridad de los trabajadores en el cultivo del plátano son pilares fundamentales dentro de las buenas prácticas agrícolas (BPA), ya que garantizan no solo la protección de la salud física y mental de quienes participan en la producción, sino también la sostenibilidad y competitividad del sistema agrícola. En este sector, donde las labores requieren esfuerzo físico y la manipulación de herramientas, agroquímicos y cargas pesadas, es esencial establecer condiciones de trabajo dignas, seguras y en cumplimiento de la normatividad nacional e internacional




    //- Acordion
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Condiciones laborales dignas").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Cumplimiento de la legislación laboral colombiana (Código Sustantivo del Trabajo y normas de salud ocupacional).
            li Contratos formales que incluyan derechos básicos como salario justo, afiliación a seguridad social y prestaciones.
            li Jornadas laborales reguladas, evitando sobreexplotación y fatiga excesiva.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema8/img02.png', alt='Texto que describa la imagen')
      
      .row(titulo="Seguridad en el trabajo").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Capacitación constante en el uso seguro de equipos, utensilios, herramientas y maquinaria agrícola.
            li Programas de inducción y actualización en salud y seguridad ocupacional.
            li Protocolos de bioseguridad para la manipulación de agroquímicos (uso de guantes, gafas, mascarillas y ropa adecuada)
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema8/img03.png', alt='Texto que describa la imagen')
      
      .row(titulo="Equipos de protección personal (EPP)").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Dotación obligatoria de EPP según la tarea: botas, overoles impermeables, guantes resistentes, protectores auditivos y faciales.
            li Supervisión del uso correcto de los EPP para prevenir accidentes y enfermedades laborales.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema8/img04.png', alt='Texto que describa la imagen')
      
      .row(titulo="Prevención de riesgos laborales").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Identificación de riesgos físicos (golpes, caídas, exposición al sol), químicos (contacto con pesticidas), biológicos (hongos, bacterias) y ergonómicos (cargas pesadas).
            li Implementación de medidas de control: señalización, rutas de evacuación, botiquines y brigadas de emergencia.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema8/img05.png', alt='Texto que describa la imagen')
      
      .row(titulo="Promoción del bienestar integral").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Programas de salud preventiva (vacunación, exámenes médicos periódicos, campañas de autocuidado).
            li Espacios adecuados de descanso, alimentación e hidratación.
            li Iniciativas de bienestar social: capacitación, recreación, formación técnica y fortalecimiento del sentido de pertenencia.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema8/img06.png', alt='Texto que describa la imagen')
      
      .row(titulo="Participación y cultura organizacional").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Creación de comités de seguridad y salud en el trabajo (COPASST).
            li Promoción de canales de comunicación entre empleadores y trabajadores para reportar incidentes y sugerencias.
            li Fomento de una cultura de autocuidado y corresponsabilidad en la prevención de riesgos.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema8/img07.png', alt='Texto que describa la imagen')
      
      .row(titulo="Normas y certificaciones relacionadas").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          ul.bullets
            li Cumplimiento de la Resolución 0312 de 2019 (estándares mínimos del Sistema de Gestión en Seguridad y Salud en el Trabajo - SG-SST).
            li Aplicación de las directrices de la OIT sobre trabajo decente.
            li Relación con certificaciones internacionales de sostenibilidad y BPA como GlobalG.A.P, que incluyen requisitos de bienestar laboral.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema8/img08.png', alt='Texto que describa la imagen')



</template>

<script>
export default {
  name: 'Tema8',
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
