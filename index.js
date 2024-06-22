document.getElementById('addButton').addEventListener('click', () => {

  const value = getInputElement();
  const lists = getListsFromLocalStorage() || [];

  lists.push(value);

  const parsedLists = JSON.stringify(lists);
  localStorage.setItem('lists', parsedLists);

  renderLists();
})

function getInputElement() {
  return document.getElementById('input').value;
}

function getListsFromLocalStorage() {
  const lists = localStorage.getItem('lists');

  if (lists === null) {
    return [];
  } else {
    return JSON.parse(lists);
  }
}

// display

function renderLists() {
  const lists = getListsFromLocalStorage();

  const listsContainer = document.getElementById('lists');
  listsContainer.innerHTML = '';



  lists.map((list) => {
    const checkbox = `
    <label>
        <input type="checkbox" >
        ${list}
      </label>
  `;

    listsContainer.innerHTML += checkbox;

  });


}

renderLists();

