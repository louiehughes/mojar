// ==========================================
// CONTENIDO DE LA WEB MOJAR
// ==========================================
// INSTRUCCIONES:
// 1. Edita los textos entre comillas ""
// 2. Para añadir imágenes, pon la ruta: "imagenes/nombre-imagen.jpg"
// 3. Las URLs de proyectos y blog ya están configuradas
// 4. Guarda el archivo después de editar
// 5. Recarga la página en el navegador
// ==========================================

const CONTENIDO = {
    
    // ==========================================
    // ESPAÑOL
    // ==========================================
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre nosotros',
            projects: 'Proyectos',
            services: 'Servicios',
            blog: 'Blog',
            contact: 'Contacto'
        },
        
        hero: {
            subtitle: 'Un estudio gastronómico donde la comida es investigación, creación y encuentro. Trabajamos en la intersección entre lo culinario, lo social y lo artístico.'
        },
        
        about: {
            title: 'Sobre nosotros',
            intro: 'Mojar es un colectivo gastronómico de investigación y creación formado por Pilar y Louie. Trabajamos con comunidades, productos locales y memoria alimentaria para crear eventos, talleres y proyectos artísticos que exploran nuestra relación con la comida. Desde Galicia, pero sin límites geográficos, documentamos tradiciones culinarias en riesgo de desaparecer, explorando y diseñando nuevas formas de entender el patrimonio gastronómico.',
            team: [
                {
                    name: 'Pilar',
                    photo: 'imagenes/pilar.jpg',
                    role: 'Diseño de proyectos · Investigación de campo',
                    description: 'Pilar se encarga de la atención al público, el diseño de proyectos y la investigación de campo. Su enfoque está en construir puentes entre las ideas y las personas, creando experiencias que conecten lo gastronómico con lo social y lo cultural.'
                },
                {
                    name: 'Louie',
                    photo: 'imagenes/louie.jpg',
                    role: 'Conceptualización · Creación culinaria',
                    description: 'Louie trabaja con los conceptos y aporta la mayor experiencia culinaria al proyecto. Es el perfil más creativo, desarrollando propuestas que exploran los límites de lo gastronómico desde una perspectiva experimental y profundamente ligada al producto.'
                }
            ]
        },
        
        projects: {
            title: 'Proyectos',
            filters: {
                all: 'Todos',
                eventos: 'Eventos',
                investigacion: 'Investigación',
                talleres: 'Talleres',
                produccion: 'Producción artesanal',
                practicas: 'Prácticas artísticas'
            },
            items: [
                {
                    title: 'Pescatori Digitali 24',
                    url: 'proyectos/pescatori-digitali-24.html',
                    image: 'imagenes/proyectos/pescatori-24.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'Cocinamos para este coliving pop-up llevado a cabo en Stintino, Cerdeña, siempre teniendo en mente la relación entre producto local, temporalidad y comunidad.'
                },
                {
                    title: 'The new heritage project',
                    url: 'proyectos/new-heritage/new-heritage-project.html',
                    image: 'imagenes/proyectos/new-heritage-project.jpg',
                    tags: ['practicas', 'produccion', 'investigacion'],
                    description: 'Investigación sobre patrimonio culinario tradicional en riesgo de desaparecer. Documentamos paisajes, recetas y prácticas alimentarias locales para crear productos artesanales basados en la memoria gastronómica del territorio.'
                },
                {
                    title: 'Talleres de pasta',
                    url: 'proyectos/talleres-pasta.html',
                    image: 'imagenes/proyectos/talleres-pasta.jpg',
                    tags: ['talleres'],
                    description: 'Estos talleres se llevan a cabo en diversos lugares y con distintas recetas. Tienen la finalidad de acercar a prácticas sencillas buscando una conexión con lo manual y rudimentario. Suponen una aproximación lenta a los procesos de transformación.'
                },
                {
                    title: 'Diseño de una tabla',
                    url: 'proyectos/diseno-tabla-gnocchi.html',
                    image: 'imagenes/proyectos/gnocchi.jpg',
                    tags: ['produccion'],
                    description: 'Diseño y producción de esta tabla para gnocchi con madera recuperada de forma artesanal. Ejercicio de crear lo que necesitamos para cocinar. Documentación del proceso.'
                },
                {
                    title: 'G(h)osts',
                    url: 'proyectos/ghosts.html',
                    image: 'imagenes/proyectos/ghosts.jpg',
                    tags: ['talleres', 'practicas'],
                    description: 'Taller en el que exploramos la memoria gastronómica a través de olores, sabores y gestos. Un proyecto de arte comunitario donde la comida se convierte en ritual de invocación: recuperamos recetas familiares y hacemos presente lo ausente.'
                },
                {
                    title: 'Archivos de pertenencia',
                    url: 'proyectos/archivos-pertenencia.html',
                    image: 'imagenes/proyectos/archivos-pertenencia.jpg',
                    tags: ['practicas', 'talleres', 'investigacion'],
                    description: 'Mapeo y documentación del patrimonio culinario gallego contemporáneo. A través de entrevistas y herramientas digitales, reconstruimos la identidad gastronómica de Galicia desde las historias personales, los recuerdos y la cocina de cada día.'
                },
                {
                    title: 'Pescatori Digitali 25',
                    url: 'proyectos/pescatori-digitali-25.html',
                    image: 'imagenes/proyectos/pescatori-25.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'Cocinamos para este coliving pop-up llevado a cabo en Stintino, Cerdeña, siempre teniendo en mente la relación entre producto local, temporalidad y comunidad.'
                },
                /*{
                    title: 'Calendario de temporada',
                    url: 'proyectos/calendario-temporada.html',
                    image: 'imagenes/proyectos/calendario.jpg',
                    tags: ['investigacion', 'produccion'],
                    description: 'Calendario pensado para fomentar el consumo por parte de los participantes de co-living de alimentos de temporada y de producción local.'
                }*/
            ]
        },
        
        services: {
            title: 'Servicios',
            items: [
                {
                    title: 'Chef privado para eventos',
                    description: 'Diseñamos experiencias culinarias personalizadas para eventos privados, celebraciones corporativas y presentaciones culturales. Trabajamos con producto local de temporada, creando menús que cuentan historias y conectan con el territorio. Cada evento es una oportunidad para explorar la narrativa gastronómica de forma única.'
                },
                {
                    title: 'Talleres de cocina',
                    description: 'Talleres prácticos de pasta artesanal, fermentación, conservas y técnicas culinarias tradicionales. Una oportunidad de aprendizaje colectivo para particulares, grupos, empresas y centros culturales. Recuperamos el conocimiento culinario a través de la práctica compartida y la experimentación.'
                },
                {
                    title: 'Investigación gastronómica',
                        description: 'Proyectos de investigación sobre patrimonio culinario, memoria alimentaria y cultura gastronómica local. A partir de los cuales documentamos recetas, diseñamos proyectos y desarrollamos programas de mediación cultural para museos, centros culturales e instituciones.'
                }
            ]
        },
        
        blog: {
            title: 'Blog',
            items: [
                {
                    title: 'La importancia de la temporalidad',
                    url: 'blog/importancia-temporalidad.html',
                    date: '15 Enero 2026',
                    image: '', // Vacío - sin imagen
                    excerpt: 'Reflexiones sobre cocinar con el calendario de la naturaleza y no contra él. Por qué la temporalidad no es solo una cuestión estética sino ética.'
                },
                {
                    title: 'Fermentar es esperar',
                    url: 'blog/fermentar-es-esperar.html',
                    date: '08 Enero 2026',
                    image: '',
                    excerpt: 'Un texto sobre la paciencia en la cocina y cómo los procesos lentos nos enseñan a relacionarnos de otra manera con el tiempo y con los alimentos.'
                },
                {
                    title: 'Memoria y receta',
                    url: 'blog/memoria-y-receta.html',
                    date: '22 Diciembre 2025',
                    image: '',
                    excerpt: '¿Qué perdemos cuando una receta desaparece? Sobre la importancia de documentar las prácticas culinarias antes de que sea demasiado tarde.'
                },
                {
                    title: 'El ritual de la mesa',
                    url: 'blog/ritual-mesa.html',
                    date: '10 Diciembre 2025',
                    image: '',
                    excerpt: 'Cómo el acto de sentarse a comer juntos se ha convertido en un gesto de resistencia frente a la velocidad contemporánea.'
                },
                {
                    title: 'Cocinar con lo que hay',
                    url: 'blog/cocinar-lo-que-hay.html',
                    date: '28 Noviembre 2025',
                    image: '',
                    excerpt: 'Sobre la creatividad que surge de la limitación y cómo la escasez puede ser maestra en la cocina.'
                },
                {
                    title: 'Las manos que alimentan',
                    url: 'blog/manos-que-alimentan.html',
                    date: '15 Noviembre 2025',
                    image: '',
                    excerpt: 'Un reconocimiento a quienes cultivan, cosechan y preparan los alimentos que llegan a nuestras mesas.'
                }
            ]
        },
        
        contact: {
            title: 'Contacta',
            form: {
                name: 'Nombre',
                email: 'Email',
                subject: 'Asunto',
                message: 'Mensaje',
                submit: 'Enviar mensaje'
            }
        },
        
        footer: {
            rights: 'Todos los derechos reservados.',
            email: 'mojar.buenasmaneras@gmail.com',
            phone: '+34 605 79 19 95',
            social: {
                instagram: 'https://instagram.com/mmmojar'
            }
        }
    },
    
    // ==========================================
    // GALLEGO
    // ==========================================
    gl: {
        nav: {
            home: 'Inicio',
            about: 'Sobre nós',
            projects: 'Proxectos',
            services: 'Servizos',
            blog: 'Blog',
            contact: 'Contacto'
        },
        
        hero: {
            subtitle: 'Un estudio gastronómico onde a comida é investigación, creación e encontro. Traballamos na intersección entre o culinario, o social e o artístico.'
        },
        
        about: {
            title: 'Sobre nós',
            intro: 'Mojar é un colectivo gastronómico de investigación e creación formado por Pilar e Louie. Traballamos con comunidades, produtos locais e memoria alimentaria para crear eventos, obradoiros e proxectos artísticos que exploran a nosa relación coa comida. Desde Galicia cara ao mundo, documentamos tradicións culinarias en risco de desaparecer, explorando e deseñando novas formas de entender o patrimonio gastronómico.',
            team: [
                {
                    name: 'Pilar',
                    photo: '',
                    role: 'Deseño de proxectos · Investigación de campo',
                    description: 'Pilar encárgase da atención ao público, o deseño de proxectos e a investigación de campo. O seu enfoque está en construír pontes entre as ideas e as persoas, creando experiencias que conecten o gastronómico co social e o cultural.'
                },
                {
                    name: 'Louie',
                    photo: '',
                    role: 'Conceptualización · Creación culinaria',
                    description: 'Louie traballa cos conceptos e achega a maior experiencia culinaria ao proxecto. É o perfil máis creativo, desenvolvendo propostas que exploran os límites do gastronómico desde unha perspectiva experimental e profundamente ligada ao produto.'
                }
            ]
        },
        
        projects: {
            title: 'Proxectos',
            filters: {
                all: 'Todos',
                eventos: 'Eventos',
                investigacion: 'Investigación',
                talleres: 'Obradoiros',
                produccion: 'Produción artesanal',
                practicas: 'Prácticas artísticas'
            },
            items: [
                {
                    title: 'Pescatori Digitali 24',
                    url: 'proyectos/pescatori-digitali-24.html',
                    image: 'imagenes/proyectos/pescatori-24.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'Cociñamos para este coliving pop-up levado a cabo en Stintino, Cerdeña, sempre tendo en mente a relación entre produto local, temporalidade e comunidade.'
                },
                {
                    title: 'The new heritage project',
                    url: 'proyectos/the-new-heritage-project.html',
                    image: 'imagenes/proyectos/new-heritage-24.jpg',
                    tags: ['practicas', 'produccion', 'investigacion'],
                    description: 'Investigación sobre patrimonio culinario tradicional en risco de desaparecer. Documentamos paisaxes, receitas e prácticas alimentarias locais para crear produtos artesanais baseados na memoria gastronómica do territorio.'
                },
                {
                    title: 'Obradoiros de pasta',
                    url: 'proyectos/talleres-pasta.html',
                    image: 'imagenes/proyectos/talleres-pasta.jpg',
                    tags: ['talleres'],
                    description: 'Estes obradoiros lévaronse a cabo en diversos lugares e con distintas receitas. Teñen a finalidade de achegar a prácticas sinxelas buscando unha conexión co manual e rudimentario. Supoñen unha aproximación lenta aos procesos de transformación.'
                },
                {
                    title: 'Deseño dunha táboa',
                    url: 'proyectos/diseno-tabla-gnocchi.html',
                    image: 'imagenes/proyectos/gnocchi.jpg',
                    tags: ['produccion'],
                    description: 'Deseño e produción desta táboa para gnocchi con madeira recuperada de forma artesanal. Exercicio de crear o que necesitamos para cociñar. Documentación do proceso.'
                },
                {
                    title: 'G(h)osts',
                    url: 'proyectos/ghosts.html',
                    image: 'imagenes/proyectos/ghosts.jpg',
                    tags: ['talleres', 'practicas'],
                    description: 'Obradoiro no que exploramos a memoria gastronómica a través de cheiros, sabores e xestos. Un proxecto de arte comunitaria onde a comida convértese en ritual de invocación: recuperamos receitas familiares e facemos presente o ausente.'
                },
                {
                    title: 'Arquivos de pertenza',
                    url: 'proyectos/archivos-pertenencia.html',
                    image: 'imagenes/proyectos/arquivos.jpg',
                    tags: ['practicas', 'talleres', 'investigacion'],
                    description: 'Mapeado e documentación do patrimonio culinario galego contemporáneo. A través de entrevistas e ferramentas dixitais, reconstruímos a identidade gastronómica de Galicia desde as historias persoais, as lembranzas e a cociña de cada día.'
                },
                {
                    title: 'Pescatori Digitali 25',
                    url: 'proyectos/pescatori-digitali-25.html',
                    image: 'imagenes/proyectos/pescatori-25.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'Cociñamos para este coliving pop-up levado a cabo en Stintino, Cerdeña, sempre tendo en mente a relación entre produto local, temporalidade e comunidade.'
                },
                {
                    title: 'Calendario de tempada',
                    url: 'proyectos/calendario-temporada.html',
                    image: 'imagenes/proyectos/calendario.jpg',
                    tags: ['investigacion', 'produccion'],
                    description: 'Calendario pensado para fomentar o consumo por parte dos participantes de co-living de alimentos de tempada e de produción local.'
                }
            ]
        },
        
        services: {
            title: 'Servizos',
            items: [
                {
                    title: 'Chef privado para eventos',
                    description: 'Deseñamos experiencias culinarias personalizadas para eventos privados, celebracións corporativas e presentacións culturais. Traballamos con produto local de tempada, creando menús que contan historias e conectan co territorio. Cada evento é unha oportunidade para explorar a narrativa gastronómica de forma única.'
                },
                {
                    title: 'Obradoiros de cociña',
                    description: 'Obradoiros prácticos de pasta artesanal, fermentación, conservas e técnicas culinarias tradicionais. Espazos de aprendizaxe colectiva para particulares, grupos, empresas e centros culturais. Recuperamos o coñecemento culinario a través da práctica compartida e a experimentación.'
                },
                {
                    title: 'Investigación gastronómica',
                    description: 'Proxectos de investigación sobre patrimonio culinario, memoria alimentaria e cultura gastronómica local. Documentamos saberes, receitas e prácticas en risco de desaparecer. A partir das nosas investigacións, creamos ilustracións gastronómicas e deseñamos produtos artesanais que materializan o coñecemento do territorio.'
                }
            ]
        },
        
        blog: {
            title: 'Blog',
            items: [
                {
                    title: 'A importancia da temporalidade',
                    url: 'blog/importancia-temporalidad.html',
                    date: '15 Xaneiro 2026',
                    image: 'imagenes/blog/temporalidad.jpg',
                    excerpt: 'Reflexións sobre cociñar co calendario da natureza e non contra el. Por que a temporalidade non é só unha cuestión estética senón ética.'
                },
                {
                    title: 'Fermentar é esperar',
                    url: 'blog/fermentar-es-esperar.html',
                    date: '08 Xaneiro 2026',
                    image: 'imagenes/blog/fermentar.jpg',
                    excerpt: 'Un texto sobre a paciencia na cociña e como os procesos lentos nos ensinan a relacionarnos doutra maneira co tempo e cos alimentos.'
                },
                {
                    title: 'Memoria e receita',
                    url: 'blog/memoria-y-receta.html',
                    date: '22 Decembro 2025',
                    image: 'imagenes/blog/memoria.jpg',
                    excerpt: 'Que perdemos cando unha receita desaparece? Sobre a importancia de documentar as prácticas culinarias antes de que sexa demasiado tarde.'
                }
            ]
        },
        
        contact: {
            title: 'Contacta',
            form: {
                name: 'Nome',
                email: 'Email',
                subject: 'Asunto',
                message: 'Mensaxe',
                submit: 'Enviar mensaxe'
            }
        },
        
        footer: {
            rights: 'Todos os dereitos reservados.',
            email: 'mojar.buenasmaneras@gmail.com',
            phone: '+34 605 79 19 95',
            social: {
                instagram: 'https://instagram.com/mmmojar'
            }
        }
    },
    
    // ==========================================
    // INGLÉS
    // ==========================================
    en: {
        nav: {
            home: 'Home',
            about: 'About us',
            projects: 'Projects',
            services: 'Services',
            blog: 'Blog',
            contact: 'Contact'
        },
        
        hero: {
            subtitle: 'A gastronomic studio where food is research, creation and encounter. We work at the intersection of culinary, social and artistic practices.'
        },
        
        about: {
            title: 'About us',
            intro: 'Mojar is a gastronomic collective for research and creation formed by Pilar and Louie. We work with communities, local products and food memory to create events, workshops and artistic projects that explore our relationship with food. From Galicia to the world, we document culinary traditions at risk of disappearing, exploring and designing new ways of understanding gastronomic heritage.',
            team: [
                {
                    name: 'Pilar',
                    photo: '',
                    role: 'Project design · Field research',
                    description: 'Pilar is in charge of public relations, project design and field research. Her focus is on building bridges between ideas and people, creating experiences that connect gastronomy with the social and cultural.'
                },
                {
                    name: 'Louie',
                    photo: '',
                    role: 'Conceptualization · Culinary creation',
                    description: 'Louie works with concepts and brings the most culinary experience to the project. He is the most creative profile, developing proposals that explore the limits of gastronomy from an experimental perspective deeply linked to the product.'
                }
            ]
        },
        
        projects: {
            title: 'Projects',
            filters: {
                all: 'All',
                eventos: 'Events',
                investigacion: 'Research',
                talleres: 'Workshops',
                produccion: 'Artisanal production',
                practicas: 'Artistic practices'
            },
            items: [
                {
                    title: 'Pescatori Digitali 24',
                    url: 'proyectos/pescatori-digitali-24.html',
                    image: 'imagenes/proyectos/pescatori-24.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'We cooked for this pop-up coliving held in Stintino, Sardinia, always keeping in mind the relationship between local product, seasonality and community.'
                },
                {
                    title: 'The new heritage project',
                    url: 'proyectos/the-new-heritage-project.html',
                    image: 'imagenes/proyectos/new-heritage-24.jpg',
                    tags: ['practicas', 'produccion', 'investigacion'],
                    description: 'Research on traditional culinary heritage at risk of disappearing. We document landscapes, recipes and local food practices to create artisanal products based on the gastronomic memory of the territory.'
                },
                {
                    title: 'Pasta workshops',
                    url: 'proyectos/talleres-pasta.html',
                    image: 'imagenes/proyectos/talleres-pasta.jpg',
                    tags: ['talleres'],
                    description: 'These workshops take place in various locations with different recipes. They aim to bring people closer to simple practices, seeking connection with the manual and rudimentary. They represent a slow approach to transformation processes.'
                },
                {
                    title: 'Board design',
                    url: 'proyectos/diseno-tabla-gnocchi.html',
                    image: 'imagenes/proyectos/gnocchi.jpg',
                    tags: ['produccion'],
                    description: 'Design and production of this gnocchi board with reclaimed wood in an artisanal way. Exercise in creating what we need to cook. Process documentation.'
                },
                {
                    title: 'G(h)osts',
                    url: 'proyectos/ghosts.html',
                    image: 'imagenes/proyectos/ghosts.jpg',
                    tags: ['talleres', 'practicas'],
                    description: 'Workshop where we explore gastronomic memory through smells, flavors and gestures. A community art project where food becomes an invocation ritual: we recover family recipes and make the absent present.'
                },
                {
                    title: 'Archives of belonging',
                    url: 'proyectos/archivos-pertenencia.html',
                    image: 'imagenes/proyectos/arquivos.jpg',
                    tags: ['practicas', 'talleres', 'investigacion'],
                    description: 'Mapping and documentation of contemporary Galician culinary heritage. Through interviews and digital tools, we reconstruct Galicia\'s gastronomic identity from personal stories, memories and everyday cooking.'
                },
                {
                    title: 'Pescatori Digitali 25',
                    url: 'proyectos/pescatori-digitali-25.html',
                    image: 'imagenes/proyectos/pescatori-25.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'We cooked for this pop-up coliving held in Stintino, Sardinia, always keeping in mind the relationship between local product, seasonality and community.'
                },
                {
                    title: 'Seasonal calendar',
                    url: 'proyectos/calendario-temporada.html',
                    image: 'imagenes/proyectos/calendario.jpg',
                    tags: ['investigacion', 'produccion'],
                    description: 'Calendar designed to encourage co-living participants to consume seasonal and locally produced food.'
                }
            ]
        },
        
        services: {
            title: 'Services',
            items: [
                {
                    title: 'Private chef for events',
                    description: 'We design personalized culinary experiences for private events, corporate celebrations and cultural presentations. We work with local seasonal products, creating menus that tell stories and connect with the territory. Each event is an opportunity to explore gastronomic narrative in a unique way.'
                },
                {
                    title: 'Cooking workshops',
                    description: 'Practical workshops on artisanal pasta, fermentation, preserves and traditional culinary techniques. Collective learning spaces for individuals, groups, companies and cultural centers. We recover culinary knowledge through shared practice and experimentation.'
                },
                {
                    title: 'Gastronomic research',
                    description: 'Research projects on culinary heritage, food memory and local gastronomic culture. We document knowledge, recipes and practices at risk of disappearing. From our research, we create gastronomic illustrations and design artisanal products that materialize the territory\'s knowledge.'
                }
            ]
        },
        
        blog: {
            title: 'Blog',
            items: [
                {
                    title: 'The importance of seasonality',
                    url: 'blog/importancia-temporalidad.html',
                    date: 'January 15, 2026',
                    image: 'imagenes/blog/temporalidad.jpg',
                    excerpt: 'Reflections on cooking with nature\'s calendar rather than against it. Why seasonality is not just an aesthetic but an ethical matter.'
                },
                {
                    title: 'Fermenting is waiting',
                    url: 'blog/fermentar-es-esperar.html',
                    date: 'January 8, 2026',
                    image: 'imagenes/blog/fermentar.jpg',
                    excerpt: 'A text about patience in cooking and how slow processes teach us to relate differently to time and food.'
                },
                {
                    title: 'Memory and recipe',
                    url: 'blog/memoria-y-receta.html',
                    date: 'December 22, 2025',
                    image: 'imagenes/blog/memoria.jpg',
                    excerpt: 'What do we lose when a recipe disappears? On the importance of documenting culinary practices before it\'s too late.'
                }
            ]
        },
        
        contact: {
            title: 'Contact',
            form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                submit: 'Send message'
            }
        },
        
        footer: {
            rights: 'All rights reserved.',
            email: 'mojar.buenasmaneras@gmail.com',
            phone: '+34 605 79 19 95',
            social: {
                instagram: 'https://instagram.com/mmmojar'
            }
        }
    }
};