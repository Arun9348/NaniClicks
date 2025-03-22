const galleryData = {
    wedding: {
        title: "Wedding Photography",
        images: [
            {
                url: "images/bg/services/wedding/wedding1.webp",
                title: "Wedding Ceremony",
                description: "Beautiful wedding ceremony capture"
            },
            // Add more wedding images
        ]
    },
    birthday: {
        title: "Birthday Photography",
        images: [
            {
                url: "images/bg/services/birthday/birthday1.webp",
                title: "Birthday Celebration",
                description: "Happy birthday moment"
            },
            // Add more birthday images
        ]
    },
    // Add more categories
};

const imagesPerPage = 8;
let currentPage = 1;
let currentImageIndex = 0;
let currentCategory = '';

const images = {
    'auspicious': [
        { url: 'images/bg/services/auspicious/auspicious1.webp', title: 'Auspicious 1' },
        { url: 'images/bg/services/auspicious/auspicious2.webp', title: 'Auspicious 2' },
        { url: 'images/bg/services/auspicious/auspicious3.webp', title: 'Auspicious 3' },
        { url: 'images/bg/services/auspicious/auspicious4.webp', title: 'Auspicious 4' },
        { url: 'images/bg/services/auspicious/auspicious5.webp', title: 'Auspicious 5' },
        { url: 'images/bg/services/auspicious/auspicious6.webp', title: 'Auspicious 6' },
        { url: 'images/bg/services/auspicious/auspicious7.webp', title: 'Auspicious 7' },
        { url: 'images/bg/services/auspicious/auspicious8.webp', title: 'Auspicious 8' },
        { url: 'images/bg/services/auspicious/auspicious9.webp', title: 'Auspicious 9' },
        { url: 'images/bg/services/auspicious/auspicious8.webp', title: 'Auspicious 10' },
        { url: 'images/bg/services/auspicious/auspicious7.webp', title: 'Auspicious 11' },
        { url: 'images/bg/services/auspicious/auspicious6.webp', title: 'Auspicious 12' },
    ],
    'birthday': [
        { url: 'images/bg/services/birthday/birthday1.webp', title: 'Birthday 1' },
        { url: 'images/bg/services/birthday/birthday2.webp', title: 'Birthday 2' },
        { url: 'images/bg/services/birthday/birthday3.webp', title: 'Birthday 3' },
        { url: 'images/bg/services/birthday/birthday4.webp', title: 'Birthday 4' },
        { url: 'images/bg/services/birthday/birthday5.webp', title: 'Birthday 5' },
        { url: 'images/bg/services/birthday/birthday6.webp', title: 'Birthday 6' },
        { url: 'images/bg/services/birthday/birthday7.webp', title: 'Birthday 7' },
        { url: 'images/bg/services/birthday/birthday8.webp', title: 'Birthday 8' },
        { url: 'images/bg/services/birthday/birthday9.webp', title: 'Birthday 9' },
        { url: 'images/bg/services/birthday/birthday8.webp', title: 'Birthday 10' },
        { url: 'images/bg/services/birthday/birthday7.webp', title: 'Birthday 11' },
        { url: 'images/bg/services/birthday/birthday6.webp', title: 'Birthday 12' },
    ],
    'children': [
        { url: 'images/bg/services/children/children1.webp', title: 'Children 1' },
        { url: 'images/bg/services/children/children2.webp', title: 'Children 2' },
        { url: 'images/bg/services/children/children3.webp', title: 'Children 3' },
        { url: 'images/bg/services/children/children4.webp', title: 'Children 4' },
        { url: 'images/bg/services/children/children5.webp', title: 'Children 5' },
        { url: 'images/bg/services/children/children6.webp', title: 'Children 6' },
        { url: 'images/bg/services/children/children7.webp', title: 'Children 7' },
        { url: 'images/bg/services/children/children8.webp', title: 'Children 8' },
        { url: 'images/bg/services/children/children9.webp', title: 'Children 9' },
        { url: 'images/bg/services/children/children8.webp', title: 'Children 10' },
        { url: 'images/bg/services/children/children7.webp', title: 'Children 11' },
        { url: 'images/bg/services/children/children6.webp', title: 'Children 12' },
    ],
    'christmas': [
        { url: 'images/bg/services/christmas/christmas1.webp', title: 'Christmas 1' },
        { url: 'images/bg/services/christmas/christmas2.webp', title: 'Christmas 2' },
        { url: 'images/bg/services/christmas/christmas3.webp', title: 'Christmas 3' },
        { url: 'images/bg/services/christmas/christmas4.webp', title: 'Christmas 4' },
        { url: 'images/bg/services/christmas/christmas5.webp', title: 'Christmas 5' },
        { url: 'images/bg/services/christmas/christmas6.webp', title: 'Christmas 6' },
        { url: 'images/bg/services/christmas/christmas7.webp', title: 'Christmas 7' },
        { url: 'images/bg/services/christmas/christmas8.webp', title: 'Christmas 8' },
        { url: 'images/bg/services/christmas/christmas9.webp', title: 'Christmas 9' },
        { url: 'images/bg/services/christmas/christmas8.webp', title: 'Christmas 10' },
        { url: 'images/bg/services/christmas/christmas7.webp', title: 'Christmas 11' },
        { url: 'images/bg/services/christmas/christmas6.webp', title: 'Christmas 12' },
    ],
    'concert': [
        { url: 'images/bg/services/concert/concert1.webp', title: 'Concert 1' },
        { url: 'images/bg/services/concert/concert2.webp', title: 'Concert 2' },
        { url: 'images/bg/services/concert/concert3.webp', title: 'Concert 3' },
        { url: 'images/bg/services/concert/concert4.webp', title: 'Concert 4' },
        { url: 'images/bg/services/concert/concert5.webp', title: 'Concert 5' },
        { url: 'images/bg/services/concert/concert6.webp', title: 'Concert 6' },
        { url: 'images/bg/services/concert/concert7.webp', title: 'Concert 7' },
        { url: 'images/bg/services/concert/concert8.webp', title: 'Concert 8' },
        { url: 'images/bg/services/concert/concert9.webp', title: 'Concert 9' },
        { url: 'images/bg/services/concert/concert8.webp', title: 'Concert 10' },
        { url: 'images/bg/services/concert/concert7.webp', title: 'Concert 11' },
        { url: 'images/bg/services/concert/concert6.webp', title: 'Concert 12' },
    ],
    'graduation': [
        { url: 'images/bg/services/graduation/graduation1.webp', title: 'Graduation 1' },
        { url: 'images/bg/services/graduation/graduation2.webp', title: 'Graduation 2' },
        { url: 'images/bg/services/graduation/graduation3.webp', title: 'Graduation 3' },
        { url: 'images/bg/services/graduation/graduation4.webp', title: 'Graduation 4' },
        { url: 'images/bg/services/graduation/graduation5.webp', title: 'Graduation 5' },
        { url: 'images/bg/services/graduation/graduation6.webp', title: 'Graduation 6' },
        { url: 'images/bg/services/graduation/graduation7.webp', title: 'Graduation 7' },
        { url: 'images/bg/services/graduation/graduation8.webp', title: 'Graduation 8' },
        { url: 'images/bg/services/graduation/graduation9.webp', title: 'Graduation 9' },
        { url: 'images/bg/services/graduation/graduation8.webp', title: 'Graduation 10' },
        { url: 'images/bg/services/graduation/graduation7.webp', title: 'Graduation 11' },
        { url: 'images/bg/services/graduation/graduation6.webp', title: 'Graduation 12' },
    ],
    'halfSaree': [
        { url: 'images/bg/services/halfSaree/halfSaree1.webp', title: 'Half Saree 1' },
        { url: 'images/bg/services/halfSaree/halfSaree2.webp', title: 'Half Saree 2' },
        { url: 'images/bg/services/halfSaree/halfSaree3.webp', title: 'Half Saree 3' },
        { url: 'images/bg/services/halfSaree/halfSaree4.webp', title: 'Half Saree 4' },
        { url: 'images/bg/services/halfSaree/halfSaree5.webp', title: 'Half Saree 5' },
        { url: 'images/bg/services/halfSaree/halfSaree6.webp', title: 'Half Saree 6' },
        { url: 'images/bg/services/halfSaree/halfSaree7.webp', title: 'Half Saree 7' },
        { url: 'images/bg/services/halfSaree/halfSaree8.webp', title: 'Half Saree 8' },
        { url: 'images/bg/services/halfSaree/halfSaree9.webp', title: 'Half Saree 9' },
        { url: 'images/bg/services/halfSaree/halfSaree10.webp', title: 'Half Saree 10' },
        { url: 'images/bg/services/halfSaree/halfSaree11.webp', title: 'Half Saree 11' },
        { url: 'images/bg/services/halfSaree/halfSaree12.webp', title: 'Half Saree 12' },
        { url: 'images/bg/services/halfSaree/halfSaree13.webp', title: 'Half Saree 13' },
        { url: 'images/bg/services/halfSaree/halfSaree14.webp', title: 'Half Saree 14' },
        { url: 'images/bg/services/halfSaree/halfSaree15.webp', title: 'Half Saree 15' },
    ],
    'houseWarming': [
        { url: 'images/bg/services/houseWarming/houseWarming1.webp', title: 'House Warming 1' },
        { url: 'images/bg/services/houseWarming/houseWarming2.webp', title: 'House Warming 2' },
        { url: 'images/bg/services/houseWarming/houseWarming3.webp', title: 'House Warming 3' },
        { url: 'images/bg/services/houseWarming/houseWarming4.webp', title: 'House Warming 4' },
        { url: 'images/bg/services/houseWarming/houseWarming5.webp', title: 'House Warming 5' },
        { url: 'images/bg/services/houseWarming/houseWarming6.webp', title: 'House Warming 6' },
        { url: 'images/bg/services/houseWarming/houseWarming7.webp', title: 'House Warming 7' },
        { url: 'images/bg/services/houseWarming/houseWarming8.webp', title: 'House Warming 8' },
        { url: 'images/bg/services/houseWarming/houseWarming9.webp', title: 'House Warming 9' },
        { url: 'images/bg/services/houseWarming/houseWarming10.webp', title: 'House Warming 10' },
        { url: 'images/bg/services/houseWarming/houseWarming11.webp', title: 'House Warming 11' },
        { url: 'images/bg/services/houseWarming/houseWarming12.webp', title: 'House Warming 12' },
        { url: 'images/bg/services/houseWarming/houseWarming13.webp', title: 'House Warming 13' },
        { url: 'images/bg/services/houseWarming/houseWarming14.webp', title: 'House Warming 14' },
        { url: 'images/bg/services/houseWarming/houseWarming15.webp', title: 'House Warming 15' },
        { url: 'images/bg/services/houseWarming/houseWarming16.webp', title: 'House Warming 16' },
        { url: 'images/bg/services/houseWarming/houseWarming17.webp', title: 'House Warming 17' },
        { url: 'images/bg/services/houseWarming/houseWarming18.webp', title: 'House Warming 18' },
        { url: 'images/bg/services/houseWarming/houseWarming19.webp', title: 'House Warming 19' },
        { url: 'images/bg/services/houseWarming/houseWarming20.webp', title: 'House Warming 20' },
        { url: 'images/bg/services/houseWarming/houseWarming21.webp', title: 'House Warming 21' },
    ],
    'maternity': [
        { url: 'images/bg/services/maternity/maternity1.webp', title: 'Maternity 1' },
        { url: 'images/bg/services/maternity/maternity2.webp', title: 'Maternity 2' },
        { url: 'images/bg/services/maternity/maternity3.webp', title: 'Maternity 3' },
        { url: 'images/bg/services/maternity/maternity4.webp', title: 'Maternity 4' },
        { url: 'images/bg/services/maternity/maternity5.webp', title: 'Maternity 5' },
        { url: 'images/bg/services/maternity/maternity6.webp', title: 'Maternity 6' },
        { url: 'images/bg/services/maternity/maternity7.webp', title: 'Maternity 7' },
        { url: 'images/bg/services/maternity/maternity8.webp', title: 'Maternity 8' },
        { url: 'images/bg/services/maternity/maternity9.webp', title: 'Maternity 9' },
        { url: 'images/bg/services/maternity/maternity10.webp', title: 'Maternity 10' },
        { url: 'images/bg/services/maternity/maternity11.webp', title: 'Maternity 11' },
        { url: 'images/bg/services/maternity/maternity12.webp', title: 'Maternity 12' },
        { url: 'images/bg/services/maternity/maternity13.webp', title: 'Maternity 13' },
        { url: 'images/bg/services/maternity/maternity14.webp', title: 'Maternity 14' },
        { url: 'images/bg/services/maternity/maternity15.webp', title: 'Maternity 15' },
        { url: 'images/bg/services/maternity/maternity16.webp', title: 'Maternity 16' },
        { url: 'images/bg/services/maternity/maternity17.webp', title: 'Maternity 17' },
    ],
    'portrait': [
        { url: 'images/bg/services/portrait/portrait1.webp', title: 'Potrait 1' },
        { url: 'images/bg/services/portrait/portrait2.webp', title: 'Potrait 2' },
        { url: 'images/bg/services/portrait/portrait3.webp', title: 'Potrait 3' },
        { url: 'images/bg/services/portrait/portrait4.webp', title: 'Potrait 4' },
        { url: 'images/bg/services/portrait/portrait5.webp', title: 'Potrait 5' },
        { url: 'images/bg/services/portrait/portrait6.webp', title: 'Potrait 6' },
        { url: 'images/bg/services/portrait/portrait7.webp', title: 'Potrait 7' },
        { url: 'images/bg/services/portrait/portrait8.webp', title: 'Potrait 8' },
        { url: 'images/bg/services/portrait/portrait9.webp', title: 'Potrait 9' },
        { url: 'images/bg/services/portrait/portrait10.webp', title: 'Potrait 10' },
        { url: 'images/bg/services/portrait/portrait11.webp', title: 'Potrait 11' },
        { url: 'images/bg/services/portrait/portrait12.webp', title: 'Potrait 12' },
        { url: 'images/bg/services/portrait/portrait13.webp', title: 'Potrait 13' },
        { url: 'images/bg/services/portrait/portrait14.webp', title: 'Potrait 14' },
        { url: 'images/bg/services/portrait/portrait15.webp', title: 'Potrait 15' },
        { url: 'images/bg/services/portrait/portrait16.webp', title: 'Potrait 16' },
        { url: 'images/bg/services/portrait/portrait17.webp', title: 'Potrait 17' },
        { url: 'images/bg/services/portrait/portrait18.webp', title: 'Potrait 18' },
        { url: 'images/bg/services/portrait/portrait19.webp', title: 'Potrait 19' },
        { url: 'images/bg/services/portrait/portrait20.webp', title: 'Potrait 20' },
        { url: 'images/bg/services/portrait/portrait21.webp', title: 'Potrait 21' },
        { url: 'images/bg/services/portrait/portrait22.webp', title: 'Potrait 22' },
        { url: 'images/bg/services/portrait/portrait23.webp', title: 'Potrait 23' },
    ],
    'sports': [
        { url: 'images/bg/services/sports/sports1.webp', title: 'Sports 1' },
        { url: 'images/bg/services/sports/sports2.webp', title: 'Sports 2' },
        { url: 'images/bg/services/sports/sports3.webp', title: 'Sports 3' },
        { url: 'images/bg/services/sports/sports4.webp', title: 'Sports 4' },
        { url: 'images/bg/services/sports/sports5.webp', title: 'Sports 5' },
        { url: 'images/bg/services/sports/sports6.webp', title: 'Sports 6' },
        { url: 'images/bg/services/sports/sports7.webp', title: 'Sports 7' },
        { url: 'images/bg/services/sports/sports8.webp', title: 'Sports 8' },
        { url: 'images/bg/services/sports/sports9.webp', title: 'Sports 9' },
        { url: 'images/bg/services/sports/sports10.webp', title: 'Sports 10' },
        { url: 'images/bg/services/sports/sports11.webp', title: 'Sports 11' },
        { url: 'images/bg/services/sports/sports12.webp', title: 'Sports 12' },
        { url: 'images/bg/services/sports/sports13.webp', title: 'Sports 13' },
        { url: 'images/bg/services/sports/sports14.webp', title: 'Sports 14' },
        { url: 'images/bg/services/sports/sports15.webp', title: 'Sports 15' },
        { url: 'images/bg/services/sports/sports16.webp', title: 'Sports 16' },
        { url: 'images/bg/services/sports/sports17.webp', title: 'Sports 17' },
    ],
    'wedding': [
        { url: 'images/bg/services/wedding/wedding1.webp', title: 'Wedding 1' },
        { url: 'images/bg/services/wedding/wedding2.webp', title: 'Wedding 2' },
        { url: 'images/bg/services/wedding/wedding3.webp', title: 'Wedding 3' },
        { url: 'images/bg/services/wedding/wedding4.webp', title: 'Wedding 4' },
        { url: 'images/bg/services/wedding/wedding5.webp', title: 'Wedding 5' },
        { url: 'images/bg/services/wedding/wedding6.webp', title: 'Wedding 6' },
        { url: 'images/bg/services/wedding/wedding7.webp', title: 'Wedding 7' },
        { url: 'images/bg/services/wedding/wedding8.webp', title: 'Wedding 8' },
        { url: 'images/bg/services/wedding/wedding9.webp', title: 'Wedding 9' },
        { url: 'images/bg/services/wedding/wedding10.webp', title: 'Wedding 10' },
        { url: 'images/bg/services/wedding/wedding11.webp', title: 'Wedding 11' },
        { url: 'images/bg/services/wedding/wedding12.webp', title: 'Wedding 12' },
        { url: 'images/bg/services/wedding/wedding13.webp', title: 'Wedding 13' },
        { url: 'images/bg/services/wedding/wedding14.webp', title: 'Wedding 14' },
        { url: 'images/bg/services/wedding/wedding15.webp', title: 'Wedding 15' },
        { url: 'images/bg/services/wedding/wedding16.webp', title: 'Wedding 16' },
        { url: 'images/bg/services/wedding/wedding17.webp', title: 'Wedding 17' },
        { url: 'images/bg/services/wedding/wedding18.webp', title: 'Wedding 18' },
        { url: 'images/bg/services/wedding/wedding19.webp', title: 'Wedding 19' },
    ]
};

