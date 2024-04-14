// fetch('https://ihatov08.github.io/kimetsu_api/api/all.json').then(function(response) {
//   console.log(response);
//   return response.json();
// }).then(function(json) {
//   console.log(json);
// });

async function loadData(value) {
  document.getElementById('loading').style.display = 'block';

  setTimeout(function() {
    if (value === 'allchara') { allchara(); }
    if (value === 'onisatsu') { onisatsu(); }
    if (value === 'hashira') { hashira(); }
    if (value === 'oni') { oni(); }

    id_li = ['js-allchara', 'js-onisatsu', 'js-hashira', 'js-oni']
    for (i of id_li) {
      document.getElementById(i).style.display = 'none';
    }

    document.getElementById(`js-${value}`).style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  }, 2000);
}

async function allchara() {
  const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/all.json');
  const json = await response.json();
  const element_target = document.getElementById('js-allchara');
  element_target.innerHTML = '';
  
  console.log(json);
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

async function onisatsu() {
  const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json');
  const json = await response.json();
  const element_target = document.getElementById('js-onisatsu');
  element_target.innerHTML = '';
  
  console.log(json);
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

allchara();
