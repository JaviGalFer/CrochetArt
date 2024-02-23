// cart.js

let updateCartItems; 
let cartNotification;

export function initializeCart() {
    const cartIcon = document.querySelector('.iconCarrito');
    console.log("Cart icon: ", cartIcon);
    const cartModal = document.createElement('div');
    const nav = document.querySelector('.nav-links-der');
    const mobileMenu = document.querySelector('.cart-button-mobile');
    console.log("Cart loaded");
    cartModal.classList.add('cart-modal');
    cartModal.innerHTML = `
        <div class="cart-header">
            <h2>Carrito de Compras</h2>
            <span class="close-cart-btn">&times;</span>
        </div>
        <div class="cart-items">
            <!-- Aquí se mostrarán los elementos del carrito -->
        </div>
        <div class="cart-total-container">
            <!-- Nuevo contenedor para el total fuera del contenedor de elementos del carrito -->
            
        </div>
    `;
    
    const closeCartBtn = cartModal.querySelector('.close-cart-btn');
    closeCartBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    // Agrega un manejador de eventos al menú móvil para abrir el carrito
    mobileMenu.addEventListener('click', (event) => {
        console.log("Mobile menu clicked");
            console.log("Cart button clicked");
            cartModal.style.display = 'block';
            updateCartItems();
            hideCartNotification();
            event.stopPropagation();
        
    });

    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
        updateCartItems();
        hideCartNotification();
    });
    
    document.body.appendChild(cartModal);
    

    // Función para actualizar los elementos del carrito
    updateCartItems = function() {
        const cartItemsContainer = cartModal.querySelector('.cart-items');
        // Obtener los elementos del carrito desde el localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Limpiar el contenedor antes de agregar los nuevos elementos
        cartItemsContainer.innerHTML = '';

        // Mostrar cada elemento en el carrito
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <div>
                        <h4>${item.title}</h4>
                        <p>Precio: ${item.price}</p>
                        <p>Cantidad: ${item.quantity}</p>
                        <p>Total: ${calculateTotal(item)}</p>
                    </div>
                    <button class="btn-remove-item" data-index="${index}">Eliminar</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);

            // Agrega un manejador de eventos al botón "Eliminar"
            const removeItemButton = cartItem.querySelector('.btn-remove-item');
            removeItemButton.addEventListener('click', () => {
                removeItemFromCart(index);
            });
        });

        // Mostrar el total general
        const totalContainer = cartModal.querySelector('.cart-total-container');
        totalContainer.innerHTML = `
            <a href="#" class="btn-pagar">Pagar</a>
            <div class="cart-total">
                <strong>Total: ${calculateGrandTotal(cartItems)}</strong>
                
            </div>
        `;

        // Actualiza la notificación del carrito
        showCartNotification(cartItems.length);
    }

    // Función para calcular el total de un artículo específico
    function calculateTotal(item) {
        return (parseFloat(item.price) * item.quantity).toFixed(2);
    }

    // Función para calcular el total general del carrito
    function calculateGrandTotal(cartItems) {
        const grandTotal = cartItems.reduce((total, item) => {
            return total + (parseFloat(item.price) * item.quantity);
        }, 0);

        return grandTotal.toFixed(2);
    }

    // Función para eliminar un artículo del carrito
    function removeItemFromCart(index) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        cartItems.splice(index, 1);

        // Guarda los elementos actualizados en el localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Actualiza visualmente el carrito
        updateCartItems();
    }

    // Función para mostrar la notificación del carrito
    function showCartNotification(quantity) {
        if (!cartNotification) {
            cartNotification = document.createElement('div');
            cartNotification.classList.add('cart-notification');
            
        }

        cartNotification.textContent = quantity.toString();
        cartNotification.style.display = 'block';
        nav.appendChild(cartNotification);
    }

    // Función para ocultar la notificación del carrito
    function hideCartNotification() {
        if (cartNotification) {
            cartNotification.style.display = 'none';
        }
    }
}
// Exporta la función updateCartItems
export { updateCartItems };