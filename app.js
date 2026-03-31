
const WHATSAPP_NUMBER = "5492216247929";

const CSV_PRICE_DATA = {
  agapantus: { precio: 7000 },
  aromaticas: { precio: 3000 },
  "cola de burro": { precio: 8000, agotado: true },
  colgantes: { precio: 8000 },
  "gazana gigante": { precio: 1700, agotado: true },
  "helecho arroz": { precio: 2000 },
  "limonero 4 estaciones": { precio: 30000 },
  "manto de virgen": { precio: 8000 },
  "ojo de poeta": { precio: 6000, agotado: true },
  pensamientos: { precio: 4000 },
  rosario: { precio: 8000 },
  rudas: { precio: 1500 },
  "trepadores santa rita": { precio: 8000 },
  geranios: { precio: 4000, agotado: true },
  "violeta de los alpes": { precio: 10000 },
  suculentas: { precio: 2000 },
  cactus: { precio: 4000 },
  "rosa china": { precio: 8000 },
  huerta: { precio: 3000 },
  gomero: { precio: 50000 },
  ficus: { precio: 23000 },
  marginata: { precio: 60000 },
  "potus n14": { precio: 7000 },
  "strelitzia reginae": { precio: 42000 },
  "palo de agua grande": { precio: 70000 },
  "enamorada del muro": { precio: 2500 },
  dietes: { precio: 7000 },
  "jazmin kimura cuatro estaciones": { precio: 8000 },
  evonimus: { precio: 5000 },
  "evonimus amarillo": { precio: 8000 },
  "jazmin de leche": { precio: 9000 },
  lantana: { precio: 7000 },
  pindo: { precio: 60000 },
  buxus: { precio: 40000 },
  "laurel de jardin": { precio: 7000 },
  "salvia de jardin": { precio: 7000 },
  "alegria del hogar": { precio: 4000 },
  "rayito de sol": { precio: 4000 },
  petunia: { precio: 4000 },
  gazana: { precio: 4000 },
  copetito: { precio: 4000 },
  bignonia: { precio: 8000 },
  "malvon doble": { precio: 4000 },
  "tierra abonada": { precio: 5000 },
  humus: { precio: 7000 },
  turba: { precio: 2000 },
  perlita: { precio: 2000 },
  "alquimia natural vamp": { precio: 7700 },
  "melaza blackstrap": { precio: 6700 },
  "flora booster": { precio: 6900 },
  "top crop top veg": { precio: 7900 },
  "mosca blanca": { precio: 5600 },
  "jabon potasico": { precio: 4500 },
  nitrofull: { precio: 3000 },
  "sulfato de hierro": { precio: 2700 },
  urea: { precio: 2500 },
  "myrmec hormiga": { precio: 4500 },
  "myrmec hormiga 500 g": { precio: 8300 },
  "guesa sistemico": { precio: 8000 },
  "glacoxan d sist acaricida": { precio: 7000 },
  "glacoxan hormiguicida": { precio: 5600 },
  "mamboreta hongos": { precio: 7500 },
  "fungoxan fungicida sistemico": { precio: 7600 },
  "glacoxan ciper insecticida": { precio: 8600 },
  "myrmec caracoles": { precio: 3300 },
  "myrmec babosas": { precio: 3300 },
  "mamboreta aba": { precio: 14400 },
  "aceite grhesa ec cochinilla": { precio: 6200 },
  "hormona en polvo japon fertil": { precio: 9400 },
  "polvo bordeles fungicida": { precio: 5000 },
  "veneno hormiguicida insecticida": { precio: 5750 },
  "fertifox activador del follaje": { precio: 8100 },
  "fertifox activador de la floracion": { precio: 8100 },
  "senderil herbicida total": { precio: 7500 },
  atrapasoles: { precio: 9000 },
  "cebo para hormigas": { precio: 2300 },
  "hortal liquido": { precio: 6500 },
  "rastrillo metal": { precio: 7100 },
  "cubo 35x35": { precio: 16000 },
  "jardinera 100x20": { precio: 22000 },
  "cubo 40x40": { precio: 20000 },
  "cilindro 30x60": { precio: 29000 },
  "gota 35x48": { precio: 29000 },
  "jardinera 80x20": { precio: 18000 },
  "maceta decorativa grande 58x58": { precio: 25000 },
  "maceta decorativa chica 40x31": { precio: 20000 },
  "jardinera 60x20": { precio: 15000 },
  "prisma 60x30": { precio: 20000 },
  "cubo 30x30": { precio: 14000 },
  "maceta de cemento": { precio: 10000 },
  "jardinera 80x30": { precio: 24000 },
  "cono moderno 35x55": { precio: 29000 },
  "maceta n21": { precio: 1800 },
  "maceta n24": { precio: 5300 },
  "maceta n35": { precio: 7700 },
  "maceta facetada n24": { precio: 7100 },
  "maceta olivia n24": { precio: 6200 },
  "maceta colgante de coco": { precio: 19000 },
  "maceta plastica premium n27": { precio: 10900 },
  "maceta facetada n29": { precio: 10900 }
};

const DATA_KEY_ALIASES = {
  geraneo: "geranios",
  geraneos: "geranios",
  gazania: "gazana",
  perlitas: "perlita",
  huertas: "huerta",
  "strelizia reginae": "strelitzia reginae",
  "jazmin kimura cuatro estacion": "jazmin kimura cuatro estaciones",
  "nitrofull 500gms": "nitrofull",
  "myrmec hormiga 2 500 g": "myrmec hormiga 500 g",
  "glacoxan dsist acaricida": "glacoxan d sist acaricida",
  "glacoxan e hormiguicida": "glacoxan hormiguicida",
  "hormona en polvo japor fertil": "hormona en polvo japon fertil",
  "veneno hormiguicidainsecticida": "veneno hormiguicida insecticida"
};

const DISPLAY_NAME_OVERRIDES = {
  geranios: "Geraneo",
  "gazana gigante": "Gazania gigante",
  gazana: "Gazania",
  "dieffencachia tropic": "Dieffenbachia Tropic",
  "ficus benghanlensis": "Ficus benghalensis",
  "strelitzia reginae": "Strelitzia reginae",
  sansevieria: "Sansevieria",
  perlita: "Perlita",
  "potus n14": "Potus N14",
  "maceta n21": "Maceta N21",
  "maceta n24": "Maceta N24",
  "maceta n35": "Maceta N35",
  "maceta facetada n24": "Maceta facetada N24",
  "maceta facetada n29": "Maceta facetada N29",
  "maceta olivia n24": "Maceta Olivia N24",
  "maceta plastica premium n27": "Maceta plastica premium N27",
  "hormona en polvo japon fertil": "Hormona en polvo Japon fertil",
  "glacoxan d sist acaricida": "Glacoxan d-sist acaricida",
  "glacoxan hormiguicida": "Glacoxan hormiguicida",
  "veneno hormiguicida insecticida": "Veneno hormiguicida insecticida"
};

function normalizeKey(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[-_.]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveDataKey(value) {
  const normalized = normalizeKey(value);
  return DATA_KEY_ALIASES[normalized] || normalized;
}

function formatPlantName(rawName) {
  const normalized = resolveDataKey(rawName);
  return DISPLAY_NAME_OVERRIDES[normalized] || normalized.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getCanonicalPlantName(rawName) {
  return formatPlantName(rawName);
}

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value);
}

function makeProduct({
  id,
  nombre,
  precio = null,
  categoria,
  descripcion,
  imagen,
  imagenes = [],
  colores,
  tamanos,
  agotado = false,
  destacado = false,
  stockLimitado = false,
  seccionPlanta = null
}) {
  return {
    id,
    nombre,
    precio,
    categoria,
    descripcion,
    imagen,
    imagenes: imagenes.length ? imagenes : [imagen],
    colores,
    tamanos,
    agotado,
    destacado,
    stockLimitado,
    ...(seccionPlanta ? { seccionPlanta } : {})
  };
}
const BARRO_COLORS = [
  { nombre: "Terracota", hex: "#b56549" },
  { nombre: "Arcilla clara", hex: "#d6a67e" }
];

const CEMENTO_COLORS = [
  { nombre: "Gris", hex: "#8a8782" }
];

const PLASTICO_COLORS = [
  { nombre: "Terracota", hex: "#b76a45" },
  { nombre: "Negro", hex: "#232323" }
];

