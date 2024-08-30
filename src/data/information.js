import panel_Solar from "/public/assets/panel_Solar.png";
import inversor from "/public/assets/inversor.png";
import cableado from "/public/assets/cableado.png";
import estructura from "/public/assets/estructura.png";
import documento from "/public/assets/documento.png";
import ingenieria from "/public/assets/ingenieria.png";

export const information = [
  {
    item: 1,
    imagen: panel_Solar,
    descripcion:
      "Suministro, Transporte e instalación de modulo solar fotovoltaico",
    unidad: "UNID",
    suministro: true,
  },
  {
    item: 2,
    imagen: inversor,
    descripcion:
      "Inversor Solar ongrid 20 kW trifasico...Cableado y Protecciones del sistema solar fotovoltaico",
    unidad: "UNID",
    suministro: true,
  },
  {
    item: 3,
    imagen: cableado,
    descripcion: "Cableado y Protecciones del sistema solar fotovoltaico",
    potenciaWhp: "N/A",
    unidad: "SISTEMA",
  },
  {
    item: 4,
    imagen: estructura,
    descripcion:
      "Diseño, suministro e instalación de la estructura para el sistema de captación...",
    potenciaWhp: "N/A",
    unidad: "PANEL",
    suministro: true,
  },
  {
    item: 5,
    imagen: documento,
    descripcion:
      "Legalización del sistema solar Fotovoltaico al ente prestador del servicio...",
    potenciaWhp: "N/A",
    unidad: "DOCUMENTO",
  },
  {
    item: 6,
    imagen: ingenieria,
    descripcion:
      "Ingeniería, programación del sistema, capacitación en el funcionamiento...",
    potenciaWhp: "N/A",
    unidad: "GLB",
  },
];
