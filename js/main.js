// Функция для создания карточки товара
function createProductCard(item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="product-image">
    <div class="product-info">
      <h3 class="product-name">${item.name}</h3>
      <span class="product-category">${item.category}</span>
      <p class="product-description">${item.description}</p>
      <div class="product-nutrition">
        <div class="nutrition-item">Калории: <strong>${item.nutrition.calories}</strong></div>
        <div class="nutrition-item">Белки: <strong>${item.nutrition.protein}</strong></div>
        <div class="nutrition-item">Жиры: <strong>${item.nutrition.fat}</strong></div>
        <div class="nutrition-item">Углеводы: <strong>${item.nutrition.carbs}</strong></div>
      </div>
      <p class="product-composition">Состав: ${item.composition}</p>
      <div class="product-footer">
        <span class="product-price">${item.price} ₽</span>
        <span class="product-weight">${item.weight}</span>
      </div>
    </div>
  `;
  return card;
}

// Рендер списка товаров
function renderProducts(list) {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = '<p class="no-products">Товары не найдены.</p>';
    return;
  }
  
  list.forEach(item => {
    const card = createProductCard(item);
    container.appendChild(card);
  });
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});