const products = [
  makeProduct({ id: 1, nombre: "Floreros de barro", categoria: "barro", descripcion: "Linea artesanal de barro para mesas, recibidores y rincones decorativos.", imagen: "macetas/macetas de barro/floreros/WhatsApp Image 2026-03-29 at 16.04.03 (11).jpeg", colores: BARRO_COLORS, tamanos: ["Chica", "Mediana", "Grande"] }),
  makeProduct({ id: 2, nombre: "Maceta premium de barro", categoria: "barro", descripcion: "Terminacion mas robusta para plantas protagonistas y espacios destacados.", imagen: "macetas/macetas de barro/maceta premium/WhatsApp Image 2026-03-29 at 16.07.19 (10).jpeg", colores: BARRO_COLORS, tamanos: ["Mediana", "Grande"] }),
  makeProduct({ id: 3, nombre: "Macetas clasicas de barro", categoria: "barro", descripcion: "Modelos tradicionales para balcones, patios y jardines urbanos.", imagen: "macetas/macetas de barro/macetas/WhatsApp Image 2026-03-29 at 16.04.03 (7).jpeg", imagenes: ["macetas/macetas de barro/macetas/WhatsApp Image 2026-03-29 at 16.04.03 (7).jpeg", "macetas/macetas de barro/macetas/WhatsApp Image 2026-03-29 at 16.04.03 (8).jpeg", "macetas/macetas de barro/macetas/WhatsApp Image 2026-03-29 at 16.07.19 (13).jpeg"], colores: BARRO_COLORS, tamanos: ["Chica", "Mediana", "Grande"] }),
  makeProduct({ id: 4, nombre: "Cubo 35x35", precio: 16000, categoria: "cemento", descripcion: "Maceta de cemento de formato cubico, ideal para composiciones modernas y limpias.", imagen: "macetas/macetas de cemento/cubo 35x35/IMG_20260330_184157.jpg", imagenes: ["macetas/macetas de cemento/cubo 35x35/IMG_20260330_184157.jpg", "macetas/macetas de cemento/cubo 35x35/IMG_20260330_185640.jpg"], colores: CEMENTO_COLORS, tamanos: ["35x35"] }),
  makeProduct({ id: 5, nombre: "Jardinera 100x20", precio: 22000, categoria: "cemento", descripcion: "Jardinera larga y baja para balcones, separadores verdes y terrazas.", imagen: "macetas/macetas de cemento/jardinera 100x20/IMG_20260330_185659.jpg", colores: CEMENTO_COLORS, tamanos: ["100x20"] }),
  makeProduct({ id: 6, nombre: "Cubo 40x40", precio: 20000, categoria: "cemento", descripcion: "Version amplia para plantas de mayor porte y entradas con presencia.", imagen: "macetas/macetas de cemento/cubo 40x40/IMG_20260330_184306.jpg", imagenes: ["macetas/macetas de cemento/cubo 40x40/IMG_20260330_184306.jpg", "macetas/macetas de cemento/cubo 40x40/IMG_20260330_185708.jpg"], colores: CEMENTO_COLORS, tamanos: ["40x40"] }),
  makeProduct({ id: 7, nombre: "Cilindro 30x60", precio: 29000, categoria: "cemento", descripcion: "Formato vertical para destacar follajes y generar altura visual.", imagen: "macetas/macetas de cemento/cilindro 30x60/IMG_20260330_185614.jpg", imagenes: ["macetas/macetas de cemento/cilindro 30x60/IMG_20260330_185614.jpg", "macetas/macetas de cemento/cilindro 30x60/IMG_20260330_185721.jpg", "macetas/macetas de cemento/cilindro 30x60/WhatsApp Image 2026-03-29 at 16.07.19 (1).jpeg"], colores: CEMENTO_COLORS, tamanos: ["30x60"] }),
  makeProduct({ id: 8, nombre: "Gota 35x48", precio: 29000, categoria: "cemento", descripcion: "Silueta organica pensada para sumar un gesto escultorico al vivero.", imagen: "macetas/macetas de cemento/gota 35x48/IMG_20260330_184230.jpg", imagenes: ["macetas/macetas de cemento/gota 35x48/IMG_20260330_184230.jpg", "macetas/macetas de cemento/gota 35x48/IMG_20260330_185716.jpg", "macetas/macetas de cemento/gota 35x48/WhatsApp Image 2026-03-29 at 16.04.03 (2).jpeg", "macetas/macetas de cemento/gota 35x48/WhatsApp Image 2026-03-29 at 16.07.19 (12).jpeg"], colores: CEMENTO_COLORS, tamanos: ["35x48"] }),
  makeProduct({ id: 9, nombre: "Jardinera 60x20", precio: 15000, categoria: "cemento", descripcion: "Opcion compacta para ventanas, barandas y huertas chicas.", imagen: "macetas/macetas de cemento/jardinera 60x20/IMG_20260330_184203.jpg", imagenes: ["macetas/macetas de cemento/jardinera 60x20/IMG_20260330_184203.jpg", "macetas/macetas de cemento/jardinera 60x20/IMG_20260330_184205.jpg"], colores: CEMENTO_COLORS, tamanos: ["60x20"] }),
  makeProduct({ id: 10, nombre: "Jardinera 80x30", precio: 24000, categoria: "cemento", descripcion: "Jardinera amplia para patios, divisiones verdes y arreglos de volumen.", imagen: "macetas/macetas de cemento/jardinera 80x30/IMG_20260330_185627.jpg", imagenes: ["macetas/macetas de cemento/jardinera 80x30/IMG_20260330_185627.jpg", "macetas/macetas de cemento/jardinera 80x30/IMG_20260330_185704.jpg"], colores: CEMENTO_COLORS, tamanos: ["80x30"] }),
  makeProduct({ id: 11, nombre: "Maceta decorativa grande 58x58", precio: 25000, categoria: "cemento", descripcion: "Pieza decorativa de gran presencia para espacios exteriores o galerias.", imagen: "macetas/macetas de cemento/maceta decorativa  grande 58x58/IMG_20260330_184216.jpg", imagenes: ["macetas/macetas de cemento/maceta decorativa  grande 58x58/IMG_20260330_184216.jpg", "macetas/macetas de cemento/maceta decorativa  grande 58x58/IMG_20260330_185630.jpg", "macetas/macetas de cemento/maceta decorativa  grande 58x58/IMG_20260330_185637.jpg"], colores: [{ nombre: "Gris", hex: "#8a8782" }, { nombre: "Marron", hex: "#8c5a3c" }], tamanos: ["58x58"] }),
  makeProduct({ id: 12, nombre: "Prisma 60x30", precio: 20000, categoria: "cemento", descripcion: "Volumen vertical de lineas rectas para composiciones contemporaneas.", imagen: "macetas/macetas de cemento/prisma 60x30/IMG_20260330_185647.jpg", colores: CEMENTO_COLORS, tamanos: ["60x30"] }),
  makeProduct({ id: 13, nombre: "Maceta de cemento", precio: 10000, categoria: "cemento", descripcion: "Modelo clasico y versatil para sumar cemento a cualquier sector del vivero.", imagen: "macetas/macetas de cemento/maceta de cemento/IMG_20260330_153914.jpg", colores: CEMENTO_COLORS, tamanos: ["Standard"] }),
  makeProduct({ id: 14, nombre: "Cono moderno 35x55", precio: 29000, categoria: "cemento", descripcion: "Perfil estilizado para entradas, halls y espacios de lenguaje limpio.", imagen: "macetas/macetas de cemento/cono moderno  35x55/IMG_20260330_184255.jpg", imagenes: ["macetas/macetas de cemento/cono moderno  35x55/IMG_20260330_184255.jpg", "macetas/macetas de cemento/cono moderno  35x55/IMG_20260330_185727.jpg", "macetas/macetas de cemento/cono moderno  35x55/WhatsApp Image 2026-03-29 at 16.07.19 (9).jpeg"], colores: CEMENTO_COLORS, tamanos: ["35x55"] }),
  makeProduct({ id: 15, nombre: "Maceta N21", precio: 1800, categoria: "plastico", descripcion: "Maceta plastica liviana y funcional para vivero, balcon o trasplante.", imagen: "macetas/macetas de plastico/macetas/IMG_20260330_153635.jpg", imagenes: ["macetas/macetas de plastico/macetas/IMG_20260330_153635.jpg"], colores: [{ nombre: "Azul", hex: "#4d6ea8" }, { nombre: "Verde", hex: "#5d7f4d" }, { nombre: "Negro", hex: "#232323" }, { nombre: "Marron", hex: "#8a5a3b" }], tamanos: ["N21"] }),
  makeProduct({ id: 16, nombre: "Maceta N24", precio: 5300, categoria: "plastico", descripcion: "Tamanio intermedio practico para renovar plantas de casa o patio.", imagen: "macetas/macetas de plastico/maceta n24/WhatsApp Image 2026-03-30 at 18.38.06.jpeg", imagenes: ["macetas/macetas de plastico/maceta n24/WhatsApp Image 2026-03-30 at 18.38.06.jpeg"], colores: [{ nombre: "Negro", hex: "#232323" }], tamanos: ["N24"] }),
  makeProduct({ id: 17, nombre: "Maceta N35", precio: 7700, categoria: "plastico", descripcion: "Formato amplio para ejemplares que ya necesitan mas volumen de raiz.", imagen: "macetas/macetas de plastico/maceta n35/WhatsApp Image 2026-03-30 at 18.40.01.jpeg", imagenes: ["macetas/macetas de plastico/maceta n35/WhatsApp Image 2026-03-30 at 18.40.01.jpeg"], colores: [{ nombre: "Marron", hex: "#8a5a3b" }], tamanos: ["N35"] }),
  makeProduct({ id: 18, nombre: "Maceta facetada N24", precio: 7100, categoria: "plastico", descripcion: "Linea facetada con un look mas grafico y contemporaneo.", imagen: "macetas/macetas de plastico/macetas geometricas/IMG_20260330_153805.jpg", imagenes: ["macetas/macetas de plastico/macetas geometricas/IMG_20260330_153805.jpg", "macetas/macetas de plastico/macetas geometricas/IMG_20260330_153807.jpg", "macetas/macetas de plastico/macetas geometricas/WhatsApp Image 2026-03-29 at 18.27.34 (3).jpeg", "macetas/macetas de plastico/macetas geometricas/WhatsApp Image 2026-03-30 at 18.35.54.jpeg", "macetas/macetas de plastico/macetas geometricas/WhatsApp Image 2026-03-30 at 18.36.39.jpeg"], colores: [{ nombre: "Gris", hex: "#8a8782" }, { nombre: "Blanco", hex: "#efefef" }, { nombre: "Negro", hex: "#232323" }], tamanos: ["N24"] }),
  makeProduct({ id: 19, nombre: "Maceta Olivia N24", precio: 6200, categoria: "plastico", descripcion: "Modelo redondeado y liviano para espacios de uso cotidiano.", imagen: "macetas/macetas de plastico/maceta olvia n24/WhatsApp Image 2026-03-30 at 18.34.21.jpeg", imagenes: ["macetas/macetas de plastico/maceta olvia n24/IMG_20260330_153756.jpg", "macetas/macetas de plastico/maceta olvia n24/WhatsApp Image 2026-03-30 at 18.34.21.jpeg"], colores: [{ nombre: "Marron", hex: "#8a5a3b" }, { nombre: "Verde", hex: "#5d7f4d" }, { nombre: "Azul", hex: "#4d6ea8" }, { nombre: "Beige", hex: "#d9c7ab" }], tamanos: ["N24"] }),
  makeProduct({ id: 20, nombre: "Maceta colgante de coco", precio: 19000, categoria: "plastico", descripcion: "Opcion colgante para sumar altura y follaje en galerias o balcones.", imagen: "macetas/macetas de plastico/maceta colgante de coco 24cm/WhatsApp Image 2026-03-30 at 18.32.28.jpeg", imagenes: ["macetas/macetas de plastico/maceta colgante de coco 24cm/WhatsApp Image 2026-03-29 at 16.07.19 (11).jpeg", "macetas/macetas de plastico/maceta colgante de coco 24cm/WhatsApp Image 2026-03-30 at 18.32.28.jpeg"], colores: [{ nombre: "Marron", hex: "#8a5a3b" }], tamanos: ["24 cm"] }),
  makeProduct({ id: 21, nombre: "Maceta plastica premium N27", precio: 10900, categoria: "plastico", descripcion: "Acabado prolijo y liviano para exhibicion y uso cotidiano.", imagen: "macetas/macetas de plastico/macetas premium n27/IMG_20260330_153831.jpg", imagenes: ["macetas/macetas de plastico/macetas premium n27/IMG_20260330_153831.jpg", "macetas/macetas de plastico/macetas premium n27/maceta plastica premium n27.jpeg"], colores: [{ nombre: "Blanco", hex: "#efefef" }], tamanos: ["N27"] }),
  makeProduct({ id: 22, nombre: "Maceta facetada N29", precio: 10900, categoria: "plastico", descripcion: "Version de mayor porte dentro de la linea facetada.", imagen: "macetas/macetas de plastico/maceta plastica facetada n29/WhatsApp Image 2026-03-30 at 18.31.49.jpeg", imagenes: ["macetas/macetas de plastico/maceta plastica facetada n29/WhatsApp Image 2026-03-30 at 18.31.49.jpeg"], colores: [{ nombre: "Gris", hex: "#8a8782" }], tamanos: ["N29"] })
];

