/**
 * questions.js — Mujeres Que Cambian La Historia
 * ─────────────────────────────────────────────
 * 10 preguntas por nivel · 4 niveles
 *
 * Correcciones aplicadas (2026-03-09):
 *  - ADULTO  Q9 (Coco Chanel):   opción A → bikini (no la minifalda)
 *  - EXPERTO Q9 (Frida/Amelia):  opción C → "del siglo XXI" (falsa → única correcta es B)
 *  - INFANTIL Q8 (Gloria/Ana):   opción B incluye "Lucy Montgomery, creadora del personaje..."
 */

const LEVELS = {
  infantil: {
    id:    "infantil",
    name:  "Infantil",
    age:   "Hasta 7 años",
    desc:  "Preguntas sencillas y divertidas para los más pequeños.",
    color: "amber",
    file:  "infantil.html",
  },
  juvenil: {
    id:    "juvenil",
    name:  "Juvenil",
    age:   "De 7 a 14 años",
    desc:  "Preguntas que conectan personajes y épocas distintas.",
    color: "steel",
    file:  "juvenil.html",
  },
  adulto: {
    id:    "adulto",
    name:  "Adulto",
    age:   "Más de 14 años — Fácil",
    desc:  "Ideas, conceptos clave y el legado de cada mujer.",
    color: "sage",
    file:  "adulto.html",
  },
  experto: {
    id:    "experto",
    name:  "Experto",
    age:   "Más de 14 años — Difícil",
    desc:  "Fechas, datos concretos y conexiones entre historias.",
    color: "plum",
    file:  "experto.html",
  },
};

