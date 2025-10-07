export default {
  global: {
    Name:
      'Buenas prácticas agrícolas y competitividad productiva del cultivo del plátano. ',
    Description:
      'A nivel internacional el comercio del plátano es muy amplio puesto que existen muchos países que compran este producto en grandes cantidades, por lo tanto, para todos los productores de plátano del país es una gran oportunidad de negocio acceder a los mercados internacionales en donde se obtienen buenos márgenes de utilidad que le permitirán la expansión, crecimiento y desarrollo a nivel empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo del cultivo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calidad en el sector agrícola',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo fitosanitario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ventajas y desventajas de la implementación de las BPA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Poscosecha',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Empacado y transporte del plátano',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de Saneamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Plan de limpieza y desinfección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Agroquímicos y abonos orgánicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Bienestar laboral y seguridad de los trabajadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Inocuidad en el plátano y protección sanitaria',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Prácticas culturales en el cultivo del plátano.',
      referencia: 'Ecosistema recursos SENA [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GAYtPgfl5vs',
    },
    {
      tema: 'Buenas Prácticas Poscosecha de Plátano (Musa paradisiaca L.)',
      referencia: 'Universidad de Ibagué; Gobernación del Tolima.',
      tipo: 'Sitio web',
      link:
        'https://www.researchgate.net/publication/340996637_Buenas_Practicas_Poscosecha_de_Platano_Musa_paradisiaca_L ',
    },
  ],
  glosario: [
    {
      termino: 'Agentes desinfectantes',
      significado:
        'son los compuestos químicos que se utilizan para eliminar patógenos; por ejemplo, el cloro.',
    },
    {
      termino: 'Agentes limpiadores',
      significado:
        'son los compuestos como jabones y detergentes que se utilizan para arrasar la suciedad.',
    },
    {
      termino: 'Contaminación',
      significado:
        'la contaminación se puede dar por agentes físicos, químicos y biológicos que son introducidos a un medio de manera natural o en algunos casos son ocasionados por el hombre.',
    },
    {
      termino: 'Contaminante',
      significado:
        'Definicpuede ser cualquier sustancia o agente que se añade a un producto y le causa pérdidas de inocuidad.ón',
    },
    {
      termino: 'Desinfección',
      significado:
        'eliminación de todos los patógenos por medio de agentes químicos y métodos físicos',
    },
    {
      termino: 'Higiene de los alimentos',
      significado:
        'mecanismos que garantizan la inocuidad en toda la cadena productiva.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'es la garantía de que un alimento se encuentra libre de agentes contaminantes que pueden causar daño a la salud de los consumidores.',
    },
    {
      termino: 'Instalaciones',
      significado:
        'son las locaciones o infraestructuras en la cuales se manipulan materias primas o productos terminados.',
    },
    {
      termino: 'Limpieza',
      significado:
        'eliminación de suciedad, tierra, grasas, desechos de alimentos, entre otros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alarcón Restrepo, J. J., & Jiménez Neira, Y. (2012).<em>Manejo fitosanitario del cultivo del plátano (Musa spp.): Medidas para la temporada invernal.</em> Instituto Colombiano Agropecuario (ICA)   ',
      link:
        'https://www.fao.org/fileadmin/templates/banana/documents/Docs_Resources_2015/TR4/cartilla-platano-ICA-final-BAJA.pdf',
    },
    {
      referencia:
        'Buenas Prácticas Agrícolas para frutas, hierbas aromáticas culinarias y hortalizas frescas (NTC 5400). (2005, 27 de julio).<em> Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC),</em> 2005, 02 de agosto.',
      link: '',
    },
    {
      referencia:
        'Decreto 475. (1998, 10 de marzo). <em>Diario Oficial,</em> 43259, 1998, 16 de marzo.',
      link: '',
    },
    {
      referencia:
        'FAO. (2008). <em>Buenas Prácticas Agrícolas en la Producción de Tomate bajo condiciones protegidas. buenas prácticas agrícolas BPA en la producción de tomate bajo condiciones protegidas (fAO.oRG)',
      link: '',
    },
    {
      referencia:
        'Gobernación del Tolima, Universidad de Ibagué, Universidad del Tolima, & Sena Regional Tolima. (2017).<em> Buenas prácticas poscosecha de plátano (Musa paradisiaca L.).</em> ISBN digital: 978-958-754-248-6.',
      link:
        ' https://es.studenta.com/content/135651667/protocolo-poscosecha-platano',
    },
    {
      referencia:
        'Moreno, J., Candanoza, J. y Olarte, F. (2009). <em>Buenas Prácticas Agrícolas en el de cultivo de plátano exportación en la región de Urabá.</em> Medellín, Colombia: Comunicaciones Augura.',
      link: '',
    },
    {
      referencia:
        'Bautista Montealegre, L. G., Cardona, W. A., & Ospina Parra, C. E. (2020). <em>Manejo integrado de plagas (MIP) en el cultivo de plátano</em> (Musa AAB). AGROSAVIA.  ',
      link:
        'https://repository.agrosavia.co/handle/20.500.12324/36559 Agrosavia Repository',
    },
    {
      referencia:
        'Rojas Gómez, L. C. (2021). <em>Manual de buenas prácticas agrícolas en cosecha y empaque</em> [Proyecto de grado, Universidad del Magdalena]. Repositorio Universidad del Magdalena.        ',
      link:
        'http://repositorio.unimagdalena.edu.co/handle/123456789/5605 Repositorio Unimagdalena',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez ',
          cargo: 'Guionista línea de producción.  ',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