const plantInteriorFiles = [
  "plantas/plantas de interior/agapantus(6000).jpeg", "plantas/plantas de interior/aromaticas(1500).jpeg", "plantas/plantas de interior/cola de burro(7000).jpeg", "plantas/plantas de interior/colgantes(7000).jpeg", "plantas/plantas de interior/gazaña gigante(1700).jpeg", "plantas/plantas de interior/helecho arroz(2000).jpeg", "plantas/plantas de interior/limonero 4 estaciones(23000).jpeg", "plantas/plantas de interior/manto de virgen(3000).jpeg", "plantas/plantas de interior/manto de virgen(7000).jpeg", "plantas/plantas de interior/ojo de poeta(6000).jpeg", "plantas/plantas de interior/pensamientos 2 uidades(3000).jpeg", "plantas/plantas de interior/rosario(7000).jpeg", "plantas/plantas de interior/rudas(1500).jpeg", "plantas/plantas de interior/strelizia reginae(35000).jpeg", "plantas/plantas de interior/trepadores santa rita(6000).jpeg", "plantas/plantas de interior/alegria del hogar/WhatsApp Image 2026-03-30 at 16.26.57.jpeg", "plantas/plantas de interior/alegria del hogar/WhatsApp Image 2026-03-30 at 16.27.03.jpeg", "plantas/plantas de interior/aphelandra/IMG_20260330_152313.jpg", "plantas/plantas de interior/aphelandra/IMG_20260330_152317.jpg", "plantas/plantas de interior/begonia/1000090425.jpg", "plantas/plantas de interior/begonia/IMG_20260330_151747.jpg", "plantas/plantas de interior/begonia/IMG_20260330_151753.jpg", "plantas/plantas de interior/chamaedorea elegans/IMG_20260330_152928.jpg", "plantas/plantas de interior/chamaedorea elegans/IMG_20260330_152932.jpg", "plantas/plantas de interior/costilla de adan/costilla de adan.jpg", "plantas/plantas de interior/costilla de adan/IMG_20260330_152047.jpg", "plantas/plantas de interior/dieffenbachia/IMG_20260330_152943.jpg", "plantas/plantas de interior/dieffenbachia/IMG_20260330_152945.jpg", "plantas/plantas de interior/dieffencachia tropic/IMG_20260330_153002.jpg", "plantas/plantas de interior/dieffencachia tropic/IMG_20260330_153006.jpg", "plantas/plantas de interior/dolar/IMG_20260330_153436.jpg", "plantas/plantas de interior/dolar/IMG_20260330_153440.jpg", "plantas/plantas de interior/dracena/IMG_20260330_152911.jpg", "plantas/plantas de interior/dracena/IMG_20260330_152915.jpg", "plantas/plantas de interior/enamorada del muro/WhatsApp Image 2026-03-30 at 16.26.08.jpeg", "plantas/plantas de interior/ficus/IMG_20260330_152517.jpg", "plantas/plantas de interior/ficus/IMG_20260330_152549.jpg", "plantas/plantas de interior/ficus benghanlensis/IMG_20260330_152656.jpg", "plantas/plantas de interior/ficus benghanlensis/IMG_20260330_152702.jpg", "plantas/plantas de interior/geraneos/geraneos(3000).jpeg", "plantas/plantas de interior/geraneos/geraneos(3000)2.jpeg", "plantas/plantas de interior/geraneos/geraneos(3000)3.jpeg", "plantas/plantas de interior/gomero/IMG_20260330_152442.jpg", "plantas/plantas de interior/gomero/IMG_20260330_152448.jpg", "plantas/plantas de interior/gomero variegado/gomero(33000).jpeg", "plantas/plantas de interior/gomero variegado/gomero(33000)2.jpeg", "plantas/plantas de interior/helecho/1000090427.jpg", "plantas/plantas de interior/helecho/IMG_20260330_151824.jpg", "plantas/plantas de interior/helecho/IMG_20260330_151828.jpg", "plantas/plantas de interior/helecho asplenium nidus/IMG_20260330_152413.jpg", "plantas/plantas de interior/helecho asplenium nidus/IMG_20260330_152417.jpg", "plantas/plantas de interior/huertas/huerta(2500).jpeg", "plantas/plantas de interior/huertas/huerta(2500)2.jpeg", "plantas/plantas de interior/marginata/IMG_20260330_152748.jpg", "plantas/plantas de interior/marginata/IMG_20260330_152816.jpg", "plantas/plantas de interior/palo de agua grande/IMG_20260330_152102.jpg", "plantas/plantas de interior/palo de agua grande/IMG_20260330_152104.jpg", "plantas/plantas de interior/palo de agua grande/IMG_20260330_152109.jpg", "plantas/plantas de interior/palo de agua mediano/IMG_20260330_151656.jpg", "plantas/plantas de interior/palo de agua mediano/IMG_20260330_151702.jpg", "plantas/plantas de interior/philodendron/IMG_20260330_153415.jpg", "plantas/plantas de interior/philodendron/IMG_20260330_153425.jpg", "plantas/plantas de interior/potus n14/IMG_20260330_152247.jpg", "plantas/plantas de interior/potus n14/IMG_20260330_152251.jpg", "plantas/plantas de interior/rosa china/rosa china (2)(6000).jpeg", "plantas/plantas de interior/rosa china/rosa china (3)(6000).jpeg", "plantas/plantas de interior/rosa china/rosa china(6000).jpeg", "plantas/plantas de interior/Sansevieria/1000090420.jpg", "plantas/plantas de interior/Sansevieria/1000090421.jpg", "plantas/plantas de interior/Sansevieria/1000090422.jpg", "plantas/plantas de interior/Sansevieria/IMG_20260330_151449.jpg", "plantas/plantas de interior/Sansevieria/IMG_20260330_151502.jpg", "plantas/plantas de interior/Sansevieria/IMG_20260330_151535.jpg", "plantas/plantas de interior/Sansevieria/IMG_20260330_152226.jpg", "plantas/plantas de interior/Sansevieria/IMG_20260330_152230.jpg", "plantas/plantas de interior/strelizia reginae/IMG_20260330_152141.jpg", "plantas/plantas de interior/strelizia reginae/IMG_20260330_152145.jpg", "plantas/plantas de interior/suculentas/suculentas(4000).jpeg", "plantas/plantas de interior/violeta de los alpes/violeta de los alpes (2).jpeg", "plantas/plantas de interior/violeta de los alpes/violeta de los alpes(7000).jpeg", "plantas/plantas de interior/violeta de los alpes/violeta de los alpes(7000)2.jpeg", "plantas/plantas de interior/violeta de los alpes/violeta de los alpes.jpeg"
];

