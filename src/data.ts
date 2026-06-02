import { Service, BeforeAfterProject, GalleryItem, Testimonial } from './types';

export const services: Service[] = [
  {
    id: 'pisos-madera',
    name: 'Instalación de Pisos de Madera',
    category: 'flooring',
    description: 'Instalación profesional de madera dura (hardwood) tradicional y de ingeniería. Aportamos calidez, elegancia y un alto valor de reventa a su hogar.',
    benefits: ['Madera de pino, roble o nogal de primera', 'Alineación perfecta y libre de crujidos', 'Tratamiento sellador antidesgaste']
  },
  {
    id: 'pisos-laminados',
    name: 'Pisos Laminados',
    category: 'flooring',
    description: 'La combinación perfecta entre estética de madera real y alta resistencia al tránsito diario. Ideal para familias con mascotas y niños.',
    benefits: ['Resistencia extrema a arañazos y manchas', 'Instalación rápida mediante sistema click', 'Excelente relación costo-calidad']
  },
  {
    id: 'pisos-vinilo',
    name: 'Pisos de Vinilo (LVP)',
    category: 'flooring',
    description: 'Pisos vinílicos de lujo (Luxury Vinyl Plank) que imitan fielmente la madera o piedra, siendo 100% impermeables y altamente duraderos.',
    benefits: ['Ideal para cocinas, baños y sótanos', 'Resistencia total al agua y humedad', 'Capa de desgaste reforzada de alta duración']
  },
  {
    id: 'pulido-barnizado',
    name: 'Pulido y Barnizado de Pisos',
    category: 'flooring',
    description: 'Restauramos la gloria de sus antiguos pisos de madera mediante lijado profundo, eliminación de imperfecciones y aplicación de barniz de alta resistencia.',
    benefits: ['Elimina rayones, manchas y abolladuras', 'Acabados satinados, mate o brillantes', 'Extiende la vida útil del piso flotante o madera']
  },
  {
    id: 'alfombras',
    name: 'Alfombras',
    category: 'flooring',
    description: 'Instalación precisa de alfombras residenciales y comerciales de alta densidad. Confort térmico y acústico inmejorable para sus habitaciones.',
    benefits: ['Acolchado de soporte premium', 'Costuras invisibles y estiramiento firme', 'Texturas suaves y resistentes al desgaste']
  },
  {
    id: 'cesped-artificial',
    name: 'Césped Artificial',
    category: 'turf',
    description: 'Colocación premium de césped sintético de aspecto natural, ideal para jardines traseros, balcones o áreas recreativas sin mantenimiento de riego ni podado.',
    benefits: ['Verde perfecto los 365 días del año', 'Drenaje rápido y seguro para mascotas', 'Resistente a los rayos UV sin decolorarse']
  },
  {
    id: 'decks-exteriores',
    name: 'Tarimas Exteriores (Decks)',
    category: 'decks',
    description: 'Diseño y montaje de plataformas exteriores en madera natural o materiales compuestos (wood composite). Espacio de reunión al aire libre de alto standing.',
    benefits: ['Maderas tratadas o composites libres de mantenimiento', 'Estructuras estructurales ultra reforzadas', 'Instalación con fijación oculta de alta estética']
  },
  {
    id: 'carpinteria-general',
    name: 'Carpintería General',
    category: 'carpentry',
    description: 'Fabricación y reparación estructural de elementos de madera, muebles empotrados, repisas a medida y estructuras residenciales confiables.',
    benefits: ['Herramientas y encastres de alta precisión', 'Solución a medida para espacios complejos', 'Materiales nobles de proveedores seleccionados']
  },
  {
    id: 'millwork',
    name: 'Millwork',
    category: 'carpentry',
    description: 'Colocación de molduras de corona, zócalos, marcos de puertas y acabados ornamentales de alta carpintería que elevan la distinción de cualquier salón.',
    benefits: ['Cortes perfectamente ingleteados a 45°', 'Remate y calafateado limpio para pintura', 'Molduras clásicas, modernas y personalizadas']
  },
  {
    id: 'framing',
    name: 'Framing',
    category: 'carpentry',
    description: 'Estructuración de tabiquería de madera o postes metálicos para reconfigurar sus habitaciones, crear nuevos clósets o ampliar ambientes.',
    benefits: ['Cálculo preciso de carga estructural', 'Plomada y nivelación láser milimétrica', 'Cumplimiento estricto del código de construcción']
  },
  {
    id: 'sheetrock',
    name: 'Sheetrock',
    category: 'drywall-paint',
    description: 'Instalación rápida de paneles de yeso estándar, resistentes a la humedad (green board) o contra fuego en paredes y techos.',
    benefits: ['Colocación firme con tornillos especiales', 'Ajuste perfecto en esquinas e interruptores', 'Preparación óptima para el encintado']
  },
  {
    id: 'drywall',
    name: 'Drywall & Enlucido',
    category: 'drywall-paint',
    description: 'Encintado premium, aplicación de masilla (mudding) de 3 capas y lijado al detalle para lograr superficies completamente lisas y listas para pintar.',
    benefits: ['Terminación nivel 4 y 5 ultra lisa', 'Reparación imperceptible de grietas y huecos', 'Acabados idóneos para luces rasantes']
  },
  {
    id: 'pintura-interior',
    name: 'Pintura Interior',
    category: 'drywall-paint',
    description: 'Servicio de pintura residencial detallado para techos, paredes, molduras y puertas con acabados mate, satinados o semibrillantes de marcas líderes.',
    benefits: ['Protección de pisos y muebles al 100%', 'Líneas de corte limpias y bordes nítidos', 'Pinturas de bajo olor y secado ultra rápido']
  },
  {
    id: 'pintura-exterior',
    name: 'Pintura Exterior',
    category: 'drywall-paint',
    description: 'Proteja y embellezca la fachada de su propiedad con pinturas impermeabilizantes y resistentes al sol, viento y lluvia extrema de Nueva York.',
    benefits: ['Lavado a presión previo y raspado de pintura suelta', 'Sellador elastomérico premium contra filtraciones', 'Colores duraderos y excelente poder de cubrición']
  },
  {
    id: 'banos-ceramicas',
    name: 'Instalación de Cerámicos',
    category: 'general',
    description: 'Colocación experta de baldosas cerámicas, porcelanatos, mosaicos y piedra natural en paredes de duchas, pisos, cocinas (backsplash) y chimeneas.',
    benefits: ['Nivelación perfecta libre de pestañas (lippage)', 'Líneas de fragua uniformes e impermeabilizadas', 'Patrones personalizados (espiga, ladrillo, etc.)']
  },
  {
    id: 'albanileria-general',
    name: 'Albañilería General',
    category: 'general',
    description: 'Trabajos de reparación de concreto, remiendos de mortero, nivelación de pisos base, y mejoras con tabiques de ladrillo o bloques.',
    benefits: ['Mezclas de alta resistencia estructural', 'Nivelado y soleras estables para pisos térmicos', 'Trabajo limpio e impecable en exteriores']
  }
];

