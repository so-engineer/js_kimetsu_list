async function loadData(value) {
  document.getElementById('loading').style.display = 'block';

  await commonView(value);

  document.getElementById('loading').style.display = 'none';
}

async function commonView(value) {
  const response = await fetch(
    `https://ihatov08.github.io/kimetsu_api/api/${value}.json`
  );
  const json = await response.json();
  const element_target = document.getElementById('js-target');

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

commonView('all');