const plantExteriorFiles = [
  "plantas/plantas de exterior/alegria del hogar.jpg", "plantas/plantas de exterior/copetito.jpg", "plantas/plantas de exterior/petunia.jpg", "plantas/plantas de exterior/rayito de sol.jpg", "plantas/plantas de exterior/bignonia/IMG_20260330_183527.jpg", "plantas/plantas de exterior/bignonia/IMG_20260330_183532.jpg", "plantas/plantas de exterior/bignonia/IMG_20260330_183539.jpg", "plantas/plantas de exterior/gazaña/IMG_20260330_183358.jpg", "plantas/plantas de exterior/gazaña/IMG_20260330_183408.jpg", "plantas/plantas de exterior/malvon doble/IMG_20260330_183141.jpg", "plantas/plantas de exterior/malvon doble/malvo.jpg", "plantas/plantas de exterior/pindo/pindo.jpg", "plantas/plantas de exterior/rosa china/IMG_20260330_183854.jpg", "plantas/plantas de exterior/rosa china/IMG_20260330_183907.jpg", "plantas/plantas de exterior/salvia/IMG_20260330_183556.jpg", "plantas/plantas de exterior/salvia/IMG_20260330_183559.jpg", "plantas/suculentas y cactus/cactus/IMG_20260330_182957.jpg", "plantas/suculentas y cactus/cactus/IMG_20260330_183008.jpg", "plantas/suculentas y cactus/cactus/IMG_20260330_183012.jpg", "plantas/suculentas y cactus/IMG_20260330_183025.jpg", "plantas/suculentas y cactus/IMG_20260330_183027.jpg", "plantas/suculentas y cactus/IMG_20260330_183029.jpg"
];

const otherProductFiles = [
  "otros productos/aceite grhesa ec cochinilla.jpeg", "otros productos/alquimia natural vamp.jpeg", "otros productos/fertifox activador de la floracion.jpeg", "otros productos/fertifox activador del follaje.jpeg", "otros productos/flora booster.jpeg", "otros productos/glacoxan ciper insecticida.jpeg", "otros productos/glacoxan dsist acaricida.jpeg", "otros productos/glacoxan e hormiguicida.jpeg", "otros productos/hormona en polvo japor fertil.jpeg", "otros productos/humus.jpeg", "otros productos/jabon potasico.jpeg", "otros productos/mamboreta hongos.jpeg", "otros productos/melaza blackstrap.jpeg", "otros productos/mosca blanca.jpeg", "otros productos/myrmec caracoles.jpeg", "otros productos/myrmec hormiga.jpeg", "otros productos/nitrofull.jpeg", "otros productos/polvo bordeles fungicida.jpeg", "otros productos/senderil herbicida total.jpeg", "otros productos/tierra abonada.jpeg", "otros productos/top crop top veg.jpeg", "otros productos/turba.jpeg", "otros productos/veneno hormiguicidainsecticida.jpeg", "otros productos/atrapasoles(9000)/WhatsApp Image 2026-03-29 at 18.27.34 (1).jpeg", "otros productos/cebo para hormigas(2300)/WhatsApp Image 2026-03-29 at 18.27.34 (12).jpeg", "otros productos/colgantes(6000)/WhatsApp Image 2026-03-29 at 18.27.34.jpeg", "otros productos/hortal liquido(6500)/WhatsApp Image 2026-03-29 at 18.27.34 (21).jpeg", "otros productos/perlitas/perlitas.jpeg", "otros productos/perlitas/perlitas (2).jpeg", "otros productos/rastrillo metal(7100)/WhatsApp Image 2026-03-29 at 18.27.34 (14).jpeg"
];
function getPlantFlowerColors(plantName) {
  const normalized = resolveDataKey(plantName);
  if (["agapantus", "aromaticas", "cola de burro", "colgantes", "rosario", "rudas", "limonero 4 estaciones", "huerta", "gomero", "ficus", "marginata", "potus n14", "strelitzia reginae", "palo de agua grande", "palo de agua mediano", "sansevieria", "cactus", "suculentas"].includes(normalized)) {
    return [];
  }
  if (normalized === "geranios") return [{ nombre: "Rojo", hex: "#b93d3d" }, { nombre: "Rosa", hex: "#dc8da7" }, { nombre: "Blanco", hex: "#f4f1e8" }];
  if (normalized === "rosa china") return [{ nombre: "Rojo", hex: "#b63d44" }, { nombre: "Rosa", hex: "#d8889b" }, { nombre: "Naranja", hex: "#d97d48" }];
  if (normalized === "violeta de los alpes") return [{ nombre: "Violeta", hex: "#8b68ba" }, { nombre: "Rosa", hex: "#d18aa6" }, { nombre: "Blanco", hex: "#f4f0ea" }];
  if (normalized === "manto de virgen") return [{ nombre: "Blanco", hex: "#f5f2ea" }, { nombre: "Lila suave", hex: "#c7b7df" }];
  if (normalized === "gazana" || normalized === "gazana gigante") return [{ nombre: "Amarillo", hex: "#e4b93d" }, { nombre: "Naranja", hex: "#de8b3e" }];
  if (["alegria del hogar", "begonia", "pensamientos"].includes(normalized)) return [{ nombre: "Rosa", hex: "#d68398" }, { nombre: "Rojo", hex: "#b84a59" }, { nombre: "Blanco", hex: "#f3efe7" }];
  if (["petunia", "copetito", "malvon doble"].includes(normalized)) return [{ nombre: "Violeta", hex: "#8b68ba" }, { nombre: "Naranja", hex: "#d97d48" }, { nombre: "Amarillo", hex: "#e4be4f" }];
  if (["rayito de sol", "lantana"].includes(normalized)) return [{ nombre: "Amarillo", hex: "#e4be4f" }, { nombre: "Naranja", hex: "#d97d48" }];
  if (normalized === "salvia de jardin") return [{ nombre: "Rojo", hex: "#bb4b4b" }, { nombre: "Fucsia", hex: "#c2447d" }];
  if (["trepadores santa rita", "bignonia", "ojo de poeta"].includes(normalized)) return [{ nombre: "Fucsia", hex: "#c2447d" }, { nombre: "Violeta", hex: "#8e69c5" }, { nombre: "Naranja", hex: "#dc8c43" }];
  return [];
}

