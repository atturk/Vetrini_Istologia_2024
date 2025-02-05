// Dati definiti come array di oggetti
const data = [
    {
      id: "312426",
      name: "Epitelio colonnare semplice umano",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.30 (3).jpeg",
        "WhatsApp Image 2025-01-10 at 14.16.42.jpeg"
      ],
      additionalInfo: "H&amp;E"
    },
    {
      id: "313594",
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
      additionalInfo: "H&amp;E"
    },
    {
      id: "315388",
      name: "Fegato umano",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.32 (4).jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.58.jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.59 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.59.jpeg"
      ],
      additionalInfo: "H&amp;E"
    },
    {
      id: "313660",
      name: "Cervelletto umano",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.33 (3).jpeg"
      ],
      additionalInfo: "Silver staining"
    },
    {
      id: "312922",
      name: "Fibrocartilagine mammifero",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.33 (5).jpeg",
        "WhatsApp Image 2025-01-10 at 14.18.35.jpeg",
        "WhatsApp Image 2025-01-10 at 14.18.35 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.18.34.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "C313780",
      name: "Midollo spinale mammifero",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.34 (4).jpeg",
        "WhatsApp Image 2025-01-08 at 18.29.34 (5).jpeg",
        "WhatsApp Image 2025-01-10 at 14.18.12.jpeg",
        "WhatsApp Image 2025-01-10 at 14.18.12 (2).jpeg",
        "WhatsApp Image 2025-01-10 at 14.18.12 (1).jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "314010",
      name: "Aorta umana",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.35 (5).jpeg",
        "WhatsApp Image 2025-01-08 at 18.29.35 (4).jpeg",
        "WhatsApp Image 2025-01-10 at 14.24.31 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.24.30.jpeg",
        "WhatsApp Image 2025-01-10 at 14.24.31.jpeg",
        "WhatsApp Image 2025-01-10 at 15.44.47.jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.22 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.22.jpeg"
      ],
      additionalInfo: "Verhoeff's stain"
    },
    {
      id: "314346",
      name: "Milza umana",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.36 (4).jpeg",
        "WhatsApp Image 2025-01-08 at 18.29.36 (5).jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.20.jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.21 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.21.jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.23 (1).jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "315818",
      name: "Rene umano",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.38 (4).jpeg",
        "WhatsApp Image 2025-01-10 at 14.25.04.jpeg",
        "WhatsApp Image 2025-01-10 at 14.25.04 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.25.03.jpeg",
        "WhatsApp Image 2025-01-10 at 14.25.03 (2).jpeg",
        "WhatsApp Image 2025-01-10 at 14.25.03 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.25.02.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "316012",
      name: "Follicoli Graafiani mammifero",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.39 (3).jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.07.jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.08.jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.25 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.25.jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.26 (1).jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "315648",
      name: "Polmone mammifero",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.39 (5)-1da08ab7853c86e007ecb392aa804a661594a6f7.jpeg",
        "WhatsApp Image 2025-01-10 at 14.17.45.jpeg",
        "WhatsApp Image 2025-01-10 at 15.43.46.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.35 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.31.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.30.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.28.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.27.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "315226",
      name: "Ileo",
      images: [
        "WhatsApp Image 2025-01-08 at 18.29.40 (5).jpeg",
        "WhatsApp Image 2025-01-08 at 18.29.40 (4).jpeg",
        "WhatsApp Image 2025-01-10 at 14.20.36 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.20.36.jpeg",
        "WhatsApp Image 2025-01-10 at 14.20.37.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "31660",
      name: "Cervelletto Mammifero",
      images: [
        "WhatsApp Image 2025-01-10 at 14.15.16.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "316670",
      name: "Ipofisi mammifero",
      images: [
        "WhatsApp Image 2025-01-10 at 14.15.28.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "312444",
      name: "Epitelio ghiandolare umano",
      images: [
        "WhatsApp Image 2025-01-10 at 14.16.56.jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.33 (1).jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "313358",
      name: "Muscolo liscio umano <b>utero</b>",
      images: [
        "WhatsApp Image 2025-01-10 at 14.17.29 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.17.29 (2).jpeg",
        "WhatsApp Image 2025-01-10 at 14.17.29.jpeg",
        "WhatsApp Image 2025-01-10 at 15.44.17.jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.29.jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.28.jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.28 (1).jpeg",
        "WhatsApp Image 2025-01-08 at 18.29.37 (4).jpeg",
        "WhatsApp Image 2025-01-08 at 18.29.37 (5).jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "312462",
      name: "Epitelio di transizione",
      images: [
        "WhatsApp Image 2025-01-10 at 14.19.11.jpeg",
        "WhatsApp Image 2025-01-10 at 14.19.12 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.19.12.jpeg",
        "WhatsApp Image 2025-01-10 at 14.19.28.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "314528",
      name: "<b>Epitelio</b> <b>pelle</b> umana <b>pigmentato</b>",
      images: [
        "WhatsApp Image 2025-01-10 at 14.19.50 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.19.50.jpeg",
        "WhatsApp Image 2025-01-10 at 14.20.09.jpeg",
        "WhatsApp Image 2025-01-10 at 14.20.10.jpeg",
        "WhatsApp Image 2025-01-10 at 15.44.46.jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.19.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "312540",
      name: "<b>Epitelio</b> <b>squamoso</b> <b>stratificato</b> umano",
      images: [
        "WhatsApp Image 2025-01-10 at 14.21.16.jpeg",
        "WhatsApp Image 2025-01-10 at 14.21.17 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.21.17.jpeg",
        "WhatsApp Image 2025-01-10 at 15.43.43.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "313624",
      name: "Cervello mammifero (mammal cerebrum)",
      images: [
        "WhatsApp Image 2025-01-10 at 14.21.38.jpeg",
        "WhatsApp Image 2025-01-10 at 14.21.38 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.21.37.jpeg"
      ],
      additionalInfo: "Silver stain"
    },
    {
      id: "312728",
      name: "Tessuto adiposo umano",
      images: [
        "WhatsApp Image 2025-01-10 at 14.22.03 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.22.02.jpeg",
        "WhatsApp Image 2025-01-10 at 14.22.03.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "314298",
      name: "Tonsille palatine umane",
      images: [
        "WhatsApp Image 2025-01-10 at 14.23.42.jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.43 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 14.23.43.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "316682",
      name: "Tiroide mammifero",
      images: [
        "WhatsApp Image 2025-01-10 at 18.37.30 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.30.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "313316",
      name: "Muscolo schletrico umano adulto",
      images: [
        "WhatsApp Image 2025-01-10 at 18.37.32 (1).jpeg",
        "WhatsApp Image 2025-01-10 at 18.37.31.jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.10 (1).jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.22.jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.11.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.56.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.55.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.55 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.53.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.52.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "312910",
      name: "Cartilagine elastica mammifero",
      images: [
        "WhatsApp Image 2025-01-13 at 19.08.58 (1).jpeg",
        "WhatsApp Image 2025-01-13 at 19.08.59.jpeg",
        "WhatsApp Image 2025-01-22 at 10.02.30.jpeg",
        "WhatsApp Image 2025-01-22 at 10.02.32.jpeg",
        "WhatsApp Image 2025-01-22 at 10.02.33.jpeg",
        "WhatsApp Image 2025-01-22 at 10.02.35.jpeg",
        "WhatsApp Image 2025-01-22 at 10.02.39.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "CUSTOM",
      name: "Fegato",
      images: [
        "WhatsApp Image 2025-01-13 at 19.08.59 (2).jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "314256",
      name: "Linfonodo mammifero",
      images: [
        "WhatsApp Image 2025-01-13 at 19.09.00.jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.01.jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.02 (1).jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.02.jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.03.jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.24.jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.24 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.23.jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.22.jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.21.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "316386",
      name: "Testicolo mammifero",
      images: [
        "WhatsApp Image 2025-01-13 at 19.09.04 (1).jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.04.jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.05.jpeg",
        "WhatsApp Image 2025-01-22 at 10.08.02.jpeg",
        "WhatsApp Image 2025-01-22 at 10.08.01.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.59.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.58.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "312788",
      name: "Tendine mammifero",
      images: [
        "WhatsApp Image 2025-01-13 at 19.09.06 (1).jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.06.jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.07.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.43.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.43 (1).jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "313792",
      name: "Ganglio e nervo spinale mammifero",
      images: [
        "WhatsApp Image 2025-01-13 at 19.09.08 (2).jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.08 (1).jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.09.jpeg",
        "WhatsApp Image 2025-01-22 at 10.08.10.jpeg",
        "WhatsApp Image 2025-01-22 at 10.08.11.jpeg"
      ],
      additionalInfo: "Silver stain"
    },
    {
      id: "313636",
      name: "Corteccia cerebrale umana",
      images: [
        "WhatsApp Image 2025-01-13 at 19.09.23 (2).jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.23 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.08.07.jpeg",
        "WhatsApp Image 2025-01-22 at 10.08.06.jpeg",
        "WhatsApp Image 2025-01-22 at 10.08.04.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "312668",
      name: "Tessuto reticolare mammifero",
      images: [
        "WhatsApp Image 2025-01-13 at 19.09.25.jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.25 (1).jpeg",
        "WhatsApp Image 2025-01-13 at 19.09.26.jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.16 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.17 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.17.jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.19 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.19.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "316548",
      name: "Prostata umana vecchia",
      images: [
        "WhatsApp Image 2025-01-22 at 10.02.51.jpeg",
        "WhatsApp Image 2025-01-22 at 10.02.48.jpeg",
        "WhatsApp Image 2025-01-22 at 10.02.53 (1).jpeg"
      ],
      additionalInfo: "Vecchia significa più tessuto fibromuscolare probabilmente"
    },
    {
      id: "CUSTOM2",
      name: "Pancreas",
      images: [
        "WhatsApp Image 2025-01-22 at 10.03.04.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.05.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.14.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.15.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.16.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.17 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.17.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.18.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "CUSTOM3",
      name: "Fegato",
      images: [
        "WhatsApp Image 2025-01-22 at 10.02.59.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.00.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "313158",
      name: "Striscio di sangue",
      images: [
        "WhatsApp Image 2025-01-22 at 10.03.23 (1).jpeg"
      ],
      additionalInfo: "Wright's"
    },
    {
      id: "314636",
      name: "Ghiandola mammaria umana a riposo&nbsp;",
      images: [
        "WhatsApp Image 2025-01-22 at 10.05.20.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.23.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.24.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "314046",
      name: "Vena cava umana",
      images: [
        "WhatsApp Image 2025-01-22 at 10.03.34 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.33.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.32.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.31.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.34.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.37.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.43.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.41.jpeg",
        "WhatsApp Image 2025-01-22 at 10.03.41 (1).jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "316464",
      name: "Epididimo mammifero",
      images: [
        "WhatsApp Image 2025-01-22 at 10.05.39 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.37.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.36.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.41.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "314962",
      name: "Ghiandola sublinguale mammifero",
      images: [
        "WhatsApp Image 2025-01-22 at 10.05.44.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.43.jpeg",
        "WhatsApp Image 2025-01-22 at 10.05.42.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "312656",
      name: "Tessuto mucoso",
      images: [
        "WhatsApp Image 2025-01-22 at 10.07.45.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.45 (1).jpeg"
      ],
      additionalInfo: "Tessuto mucoso mauturo (connettivo embrionale) da cordone ombellicale di mammifero"
    },
    {
      id: "312952",
      name: "Osso compatto mammifero",
      images: [
        "WhatsApp Image 2025-01-22 at 10.07.49.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.48.jpeg",
        "WhatsApp Image 2025-01-22 at 10.07.49.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "H1890",
      name: "Placche di Peyer",
      images: [
        "WhatsApp Image 2025-01-22 at 10.09.43.jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.41.jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.37 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.37.jpeg"
      ],
      additionalInfo: ""
    },
    {
      id: "314986",
      name: "Ghiandole salivari mammifero",
      images: [
        "WhatsApp Image 2025-01-22 at 10.09.44 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.44.jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.45 (1).jpeg",
        "WhatsApp Image 2025-01-22 at 10.09.45.jpeg"
      ],
      additionalInfo: "Tutte e 3 le ghiandole salivari maggiori montate una dietro l'altra per compararle"
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