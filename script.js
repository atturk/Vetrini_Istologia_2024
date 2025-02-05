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
   * Crea il carosello di immagini per un determinato item.
   * Ogni immagine verrà caricata dalla cartella "Immagini".
   */
  function createCarousel(imageArray) {
    // Creiamo il contenitore del carosello
    const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel');
  
    // Per ogni immagine, creiamo una slide
    imageArray.forEach((filename, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.classList.add('slide');
      if (index === 0) slideDiv.classList.add('active'); // Mostra la prima slide
  
      const img = document.createElement('img');
      // Impostiamo il src in modo da puntare alla cartella "Immagini"
      img.src = 'Immagini/' + filename;
      slideDiv.appendChild(img);
  
      carouselDiv.appendChild(slideDiv);
    });
  
    // Creiamo i pulsanti di controllo del carosello
    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');
    prevButton.textContent = '‹';
  
    const nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = '›';
  
    carouselDiv.appendChild(prevButton);
    carouselDiv.appendChild(nextButton);
  
    // Funzionalità per lo scorrimento delle slide
    let currentIndex = 0;
    const slides = carouselDiv.querySelectorAll('.slide');
  
    prevButton.addEventListener('click', () => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      slides[currentIndex].classList.add('active');
    });
  
    nextButton.addEventListener('click', () => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    });
  
    return carouselDiv;
  }
  
  /**
   * Crea l'elemento "item" per la pagina, includendo:
   * - Il carosello di immagini
   * - Il nome (title)
   * - Le informazioni aggiuntive (ID e additionalInfo)
   */
  function createItem(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
  
    // Inseriamo il carosello
    const carousel = createCarousel(item.images);
    itemDiv.appendChild(carousel);
  
    // Inseriamo il nome (seconda colonna)
    const title = document.createElement('div');
    title.classList.add('item-title');
    title.textContent = item.name;
    itemDiv.appendChild(title);
  
    // Inseriamo le informazioni aggiuntive (ID e additionalInfo)
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
   * Funzione di inizializzazione: per ogni elemento in "data"
   * crea l'item corrispondente e lo aggiunge al container della pagina.
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
  