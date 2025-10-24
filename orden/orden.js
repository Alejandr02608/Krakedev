let personas = [
  { nombre: "Marcos", edad: 18 },
  { nombre: "Roberto", edad: 15 },
  { nombre: "Andrea", edad: 20 },
  { nombre: "Benja", edad: 25 }
];

function agregarPersona() {
  const nombre = document.getElementById("nombreInput").value;
  const edad = parseInt(document.getElementById("edadInput").value);

  if (nombre && !isNaN(edad)) {
    const nuevaPersona = { nombre, edad };
    personas.push(nuevaPersona);
    localStorage.setItem("personas", JSON.stringify(personas));
    mostrarPersonas();
  }
}

function guardarPersona() {
  const nombre = document.getElementById("nombreInput").value;
  const edad = parseInt(document.getElementById("edadInput").value);

  if (nombre && !isNaN(edad)) {
    const nuevaPersona = { nombre, edad };
    personas.push(nuevaPersona);
    localStorage.setItem("personas", JSON.stringify(personas));
  }
}

function mostrarPersonas() {
  const tabla = document.getElementById("tablaPersonas");
  tabla.innerHTML = "";

  personas.forEach(p => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.nombre}</td>
      <td>${p.edad}</td>
      <td>${p.edad * 12}</td>
      <td>${p.edad * 365}</td>
    `;
    tabla.appendChild(fila);
  });
}

function ordenarPorEdad() {
  personas.sort((a, b) => b.edad - a.edad);
  mostrarPersonas();
}

function determinarMayor() {
  const mayor = encontrarMayor();
  console.log("Mayor:", mayor.nombre, mayor.edad);
}

function encontrarMayor() {
  let personaMayor = personas[0];
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad > personaMayor.edad) {
      personaMayor = personas[i];
    }
  }
  return personaMayor;
}

function determinarMenor() {
  const menor = encontrarMenor();
  console.log("Menor:", menor.nombre, menor.edad);
}

function encontrarMenor() {
  let personaMenor = personas[0];
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad < personaMenor.edad) {
      personaMenor = personas[i];
    }
  }
  return personaMenor;
}

function limpiarTabla() {
  document.getElementById("tablaPersonas").innerHTML = "";
}

// ✅ Exponer funciones al ámbito global
window.agregarPersona = agregarPersona;
window.guardarPersona = guardarPersona;
window.mostrarPersonas = mostrarPersonas;
window.ordenarPorEdad = ordenarPorEdad;
window.determinarMayor = determinarMayor;
window.determinarMenor = determinarMenor;
window.limpiarTabla = limpiarTabla;
