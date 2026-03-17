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
            intro: 'mojar es un colectivo gastronómico de investigación y creación formado por Pilar y Louie. Trabajamos con comunidades, productos locales y memoria alimentaria para crear eventos, talleres y proyectos artísticos que exploran nuestra relación con la comida. Desde Galicia, pero sin límites geográficos, documentamos tradiciones culinarias en riesgo de desaparecer, explorando y diseñando nuevas formas de entender el patrimonio gastronómico.',
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
                    description: 'Louie trabaja con los conceptos y aporta la experiencia culinaria al proyecto. Es el perfil más creativo, desarrollando propuestas que exploran los límites de lo gastronómico desde una perspectiva experimental y ligada al producto.'
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
                    url: 'en-construccion.html',
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
                    url: 'en-construccion.html',
                    image: 'imagenes/proyectos/talleres-pasta.jpg',
                    tags: ['talleres'],
                    description: 'Estos talleres se llevan a cabo en diversos lugares y con distintas recetas. Tienen la finalidad de acercar a prácticas sencillas buscando una conexión con lo manual y rudimentario. Suponen una aproximación lenta a los procesos de transformación.'
                },
                {
                    title: 'Diseño de una tabla',
                    url: 'en-construccion.html',
                    image: 'imagenes/proyectos/gnocchi.jpg',
                    tags: ['produccion'],
                    description: 'Diseño y producción de esta tabla para gnocchi con madera recuperada de forma artesanal. Ejercicio de crear lo que necesitamos para cocinar. Documentación del proceso.'
                },
                {
                    title: 'G(h)osts',
                    url: 'en-construccion.html',
                    image: 'imagenes/proyectos/ghosts.jpg',
                    tags: ['talleres', 'practicas'],
                    description: 'Taller en el que exploramos la memoria gastronómica a través de olores, sabores y gestos. Un proyecto de arte comunitario donde la comida se convierte en ritual de invocación: recuperamos recetas familiares y hacemos presente lo ausente.'
                },
                {
                    title: 'Archivos de pertenencia',
                    url: 'en-construccion.html',
                    image: 'imagenes/proyectos/archivos-pertenencia.jpg',
                    tags: ['practicas', 'talleres', 'investigacion'],
                    description: 'Mapeo y documentación del patrimonio culinario gallego contemporáneo. A través de entrevistas y herramientas digitales, reconstruimos la identidad gastronómica de Galicia desde las historias personales, los recuerdos y la cocina de cada día.'
                },
                {
                    title: 'Pescatori Digitali 25',
                    url: 'en-construccion.html',
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
            title: 'Contacto',
            tagline: 'Nos encantan las ideas nuevas.',
            body: 'Si tienes un proyecto entre manos, se te ha ocurrido algo que podríamos hacer juntos o simplemente quieres saber más sobre lo que hacemos, escríbenos. Nos gustan las colaboraciones que nacen de una conversación.',
            labels: {
                email: 'Email',
                whatsapp: 'WhatsApp',
                instagram: 'Instagram'
            }
        },
        
        footer: {
            rights: 'mojar - 2026',
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
            intro: 'mojar é un colectivo gastronómico de investigación e creación formado por Pilar e Louie. Traballamos con comunidades, produtos locais e memoria alimentaria para crear eventos, obradoiros e proxectos artísticos que exploran a nosa relación coa comida. Desde Galicia, pero sen límites xeográficos, documentamos tradicións culinarias en risco de desaparecer, explorando e deseñando novas formas de entender o patrimonio gastronómico.',
            team: [
                {
                    name: 'Pilar',
                    photo: 'imagenes/pilar.jpg',
                    role: 'Deseño de proxectos · Investigación de campo',
                    description: 'Pilar encárgase da atención ao público, o deseño de proxectos e a investigación de campo. O seu enfoque está en construír pontes entre as ideas e as persoas, creando experiencias que conecten o gastronómico co social e o cultural.'
                },
                {
                    name: 'Louie',
                    photo: 'imagenes/louie.jpg',
                    role: 'Conceptualización · Creación culinaria',
                    description: 'Louie traballa cos conceptos e achega a experiencia culinaria ao proxecto. É o perfil máis creativo, desenvolvendo propostas que exploran os límites do gastronómico desde unha perspectiva experimental e ligada ao produto.'
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
                    url: 'en-construccion.html?lang=gl',
                    image: 'imagenes/proyectos/pescatori-24.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'Cociñamos para este coliving pop-up levado a cabo en Stintino, Sardeña, tendo sempre en mente a relación entre produto local, temporalidade e comunidade.'
                },
                {
                    title: 'The new heritage project',
                    url: 'proyectos/new-heritage/new-heritage-project.html',
                    image: 'imagenes/proyectos/new-heritage-project.jpg',
                    tags: ['practicas', 'produccion', 'investigacion'],
                    description: 'Investigación sobre patrimonio culinario tradicional en risco de desaparecer. Documentamos paisaxes, receitas e prácticas alimentarias locais para crear produtos artesanais baseados na memoria gastronómica do territorio.'
                },
                {
                    title: 'Obradoiros de pasta',
                    url: 'en-construccion.html?lang=gl',
                    image: 'imagenes/proyectos/talleres-pasta.jpg',
                    tags: ['talleres'],
                    description: 'Estes obradoiros lévanse a cabo en diversos lugares e con distintas receitas. Teñen a finalidade de achegar a prácticas sinxelas buscando unha conexión co manual e rudimentario. Supoñen unha aproximación lenta aos procesos de transformación.'
                },
                {
                    title: 'Deseño dunha táboa',
                    url: 'en-construccion.html?lang=gl',
                    image: 'imagenes/proyectos/gnocchi.jpg',
                    tags: ['produccion'],
                    description: 'Deseño e produción desta táboa para gnocchi con madeira recuperada de forma artesanal. Exercicio de crear o que necesitamos para cociñar. Documentación do proceso.'
                },
                {
                    title: 'G(h)osts',
                    url: 'en-construccion.html?lang=gl',
                    image: 'imagenes/proyectos/ghosts.jpg',
                    tags: ['talleres', 'practicas'],
                    description: 'Obradoiro no que exploramos a memoria gastronómica a través de cheiros, sabores e xestos. Un proxecto de arte comunitaria onde a comida se converte en ritual de invocación: recuperamos receitas familiares e facemos presente o ausente.'
                },
                {
                    title: 'Arquivos de pertenza',
                    url: 'en-construccion.html?lang=gl',
                    image: 'imagenes/proyectos/archivos-pertenencia.jpg',
                    tags: ['practicas', 'talleres', 'investigacion'],
                    description: 'Mapeo e documentación do patrimonio culinario galego contemporáneo. A través de entrevistas e ferramentas dixitais, reconstruímos a identidade gastronómica de Galicia desde as historias persoais, as lembranzas e a cociña de cada día.'
                },
                {
                    title: 'Pescatori Digitali 25',
                    url: 'en-construccion.html?lang=gl',
                    image: 'imagenes/proyectos/pescatori-25.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'Cociñamos para este coliving pop-up levado a cabo en Stintino, Sardeña, tendo sempre en mente a relación entre produto local, temporalidade e comunidade.'
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
                    description: 'Obradoiros prácticos de pasta artesanal, fermentación, conservas e técnicas culinarias tradicionais. Unha oportunidade de aprendizaxe colectivo para particulares, grupos, empresas e centros culturais. Recuperamos o coñecemento culinario a través da práctica compartida e a experimentación.'
                },
                {
                    title: 'Investigación gastronómica',
                    description: 'Proxectos de investigación sobre patrimonio culinario, memoria alimentaria e cultura gastronómica local. A partir dos cales documentamos receitas, deseñamos proxectos e desenvolvemos programas de mediación cultural para museos, centros culturais e institucións.'
                }
            ]
        },

        contact: {
            title: 'Contacto',
            tagline: 'Encántannos as ideas novas.',
            body: 'Se tes un proxecto entre mans, se che ocorreu algo que puidéramos facer xuntos ou simplemente queres saber máis sobre o que facemos, escríbenos. Gústannos as colaboracións que nacen dunha conversa.',
            labels: {
                email: 'Email',
                whatsapp: 'WhatsApp',
                instagram: 'Instagram'
            }
        },

        footer: {
            rights: 'mojar - 2026',
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
            subtitle: 'A gastronomic studio where food is research, creation and encounter. We work at the intersection of the culinary, the social and the artistic.'
        },

        about: {
            title: 'About us',
            intro: 'mojar is a gastronomic research and creation collective formed by Pilar and Louie. We work with communities, local products and food memory to create events, workshops and artistic projects that explore our relationship with food. Based in Galicia but with no geographical limits, we document culinary traditions at risk of disappearing, exploring and designing new ways of understanding gastronomic heritage.',
            team: [
                {
                    name: 'Pilar',
                    photo: 'imagenes/pilar.jpg',
                    role: 'Project design · Field research',
                    description: 'Pilar handles community engagement, project design and field research. Her focus is on building bridges between ideas and people, creating experiences that connect the gastronomic with the social and cultural.'
                },
                {
                    name: 'Louie',
                    photo: 'imagenes/louie.jpg',
                    role: 'Conceptualisation · Culinary creation',
                    description: 'Louie works with concepts and brings culinary expertise to the project. He is the more creative profile, developing proposals that push the boundaries of the gastronomic from an experimental perspective rooted in the product.'
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
                produccion: 'Artisan production',
                practicas: 'Artistic practices'
            },
            items: [
                {
                    title: 'Pescatori Digitali 24',
                    url: 'en-construccion.html?lang=en',
                    image: 'imagenes/proyectos/pescatori-24.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'We cooked for this pop-up coliving in Stintino, Sardinia, always keeping in mind the relationship between local produce, seasonality and community.'
                },
                {
                    title: 'The new heritage project',
                    url: 'proyectos/new-heritage/new-heritage-project.html',
                    image: 'imagenes/proyectos/new-heritage-project.jpg',
                    tags: ['practicas', 'produccion', 'investigacion'],
                    description: 'Research into traditional culinary heritage at risk of disappearing. We document landscapes, recipes and local food practices to create artisan products rooted in the gastronomic memory of the territory.'
                },
                {
                    title: 'Pasta workshops',
                    url: 'en-construccion.html?lang=en',
                    image: 'imagenes/proyectos/talleres-pasta.jpg',
                    tags: ['talleres'],
                    description: 'These workshops take place in different locations and with different recipes. Their aim is to introduce simple practices, seeking a connection with the manual and the rudimentary — a slow approach to processes of transformation.'
                },
                {
                    title: 'Designing a board',
                    url: 'en-construccion.html?lang=en',
                    image: 'imagenes/proyectos/gnocchi.jpg',
                    tags: ['produccion'],
                    description: 'Design and production of this gnocchi board using reclaimed wood, crafted by hand. An exercise in making what we need to cook. Documentation of the process.'
                },
                {
                    title: 'G(h)osts',
                    url: 'en-construccion.html?lang=en',
                    image: 'imagenes/proyectos/ghosts.jpg',
                    tags: ['talleres', 'practicas'],
                    description: 'A workshop in which we explore gastronomic memory through smells, flavours and gestures. A community art project where food becomes a ritual of invocation: we recover family recipes and make the absent present.'
                },
                {
                    title: 'Archives of belonging',
                    url: 'en-construccion.html?lang=en',
                    image: 'imagenes/proyectos/archivos-pertenencia.jpg',
                    tags: ['practicas', 'talleres', 'investigacion'],
                    description: 'Mapping and documentation of contemporary Galician culinary heritage. Through interviews and digital tools, we reconstruct the gastronomic identity of Galicia through personal stories, memories and everyday cooking.'
                },
                {
                    title: 'Pescatori Digitali 25',
                    url: 'en-construccion.html?lang=en',
                    image: 'imagenes/proyectos/pescatori-25.jpg',
                    tags: ['eventos', 'investigacion'],
                    description: 'We cooked for this pop-up coliving in Stintino, Sardinia, always keeping in mind the relationship between local produce, seasonality and community.'
                }
            ]
        },

        services: {
            title: 'Services',
            items: [
                {
                    title: 'Private chef for events',
                    description: 'We design personalised culinary experiences for private events, corporate gatherings and cultural presentations. We work with local seasonal produce, creating menus that tell stories and connect with the territory. Each event is an opportunity to explore gastronomic narrative in a unique way.'
                },
                {
                    title: 'Cooking workshops',
                    description: 'Hands-on workshops in artisan pasta, fermentation, preserves and traditional culinary techniques. A collective learning experience for individuals, groups, companies and cultural centres. We recover culinary knowledge through shared practice and experimentation.'
                },
                {
                    title: 'Gastronomic research',
                    description: 'Research projects on culinary heritage, food memory and local gastronomic culture. From these we document recipes, design projects and develop cultural mediation programmes for museums, cultural centres and institutions.'
                }
            ]
        },

        contact: {
            title: 'Contact',
            tagline: 'We love new ideas.',
            body: 'If you have a project on the go, something you think we could do together, or you simply want to know more about what we do — write to us. We like collaborations that begin with a conversation.',
            labels: {
                email: 'Email',
                whatsapp: 'WhatsApp',
                instagram: 'Instagram'
            }
        },

        footer: {
            rights: 'mojar - 2026',
            email: 'mojar.buenasmaneras@gmail.com',
            phone: '+34 605 79 19 95',
            social: {
                instagram: 'https://instagram.com/mmmojar'
            }
        }
    }
}