let listaTareas = document.querySelector("#tarea");
let listaId = document.querySelector("#id");
let input = document.querySelector("#todoInput");
let btn = document.querySelector("#agregar");
let totalHtml = document.querySelector("#total");
let realizadasHtml = document.querySelector("#realizadas");
let total = 3;
let realizadas = 0;
let valorId = 3;
let tareas = [
  { id: 1, tarea: "Tarea 1", completado: false },
  { id: 2, tarea: "Tarea 2", completado: false },
  { id: 3, tarea: "Tarea3", completado: false },
];

totalHtml.innerHTML = total;
realizadasHtml.innerHTML = realizadas;

function renderTarea() {
  let html = "";
  let html2 = "";
  for (let t of tareas) {
    if (t.completado == true) {
      html += `<li><span style="color:blue">${t.tarea}</span> 
                    <input id="tarea${t.id}" type="checkbox" checked onclick="cambiar('${t.tarea}')">
                    <button class="delete" onclick="borrar('${t.tarea}')"> 
                        <i class="fa-solid fa-xmark"></i> 
                    </button> 
                </li>`;
      html2 += `<li style="color:blue">${t.id}</li>`;
    } else {
      html += `<li>${t.tarea}  
        <input id="tarea${t.id}" type="checkbox" onclick="cambiar('${t.tarea}')">
            <button class="delete" onclick="borrar('${t.tarea}')"> 
                <i class="fa-solid fa-xmark"></i> 
            </button> 
        </li>`;
      html2 += `<li>${t.id}</li>`;
    }
  }
  listaTareas.innerHTML = html;
  listaId.innerHTML = html2;
  totalHtml.innerHTML = total;
}

btn.addEventListener("click", () => {
  event.preventDefault();
  let nuevaTarea = input.value;
  if (tareas.findIndex((e) => e.tarea == nuevaTarea) != -1) {
    alert("No se permiten duplicados");
  } else if (nuevaTarea == "") {
    alert("No se recibió la tarea");
  } else {
    total += 1;
    valorId += 1;
    tareas.push({ id: valorId, tarea: nuevaTarea, completado: false });
    input.value = "";
  }
  renderTarea();
});

function borrar(tarea) {
  let index = tareas.findIndex((e) => e.tarea == tarea);
  tareas.splice(index, 1);
  total -= 1;
  renderTarea();
}

function cambiar(tarea) {
  let index = tareas.findIndex((e) => e.tarea == tarea);
  if (tareas[index].completado == false) {
    tareas[index].completado = true;
    realizadas += 1;
  } else {
    tareas[index].completado = false;
    realizadas -= 1;
  }
  realizadasHtml.innerHTML = realizadas;
  renderTarea();
}
renderTarea();