function getPlantSectionType(filePath, plantName, defaultType) {
  const normalized = resolveDataKey(plantName);
  const lowerPath = filePath.toLowerCase();
  if (lowerPath.includes("suculentas y cactus") || ["cola de burro", "rosario", "suculentas", "cactus"].includes(normalized)) {
    return "suculentas";
  }
  return defaultType === "exterior" ? "exterior" : "interior";
}

function getPlantDescription(plantName) {
  const normalized = resolveDataKey(plantName);
  if (normalized === "agapantus") return "Flor de temporada noble, ideal para sumar altura y color en exterior luminoso.";
  if (normalized === "aromaticas") return "Aromaticas faciles de cuidar, practicas para cocina, balcon y huerta casera.";
  if (normalized === "alegria del hogar") return "Aporta flor continua en media sombra y da un toque alegre a galerias y macetas.";
  if (normalized === "aphelandra") return "Follaje vistoso y tropical, luce mejor con buena luz natural sin sol directo.";
  if (normalized === "begonia") return "Muy decorativa por su hoja y su flor, ideal para espacios frescos y bien resguardados.";
  if (normalized === "bignonia") return "Trepadora muy noble para muros y cercos con una floracion que resalta rapido.";
  if (normalized === "buxus") return "Arbusto estructural para borduras y composiciones ordenadas en exterior.";
  if (normalized === "cactus") return "Cactus de bajo mantenimiento para espacios luminosos y riegos espaciados.";
  if (normalized === "chamaedorea elegans") return "Palmera de interior serena y de crecimiento amable, perfecta para ambientes tranquilos.";
  if (normalized === "copetito") return "Flor compacta y rendidora para macetas exteriores y canteros de temporada.";
  if (normalized === "costilla de adan") return "Hoja amplia y ornamental para interiores luminosos, con un crecimiento muy agradecido.";
  if (normalized === "dietes") return "Planta de exterior resistente y elegante, muy buena para patios soleados.";
  if (normalized === "dieffenbachia" || normalized === "dieffencachia tropic") return "Follaje generoso y facil de destacar en interior, con riego moderado y buena claridad.";
  if (normalized === "dolar") return "Planta colgante de crecimiento suelto, muy linda para estantes y apoyos altos.";
  if (normalized === "dracena" || normalized === "marginata") return "Resistente y estilizada, funciona muy bien para dar altura en interiores amplios.";
  if (normalized === "enamorada del muro") return "Cubre rapido y con buena gracia muros, cercos y rincones con apoyo para trepar.";
  if (normalized === "evonimus" || normalized === "evonimus amarillo") return "Arbusto de exterior de buena estructura para cercos, macetones y entradas.";
  if (normalized === "ficus" || normalized === "ficus benghanlensis") return "Follaje firme y brillante, ideal para sumar estructura verde en interiores luminosos.";
  if (normalized === "gazana" || normalized === "gazana gigante") return "Flor muy rendidora para sol pleno, con colores vivos y mantenimiento simple.";
  if (normalized === "geranios") return "Planta florifera y noble para balcones soleados, de cuidado sencillo y continuo.";
  if (normalized === "gomero") return "Follaje firme y de gran presencia, perfecto para interiores luminosos.";
  if (normalized === "helecho arroz") return "Textura liviana y delicada, muy linda para macetas chicas y rincones frescos.";
  if (normalized === "helecho" || normalized === "helecho asplenium nidus") return "Clasico verde de media sombra, aporta frescura y volumen con riego parejo.";
  if (normalized === "huerta") return "Ideal para empezar una huerta simple en casa con cosecha cercana y practica.";
  if (normalized === "jazmin de leche" || normalized === "jazmin kimura cuatro estaciones") return "Jazmin trepador o arbustivo para sumar perfume y floracion prolongada.";
  if (normalized === "laurel de jardin") return "Arbusto resistente para patio o jardin, con una presencia muy ordenada.";
  if (normalized === "lantana") return "Florifera y muy rendidora al sol, ideal para macetas y canteros exteriores.";
  if (normalized === "limonero 4 estaciones") return "Frutal muy buscado para patios y jardines con sol, perfuma y decora al mismo tiempo.";
  if (normalized === "malvon doble") return "Flor vistosa y abundante para balcones, patios y galerias con buena luz.";
  if (normalized === "manto de virgen") return "Flor suave y rendidora para bordes, macetas y canteros de aspecto natural.";
  if (normalized === "ojo de poeta") return "Trepadora florifera de aspecto delicado, muy linda para tutores y cercos.";
  if (normalized === "palo de agua grande" || normalized === "palo de agua mediano") return "De buen porte y presencia, ideal para interiores con luz filtrada.";
  if (normalized === "pensamientos") return "Flor compacta y colorida para macetas de temporada, muy vistosa en exterior fresco.";
  if (normalized === "petunia") return "Flor de temporada ideal para balcones y macetas con mucho color.";
  if (normalized === "philodendron") return "Follaje tropical y noble, muy decorativo para interiores con luz natural estable.";
  if (normalized === "pindo") return "Palmera de gran porte para jardines y frentes con espacio.";
  if (normalized === "potus n14") return "De las mas faciles de cuidar, ideal para colgar, apoyar o dejar trepar.";
  if (normalized === "rayito de sol") return "Flor alegre para exterior con muy buena respuesta al sol y al color de temporada.";
  if (normalized === "rosa china") return "Arbusto florifero de aspecto tropical, luce mucho con sol y riego regular.";
  if (normalized === "rosario") return "Suculenta colgante muy decorativa, agradece luz y riegos bien espaciados.";
  if (normalized === "rudas") return "Rustica y resistente, muy buena para exterior y de mantenimiento simple.";
  if (normalized === "salvia de jardin") return "Florifera y muy util para sumar color y movimiento en canteros o macetas.";
  if (normalized === "sansevieria") return "Muy resistente y de riego espaciado, perfecta para quienes buscan poco mantenimiento.";
  if (normalized === "strelitzia reginae") return "De hoja amplia y porte elegante, aporta un aire tropical muy marcado.";
  if (normalized === "suculentas") return "Coleccion facil de cuidar, ideal para luz abundante y riegos moderados.";
  if (normalized === "trepadores santa rita") return "Trepadora fuerte y muy vistosa para frentes, muros y lugares bien soleados.";
  if (normalized === "violeta de los alpes") return "Flor delicada y muy decorativa para lugares frescos, protegidos y luminosos.";
  return "Planta de vivero seleccionada para espacios reales, con una presencia natural y facil de combinar.";
}

function buildPlantProducts(files, type) {
  const parsedPlants = files.map((filePath, index) => {
    const pathParts = filePath.split("/");
    const fileName = pathParts[pathParts.length - 1] || "";
    const parentFolder = pathParts[pathParts.length - 2] || "";
    const baseName = fileName.replace(/\.[^.]+$/, "");
    const priceMatch = baseName.match(/\((\d+)\)(?!.*\(\d+\))/);
    const rawName = /^whatsapp image|^img_|^\d+/i.test(baseName) || !/[a-z]/i.test(baseName) ? parentFolder : baseName.slice(0, priceMatch ? priceMatch.index : baseName.length).replace(/\(\d+\)\s*$/g, "").trim();
    const dataKey = resolveDataKey(rawName);
    const priceInfo = CSV_PRICE_DATA[dataKey] || null;
    const price = priceInfo?.precio ?? (priceMatch ? Number(priceMatch[1]) : null);
    if (!dataKey || price === null) return null;
    return { id: 1000 + index + (type === "exterior" ? 500 : 0), nombre: getCanonicalPlantName(dataKey), precio: price, categoria: type === "exterior" ? "exterior" : "interior", seccionPlanta: getPlantSectionType(filePath, dataKey, type), destacado: true, stockLimitado: false, agotado: Boolean(priceInfo?.agotado), imagen: filePath, imagenes: [filePath], descripcion: getPlantDescription(dataKey), colores: getPlantFlowerColors(dataKey), tamanos: ["Presentacion standard"] };
  }).filter(Boolean);

  const groupedPlants = parsedPlants.reduce((accumulator, plant) => {
    const key = resolveDataKey(plant.nombre);
    if (!accumulator.has(key)) accumulator.set(key, plant);
    else {
      const currentPlant = accumulator.get(key);
      currentPlant.imagenes.push(...plant.imagenes);
      currentPlant.imagen = currentPlant.imagenes[0];
      currentPlant.agotado = currentPlant.agotado || plant.agotado;
    }
    return accumulator;
  }, new Map());

  return Array.from(groupedPlants.values()).sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
}

