// Dati definiti come array di oggetti
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
   * Crea il carosello per un determinato item, con effetto slide e swipe.
   */
  function createCarousel(item) {
    // Contenitore principale del carosello
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
  
    // Crea il wrapper per le slide e lo popola
    const slidesWrapper = document.createElement('div');
    slidesWrapper.classList.add('slides-wrapper');
  
    item.images.forEach((image) => {
      const slideDiv = document.createElement('div');
      slideDiv.classList.add('slide');
  
      const imgElement = document.createElement('img');
      imgElement.src = `Immagini/${image}`;
  
      slideDiv.appendChild(imgElement);
      slidesWrapper.appendChild(slideDiv);
    });
  
    carousel.appendChild(slidesWrapper);
  
    // Crea i pulsanti di controllo (frecce)
    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');
    prevButton.innerHTML = '‹';
  
    const nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.innerHTML = '›';
  
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
  
    // Stato corrente
    let currentIndex = 0;
    const totalSlides = item.images.length;
  
    // Funzione per aggiornare la posizione del wrapper
    function updateCarousel() {
      slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    // Gestione click sui pulsanti
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });
  
    // Variabili per la gestione dello swipe
    let startX = 0;
    let isSwiping = false;
  
    // Eventi touch per swipe
    slidesWrapper.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    });
  
    slidesWrapper.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      // Puoi implementare un effetto di "drag" opzionale qui
    });
  
    slidesWrapper.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      // Soglia per considerare lo swipe
      if (Math.abs(diff) > 50) {
        if (diff < 0) {
          // Swipe verso sinistra: slide successiva
          currentIndex = (currentIndex + 1) % totalSlides;
        } else {
          // Swipe verso destra: slide precedente
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        }
        updateCarousel();
      }
      isSwiping = false;
    });
  
    return carousel;
  }
  
  /**
   * Crea l'elemento item, che include:
   * - Il carosello
   * - Il titolo (name)
   * - Le informazioni aggiuntive (ID e additionalInfo)
   */
  function createItem(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
  
    // Aggiunge il carosello
    const carousel = createCarousel(item);
    itemDiv.appendChild(carousel);
  
    // Aggiunge il titolo
    const title = document.createElement('div');
    title.classList.add('item-title');
    title.textContent = item.name;
    itemDiv.appendChild(title);
  
    // Aggiunge le informazioni (ID e additionalInfo)
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('item-info');
  
    const idP = document.createElement('p');
    idP.innerHTML = `<strong>ID:</strong> ${item.id}`;
    infoDiv.appendChild(idP);
  
    const additionalP = document.createElement('p');
    additionalP.innerHTML = `<strong>Info:</strong> ${item.additionalInfo}`;
    infoDiv.appendChild(additionalP);
  
    itemDiv.appendChild(infoDiv);
  
    return itemDiv;
  }
  
  /**
   * Inizializza la pagina creando un item per ciascun elemento di "data".
   */
  function init() {
    const container = document.getElementById('carousel-container');
    data.forEach(item => {
      const itemElement = createItem(item);
      container.appendChild(itemElement);
    });
  }
  
  // Avvia l'inizializzazione al caricamento del DOM
  document.addEventListener('DOMContentLoaded', init);  