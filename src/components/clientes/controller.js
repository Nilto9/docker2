const DATA = [
  {
    nombre: "Nilton",
    apellido: "Palian",
    distrito: "Lima",
    dni: 76303470,
    gmail: "nilton.palian@tecsup.edu.pe",
  },
  {
    nombre: "Calin",
    apellido: "Santos",
    distrito: "Arequipa",
    dni: 89256470,
    gmail: "santos.calin@gmail.com",
  },
  {
    nombre: "Alberto",
    apellido: "Mejia",
    distrito: "Cuzco",
    dni: 29786310,
    gmail: "mejia.alberto@senati.pe"
  },
];

export const getClientes = (req, res) => {
  return res.status(200).json({
    ok: true,
    data: DATA,
  });
};