function buildOtherProducts(files) {
  const parsedProducts = files.map((filePath, index) => {
    const pathParts = filePath.split("/");
    const fileName = pathParts[pathParts.length - 1] || "";
    const baseName = fileName.replace(/\.[^.]+$/, "");
    const folderName = pathParts[pathParts.length - 2] || "";
    const folderMatch = folderName.match(/^(.*)\((\d+)\)$/);
    const rawName = folderMatch ? folderMatch[1] : /^whatsapp image|^img_/i.test(baseName) ? folderName : baseName;
    const dataKey = resolveDataKey(rawName);
    const priceInfo = CSV_PRICE_DATA[dataKey] || null;
    const precio = priceInfo?.precio ?? (folderMatch ? Number(folderMatch[2]) : null);
    if (!dataKey || precio === null) return null;
    return { id: 3000 + index, nombre: formatPlantName(dataKey), precio, categoria: "otros", destacado: false, stockLimitado: false, agotado: Boolean(priceInfo?.agotado), imagen: filePath, imagenes: [filePath], descripcion: "Accesorio o insumo complementario para sumar detalle y funcionalidad al vivero.", colores: [{ nombre: "Natural", hex: "#d8c8b3" }], tamanos: ["Standard"] };
  }).filter(Boolean);

  const groupedProducts = parsedProducts.reduce((accumulator, product) => {
    const key = resolveDataKey(product.nombre);
    if (!accumulator.has(key)) accumulator.set(key, product);
    else {
      const currentProduct = accumulator.get(key);
      currentProduct.imagenes.push(...product.imagenes);
      currentProduct.imagen = currentProduct.imagenes[0];
    }
    return accumulator;
  }, new Map());

  return Array.from(groupedProducts.values()).sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
}

products.push(...buildPlantProducts(plantInteriorFiles, "interior"), ...buildPlantProducts(plantExteriorFiles, "exterior"), ...buildOtherProducts(otherProductFiles));

products.forEach((product) => { if (product.categoria === "barro") { product.agotado = true; } });

const alegriaProducts = products.filter((product) => product.nombre === "Alegria Del Hogar");
if (alegriaProducts[0]) {
  alegriaProducts[0].imagenes = alegriaProducts[0].imagenes.slice(0, 1);
  alegriaProducts[0].imagen = alegriaProducts[0].imagenes[0];
  alegriaProducts[0].colores = [
    { nombre: "Violeta", hex: "#8b68ba" },
    { nombre: "Rojo", hex: "#b84a59" },
    { nombre: "Blanco", hex: "#f3efe7" }
  ];
}

const helechoArroz = products.find((product) => product.nombre === "Helecho Arroz");
if (helechoArroz) {
  helechoArroz.agotado = true;
}

const mantoDeVirgen = products.find((product) => product.nombre === "Manto De Virgen");
if (mantoDeVirgen) {
  mantoDeVirgen.colores = [{ nombre: "Lila", hex: "#b9a1d8" }];
}

const ojoDePoeta = products.find((product) => product.nombre === "Ojo De Poeta");
if (ojoDePoeta) {
  ojoDePoeta.colores = [{ nombre: "Amarillo", hex: "#e4be4f" }];
}

const rosaChinaProducts = products.filter((product) => product.nombre === "Rosa China");
if (rosaChinaProducts[0]) {
  rosaChinaProducts[0].colores = [
    { nombre: "Blanco", hex: "#f4efe7" },
    { nombre: "Rosa", hex: "#d8889b" },
    { nombre: "Rojo", hex: "#b63d44" }
  ];
}
if (rosaChinaProducts[rosaChinaProducts.length - 1] && rosaChinaProducts.length > 1) {
  rosaChinaProducts[rosaChinaProducts.length - 1].colores = [{ nombre: "Amarillo", hex: "#e4be4f" }];
}

const santaRitaIndex = products.findIndex((product) => product.nombre === "Trepadores Santa Rita");
if (santaRitaIndex >= 0) {
  products.splice(santaRitaIndex, 1);
}

const violetaDeLosAlpes = products.find((product) => product.nombre === "Violeta De Los Alpes");
if (violetaDeLosAlpes) {
  violetaDeLosAlpes.colores = [
    { nombre: "Violeta", hex: "#8b68ba" },
    { nombre: "Rosa", hex: "#d18aa6" }
  ];
}

const suculentasProduct = products.find((product) => product.nombre === "Suculentas");
if (suculentasProduct) {
  suculentasProduct.imagenes = [
    "plantas/suculentas y cactus/IMG_20260330_183025.jpg",
    "plantas/suculentas y cactus/IMG_20260330_183027.jpg",
    "plantas/suculentas y cactus/IMG_20260330_183029.jpg"
  ];
  suculentasProduct.imagen = suculentasProduct.imagenes[0];
}

const bignonia = products.find((product) => product.nombre === "Bignonia");
if (bignonia) {
  bignonia.colores = [{ nombre: "Rosa", hex: "#d8889b" }];
}

const copetito = products.find((product) => product.nombre === "Copetito");
if (copetito) {
  copetito.colores = [
    { nombre: "Amarillo", hex: "#e4be4f" },
    { nombre: "Naranja", hex: "#d97d48" }
  ];
}

const malvonDoble = products.find((product) => product.nombre === "Malvon Doble");
if (malvonDoble) {
  malvonDoble.colores = [{ nombre: "Rojo", hex: "#b63d44" }];
}

const petunia = products.find((product) => product.nombre === "Petunia");
if (petunia) {
  petunia.colores = [
    { nombre: "Violeta", hex: "#8b68ba" },
    { nombre: "Rosa", hex: "#d8889b" },
    { nombre: "Azul", hex: "#4d6ea8" },
    { nombre: "Blanco", hex: "#f4efe7" }
  ];
}

const state = {
  cart: [], selectedProduct: null, selectedColor: "", selectedCategory: "all", selectedMaterial: "all", selectedPlantType: "all", currentImageIndex: 0, carouselTimer: null, search: "", onlyFeatured: false, onlyLowStock: false
};

const elements = {
  productsGrid: document.getElementById("products-view"), productsHeading: document.getElementById("products-heading"), modal: document.getElementById("product-modal"), modalImage: document.getElementById("modal-image"), modalPrevImage: document.getElementById("modal-prev-image"), modalNextImage: document.getElementById("modal-next-image"), modalImageDots: document.getElementById("modal-image-dots"), modalTitle: document.getElementById("modal-title"), modalPrice: document.getElementById("modal-price"), colorGroup: document.getElementById("color-group"), colorLabel: document.getElementById("color-label"), colorOptions: document.getElementById("color-options"), sizeGroup: document.getElementById("size-group"), sizeSelect: document.getElementById("size-select"), quantityInput: document.getElementById("quantity-input"), addToCartButton: document.getElementById("modal-add-to-cart"), closeModalButton: document.getElementById("modal-close"), cartItems: document.getElementById("cart-items"), cartTotal: document.getElementById("cart-total"), cartCount: document.getElementById("cart-count"), checkoutButton: document.getElementById("checkout-whatsapp"), searchInput: document.getElementById("search-input"), categoryFilters: document.getElementById("category-filters"), materialFilters: document.getElementById("material-filters"), materialButtons: document.querySelectorAll("[data-material]"), plantFilters: document.getElementById("plant-filters"), plantTypeButtons: document.querySelectorAll("[data-plant-type]"), navButtons: document.querySelectorAll("[data-nav-category]"), cartToggle: document.getElementById("cart-toggle"), cartPanel: document.getElementById("cart-panel"), closeCart: document.getElementById("close-cart"), menuToggle: document.getElementById("menu-toggle"), mainNav: document.getElementById("main-nav")
};
function getFilteredProducts() {
  return products.filter((product) => {
    const matchesCategory = state.selectedCategory === "all" || (state.selectedCategory === "macetas" && ["barro", "cemento", "plastico"].includes(product.categoria)) || (state.selectedCategory === "plantas" && ["interior", "exterior"].includes(product.categoria)) || product.categoria === state.selectedCategory;
    const matchesSearch = !state.search || `${product.nombre} ${product.descripcion}`.toLowerCase().includes(state.search.toLowerCase());
    const matchesFeatured = !state.onlyFeatured || product.destacado;
    const matchesLowStock = !state.onlyLowStock || product.stockLimitado;
    return matchesCategory && matchesSearch && matchesFeatured && matchesLowStock;
  });
}

