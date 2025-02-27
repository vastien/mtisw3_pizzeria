// Base de datos
const Data = {
  status: "success",
  items: [
    {
      id: 1,
      titulo: "Pizza americana",
      ingredientes: [
        "Salsa de tomate, ",
        "Queso, ",
        "Pepperoni y Aceitunas negras",
      ],
      precio: 13990,
      imagen: "americana", // Nombre de la imagen sin extension
      cantidad: 1,
    },
    {
      id: 2,
      titulo: "Pizza BBQ Chicken",
      ingredientes: [
        "Queso mozzarella, ",
        "Pollo, ",
        "Tocino, ",
        "Ceblolla, ",
        "Salsa BBQ",
      ],
      precio: 12990,
      imagen: "BBQChiken",
      cantidad: 1,
    },
    {
      id: 3,
      titulo: "Pizza Campesina",
      ingredientes: ["Pollo, ", "Pimiento, ", "Champiñón"],
      precio: 15990,
      imagen: "campesina",
      cantidad: 1,
    },
    {
      id: 4,
      titulo: "Pizza hawaiana",
      ingredientes: ["Queso mozzarella, ", "Piña, ", "Jamón"],
      precio: 15990,
      imagen: "hawaiana",
      cantidad: 1,
    },
    {
      id: 5,
      titulo: "Mechada BBQ",
      ingredientes: [
        "Doble porción de carne mechada, ",
        "queso mozzarella, ",
        "Queso parmesano y romano",
      ],
      precio: 14990,
      imagen: "mechadaBBQ",
      cantidad: 1,
    },
    {
      id: 6,
      titulo: "Pizza Vegan Queen",
      ingredientes: [
        "Champiñon, ",
        "pimiento verde, ",
        "aceitunas negras, ",
        "Not Meat (carneplant based) y queso vegano.",
      ],
      precio: 18990,
      imagen: "veganQueen",
      cantidad: 1,
    },
    {
      id: 7,
      titulo: "Pizza personalizada",
      ingredientes: [],
      precio: 16990,
      imagen: "arma-tu-pizza",
      cantidad: 1,
    },
    {
      id: 8,
      titulo: "Añadidos",
      ingredientes: [],
      precio: 2500,
      imagen: "agregados",
      cantidad: 1,
    },
  ],
  locales: [
    {
      id: 1,
      nombre: "Local Maipú",
      ubicacion: ["Santiago", "Maipú", "Del rey", "2038"],
      imagen: "",
    },
    {
      id: 2,
      nombre: "Local Providencia",
      ubicacion: ["Santiago", "Providencia", "Génova", "8302"],
      imagen: "",
    },
    {
      id: 3,
      nombre: "Local Vitacura",
      ubicacion: ["Santiago", "Vitacura", "Maurice Ravel", "7777"],
      imagen: "",
    },
  ],
};

export default Data;
