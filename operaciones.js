const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const file = fs.readFileSync("./citas.json", "utf8");
  const data = JSON.parse(file);

  const formato = {
    nombre: nombre,
    edad: edad,
    tipo: tipo,
    color: color,
    enfermedad: enfermedad,
  };
  fs.writeFileSync("citas.json", JSON.stringify([...data, formato]));
  console.log("¡Cita registrada !");
};

const leer = () => {
  const file = fs.readFileSync("./citas.json", "utf8");
  console.log(`Registro de Citas: \n ${file}`);
};

module.exports = { registrar, leer };