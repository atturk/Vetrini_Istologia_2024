const data = [/* Il tuo array di dati rimane uguale */];

let currentOuterIndex = 0;
const outerCarousel = document.querySelector('.outer-carousel');

function createItemElement(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'outer-item';
    
    // Inner Carousel
    const innerHTML = `
        <div class="inner-carousel-container">
            <div class="inner-carousel">
                ${item.images.map(img => `<img src="Immagini/${img}">`).join('')}
            </div>
            <button class="inner-prev">&#10094;</button>
            <button class="inner-next">&#10095;</button>
        </div>
        <div class="item-info">
            <h2>${item.name}</h2>
            <p>ID: ${item.id} | ${item.additionalInfo}</p>
        </div>
    `;
    
    itemDiv.innerHTML = innerHTML;
    return itemDiv;
}

function initializeCarousel() {
    // Popola il carosello esterno
    data.forEach(item => {
        outerCarousel.appendChild(createItemElement(item));
    });

    // Aggiungi gestori eventi
    document.querySelector('.outer-prev').addEventListener('click', () => navigateOuter(-1));
    document.querySelector('.outer-next').addEventListener('click', () => navigateOuter(1));
    
    // Inizializza i caroselli interni
    initInnerCarousels();
}

function navigateOuter(direction) {
    currentOuterIndex = (currentOuterIndex + direction + data.length) % data.length;
    outerCarousel.style.transform = `translateX(-${currentOuterIndex * 100}%)`;
}

function initInnerCarousels() {
    document.querySelectorAll('.inner-carousel-container').forEach((container, index) => {
        let currentInnerIndex = 0;
        const carousel = container.querySelector('.inner-carousel');
        const images = data[index].images;
        
        container.querySelector('.inner-prev').addEventListener('click', () => {
            currentInnerIndex = (currentInnerIndex - 1 + images.length) % images.length;
            carousel.style.transform = `translateX(-${currentInnerIndex * 100}%)`;
        });
        
        container.querySelector('.inner-next').addEventListener('click', () => {
            currentInnerIndex = (currentInnerIndex + 1) % images.length;
            carousel.style.transform = `translateX(-${currentInnerIndex * 100}%)`;
        });
    });
}

// Inizializza tutto al caricamento della pagina
window.onload = initializeCarousel;