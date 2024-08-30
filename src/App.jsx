import "./App.css";
import { information } from "./data/information";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    item_1: {
      potencia: 0,
      suministro: 0,
      cantidad: 0,
    },
    item_2: {
      potencia: 0,
      cantidad: 0,
      suministro: 0,
    },
    item_3: {
      cantidad: 1,
    },

    item_4: {
      cantidad: 0,
      suministro: 0,
    },
    item_5: {
      cantidad: 0,
    },
    item_6: {
      cantidad: 0,
    },
  });

  const handleSuministro = (e, item) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [`item_${item}`]: {
        ...prevInfo[`item_${item}`],
        suministro: e.target.value,
      },
    }));
  };

  const cantidad = (e, item) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [`item_${item}`]: {
        ...prevInfo[`item_${item}`],
        cantidad: e.target.value,
      },
    }));
  };

  const isntallTrans1 = Number(info.item_1.suministro * 0.1);
  const priceInstall1 = isntallTrans1 + Number(info.item_1.suministro);
  const parcialPrice1 = Number(priceInstall1 * info.item_1.cantidad);

  const isntallTrans2 = Number(info.item_2.suministro * 0.1);
  const priceInstall2 = isntallTrans2 + Number(info.item_2.suministro);
  const parcialPrice2 = Number(priceInstall2 * info.item_2.cantidad);

  const suministro3 = Number((parcialPrice1 + parcialPrice2) * 0.2);
  const installTrans3 = suministro3 * 0.15;
  const priceInstall3 = installTrans3 + suministro3;
  const parcialPrice3 = Number(priceInstall3 * info.item_3.cantidad);

  const isntallTrans4 = Number(info.item_4.suministro * 0.5);
  const priceInstall4 = isntallTrans4 + Number(info.item_4.suministro);
  const parcialPrice4 = Number(priceInstall4 * info.item_4.cantidad);

  const parcialPrice5 =
    (parcialPrice1 + parcialPrice2 + parcialPrice3) *
    Number(info.item_5.cantidad);

  const parcialPrice6 =
    (parcialPrice1 +
      parcialPrice2 +
      parcialPrice3 +
      parcialPrice4 +
      parcialPrice5) *
    0.0025;

  const subtotalGeneral =
    parcialPrice1 +
    parcialPrice2 +
    parcialPrice3 +
    parcialPrice4 +
    parcialPrice5 +
    parcialPrice6;

  const iva = Math.round(
    (parcialPrice3 + parcialPrice4 + parcialPrice5 + parcialPrice6) * 0.19
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="print:max-h-none print:overflow-visible overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ITEM
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                IMAGEN
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                DESCRIPCIÓN
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                POTENCIA Whp
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                CANT
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                UNID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                SUMINISTRO
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                INSTALACIÓN-TRANSPORTE
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                PRECIO CON INSTALACIÓN
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                PRECIO PARCIAL
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {information.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="text-start px-4 py-2 font-medium text-gray-900">
                    {item.item}
                  </td>
                  <td className="text-start px-4 py-2 text-gray-700">
                    <img
                      src={item.imagen}
                      alt="panel_Solar"
                      className="w-20 h-20"
                    />
                  </td>
                  <td className="description text-start px-4 py-2 text-gray-700 max-w-[10rem]">
                    {item.descripcion}
                  </td>
                  <td className="text-center px-4 py-2 text-gray-700">
                    {item.potenciaWhp !== "N/A" && (
                      <input
                        type="number"
                        name="potencia_whp"
                        className="border-2 border-gray-300 rounded-lg px-2 py-1 w-16"
                      />
                    )}
                    {item.potenciaWhp === "N/A" && "N/A"}
                  </td>
                  <td className="text-center px-4 py-2 text-gray-700">
                    <input
                      onChange={(e) => cantidad(e, item.item)}
                      type="number"
                      name="cantidad"
                      className="border-2 border-gray-300 rounded-lg px-2 py-1 w-20"
                    />
                  </td>
                  <td className="text-center px-4 py-2 text-gray-700">
                    {item.unidad}
                  </td>
                  <td>
                    {item.suministro && (
                      <input
                        onChange={(e) => handleSuministro(e, item.item)}
                        type="number"
                        name="suministro"
                        className="border-2 border-gray-300 rounded-lg px-2 py-1 w-24"
                      />
                    )}

                    {item.item === 3 && suministro3}
                  </td>
                  <td>
                    {/* INSTALACIÓN-TRANSPORTE */}
                    {item.item === 1 && isntallTrans1}
                    {item.item === 2 && isntallTrans2}
                    {item.item === 3 && installTrans3}
                    {item.item === 4 && isntallTrans4}
                  </td>
                  <td>
                    {/* PRECIO CON INSTALACIÓN */}
                    {item.item === 1 && priceInstall1}
                    {item.item === 2 && priceInstall2}
                    {item.item === 3 && priceInstall3}
                    {item.item === 4 && priceInstall4}
                    {item.item === 5 && parcialPrice5}
                    {item.item === 6 && parcialPrice6}
                  </td>
                  <td>
                    {/* PRECIO PARCIAL */}
                    {item.item === 1 && parcialPrice1}
                    {item.item === 2 && parcialPrice2}
                    {item.item === 3 && parcialPrice3}
                    {item.item === 4 && parcialPrice4}
                    {item.item === 5 && parcialPrice5}
                    {item.item === 6 && parcialPrice6}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Subtotal General ($)</td>
              <td>{subtotalGeneral}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>I.V.A 19% ($)</td>
              <td>{iva}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total General ($)</td>
              <td>{subtotalGeneral + iva}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-5">
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Imprimir
        </button>
      </div>
    </>
  );
}

export default App;
