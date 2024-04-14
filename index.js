function loadData(value) {
  document.getElementById('loading').style.display = 'block';

  if (value === 'allchara') { allchara(); }
  if (value === 'onisatsu') { onisatsu(); }
  if (value === 'hashira') { hashira(); }
  if (value === 'oni') { oni(); }

  id_li = ['js-allchara', 'js-onisatsu', 'js-hashira', 'js-oni']
  for (i of id_li) {
    document.getElementById(i).style.display = 'none';
  }

  document.getElementById(`js-${value}`).style.display = 'flex';
  document.getElementById('loading').style.display = 'none';
}

function commonView(json, element_target) {
  element_target.innerHTML = '';
  
  for (const i of json) {
    const view = `
    <div>
      <ul>
        <li>${i.name}</li>
        <li><img src="https://ihatov08.github.io/${i.image}"></li>
        <li>${i.category}</li>
      </ul>
    </div>
    `;
    element_target.innerHTML += view;
  }
}

async function allchara() {
  const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/all.json');
  const json = await response.json();
  const element_target = document.getElementById('js-allchara');
  commonView(json, element_target);
}

async function onisatsu() {
  const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json');
  const json = await response.json();
  const element_target = document.getElementById('js-onisatsu');
  commonView(json, element_target);
}

async function hashira() {
  const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/hashira.json');
  const json = await response.json();
  const element_target = document.getElementById('js-hashira');
  commonView(json, element_target);
}

async function oni() {
  const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/oni.json');
  const json = await response.json();
  const element_target = document.getElementById('js-oni');
  commonView(json, element_target);
}

allchara();