function createProductsMarkup(items) {
  if (!items.length) return '<p class="cart-empty">No encontramos productos para esos filtros.</p>';
  return items.map((product) => {
    const cardClass = ["product-card", "reveal-up"].join(" ");
    const hasPrice = typeof product.precio === "number";
    const canBuy = hasPrice && !product.agotado;
    const canConsult = !hasPrice && !product.agotado;
    const badgeText = product.agotado ? "Fuera de stock" : hasPrice ? "Disponible" : "Consultar";
    return `
      <article class="${cardClass}">
        <div class="product-card__image"><img src="${product.imagen}" alt="${product.nombre}" /></div>
        <div class="product-card__body">
          <div class="product-card__meta">
            <span class="product-card__kicker">${product.categoria}</span>
            <div><h3>${product.nombre}</h3><p>${product.descripcion}</p></div>
            ${hasPrice ? `<span class="price-tag">${formatPrice(product.precio)}</span>` : ""}
          </div>
          <div class="product-card__footer">
            <span class="product-card__badge"><span>Estado</span><strong>${badgeText}</strong></span>
            <button class="secondary-button ${canBuy ? "secondary-button--buy" : ""} ${canConsult ? "secondary-button--consult" : ""} ${!canBuy && !canConsult ? "secondary-button--detail" : ""}" data-product-id="${product.id}">${canBuy ? "Agregar al carrito" : canConsult ? "Consultar" : "Ver detalle"}</button>
          </div>
        </div>
      </article>`;
  }).join("");
}

function createProductsGridMarkup(items) { return !items.length ? createProductsMarkup(items) : `<div class="products-grid">${createProductsMarkup(items)}</div>`; }

function createMaterialGroupsMarkup(items) {
  if (!items.length) return '<p class="cart-empty">No encontramos macetas para ese material.</p>';
  const groups = [{ key: "barro", title: "Macetas de barro" }, { key: "plastico", title: "Macetas de plastico" }, { key: "cemento", title: "Macetas de cemento" }];
  return groups.map((group) => {
    const groupItems = items.filter((item) => item.categoria === group.key);
    if (!groupItems.length) return "";
    return `<section class="material-group reveal-up"><div class="material-group__header"><p class="material-group__eyebrow">Material</p><h3 class="material-group__title">${group.title}</h3></div><div class="products-grid">${createProductsMarkup(groupItems)}</div></section>`;
  }).join("");
}

function createPlantGroupsMarkup(items) {
  const groups = [{ key: "interior", title: "Plantas de interior", empty: "Todavia no encontramos plantas de interior para ese filtro." }, { key: "suculentas", title: "Suculentas", empty: "Todavia no encontramos suculentas para ese filtro." }, { key: "exterior", title: "Plantas de exterior", empty: "Todavia no encontramos plantas de exterior para ese filtro." }];
  const visibleGroups = state.selectedPlantType === "all" ? groups : groups.filter((group) => group.key === state.selectedPlantType);
  return visibleGroups.map((group) => {
    const groupItems = items.filter((item) => item.seccionPlanta === group.key);
    const content = groupItems.length ? `<div class="products-grid">${createProductsMarkup(groupItems)}</div>` : `<div class="empty-section"><p>${group.empty}</p></div>`;
    return `<section class="material-group reveal-up"><div class="material-group__header"><p class="material-group__eyebrow">Categoria</p><h3 class="material-group__title">${group.title}</h3></div>${content}</section>`;
  }).join("");
}

function bindProductButtons(container) {
  container.querySelectorAll("[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products.find((item) => item.id === Number(button.getAttribute("data-product-id")));
      openModal(product);
    });
  });
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => { if (!item.classList.contains("is-visible")) observer.observe(item); });
}

function stopCarousel() { if (state.carouselTimer) { window.clearInterval(state.carouselTimer); state.carouselTimer = null; } }

function renderCarouselImage() {
  if (!state.selectedProduct) return;
  const images = state.selectedProduct.imagenes && state.selectedProduct.imagenes.length ? state.selectedProduct.imagenes : [state.selectedProduct.imagen];
  const currentImage = images[state.currentImageIndex] || images[0];
  elements.modalImage.src = currentImage;
  elements.modalImage.alt = state.selectedProduct.nombre;
  elements.modalImageDots.innerHTML = images.map((_, index) => `<button type="button" class="carousel-dot ${index === state.currentImageIndex ? "is-active" : ""}" data-image-index="${index}" aria-label="Ver imagen ${index + 1}"></button>`).join("");
  elements.modalImageDots.querySelectorAll("[data-image-index]").forEach((button) => {
    button.addEventListener("click", () => { state.currentImageIndex = Number(button.getAttribute("data-image-index")); renderCarouselImage(); });
  });
}

function setupCarousel(product) {
  stopCarousel();
  const images = product.imagenes && product.imagenes.length ? product.imagenes : [product.imagen];
  const hasMultipleImages = images.length > 1;
  state.currentImageIndex = 0;
  elements.modalPrevImage.classList.toggle("hidden", !hasMultipleImages);
  elements.modalNextImage.classList.toggle("hidden", !hasMultipleImages);
  elements.modalImageDots.classList.toggle("hidden", !hasMultipleImages);
  renderCarouselImage();
  if (hasMultipleImages) {
    state.carouselTimer = window.setInterval(() => { state.currentImageIndex = (state.currentImageIndex + 1) % images.length; renderCarouselImage(); }, 1800);
  }
}

function showPreviousImage() { if (state.selectedProduct?.imagenes?.length) { const total = state.selectedProduct.imagenes.length; state.currentImageIndex = (state.currentImageIndex - 1 + total) % total; renderCarouselImage(); } }
function showNextImage() { if (state.selectedProduct?.imagenes?.length) { const total = state.selectedProduct.imagenes.length; state.currentImageIndex = (state.currentImageIndex + 1) % total; renderCarouselImage(); } }

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  const headings = { all: "Todos los productos", macetas: "Macetas", plantas: "Plantas" };
  elements.productsHeading.textContent = headings[state.selectedCategory] || "Productos";
  if (state.selectedCategory === "macetas") {
    const macetas = filteredProducts.filter((product) => ["barro", "plastico", "cemento"].includes(product.categoria));
    const materialFiltered = state.selectedMaterial === "all" ? macetas : macetas.filter((product) => product.categoria === state.selectedMaterial);
    elements.materialFilters.classList.remove("hidden");
    elements.plantFilters.classList.add("hidden");
    elements.productsGrid.innerHTML = createMaterialGroupsMarkup(materialFiltered);
  } else if (state.selectedCategory === "plantas") {
    const plantProducts = filteredProducts.filter((product) => ["interior", "exterior"].includes(product.categoria));
    const sectionFiltered = state.selectedPlantType === "all" ? plantProducts : plantProducts.filter((product) => product.seccionPlanta === state.selectedPlantType);
    elements.materialFilters.classList.add("hidden");
    elements.plantFilters.classList.remove("hidden");
    elements.productsGrid.innerHTML = createPlantGroupsMarkup(sectionFiltered);
  } else {
    elements.materialFilters.classList.add("hidden");
    elements.plantFilters.classList.add("hidden");
    elements.productsGrid.innerHTML = createProductsGridMarkup(filteredProducts);
  }
  bindProductButtons(elements.productsGrid);
  setupRevealAnimations();
}

function openModal(product) {
  state.selectedProduct = product;
  state.selectedColor = product.colores[0]?.nombre || "";
  const isPlant = ["interior", "exterior"].includes(product.categoria);
  const isBarro = product.categoria === "barro";
  const hasColorOptions = product.categoria !== "barro" && product.colores && product.colores.length > 0;
  const hasPrice = typeof product.precio === "number";
  const canBuy = hasPrice && !product.agotado;
  const canConsult = !hasPrice && !product.agotado;
  elements.modalTitle.textContent = product.nombre;
  elements.modalPrice.textContent = product.agotado ? "Fuera de stock" : hasPrice ? formatPrice(product.precio) : "Consultar precio";
  elements.quantityInput.value = "1";
  elements.colorLabel.textContent = isPlant ? "Color de la flor" : "Color de maceta";
  elements.colorGroup.classList.toggle("hidden", !hasColorOptions);
  elements.sizeGroup.classList.toggle("hidden", isPlant || isBarro);
  elements.addToCartButton.disabled = product.agotado;
  elements.addToCartButton.textContent = canBuy ? "Agregar al carrito" : canConsult ? "Consultar por WhatsApp" : "No disponible";
  elements.sizeSelect.innerHTML = product.tamanos.map((size) => `<option value="${size}">${size}</option>`).join("");
  renderColorOptions(product.colores);
  setupCarousel(product);
  elements.modal.classList.add("is-open");
  elements.modal.setAttribute("aria-hidden", "false");
}

