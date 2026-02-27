/**
 * questions.js
 * ─────────────────────────────────────────────────────────────
 * Fuente de verdad para todos los cuestionarios.
 * Para editar preguntas o respuestas, solo toca este archivo.
 *
 * Estructura:
 *   LEVELS  → metadatos de cada nivel (nombre, color, descripción…)
 *   QUESTIONS → array de preguntas por nivel
 *
 * "correct" es el índice (0-based) de la opción correcta en "opts".
 * ─────────────────────────────────────────────────────────────
 */

const LEVELS = {
  infantil: {
    id:      "infantil",
    name:    "Infantil",
    age:     "Hasta 7 años",
    desc:    "Preguntas sencillas y divertidas para los más pequeños.",
    color:   "amber",
    file:    "infantil.html",
  },
  juvenil: {
    id:      "juvenil",
    name:    "Juvenil",
    age:     "De 7 a 14 años",
    desc:    "Preguntas que conectan personajes y épocas distintas.",
    color:   "steel",
    file:    "juvenil.html",
  },
  adulto: {
    id:      "adulto",
    name:    "Adulto",
    age:     "Más de 14 años — Fácil",
    desc:    "Ideas, conceptos clave y el legado de cada mujer.",
    color:   "sage",
    file:    "adulto.html",
  },
  experto: {
    id:      "experto",
    name:    "Experto",
    age:     "Más de 14 años — Difícil",
    desc:    "Fechas, datos concretos y conexiones entre historias.",
    color:   "plum",
    file:    "experto.html",
  },
};