const QUESTIONS = {

  // ─── INFANTIL (10) ───────────────────────────────────────────
  infantil: [
    {
      persona: "Varios personajes",
      q:       "En la exposición hay un cuadro especial sin nombre. ¿A quién crees que representa?",
      opts:    [
        "A todas las madres del mundo",
        "A ti, a mí, a todas y cada una de las mujeres que cambian su historia cada día",
        "A los hombres que ayudaron a las mujeres",
        "A las grandes inventoras olvidadas",
      ],
      correct: 1,
    },
    {
      persona: "Varios personajes",
      q:       "¿Cuál de estas mujeres de la exposición es un personaje de un libro y no existió de verdad?",
      opts:    [
        "Cleopatra, la reina de Egipto",
        "Florence Nightingale, la enfermera",
        "Ana de las Tejas Verdes",
        "Rosa Parks",
      ],
      correct: 2,
    },
    {
      persona: "Varios personajes",
      q:       "En la exposición hay reinas y princesas. ¿Cuántas puedes encontrar?",
      opts:    [
        "Una",
        "Dos",
        "Tres (Cleopatra, Reina Isabel II y Diana de Gales)",
        "Cuatro",
      ],
      correct: 2,
    },
    {
      persona: "Florence Nightingale",
      q:       "Florence Nightingale, la famosa enfermera, visitaba a los heridos por las noches. ¿Con qué se iluminaba?",
      opts:    ["Una vela", "Un candil", "Una linterna", "Una antorcha"],
      correct: 1,
    },
    {
      persona: "Serena Williams",
      q:       "Serena Williams es una de las mejores deportistas del mundo. ¿En qué deporte?",
      opts:    ["Fútbol", "Natación", "Tenis", "Gimnasia"],
      correct: 2,
    },
    {
      persona: "Rosa Parks",
      q:       "Rosa Parks hizo algo muy valiente en un autobús en Estados Unidos. ¿Qué hizo?",
      opts:    [
        "Se puso a cantar",
        "Se negó a ceder su asiento",
        "Condujo el autobús",
        "Se bajó sin pagar",
      ],
      correct: 1,
    },
    {
      persona: "Cleopatra",
      q:       "Cleopatra era la reina de un país muy famoso por sus pirámides gigantes. ¿De qué país era reina?",
      opts:    ["China", "Roma", "Egipto", "Grecia"],
      correct: 2,
    },
    {
      // CORRECTED: Lucy Montgomery named in question text, options clean
      persona: "Gloria Fuertes · Ana de las Tejas Verdes",
      q:       "Gloria Fuertes, la poeta que escribía para niños y niñas, y Lucy Montgomery (Ana de las Tejas Verdes) tienen algo en común. ¿Qué es?",
      opts:    [
        "Las dos eran pintoras",
        "Las dos escribieron especialmente para niños y niñas",
        "Las dos eran del mismo país",
        "Las dos eran personajes de ficción",
      ],
      correct: 1,
    },
    {
      persona: "Cleopatra · Hipatia",
      q:       "Cleopatra, la reina de Egipto, vivió hace muchísimo tiempo. ¿Cuándo vivió, antes o después del nacimiento de Jesús?",
      opts:    [
        "Mucho después, en el siglo XIX",
        "Antes del nacimiento de Jesús",
        "Al mismo tiempo que Jesús",
        "En la Edad Media",
      ],
      correct: 1,
    },
    {
      persona: "Juana de Arco",
      q:       "Juana de Arco fue una chica joven y valiente de Francia que lideró un ejército. ¿Cuántos años tenía cuando se convirtió en capitana?",
      opts:    ["25 años", "47 años", "17 años", "30 años"],
      correct: 2,
    },
  ],

  // ─── JUVENIL (10) — sin cambios ──────────────────────────────
  juvenil: [
    {
      persona: "Varios personajes",
      q:       "En la exposición hay un cuadro especial sin título. ¿A quién representa?",
      opts:    [
        "A todas las madres",
        "A los hombres",
        "A ti, a mí, a todas y cada una de las mujeres que cambiamos nuestra historia día a día",
        "A las grandes inventoras olvidadas en los libros de historia",
      ],
      correct: 2,
    },
    {
      persona: "Varios personajes",
      q:       "Cuatro mujeres de la exposición han ganado el Premio Nobel. ¿Cuáles son?",
      opts:    [
        "Frida Kahlo, Rosa Parks, Simone de Beauvoir y Amelia Earhart",
        "Diana de Gales, Simone de Beauvoir, Marie Curie e Hipatia",
        "Marie Curie, Wangari Maathai, Teresa de Calcuta y Malala Yousafzai",
        "Amelia Earhart, Hipatia, Gloria Fuertes y Serena Williams",
      ],
      correct: 2,
    },
    {
      persona: "Varios personajes",
      q:       "Rosa Parks, Serena Williams y Wangari Maathai tienen algo en común. ¿Qué es?",
      opts:    [
        "Todas son europeas",
        "Todas son escritoras",
        "Todas lucharon contra la discriminación racial o social",
        "Todas son del siglo XIX",
      ],
      correct: 2,
    },
    {
      persona: "Emmeline Pankhurst",
      q:       "Pankhurst luchó toda su vida por el derecho al voto femenino. ¿Murió antes o después de conseguirlo?",
      opts:    [
        "Después, lo vio cumplido",
        "Antes, murió sin verlo cumplido",
        "No luchó por ningún derecho concreto",
        "Fue ella quien firmó la ley",
      ],
      correct: 1,
    },
    {
      persona: "Concepción Arenal",
      q:       "¿Cuál fue la primera mujer en acudir a la universidad en España, disfrazada de hombre, para que no la expulsaran?",
      opts:    [
        "Dolors Aleu i Riera",
        "Gloria Fuertes",
        "Carmen Barrero",
        "Concepción Arenal",
      ],
      correct: 3,
    },
    {
      persona: "Las 13 Rosas",
      q:       "¿Existieron en la realidad las 13 Rosas?",
      opts:    [
        "No hay datos históricos determinantes",
        "No, fue un símbolo imaginario de la represión franquista",
        "Son solo las protagonistas ficticias de una película de 2007",
        "Sí, incluso se habla de que en realidad fueron 14 las mujeres fusiladas",
      ],
      correct: 3,
    },
    {
      persona: "Catalina II de Rusia",
      q:       "Catalina II de Rusia destacó durante su reinado por:",
      opts:    [
        "Por su belleza",
        "Por su altura, era una mujer de más de 2 metros",
        "Modernizar y convertir a Rusia en una superpotencia del siglo XIX",
        "Por haber asesinado a su marido",
      ],
      correct: 2,
    },
    {
      persona: "Madres de la Plaza de Mayo",
      q:       "Las Madres de la Plaza de Mayo son una asociación de:",
      opts:    ["Brasil", "Argentina", "España", "Estados Unidos"],
      correct: 1,
    },
    {
      persona: "Jane Austen",
      q:       "Elizabeth Bennet es la protagonista de Orgullo y Prejuicio, un libro escrito por:",
      opts:    [
        "Gloria Fuertes",
        "Mary Shelley",
        "Jane Austen",
        "Simone de Beauvoir",
      ],
      correct: 2,
    },
    {
      persona: "Malala Yousafzai",
      q:       "La persona más joven en recibir el Premio Nobel de la Paz, con apenas 17 años, fue:",
      opts:    [
        "Esther Duflo, Premio Nobel de Economía",
        "Marie Curie, Premio Nobel de Química",
        "Greta Thunberg, activista medioambiental",
        "Malala Yousafzai, Premio Nobel de la Paz",
      ],
      correct: 3,
    },
  ],

  // ─── ADULTO (10) ─────────────────────────────────────────────
  adulto: [
    {
      persona: "Marie Curie · Wangari Maathai",
      q:       "Marie Curie y Wangari Maathai tienen algo en común. ¿Qué es?",
      opts:    [
        "Ambas son escritoras feministas",
        "Ambas son del mismo continente",
        "Ambas ganaron el Premio Nobel",
        "Ambas lucharon por el derecho al voto",
      ],
      correct: 2,
    },
    {
      persona: "Amelia Earhart",
      q:       "Amelia Earhart creó la organización 'The Ninety-Nines'. ¿Cuál era su propósito?",
      opts:    [
        "Recaudar fondos para la aviación comercial",
        "Defender el sufragio femenino",
        "Unir y apoyar a las mujeres piloto",
        "Promover la seguridad en los vuelos",
      ],
      correct: 2,
    },
    {
      persona: "Reina Isabel II",
      q:       "¿Cuál de estas afirmaciones sobre la Reina Isabel II es correcta según la exposición?",
      opts:    [
        "Fue la primera mujer en gobernar un país europeo",
        "Tuvo el reinado más longevo de la historia, demostrando que las mujeres podían liderar",
        "Impulsó el derecho al voto femenino en el Reino Unido",
        "Fue la primera reina en abdicar voluntariamente",
      ],
      correct: 1,
    },
    {
      persona: "Teresa de Calcuta",
      q:       "Santa Teresa de Calcuta fue conocida por:",
      opts:    [
        "Por sus misiones en África",
        "Por haber nacido en Ávila",
        "Ser la primera mujer Papa de la historia",
        "Su dedicación a los más pobres, enfermos y desfavorecidos de la India",
      ],
      correct: 3,
    },
    {
      persona: "Jane Goodall",
      q:       "Jane Goodall dedicó su vida a estudiar:",
      opts:    [
        "El lobo ibérico",
        "Los elefantes africanos",
        "Los chimpancés",
        "Los erizos de mar",
      ],
      correct: 2,
    },
    {
      persona: "Pippi Calzaslargas",
      q:       "Pippi Calzaslargas era:",
      opts:    [
        "Vivía con su abuelito",
        "Estaba malita y sus aventuras las soñaba desde la cama",
        "Tenía mucha personalidad y siempre peleaba por las injusticias",
        "Una niña tímida y sin amigos",
      ],
      correct: 2,
    },
    {
      persona: "Mary Shelley",
      q:       "Mary Shelley escribió:",
      opts:    [
        "La Familia Adams",
        "Frankenstein",
        "No fue escritora",
        "Pippi Calzaslargas",
      ],
      correct: 1,
    },
    {
      persona: "Ruth Bader Ginsburg",
      q:       "Ruth Bader Ginsburg fue:",
      opts:    [
        "Periodista de la prensa rosa",
        "La primera mujer presidenta de los EEUU",
        "Escritora y activista provida",
        "Abogada y jueza defensora de los derechos de la mujer",
      ],
      correct: 3,
    },
    {
      // CORRECTED: opción A → bikini (no la minifalda)
      persona: "Coco Chanel",
      q:       "Coco Chanel aportó, gracias a sus diseños de moda:",
      opts:    [
        "El bikini y la moda playera para las clases sociales",
        "La popularización de los tacones de aguja",
        "Tejidos más ecológicos y sostenibles",
        "Libertad de movimiento y la ruptura con estereotipos de género",
      ],
      correct: 3,
    },
    {
      persona: "Helen Keller",
      q:       "Helen Keller aprovechó su propia experiencia para:",
      opts:    [
        "Refugiarse en un convento",
        "Demostrar que las personas con discapacidad también pueden ser actrices",
        "Hacer un musical con su vida",
        "Mejorar y crear nuevos métodos formativos para la educación de personas sordociegas",
      ],
      correct: 3,
    },
  ],

  // ─── EXPERTO (10) ────────────────────────────────────────────
  experto: [
    {
      persona: "Varios personajes",
      q:       "¿Cuántas mujeres de la exposición son personas reales y cuántas son personajes de ficción?",
      opts:    [
        "Mitad y mitad",
        "Todas son personas reales",
        "31 son mujeres de carne y hueso, y 4 personajes de ficción",
        "5 son mujeres de ficción y 30 reales",
      ],
      correct: 2,
    },
    {
      persona: "Juana de Arco",
      q:       "Juana de Arco fue quemada en la hoguera porque:",
      opts:    [
        "Por tener una enfermedad mental",
        "Condenada por hereje, porque la descubrieron haciendo rituales de brujería en el bosque",
        "Porque estaba enferma de lepra, y para evitar contagios",
        "Condenada por hereje, pero en realidad encubría un complot político para acabar con su poder",
      ],
      correct: 3,
    },
    {
      persona: "Harriet Tubman",
      q:       "¿Es cierto que Harriet Tubman es la primera mujer en aparecer en un billete de dólar americano?",
      opts:    [
        "Sí, es un billete de 20 dólares",
        "Sí, pero es de dólar canadiense",
        "No, no fue la primera, hay más anteriores",
        "No, aún no circula de forma oficial ese billete",
      ],
      correct: 3,
    },
    {
      persona: "Hipatia · Marie Curie · Serena Williams",
      q:       "Hipatia, Marie Curie y Serena Williams, pese a vivir en épocas muy distintas, comparten un patrón histórico. ¿Cuál?",
      opts:    [
        "Las tres murieron jóvenes en accidentes",
        "Las tres renunciaron a su vida familiar por su carrera",
        "Las tres sufrieron la invisibilización o minusvaloración de sus logros por ser mujeres",
        "Las tres ganaron el Premio Nobel",
      ],
      correct: 2,
    },
    {
      persona: "Rosa Parks",
      q:       "¿Cuántos días duró el boicot a los autobuses de Montgomery desencadenado por el gesto de Rosa Parks?",
      opts:    ["100 días", "200 días", "381 días", "500 días"],
      correct: 2,
    },
    {
      persona: "Wangari Maathai",
      q:       "¿En qué año fundó Wangari Maathai el Movimiento Cinturón Verde de África?",
      opts:    ["1965", "1972", "1977", "1985"],
      correct: 2,
    },
    {
      persona: "Rosie the Riveter",
      q:       "Rosie the Riveter representa a miles de mujeres reales. ¿Qué les ocurrió cuando terminó la Segunda Guerra Mundial?",
      opts:    [
        "Fueron reconocidas como heroínas nacionales",
        "Se incorporaron de forma permanente al mercado laboral",
        "Fueron relegadas de nuevo a su rol tradicional de amas de casa",
        "Fundaron sindicatos para defender sus derechos",
      ],
      correct: 2,
    },
    {
      persona: "Amelia Tinagus",
      q:       "Amelia Tinagus publicó una obra en 2021. ¿Cuál es y qué idea central defiende?",
      opts:    [
        "\"Amelia, historia de una lucha\" — la importancia del deporte femenino",
        "\"La revuelta de las putas\" — la crítica a la industria de explotación sexual y que lo personal es político",
        "\"La revuelta de las putas\" — la defensa del trabajo sexual como trabajo libre",
        "\"Historia de una lucha\" — la inserción laboral de mujeres migrantes",
      ],
      correct: 1,
    },
    {
      // CORRECTED: opción C → "del siglo XXI" (falsa; solo B es correcta)
      persona: "Frida Kahlo · Amelia Tinagus",
      q:       "¿Qué tienen en común Frida Kahlo y Amelia Tinagus?",
      opts:    [
        "Ambas son políticas",
        "Ambas convirtieron su historia personal en obra y herramienta de cambio",
        "Ambas son del siglo XXI",
        "Ambas son pintoras",
      ],
      correct: 1,
    },
    {
      persona: "Simone de Beauvoir",
      q:       "Simone de Beauvoir es autora de una de estas frases. ¿Cuál?",
      opts:    [
        "\"El mundo será libre cuando las mujeres lo sean\"",
        "\"No naces mujer, te conviertes en una\"",
        "\"Una manera de vivir individualmente y una manera de luchar colectivamente\"",
        "\"La libertad femenina es la base de toda libertad\"",
      ],
      correct: 1,
    },
  ],

};