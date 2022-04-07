const appDiv = document.getElementById('app');
let content = '';
let produkter = [];
let inputFelt = '';

function showView() {
  let html = /*html*/ `
  <input 
  type="text" 
  placeholder="Produkt" 
  id="inputFelt" 
  autocomplete="off" 
  oninput="inputFelt = this.value"
  autofocus
  >

  <button onclick="pushIntoArray(), showView(), clearInput(), focusInput();">Legg til</button>
  <div>${content}</div> 
  `;

  for (let i = 0; i < produkter.length; i++) {
    html += /*html*/ `
    <li id="liste" onclick="setStrike(${i})">`;
    if (produkter[i].isStrike == true) {
      html += /*html*/ `
    <span style="text-decoration: line-through;">${produkter[i].name}</span> 
    `;
    } else {
      html += /*html*/ `
    ${produkter[i].name}
    `;
    }
    html += /*html*/ `
    <button onclick="produkter.splice(${i}, 1); showView()">Slett</button>
    </li>`;
  }

  appDiv.innerHTML = html;
}

showView();

function clearInput() {
  document.getElementById('inputFelt').value = '';
}

function pushIntoArray() {
  let produkt = {};
  produkt.name = inputFelt;
  produkt.isStrike = false;

  if (produkt.name == '') {
    null;
  } else {
    produkter.push(produkt);
  }
}

function focusInput() {
  document.getElementById('inputFelt').focus();
}

function setStrike(index) {
  const produkt = produkter[index];
  produkt.isStrike = !produkt.isStrike;
  showView();
}
