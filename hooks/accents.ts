// Each accent has two lists: what the spinner says while a turn runs (`working`)
// and the word that closes the turn in the transcript (`done`, drawn before the
// duration: "Listo, sumercé 4s").

export type Accent = { label: string; working: string[]; done: string[] }

export const ACCENTS = {
  rolo: {
    label: 'Rolo (Bogotá)',
    working: [
      'Camellando, sumercé', 'Echándole cráneo', 'Dándole juicio', 'Haciendo la vuelta',
      'Pidiendo un tintico', 'Comiendo changua', 'Tomando onces', 'Atascado en el trancón',
      'Esperando el TransMilenio', 'Subiendo a Monserrate', 'Cuadrando la vuelta, chino',
      'Sacando el paraguas', 'Pidiendo el ajiaco', 'Mojando la almojábana',
      'Caminando por la Séptima', 'Haciendo fila en el SITP', 'Esquivando el pico y placa',
      'Escampando el aguacero', 'Calentando el chocolate santafereño', 'Poniéndome la ruana',
      'Haciendo vaca', 'Pensándola juiciosamente', 'Firmes',
    ],
    done: [
      'Listo, sumercé', 'Qué chévere', 'Bacanísimo', 'Quedó una chimba', 'Melo, chino',
      'Coronamos', 'Qué nota', 'Juicioso', 'Llegó la buseta', 'De una, sumercé', 'Firmes',
    ],
  },
  paisa: {
    label: 'Paisa (Antioquia)',
    working: [
      'Camellando, parce', 'Echándole berraquera', 'Voleando machete', 'Pensando, pues',
      'Haciendo la vuelta, mijo', 'Subiendo en el Metrocable', 'Comiéndome una bandeja paisa',
      'Tomando tinto en el parque', 'Arriando las mulas', 'Desvarando', 'Bajando de Santa Elena',
      'Armando la silleta', 'Pidiendo una arepa con quesito', 'Montando el sancocho',
      'Echándole cabeza, pues', 'Dándole como a rata',
    ],
    done: [
      'Listo, pues', 'Qué chimba, parce', 'Eso, mijo', 'Ave María, quedó', 'Bien pueda',
      'Bacano, parcero', 'Melo, pues', 'Hágale pues', 'Quedó berraco',
    ],
  },
  costeno: {
    label: 'Costeño (Caribe)',
    working: [
      'Rebuscándomela, ajá', 'Echando cerebro', 'Mamando gallo', 'Bailando champeta',
      "Comiendo arepa e' huevo", 'Esperando la brisa', 'Prendiendo el picó',
      "Cogiendo fresco bajo el palo e' mango", 'Echando cuento en la terraza',
      'Tomando Kola Román', 'Haciendo la vaina', 'Arreglando la vaina', 'Pidiendo un bollo limpio',
      'Comprando raspao', 'Esperando el Carnaval',
    ],
    done: [
      'Ajá, quedó', 'Eche, qué nota', 'Ya está, mi llave', 'Nojoda, quedó bacano',
      'Erda, coronamos', 'Listo, compadre', 'Quedó fue lo que es', 'Bien hecho, mi llave',
    ],
  },
  caleno: {
    label: 'Caleño (Valle)',
    working: [
      'Camellando, mirá', 'Haciendo el oficio, ve', 'Bailando salsa', 'Tomando lulada',
      'Comiendo pandebono', 'Pidiendo un cholao', 'Esperando el MÍO', 'Subiendo a San Antonio',
      'Pegándome un aborrajado', 'Pensándola, oís', 'Dándole al tumbao',
      'Cogiendo la brisa de las cinco', 'Pidiendo un champús',
    ],
    done: [
      'Ve, qué bacano', 'Listo, mirá', 'Oís, quedó', 'Qué chimba, ve', 'Bien pueda, pues',
      'Ya está, mi socio',
    ],
  },
  santandereano: {
    label: 'Santandereano',
    working: [
      'Camellando, mano', 'Echándole verraquera, mano', 'Comiendo hormigas culonas',
      'Pidiendo un mute', 'Tomando chicha', 'Bajando al Chicamocha', 'Hágale, mano',
      'Pensándola con calma, mano', 'Dándole como es, mano', 'Comiendo carne oreada',
      'Pidiendo una pepitoria',
    ],
    done: [
      'Listo, mano', 'Quedó bien verraco, mano', 'Qué chimba, mano', 'Coronamos, mano',
      'Así es, mano',
    ],
  },
  pastuso: {
    label: 'Pastuso (Nariño)',
    working: [
      'Camellando, ve', 'Comiendo cuy', 'Tomando hervido', 'Achachay, qué frío',
      'Esperando el Carnaval de Negros y Blancos', 'Echándole cabeza, ve', 'Subiendo al Galeras',
      'Pidiendo un helado de paila', 'Bajando a la Laguna de la Cocha', 'Pasando el frío, ve',
    ],
    done: ['Ya está, ve', 'Listo, pues', 'Quedó bonito, ve', 'Coronamos, ve', 'Bien, pues'],
  },
  llanero: {
    label: 'Llanero (Orinoquía)',
    working: [
      'Arreando el ganado', 'Asando la mamona', 'Echando cuento al pie del fogón',
      'Templando el arpa', 'Cantando un joropo', 'Cruzando el caño', 'Ensillando el caballo',
      'Tomando guarapo', 'Echándole cabeza, compae', 'Esperando que escampe en el llano',
    ],
    done: ['Listo, compae', 'Ajá, compae', 'Quedó como es', 'Coronamos, compadre', 'Bien llanero'],
  },
  boyacense: {
    label: 'Boyacense',
    working: [
      'Camellando, sumercé', 'Pidiendo un cuchuco', 'Tomando guarapo', 'Ordeñando las vacas',
      'Arando la tierrita', 'Poniéndome la ruana', 'Sembrando papa', 'Echándole cabeza, sumercé',
      'Comiendo arepa boyacense', 'Pasando el páramo', 'Subiendo a Villa de Leyva',
      'Haciendo el mandado, mi señor',
    ],
    done: [
      'Listo, sumercé', 'Ya quedó, mi señor', 'Juicioso, sumercé', 'Qué bonito quedó, sumercé',
    ],
  },
} satisfies Record<string, Accent>

export type AccentName = keyof typeof ACCENTS

const all = Object.values(ACCENTS)

export const MIX: Accent = {
  label: 'Mix',
  working: all.flatMap(a => a.working),
  done: all.flatMap(a => a.done),
}

export const accentFor = (name: unknown): Accent =>
  typeof name === 'string' && name in ACCENTS ? ACCENTS[name as AccentName] : name === 'mix' ? MIX : ACCENTS.rolo

export const GOAL_MET = 'Bienvenido a la patria milagro'