function closeModal() { stopCarousel(); elements.modal.classList.remove("is-open"); elements.modal.setAttribute("aria-hidden", "true"); }

function renderColorOptions(colors) {
  elements.colorOptions.innerHTML = colors.map((color) => `<button type="button" class="color-swatch ${color.nombre === state.selectedColor ? "is-selected" : ""}" data-color="${color.nombre}"><span class="color-dot" style="background:${color.hex}"></span><span>${color.nombre}</span></button>`).join("");
  elements.colorOptions.querySelectorAll("[data-color]").forEach((button) => {
    button.addEventListener("click", () => { state.selectedColor = button.getAttribute("data-color"); renderColorOptions(state.selectedProduct.colores); });
  });
}
function addSelectedProductToCart() {
  if (!state.selectedProduct || state.selectedProduct.agotado) return;
  if (typeof state.selectedProduct.precio !== "number") { openConsultationOnWhatsApp(state.selectedProduct); closeModal(); return; }
  const quantity = Math.max(1, Number(elements.quantityInput.value) || 1);
  const isPlant = ["interior", "exterior"].includes(state.selectedProduct.categoria);
  const isBarro = state.selectedProduct.categoria === "barro";
  const size = isPlant || isBarro ? "Presentacion standard" : elements.sizeSelect.value;
  const color = state.selectedColor || "Sin variante";
  const existingItem = state.cart.find((item) => item.nombre === state.selectedProduct.nombre && item.tamano === size && item.color === color);
  if (existingItem) existingItem.cantidad += quantity;
  else state.cart.push({ nombre: state.selectedProduct.nombre, precio: state.selectedProduct.precio, cantidad: quantity, tamano: size, color });
  renderCart(); closeModal(); openCartPanel();
}

function calculateTotal() { return state.cart.reduce((total, item) => total + item.precio * item.cantidad, 0); }
function removeFromCart(index) { state.cart.splice(index, 1); renderCart(); }

function renderCart() {
  if (!state.cart.length) {
    elements.cartItems.innerHTML = '<p class="cart-empty">Todavia no agregaste productos.</p>';
  } else {
    elements.cartItems.innerHTML = state.cart.map((item, index) => `
      <article class="cart-item">
        <div class="cart-item__top">
          <div><h4>${item.nombre}</h4><p>${item.tamano} - ${item.color}</p></div>
          <button class="icon-button" data-remove-index="${index}" aria-label="Eliminar producto">&times;</button>
        </div>
        <div class="cart-item__bottom"><p>Cantidad: ${item.cantidad}</p><strong>${formatPrice(item.precio * item.cantidad)}</strong></div>
      </article>`).join("");
    elements.cartItems.querySelectorAll("[data-remove-index]").forEach((button) => {
      button.addEventListener("click", () => { removeFromCart(Number(button.getAttribute("data-remove-index"))); });
    });
  }
  const totalItems = state.cart.reduce((acc, item) => acc + item.cantidad, 0);
  elements.cartCount.textContent = String(totalItems);
  elements.cartTotal.textContent = formatPrice(calculateTotal());
}

function buildWhatsappMessage() {
  if (!state.cart.length) return "Hola! Quisiera hacer una consulta";
  const lines = state.cart.map((item) => `- ${item.nombre} x${item.cantidad} (${item.tamano}, ${item.color}) - ${formatPrice(item.precio * item.cantidad)}`);
  return `Hola! Quiero comprar:\n\n${lines.join("\n")}\n\nTotal: ${formatPrice(calculateTotal())}`;
}

function buildConsultationMessage(product) {
  const isPlant = ["interior", "exterior"].includes(product.categoria);
  const color = state.selectedColor || "Sin variante";
  const details = [];
  if (!isPlant && product.tamanos?.length) details.push(`Tamano: ${elements.sizeSelect.value}`);
  if (product.categoria !== "barro" && color !== "Sin variante") details.push(`${isPlant ? "Color de la flor" : "Color de maceta"}: ${color}`);
  const detailsText = details.length ? `\n${details.join("\n")}` : "";
  return `Hola! Quisiera consultar por ${product.nombre}.${detailsText}`;
}

function openConsultationOnWhatsApp(product) {
  const message = buildConsultationMessage(product);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

function checkoutOnWhatsApp() {
  const message = buildWhatsappMessage();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

function setActiveCategory(targetButton) {
  elements.categoryFilters.querySelectorAll(".chip").forEach((chip) => { chip.classList.toggle("is-active", chip === targetButton); });
  elements.navButtons.forEach((button) => { button.classList.toggle("is-active", button.getAttribute("data-nav-category") === state.selectedCategory); });
}

function setActiveMaterial(material) {
  state.selectedMaterial = material;
  elements.materialButtons.forEach((button) => { button.classList.toggle("is-active", button.getAttribute("data-material") === material); });
}

function setActivePlantType(type) {
  state.selectedPlantType = type;
  elements.plantTypeButtons.forEach((button) => { button.classList.toggle("is-active", button.getAttribute("data-plant-type") === type); });
}

function openCartPanel() { if (window.innerWidth <= 1250) elements.cartPanel.classList.add("is-open"); }
function closeCartPanel() { elements.cartPanel.classList.remove("is-open"); }
function toggleMobileMenu(forceOpen = null) {
  if (!elements.mainNav || !elements.menuToggle) return;
  const willOpen = typeof forceOpen === "boolean" ? forceOpen : !elements.mainNav.classList.contains("is-open");
  elements.mainNav.classList.toggle("is-open", willOpen);
  elements.menuToggle.setAttribute("aria-expanded", String(willOpen));
}

function bindEvents() {
  elements.closeModalButton.addEventListener("click", closeModal);
  elements.modal.addEventListener("click", (event) => { if (event.target === elements.modal) closeModal(); });
  elements.addToCartButton.addEventListener("click", addSelectedProductToCart);
  elements.modalPrevImage.addEventListener("click", showPreviousImage);
  elements.modalNextImage.addEventListener("click", showNextImage);
  elements.checkoutButton.addEventListener("click", checkoutOnWhatsApp);
  elements.searchInput.addEventListener("input", (event) => { state.search = event.target.value.trim(); renderProducts(); });
  elements.categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.selectedCategory = button.getAttribute("data-category");
    if (state.selectedCategory !== "macetas") setActiveMaterial("all");
    if (state.selectedCategory !== "plantas") setActivePlantType("all");
    setActiveCategory(button);
    renderProducts();
  });
  elements.materialButtons.forEach((button) => button.addEventListener("click", () => { setActiveMaterial(button.getAttribute("data-material")); renderProducts(); }));
  elements.plantTypeButtons.forEach((button) => button.addEventListener("click", () => { setActivePlantType(button.getAttribute("data-plant-type")); renderProducts(); }));
  elements.navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = button.getAttribute("data-nav-category");
      if (state.selectedCategory !== "macetas") setActiveMaterial("all");
      if (state.selectedCategory !== "plantas") setActivePlantType("all");
      elements.categoryFilters.querySelectorAll(".chip").forEach((chip) => { chip.classList.toggle("is-active", chip.getAttribute("data-category") === state.selectedCategory); });
      button.classList.add("is-active");
      elements.navButtons.forEach((otherButton) => { if (otherButton !== button) otherButton.classList.remove("is-active"); });
      renderProducts();
      if (window.innerWidth <= 980) toggleMobileMenu(false);
    });
  });
  if (elements.menuToggle) {
    elements.menuToggle.addEventListener("click", () => { toggleMobileMenu(); });
  }
  if (elements.mainNav) {
    elements.mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 980) toggleMobileMenu(false);
      });
    });
  }
  elements.cartToggle.addEventListener("click", () => { elements.cartPanel.classList.toggle("is-open"); });
  elements.closeCart.addEventListener("click", closeCartPanel);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) toggleMobileMenu(false);
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeModal(); closeCartPanel(); toggleMobileMenu(false); } });
}

function init() {
  setActiveMaterial("all");
  setActivePlantType("all");
  renderProducts();
  renderCart();
  bindEvents();
}

init();




