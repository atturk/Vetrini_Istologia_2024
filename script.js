// Contenuto TSV come stringa multilinea
const tsvData = `312426\tEpitelio colonnare semplice umano\t"<img src=""WhatsApp Image 2025-01-08 at 18.29.30 (3).jpeg""><img src=""WhatsApp Image 2025-01-10 at 14.16.42.jpeg"">"\tH&amp;E
313594\tNervo umano\t"<img src=""WhatsApp Image 2025-01-08 at 18.29.30 (5).jpeg""><img src=""WhatsApp Image 2025-01-08 at 18.29.31 (4).jpeg""><img src=""WhatsApp Image 2025-01-08 at 18.29.31 (5).jpeg""><img src=""WhatsApp Image 2025-01-10 at 14.15.52 (1).jpeg""><img src=""WhatsApp Image 2025-01-10 at 14.16.29 (1).jpeg""><img src=""WhatsApp Image 2025-01-10 at 14.16.29.jpeg""><img src=""WhatsApp Image 2025-01-10 at 15.44.14 (1).jpeg""><img src=""WhatsApp Image 2025-01-10 at 15.44.16.jpeg""><img src=""WhatsApp Image 2025-01-10 at 15.44.16 (1).jpeg"">"\tH&amp;E
315388\tFegato umano\t"<img src=""WhatsApp Image 2025-01-08 at 18.29.32 (4).jpeg""><img src=""WhatsApp Image 2025-01-10 at 14.23.58.jpeg""><img src=""WhatsApp Image 2025-01-10 at 14.23.59 (1).jpeg""><img src=""WhatsApp Image 2025-01-10 at 14.23.59.jpeg"">"\tH&amp;E
313660\tCervelletto umano\t"<img src=""WhatsApp Image 2025-01-08 at 18.29.33 (3).jpeg"">"\tSilver staining`;

// Funzione per elaborare il TSV e restituire un array di oggetti
function parseTSV(data) {
  const lines = data.trim().split('\n');
  const items = lines.map(line => {
    // Dividiamo la riga in colonne (split per tab)
    const cols = line.split('\t');
    // Prendiamo la prima colonna (ID), la seconda (nome), la terza (immagini) e le altre info
    const id = cols[0];
    const name = cols[1];
    let imagesHTML = cols[2];

    // Rimuoviamo le virgolette iniziali e finali (se presenti)
    if (imagesHTML.startsWith('"') && imagesHTML.endsWith('"')) {
      imagesHTML = imagesHTML.slice(1, -1);
    }
    
    // Le restanti colonne (se presenti)
    const additional = cols.slice(3).filter(col => col.trim() !== "");
    
    return { id, name, imagesHTML, additional };
  });
  return items;
}

// Funzione per modificare i src delle immagini in modo che puntino alla cartella "Immagini"
function fixImageSources(container) {
  const imgs = container.querySelectorAll('img');
  imgs.forEach(img => {
    // Se il percorso non contiene già "Immagini/", lo prependiamo
    if (!img.getAttribute('src').startsWith('Immagini/')) {
      img.setAttribute('src', 'Immagini/' + img.getAttribute('src'));
    }
  });
}

// Funzione per creare il carosello di immagini per un item
function createCarousel(imagesHTML, itemIndex) {
  // Creiamo un contenitore temporaneo per manipolare l'HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = imagesHTML;
  // Correggiamo i percorsi delle immagini
  fixImageSources(tempDiv);

  // Otteniamo l'elenco delle immagini create
  const imgElements = Array.from(tempDiv.querySelectorAll('img'));

  // Creiamo il contenitore del carosello
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');
  
  // Creiamo il wrapper per le slide
  imgElements.forEach((img, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
    if(index === 0) slideDiv.classList.add('active'); // Mostriamo la prima slide
    slideDiv.appendChild(img);
    carouselDiv.appendChild(slideDiv);
  });
  
  // Aggiungiamo i pulsanti di controllo
  const prevButton = document.createElement('button');
  prevButton.classList.add('prev');
  prevButton.textContent = '‹';
  
  const nextButton = document.createElement('button');
  nextButton.classList.add('next');
  nextButton.textContent = '›';
  
  carouselDiv.appendChild(prevButton);
  carouselDiv.appendChild(nextButton);
  
  // Funzionalità del carosello
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

// Funzione per creare un item completo da inserire nella pagina
function createItem(item, index) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');
  
  // Carosello
  const carousel = createCarousel(item.imagesHTML, index);
  itemDiv.appendChild(carousel);
  
  // Nome (seconda colonna)
  const title = document.createElement('div');
  title.classList.add('item-title');
  title.textContent = item.name;
  itemDiv.appendChild(title);
  
  // Informazioni aggiuntive (ID e altre colonne)
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('item-info');
  
  const idP = document.createElement('p');
  idP.innerHTML = `<strong>ID:</strong> ${item.id}`;
  infoDiv.appendChild(idP);
  
  if(item.additional.length > 0) {
    item.additional.forEach((info, i) => {
      const infoP = document.createElement('p');
      infoP.innerHTML = `<strong>Info ${i+1}:</strong> ${info}`;
      infoDiv.appendChild(infoP);
    });
  }
  
  itemDiv.appendChild(infoDiv);
  
  return itemDiv;
}

// Funzione di inizializzazione: elabora il TSV e popola la pagina
function init() {
  const items = parseTSV(tsvData);
  const container = document.getElementById('carousel-container');
  items.forEach((item, index) => {
    const itemElement = createItem(item, index);
    container.appendChild(itemElement);
  });
}

// Inizializziamo al caricamento del DOM
document.addEventListener('DOMContentLoaded', init);