const QUESTIONS = {

  // ─── INFANTIL ────────────────────────────────────────────────
  infantil: [
    {
      persona:  "Varios personajes",
      q:        "¿Cuál de estas mujeres de la exposición es un personaje de un libro y no existió de verdad?",
      opts:     ["Cleopatra", "Florence Nightingale", "Ana de las Tejas Verdes", "Rosa Parks"],
      correct:  2,
    },
    {
      persona:  "Varios personajes",
      q:        "En la exposición hay reinas y princesas. ¿Cuántas puedes encontrar?",
      opts:     ["Una", "Dos", "Tres (Cleopatra, Reina Isabel II y Diana de Gales)", "Cuatro"],
      correct:  2,
    },
    {
      persona:  "Florence Nightingale",
      q:        "Florence visitaba a los enfermos por las noches. ¿Con qué se iluminaba?",
      opts:     ["Una vela", "Un candil", "Una linterna", "Una antorcha"],
      correct:  1,
    },
    {
      persona:  "Serena Williams",
      q:        "¿Qué deporte convirtió a Serena Williams en una de las mejores del mundo?",
      opts:     ["Fútbol", "Natación", "Tenis", "Gimnasia"],
      correct:  2,
    },
    {
      persona:  "Rosa Parks",
      q:        "Rosa Parks hizo algo muy valiente en un autobús. ¿Qué hizo?",
      opts:     ["Se puso a cantar", "Se negó a ceder su asiento", "Condujo el autobús", "Se bajó sin pagar"],
      correct:  1,
    },
  ],

  // ─── JUVENIL ─────────────────────────────────────────────────
  juvenil: [
    {
      persona:  "Varios personajes",
      q:        "Dos mujeres de la exposición ganaron el Premio Nobel. ¿Quiénes son?",
      opts:     [
        "Frida Kahlo y Rosa Parks",
        "Diana de Gales y Simone de Beauvoir",
        "Marie Curie y Wangari Maathai",
        "Amelia Earhart e Hipatia",
      ],
      correct:  2,
    },
    {
      persona:  "Varios personajes",
      q:        "Rosa Parks, Serena Williams y Wangari Maathai tienen algo en común. ¿Qué es?",
      opts:     [
        "Todas son europeas",
        "Todas son escritoras",
        "Todas lucharon contra la discriminación racial o social",
        "Todas son del siglo XIX",
      ],
      correct:  2,
    },
    {
      persona:  "Varios personajes",
      q:        "¿Cuál de estas mujeres de la exposición vivió antes del año 0 (antes de Cristo)?",
      opts:     ["Hipatia", "Florence Nightingale", "Cleopatra", "Gloria Fuertes"],
      correct:  2,
    },
    {
      persona:  "Gloria Fuertes · Ana de las Tejas Verdes",
      q:        "Gloria Fuertes y Ana de las Tejas Verdes tienen algo en común. ¿Qué es?",
      opts:     [
        "Ambas son pintoras",
        "Ambas escribieron especialmente para el público infantil y juvenil",
        "Ambas son del mismo país",
        "Ambas son personajes ficticios",
      ],
      correct:  1,
    },
    {
      persona:  "Emmiline Pankhurst",
      q:        "Pankhurst luchó toda su vida por el derecho al voto femenino. ¿Murió antes o después de conseguirlo?",
      opts:     [
        "Después, lo vio cumplido",
        "Antes, murió sin verlo cumplido",
        "No luchó por ningún derecho concreto",
        "Fue ella quien firmó la ley",
      ],
      correct:  1,
    },
  ],

  // ─── ADULTO ──────────────────────────────────────────────────
  adulto: [
    {
      persona:  "Marie Curie · Wangari Maathai",
      q:        "Marie Curie y Wangari Maathai tienen algo en común. ¿Qué es?",
      opts:     [
        "Ambas son escritoras feministas",
        "Ambas son del mismo continente",
        "Ambas ganaron el Premio Nobel",
        "Ambas lucharon por el derecho al voto",
      ],
      correct:  2,
    },
    {
      persona:  "Frida Kahlo · Amelia Tinagus",
      q:        "¿Qué tienen en común Frida Kahlo y Amelia Tinagus?",
      opts:     [
        "Ambas son políticas",
        "Ambas convirtieron su historia personal en obra y herramienta de cambio",
        "Ambas son del mismo siglo",
        "Ambas son pintoras",
      ],
      correct:  1,
    },
    {
      persona:  "Amelia Earhart",
      q:        "Amelia Earhart creó la organización 'The Ninety-Nines'. ¿Cuál era su propósito?",
      opts:     [
        "Recaudar fondos para la aviación comercial",
        "Defender el sufragio femenino",
        "Unir y apoyar a las mujeres piloto",
        "Promover la seguridad en los vuelos",
      ],
      correct:  2,
    },
    {
      persona:  "Simone de Beauvoir",
      q:        "Simone de Beauvoir definió el feminismo de una manera muy concreta. ¿Cuál de estas frases es suya?",
      opts:     [
        "\"El mundo será libre cuando las mujeres lo sean\"",
        "\"No naces mujer, te conviertes en una\"",
        "\"Una manera de vivir individualmente y una manera de luchar colectivamente\"",
        "\"La libertad femenina es la base de toda libertad\"",
      ],
      correct:  2,
    },
    {
      persona:  "Reina Isabel II",
      q:        "¿Cuál de estas afirmaciones sobre la Reina Isabel II es correcta según la exposición?",
      opts:     [
        "Fue la primera mujer en gobernar un país europeo",
        "Tuvo el reinado más longevo de la historia, demostrando que las mujeres podían liderar",
        "Impulsó el derecho al voto femenino en el Reino Unido",
        "Fue la primera reina en abdicar voluntariamente",
      ],
      correct:  1,
    },
  ],

  // ─── EXPERTO ─────────────────────────────────────────────────
  experto: [
    {
      persona:  "Hipatia · Marie Curie · Serena Williams",
      q:        "Hipatia, Marie Curie y Serena Williams, pese a vivir en épocas muy distintas, comparten un patrón histórico. ¿Cuál?",
      opts:     [
        "Las tres murieron jóvenes en accidentes",
        "Las tres renunciaron a su vida familiar por su carrera",
        "Las tres sufrieron la invisibilización o minusvaloración de sus logros por ser mujeres",
        "Las tres ganaron el Premio Nobel",
      ],
      correct:  2,
    },
    {
      persona:  "Rosa Parks",
      q:        "¿Cuántos días duró el boicot a los autobuses de Montgomery desencadenado por el gesto de Rosa Parks?",
      opts:     ["100 días", "200 días", "381 días", "500 días"],
      correct:  2,
    },
    {
      persona:  "Wangari Maathai",
      q:        "¿En qué año fundó Wangari Maathai el Movimiento Cinturón Verde de África?",
      opts:     ["1965", "1972", "1977", "1985"],
      correct:  2,
    },
    {
      persona:  "Rosie the Riveter",
      q:        "Rosie the Riveter representa a miles de mujeres reales. ¿Qué les ocurrió cuando terminó la Segunda Guerra Mundial?",
      opts:     [
        "Fueron reconocidas como heroínas nacionales",
        "Se incorporaron de forma permanente al mercado laboral",
        "Fueron relegadas de nuevo a su rol tradicional de amas de casa",
        "Fundaron sindicatos para defender sus derechos",
      ],
      correct:  2,
    },
    {
      persona:  "Amelia Tinagus",
      q:        "Amelia Tinagus publicó una obra en 2021. ¿Cuál es y qué idea central defiende?",
      opts:     [
        "\"Amelia, historia de una lucha\" — la importancia del deporte femenino",
        "\"La revuelta de las putas\" — la crítica a la industria de explotación sexual y que lo personal es político",
        "\"La revuelta de las putas\" — la defensa del trabajo sexual como trabajo libre",
        "\"Historia de una lucha\" — la inserción laboral de mujeres migrantes",
      ],
      correct:  1,
    },
  ],

};
