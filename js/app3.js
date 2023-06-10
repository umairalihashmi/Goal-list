const form = document.querySelector("form");
const list = document.querySelector("ul");


let dict = localStorage.getItem('data') ?
JSON.parse(localStorage.getItem('data')) : {};

for(var key in dict) {
    var value = dict[key];

    const newGoal = key;

  const li = document.createElement("li");

  const p = document.createElement("p");
  p.textContent = newGoal;
  p.setAttribute("class", value);

  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");

  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const updateBtn = document.createElement("button");

  editBtn.setAttribute("type", "button");
  editBtn.setAttribute("class", "edit");

  const editIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");
  const updateBtnIcon = document.createElement("i");

  editIcon.setAttribute("class", "fa-solid fa-pencil");
  deleteIcon.setAttribute("class", "fa-solid fa-trash");

  editBtn.appendChild(editIcon);

  deleteBtn.setAttribute("type", "button");
  deleteBtn.setAttribute("class", "delete");

  deleteBtn.appendChild(deleteIcon);

  updateBtnIcon.setAttribute("class", "fa-solid fa-check");

  updateBtn.appendChild(updateBtnIcon);

  li.appendChild(p);
  li.appendChild(textInput);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  li.appendChild(updateBtn);
  list.appendChild(li);

  
  textInput.style.display = "none";
  updateBtn.style.display = "none";

  p.addEventListener("click", () => {
    p.classList.toggle("completed");
    // modify start
    dict[p.innerText] = p.className;
    localStorage.setItem('data',JSON.stringify(dict));
    // modify end
  });

  editBtn.addEventListener("click", () => {
    p.style.display = "none";
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
    textInput.style.display = "block";
    textInput.style.border = "1px solid #efefef";
    textInput.style.borderRadius = "2.5rem";
    updateBtn.style.display = "block";
    updateBtn.style.backgroundColor = "#333";
    updateBtn.style.fontSize = "1.8rem";
    textInput.value = p.innerText;
    textInput.focus();
  });

  updateBtn.addEventListener("click", () => {

    delete dict[p.innerText];

    p.textContent = textInput.value;
    textInput.style.display = "none";
    updateBtn.style.display = "none";
    p.style.display = "block";
    editBtn.style.display = "block";
    deleteBtn.style.display = "block";

//   MODIFICATION OF CODE
    dict[p.innerText] = p.className;
    localStorage.setItem('data',JSON.stringify(dict));
// MODIFICATION ENDS

  });

  deleteBtn.addEventListener("click", () => {
    
    console.log(p);
    // modification start
    delete dict[p.innerText];
    localStorage.setItem('data',JSON.stringify(dict));

    //modification end

    deleteBtn.parentElement.remove();
  });
    // do something with "key" and "value" variables
  }




form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const newGoal = e.target.addGoal.value;

  const li = document.createElement("li");

  const p = document.createElement("p");
  p.textContent = newGoal;

  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");

  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const updateBtn = document.createElement("button");

  editBtn.setAttribute("type", "button");
  editBtn.setAttribute("class", "edit");

  const editIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");
  const updateBtnIcon = document.createElement("i");

  editIcon.setAttribute("class", "fa-solid fa-pencil");
  deleteIcon.setAttribute("class", "fa-solid fa-trash");

  editBtn.appendChild(editIcon);

  deleteBtn.setAttribute("type", "button");
  deleteBtn.setAttribute("class", "delete");

  deleteBtn.appendChild(deleteIcon);

  updateBtnIcon.setAttribute("class", "fa-solid fa-check");

  updateBtn.appendChild(updateBtnIcon);

  li.appendChild(p);
  li.appendChild(textInput);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  li.appendChild(updateBtn);
  list.appendChild(li);

//   MODIFICATION OF CODE
  dict[p.innerText] = p.className;
  localStorage.setItem('data',JSON.stringify(dict));
// MODIFICATION ENDS

  textInput.style.display = "none";
  updateBtn.style.display = "none";


  p.addEventListener("click", () => {
    p.classList.toggle("completed");
    // modify start
    dict[p.innerText] = p.className;
    localStorage.setItem('data',JSON.stringify(dict));
    // modify end
  });

  editBtn.addEventListener("click", () => {
    p.style.display = "none";
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
    textInput.style.display = "block";
    textInput.style.border = "1px solid #efefef";
    textInput.style.borderRadius = "2.5rem";
    updateBtn.style.display = "block";
    updateBtn.style.backgroundColor = "#333";
    updateBtn.style.fontSize = "1.8rem";
    textInput.value = p.innerText;
    textInput.focus();
  });

  updateBtn.addEventListener("click", () => {

    delete dict[p.innerText];

    p.textContent = textInput.value;
    textInput.style.display = "none";
    updateBtn.style.display = "none";
    p.style.display = "block";
    editBtn.style.display = "block";
    deleteBtn.style.display = "block";

//   MODIFICATION OF CODE
    dict[p.innerText] = p.className;
    localStorage.setItem('data',JSON.stringify(dict));
// MODIFICATION ENDS

  });

  deleteBtn.addEventListener("click", () => {
    
    console.log(p);
    // modification start
    delete dict[p.innerText];
    localStorage.setItem('data',JSON.stringify(dict));
    //modification end

    deleteBtn.parentElement.remove();
  });



  e.target.addGoal.value = "";
});