export const beforeAfterProjects: BeforeAfterProject[] = [
  {
    id: 'proy-pisos',
    title: 'Renovación de Piso de Madera',
    description: 'Especiales de pisos en Brooklyn. L4 Construction & General Services revivió un antiguo suelo deteriorado de los años 80 y lo convirtió en una obra de arte moderna.',
    beforeImg: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800', // worn out table/flooring warm room
    afterImg: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800',  // pristine wood floor being laid nicely
    beforeDesc: 'Piso antiguo, desgastado, con arañazos profundos y barniz deteriorado.',
    afterDesc: 'Piso de madera moderno, perfectamente instalado, nivelado y con un acabado brillante premium.'
  },
  {
    id: 'proy-deck',
    title: 'Construcción de Deck Exterior',
    description: 'Construcción de zona de recreo exterior en un jardín residencial de Queens, diseñado para durabilidad a la intemperie y belleza visual.',
    beforeImg: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800', // empty garden space/dirty backyard
    afterImg: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800', // luxury modern deck
    beforeDesc: 'Patio trasero vacío, de tierra desigual y espacio completamente desaprovechado.',
    afterDesc: 'Deck exterior de madera noble con diseño contemporáneo, nivelación láser y estructura reforzada.'
  },
  {
    id: 'proy-drywall',
    title: 'Drywall y Pintura Interior',
    description: 'Restauración completa de paredes de sala familiar en Staten Island, eliminando grietas por asentamiento y aplicando una moderna paleta de color.',
    beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', // dilapidated construction room / messy walls
    afterImg: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800', // flawless warm interior room painted
    beforeDesc: 'Paredes con humedad, grietas profundas, orificios y pintura antigua descascarada.',
    afterDesc: 'Paredes de drywall totalmente niveladas, enlucido nivel 5 impecable y pintura moderna mate seleccionada.'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Piso de Madera Roble Francés',
    category: 'flooring',
    imgUrl: 'https://lh3.googleusercontent.com/d/1rOzYvzEGJV42zFLPC3iQliuX0l46XVXv',
    images: [
      'https://lh3.googleusercontent.com/d/1rOzYvzEGJV42zFLPC3iQliuX0l46XVXv',
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Instalación y cepillado artesanal de piso de madera noble de Roble Francés con acabado satinado. Un clásico atemporal que aporta calidez natural de grano fino y durabilidad excepcional para toda la vida.',
    bulletPoints: [
      'Selección de tablones de primera categoría con veta uniforme',
      'Nivelación milimétrica y preparación técnica del contrapiso',
      'Ajuste preciso de juntas de dilatación perimetral',
      'Acabado protector multicapa con resistencia de alta gama contra el desgaste'
    ]
  },
  {
    id: 'gal-2',
    title: 'Tarima Exterior Premium',
    category: 'decks',
    imgUrl: 'https://lh3.googleusercontent.com/d/1tQ6S6WsCOZQ1-ozw-mH8Pyzx_Ri30vCL',
    images: [
      'https://lh3.googleusercontent.com/d/1tQ6S6WsCOZQ1-ozw-mH8Pyzx_Ri30vCL',
      'https://lh3.googleusercontent.com/d/1PCf3ae4JDuYlp2RbOxC9uywifenZkyvX',
      'https://lh3.googleusercontent.com/d/1CxCr-Jx0C3PtylS8KRyQSkLwIgvg6EbQ'
    ],
    description: 'Diseño, estructuración y montaje de tarima (deck) exterior en madera tratada premium y compuesta. Diseñado para resistir la intemperie y los cambios estacionales extremos de Nueva York y Nueva Jersey.',
    bulletPoints: [
      'Cimentación robusta con postes tratados resistentes a la humedad de suelo',
      'Fijaciones ocultas de alta seguridad para una superficie transitable limpia',
      'Tratamiento sellador hidrófugo y antideslizante de larga duración',
      'Nivelación láser precisa que garantiza un drenaje pluvial correcto'
    ]
  },
  {
    id: 'gal-3',
    title: 'Paredes y Molduras de Alta Gama',
    category: 'drywall-paint',
    imgUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Servicio premium de encintado, enlucido nivel 5 y colocación de molduras de corona (‘millwork’) personalizadas. Eleva la sofisticación de cualquier espacio interior con líneas y bordes perfectamente rectos.',
    bulletPoints: [
      'Encintado y empastado de 3 capas sin marcas de transición visibles',
      'Corte a inglete preciso a 45 grados en molduras de corona y zócalos con encaje perfecto',
      'Lijado al detalle con equipo de aspirado al vacío libre de polvo',
      'Calafateado flexible que previene grietas por cambios de temperatura'
    ]
  },
  {
    id: 'gal-4',
    title: 'Piso Laminado Resistente al Agua',
    category: 'flooring',
    imgUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Instalación experta de suelo laminado de alta gama con sellado perimetral contra derrames accidentales. La combinación perfecta entre estética de madera real, confort acústico y resistencia al desgaste rutinario.',
    bulletPoints: [
      'Montaje de piso flotante mediante sistema de encastre clic de alta tensión',
      'Colocación previa de subsuelo aislante de alta densidad contra frío y ruidos',
      'Terminación de zócalos a juego y perfiles de transición nivelados de manera fluida',
      'Tratamiento de juntas sellantes contra infiltraciones superficiales'
    ]
  },
  {
    id: 'gal-6',
    title: 'Césped Artificial',
    category: 'turf',
    imgUrl: 'https://lh3.googleusercontent.com/d/1ixv6oP_E-z2OAGMuSwTPc_6voRPRjbR0',
    images: [
      'https://lh3.googleusercontent.com/d/1ixv6oP_E-z2OAGMuSwTPc_6voRPRjbR0',
      'https://lh3.googleusercontent.com/d/1R1C0GgPMBYmOW9uooSO6B2yLAQl_cWgY',
      'https://lh3.googleusercontent.com/d/1m0ftTvDyI5GSm5xWpRg7TZHBjPwPn_uc'
    ],
    description: 'Instalación premium de césped sintético de alta densidad en áreas residenciales de Nueva York y Nueva Jersey. Un acabado impecable y natural con drenaje de última tecnología, ideal para el disfrute de toda la familia y mascotas, sin riego ni mantenimiento.',
    bulletPoints: [
      'Preparación, excavación y nivelación precisa del terreno base con arena/grava compactada',
      'Césped sintético de aspecto realista con drenaje superior multidireccional',
      'Fijación perimetral de alta seguridad y costuras invisibles termoselladas',
      'Garantía de calidad con materiales protegidos contra rayos UV y amigables con mascotas'
    ]
  },
  {
    id: 'gal-7',
    title: 'Piso de Vinilo de Lujo',
    category: 'flooring',
    imgUrl: 'https://lh3.googleusercontent.com/d/1IGdOXM-S97YcAph2Q8FKNsROlppwXcLC',
    images: [
      'https://lh3.googleusercontent.com/d/1IGdOXM-S97YcAph2Q8FKNsROlppwXcLC',
      'https://lh3.googleusercontent.com/d/1JXrL4M69K8GfyBviIProYZwm7rQbmCro',
      'https://lh3.googleusercontent.com/d/1gK49uyR79_RbQ-bCgnCncBKQkfe_FYKa'
    ],
    description: 'Colocación integral de piso de vinilo rígido impermeable (Luxury Vinyl Plank - LVP) de alta duración. Es ideal para áreas expuestas a humedad severa tales como sótanos renovados, cocinas y baños elegantes.',
    bulletPoints: [
      'Instalación impecable con barrera de vapor integrada',
      'Superficie 100% impermeable, resistente al desgaste comercial',
      'Cortes limpios y adaptaciones anatómicas alrededor de marcos, tuberías y sanitarios',
      'Nivelación y rectificación perfecta de imperfecciones del contrapiso'
    ]
  },

];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'David Harrison',
    location: 'Queens, NY',
    rating: 5,
    date: 'Octubre 2023',
    text: '[Traducido del inglés] Contratamos a L4 Construction para la instalación de pisos de madera en toda nuestra planta baja y los resultados fueron simplemente espectaculares. Extremadamente puntual, el trabajo fue sumamente limpio y las uniones quedaron impecables. La mejor decisión para nuestro hogar.',
    serviceName: 'Instalación de Pisos de Madera',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 't-2',
    name: 'Sarah Collins',
    location: 'Hoboken, NJ',
    rating: 5,
    date: 'Julio 2024',
    text: '[Traducido del inglés] L4 Construction demostró un profesionalismo sobresaliente construyendo nuestro nuevo deck exterior. Tuvieron mucha paciencia explicándonos las mejores opciones de materiales y el presupuesto fue totalmente transparente desde el primer día. ¡Los recomiendo ampliamente por su atención al detalle!',
    serviceName: 'Tarimas Exteriores (Decks)',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 't-3',
    name: 'Carlos Mendoza',
    location: 'Manhattan, NY',
    rating: 5,
    date: 'Marzo 2025',
    text: 'Teníamos paredes de drywall muy dañadas y con grietas por asentamiento. L4 Construction & General Services realizó un trabajo de remasillado y enlucido impecable, y luego pintó la sala de estar. Quedó como una casa nueva. Son sumamente organizados y dejan todo perfectamente limpio al terminar.',
    serviceName: 'Drywall & Pintura Interior',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 't-4',
    name: 'Robert Vance',
    location: 'Jersey City, NJ',
    rating: 5,
    date: 'Diciembre 2024',
    text: '[Traducido del inglés] Excelente comunicación de principio a fin. L4 Construction responde rápido y llegó a la hora exacta para realizar el presupuesto y cada día del proyecto de pintura exterior. Un servicio profesional excepcional como ya no se encuentra fácil en el área, muy honestos.',
    serviceName: 'Pintura Exterior',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 't-5',
    name: 'Elena Rostova',
    location: 'Staten Island, NY',
    rating: 5,
    date: 'Agosto 2025',
    text: 'L4 Construction & General Services instaló pisos de vinilo (LVP) en nuestro sótano y baños. Quedó de revista, perfectamente recortado alrededor de la tubería y los inodoros. El nivelado que hizo previo al piso fue asombroso. Su amabilidad y excelente atención al cliente es invaluable.',
    serviceName: 'Pisos de Vinilo (LVP)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 't-6',
    name: 'Andrés Castrillón',
    location: 'Westchester, NY',
    rating: 5,
    date: 'Enero 2026',
    text: 'La mano de obra de L4 Construction & General Services es insuperable. Instaló revestimiento cerámico en nuestra cocina y césped artificial en el patio. Es sumamente detallista, garantizando que el patrón cerámico encaje de forma perfecta. Muy recomendado, limpio y sumamente rápido.',
    serviceName: 'Instalación de Cerámicos y Césped',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const reasonsToChoose: { title: string; desc: string; iconName: string }[] = [
  {
    title: 'Experiencia Comprobada',
    desc: 'Más de 20 años de trayectoria en el sector de acabados y remodelaciones residenciales garantizan un dominio total de cada técnica de construcción.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Atención Personalizada',
    desc: 'L4 Construction & General Services planifica y ejecuta cada proyecto de forma personalizada, lo que asegura que sus ideas y especificaciones se cumplan al pie de la letra.',
    iconName: 'UserCheck'
  },
  {
    title: 'Acabados Profesionales',
    desc: 'Buscamos la perfección milimétrica tanto en las molduras más pequeñas como en la nivelación láser de pisos de madera dura.',
    iconName: 'Sparkles'
  },
  {
    title: 'Trabajo Limpio y Organizado',
    desc: 'Protegemos por completo sus muebles y áreas circundantes. Entregamos la zona de obras completamente aspirada y despejada diariamente.',
    iconName: 'FlameKindling' // represents cleaning or we can map to custom brush icon
  },
  {
    title: 'Materiales de Calidad',
    desc: 'Asesoramiento técnico en la compra. Trabajamos con marcas líderes del mercado para garantizar solidez estructural y longevidad visual.',
    iconName: 'Gem'
  },
  {
    title: 'Presupuestos Transparentes',
    desc: 'Precios detallados y claros de mano de obra y materiales. Sin sorpresas, cobros ocultos ni sobrecostos de última hora.',
    iconName: 'FileText'
  },
  {
    title: 'Entrega Puntual',
    desc: 'Respetamos estrictamente los plazos acordados. El tiempo de su familia es sagrado y nos esforzamos en optimizar cada jornada de trabajo.',
    iconName: 'Clock'
  },
  {
    title: 'Compromiso de Satisfacción',
    desc: 'No damos un proyecto por terminado hasta que usted esté 100% satisfecho con los pulidos, juntas, marcos y acabados finales.',
    iconName: 'Heart'
  }
];
