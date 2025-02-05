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

let currentIndex = 0;
let currentItemIndex = 0;

const carousel = document.querySelector('.carousel');
const nameElement = document.getElementById('name');
const additionalInfoElement = document.getElementById('additional-info');

function showItem(index) {
    const item = data[index];
    nameElement.textContent = item.name;
    additionalInfoElement.textContent = `ID: ${item.id}, Informazioni: ${item.additionalInfo}`;

    carousel.innerHTML = '';
    item.images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `Immagini/${image}`;
        carousel.appendChild(imgElement);
    });

    currentItemIndex = 0;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentItemIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextItem() {
    currentItemIndex = (currentItemIndex + 1) % data[currentIndex].images.length;
    updateCarousel();
}

function prevItem() {
    currentItemIndex = (currentItemIndex - 1 + data[currentIndex].images.length) % data[currentIndex].images.length;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % data.length;
    showItem(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    showItem(currentIndex);
}

document.querySelector('.next').addEventListener('click', nextItem);
document.querySelector('.prev').addEventListener('click', prevItem);

// Mostra il primo elemento all'avvio
showItem(currentIndex);