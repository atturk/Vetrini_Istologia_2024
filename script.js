// Dati di esempio: sostituisci questo array con i tuoi dati reali
const data = [
    {
        id: 312426,
        name: "Epitelio colonnare semplice umano",
        images: [
            "WhatsApp Image 2025-01-08 at 18.29.30 (3).jpeg",
            "WhatsApp Image 2025-01-10 at 14.16.42.jpeg"
        ],
        additionalInfo: "H&E"
    },
    {
        id: 313594,
        name: "Nervo umano",
        images: [
            "WhatsApp Image 2025-01-08 at 18.29.30 (5).jpeg",
            "WhatsApp Image 2025-01-08 at 18.29.31 (4).jpeg",
            "WhatsApp Image 2025-01-08 at 18.29.31 (5).jpeg",
            "WhatsApp Image 2025-01-10 at 14.15.52 (1).jpeg",
            "WhatsApp Image 2025-01-10 at 14.16.29 (1).jpeg",
            "WhatsApp Image 2025-01-10 at 14.16.29.jpeg",
            "WhatsApp Image 2025-01-10 at 15.44.14 (1).jpeg",
            "WhatsApp Image 2025-01-10 at 15.44.16.jpeg",
            "WhatsApp Image 2025-01-10 at 15.44.16 (1).jpeg"
        ],
        additionalInfo: "H&E"
    },
    {
        id: 315388,
        name: "Fegato umano",
        images: [
            "WhatsApp Image 2025-01-08 at 18.29.32 (4).jpeg",
            "WhatsApp Image 2025-01-10 at 14.23.58.jpeg",
            "WhatsApp Image 2025-01-10 at 14.23.59 (1).jpeg",
            "WhatsApp Image 2025-01-10 at 14.23.59.jpeg"
        ],
        additionalInfo: "H&E"
    },
    {
        id: 313660,
        name: "Cervelletto umano",
        images: [
            "WhatsApp Image 2025-01-08 at 18.29.33 (3).jpeg"
        ],
        additionalInfo: "Silver staining"
    }
];

  
  /**
   * Crea un elemento "item" contenente:
   * - Un carosello interno per le immagini.
   * - Una sezione informativa con nome e ulteriori dettagli.
   */
  function createItemElement(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    
    // Template HTML per l'item
    const innerHTML = `
      <div class="inner-carousel-container">
        <div class="inner-carousel">
          ${item.images.map(img => `<img src="Immagini/${img}" alt="${item.name}">`).join('')}
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
  
  /**
   * Inizializza la visualizzazione:
   * - Popola il container degli item.
   * - Inizializza il carosello interno per ogni item.
   */
  function initializeItems() {
    const itemsContainer = document.querySelector('.items-container');
    
    // Crea e aggiunge ogni item al container
    data.forEach(item => {
      itemsContainer.appendChild(createItemElement(item));
    });
    
    // Inizializza i caroselli interni per ciascun item
    initInnerCarousels();
  }
  
  /**
   * Inizializza i caroselli interni:
   * Per ogni container di carosello interno, aggiunge i gestori per i pulsanti prev/next.
   */
  function initInnerCarousels() {
    // Per ogni carosello interno, consideriamo l'indice corrispondente nell'array data
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
  window.onload = initializeItems;
  