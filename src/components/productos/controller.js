const DATA = [
  {
    nombre: "Mouse",
    marca: "Razer",
    stock: 100,
    precio: 120,
  },
  {
    nombre: "Monitor",
    marca: "Razer",
    stock: 50,
    precio: 700,
  },
  {
    nombre: "Fuente de poder",
    marca: "Plus Gold",
    stock: 200,
    precio: 350,
  },
];

export const getProductos = (req, res) => {
  return res.status(200).json({
    ok: true,
    data: DATA,
  });
};
