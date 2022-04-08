const appDiv = document.getElementById('app');
let produkter = [];
let inputFelt = '';
let antall = '';

function showView() {
  let html = /*html*/ `
  <div class="inputArea">
  <input 
  type="text" 
  placeholder="Produkt" 
  id="inputFelt" 
  autocomplete="off" 
  oninput="inputFelt = this.value"
  autofocus
  >

  <input 
  type="number" 
  id="antall" 
  placeholder="Antall" 
  oninput="antall = this.value"
  >

  <button onclick="pushIntoArray(), focusInput();">Legg til</button>
  </div>
  `;

  for (let i = 0; i < produkter.length; i++) {
    html += /*html*/ `
    <li id="liste">
    `;

    if (produkter[i].isStrike == true) {
      html += /*html*/ `
    <span onclick="setStrike(${i})" style="text-decoration: line-through;">${produkter[i].antall} ${produkter[i].name}</span> 
    `;
    } else {
      html += /*html*/ `
      <span onclick="setStrike(${i})">${produkter[i].antall} ${produkter[i].name}</span> 
    `;
    }
    html += /*html*/ `
    <button onclick="deleteItem(${i})">Slett</button>
    </li>
    `;
  }

  appDiv.innerHTML = html;
}

showView();

function deleteItem(index) {
  produkter.splice(index, 1);
  showView();
}

function pushIntoArray() {
  let produkt = {};
  produkt.name = inputFelt;
  produkt.antall = antall;
  if (produkt.name == '') return;
  else produkter.push(produkt);
  inputFelt = '';
  antall = '';
  showView();
}

function focusInput() {
  document.getElementById('inputFelt').focus();
}

function setStrike(index) {
  const produkt = produkter[index];
  produkt.isStrike = !produkt.isStrike;
  showView();
}
