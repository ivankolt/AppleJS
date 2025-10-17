// Поиск с автодополнением
const searchInput = document.getElementById('searchInput');
const autocompleteList = document.getElementById('autocomplete');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  autocompleteList.innerHTML = '';
  
  if (!query) {
    autocompleteList.classList.remove('active');
    return;
  }
  
  const matches = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );
  
  if (matches.length) {
    autocompleteList.classList.add('active');
    matches.forEach(item => {
      const div = document.createElement('div');
      div.textContent = item.name;
      div.classList.add('autocomplete-item');
      div.addEventListener('click', () => {
        searchInput.value = item.name;
        autocompleteList.innerHTML = '';
        autocompleteList.classList.remove('active');
        filterBySearch(item.name);
      });
      autocompleteList.appendChild(div);
    });
  } else {
    autocompleteList.classList.remove('active');
  }
});

document.addEventListener('click', (e) => {
  if (e.target !== searchInput) {
    autocompleteList.classList.remove('active');
  }
});

function filterBySearch(name) {
  const filtered = products.filter(p => p.name === name);
  renderProducts(filtered);
}
