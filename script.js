function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' , hour12: true });
  const date = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  document.getElementById("currentTime").textContent = time;
  document.getElementById("currentDate").textContent = date;
}
setInterval(updateClock, 1000);
updateClock();


 // HOTO Logic

  // --- HOTO Functions ---
  function addHoto() {
    const hotoInput = document.getElementById("hoto");
    const hotoData = hotoInput.value.trim();
    if (hotoData !== "") {
      const data = JSON.parse(localStorage.getItem("hotoList") || "[]");
      data.push(hotoData);
      localStorage.setItem("hotoList", JSON.stringify(data));
      renderHotoTask();
    }
    hotoInput.value = "";
  }

  function renderHotoTask() {
    const showTask = document.getElementById("showTask");
    const data = JSON.parse(localStorage.getItem("hotoList") || "[]");
    if (data.length === 0) {
      showTask.innerHTML = `<li class="list-group-item text-light bg-secondary text-center">No task available</li>`;
    } else {
      showTask.innerHTML = data
        .map(
          (task, index) =>
            `<li class="list-group-item d-flex justify-content-between align-items-center">
              ${task}
              <button class="btn btn-sm btn-outline-danger" onclick="deleteHoto(${index})">🗑️</button>
            </li>`
        )
        .join("");
    }
  }

  function clearHoto() {
    localStorage.removeItem("hotoList");
    renderHotoTask();
  }

  function deleteHoto(index) {
    const data = JSON.parse(localStorage.getItem("hotoList") || "[]");
    data.splice(index, 1);
    localStorage.setItem("hotoList", JSON.stringify(data));
    renderHotoTask();
  }

  // --- INC Functions ---
  function addInc() {
    const incInput = document.getElementById("inc");
    const incData = incInput.value.trim().toUpperCase();
    if (incData !== "") {
      const data = JSON.parse(localStorage.getItem("incList") || "[]");
      data.push(incData);
      localStorage.setItem("incList", JSON.stringify(data));
      renderIncTask();
    }
    incInput.value = "";
  }

  function renderIncTask() {
    const showInc = document.getElementById("showInc");
    const data = JSON.parse(localStorage.getItem("incList") || "[]");
    if (data.length === 0) {
     showInc.innerHTML = `<div class="text-light bg-secondary p-2 text-center rounded">No INC available</div>`;
    } else {
      showInc.innerHTML = data
        .map(
          (task, index) =>
            `<div class="d-flex justify-content-between align-items-center mb-2">
              <span>${task}</span>
              <button class="btn btn-sm btn-outline-danger" onclick="deleteInc(${index})">🗑️</button>
            </div>`
        )
        .join("");
    }
  }

  function clearInc() {
    localStorage.removeItem("incList");
    renderIncTask();
  }

  function deleteInc(index) {
    const data = JSON.parse(localStorage.getItem("incList") || "[]");
    data.splice(index, 1);
    localStorage.setItem("incList", JSON.stringify(data));
    renderIncTask();
  }

  // Initial rendering on page load
  renderHotoTask();
  renderIncTask();