function loadImages(category, page) {
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const categoryImages = images[category] || [];
    const grid = document.getElementById('galleryGrid');

    const pageImages = categoryImages.slice(startIndex, endIndex);
    
    pageImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${image.url}" alt="${image.title}" loading="lazy" data-index="${startIndex + index}">
        `;
        
        // Add click event for lightbox
        item.querySelector('img').addEventListener('click', () => {
            openLightbox(category, startIndex + index);
        });
        
        grid.appendChild(item);
    });

    if (endIndex >= categoryImages.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
}

// Lightbox functions
function openLightbox(category, index) {
    currentCategory = category;
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    
    updateLightboxImage();
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    const lightboxImg = document.querySelector('.lightbox-image');
    const categoryImages = images[currentCategory];
    
    if (categoryImages && categoryImages[currentImageIndex]) {
        lightboxImg.src = categoryImages[currentImageIndex].url;
        lightboxImg.alt = categoryImages[currentImageIndex].title;
    }
}

function nextImage() {
    const categoryImages = images[currentCategory];
    if (currentImageIndex < categoryImages.length - 1) {
        currentImageIndex++;
        updateLightboxImage();
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxImage();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || 'wedding';
    currentCategory = category;
    console.log(category)
    
    // Set page title
    document.querySelector('.service-title').textContent = 
        category.charAt(0).toUpperCase() + category.slice(1) + ' Gallery';

    // Load initial images
    loadImages(category, currentPage);

    // Load more button click handler
    document.getElementById('loadMoreBtn').addEventListener('click', function() {
        currentPage++;
        loadImages(category, currentPage);
    });

    // Lightbox event listeners
    const lightbox = document.getElementById('lightbox');
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-next').addEventListener('click', nextImage);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImage);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }
    });
});