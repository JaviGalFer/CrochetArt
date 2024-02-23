// card-container.js
import { initializeFilter } from '../filter/filter.js';
import { updateCartItems } from '../cart/cart.js';

export function initializeCardContainer() {
            // CARDS CONTAINER
            const cardContainer = document.getElementById('cardContainer');
        
            // Cargar el archivo JSON de forma asíncrona
            fetch('data/cards.json')
                .then(response => response.json())
                .then(cards => {
                    cards.forEach(card => {
                        const cardElement = createCardElement(card);
                        cardContainer.appendChild(cardElement);
                    });
                    // Llama a initializeFilter después de cargar las tarjetas
                    initializeFilter();
                });
    
            function createCardElement(card) {
                const figure = document.createElement('figure');
                figure.classList.add('shop', card.category);
    
                figure.innerHTML = `
                    <div class="shop-overlay">
                        <img src="${card.image}" class="shop-img" alt="${card.title}" />
                    </div>
                    <div class="shop-box">
                        <h3>${card.title}</h3>
                        <ul class="shop-details">
                            ${card.details.map(detail => `<li><span>${detail}</span></li>`).join('')}
                        </ul>
                        <div class="shop-price">
                            <strong>${card.price}</strong>
                            <a href="#" class="btnCards btn--small" data-card='${JSON.stringify(card)}'>Comprar</a>
                        </div>
                    </div>
                `;
                // Manejador de eventos al botón "Comprar"
                const addToCartButton = figure.querySelector('.btnCards');
                addToCartButton.addEventListener('click', addToCart);
                return figure;
            }

            // Agrega la función addToCart
            function addToCart(event) {
                event.preventDefault();
                const cardData = JSON.parse(event.target.getAttribute('data-card'));

                // Obtenemos elementos del carrito desde el localStorage
                const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

                // Verificamos si el elemento ya está en el carrito
                const existingItem = cartItems.find(item => item.title === cardData.title);

                if (existingItem) {
                    // Si ya existe, incrementa la cantidad
                    existingItem.quantity += 1;
                } else {
                    // Si no existe, agrega un nuevo elemento al carrito
                    cartItems.push({
                        title: cardData.title,
                        price: cardData.price,
                        image: cardData.image,
                        quantity: 1, // Inicializa la cantidad en 1
                    });
                }

                // Guardamos los elementos actualizados en el localStorage
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                // Actualizamos visualmente el carrito
                updateCartItems();
            }
}
