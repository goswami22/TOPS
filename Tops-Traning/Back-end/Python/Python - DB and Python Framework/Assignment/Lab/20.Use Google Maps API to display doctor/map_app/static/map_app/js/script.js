// Mock Doctor Data
const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Jenkins",
        specialty: "Cardiologist",
        rating: 4.9,
        reviews: 124,
        address: "120 Medical Center Blvd, NY",
        phone: "(555) 123-4567",
        distance: "0.8 miles",
        available: true,
        lat: 40.7128,
        lng: -74.0060 // Center NY
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurologist",
        rating: 4.8,
        reviews: 98,
        address: "85 Neuroscience Park, NY",
        phone: "(555) 234-5678",
        distance: "1.2 miles",
        available: true,
        lat: 40.7150,
        lng: -74.0110
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrician",
        rating: 5.0,
        reviews: 215,
        address: "410 Kids Health Ave, NY",
        phone: "(555) 345-6789",
        distance: "2.5 miles",
        available: false,
        lat: 40.7080,
        lng: -74.0010
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        specialty: "Orthopedic Surgeon",
        rating: 4.7,
        reviews: 156,
        address: "77 Joint & Bone Way, NY",
        phone: "(555) 456-7890",
        distance: "3.1 miles",
        available: true,
        lat: 40.7180,
        lng: -73.9980
    },
    {
        id: 5,
        name: "Dr. Aisha Patel",
        specialty: "Dermatologist",
        rating: 4.9,
        reviews: 182,
        address: "220 Clear Skin Clinik, NY",
        phone: "(555) 567-8901",
        distance: "4.0 miles",
        available: true,
        lat: 40.7050,
        lng: -74.0150
    }
];

let map;
let markers = [];
let currentActiveCard = null;

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', initMap);

// Leaflet Map Initialization
function initMap() {
    // Hide loading overlay
    document.getElementById('map-loading').classList.remove('active');
    
    // Initialize Map
    // We use a dark-toned map from CartoDB so it perfectly matches our dark sleek UI
    map = L.map('map', {
        zoomControl: false // We'll add it in a custom position if we want, or rely on scroll
    }).setView([40.7128, -74.0060], 13);
    
    // Add custom styled tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Reposition Zoom Control
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);
    
    // Add loaded class for fade in
    document.getElementById("map").classList.add("loaded");

    // Render doctor cards in sidebar and place markers on map
    renderDoctors(doctors);
    setupMarkers(doctors);
}

// Render the sidebar list
function renderDoctors(docs) {
    const listContainer = document.getElementById('doctorList');
    listContainer.innerHTML = '';

    docs.forEach(doc => {
        const docEl = document.createElement('div');
        docEl.className = 'doctor-card';
        docEl.id = `doc-${doc.id}`;
        
        docEl.innerHTML = `
            <div class="doc-header">
                <div class="doc-info">
                    <h3>${doc.name}</h3>
                    <span class="doc-spec">${doc.specialty}</span>
                </div>
                <div class="doc-rating">
                    <i class="fa-solid fa-star"></i>
                    ${doc.rating} <span>(${doc.reviews})</span>
                </div>
            </div>
            <div class="doc-details">
                <p><i class="fa-solid fa-location-dot"></i> ${doc.address} (${doc.distance})</p>
                <p><i class="fa-solid fa-phone"></i> ${doc.phone}</p>
            </div>
            ${doc.available ? '<div class="status available"><i class="fa-solid fa-circle"></i> Available Today</div>' : '<div class="status" style="color: #94a3b8;">Next Available: Tomorrow</div>'}
        `;

        // Selection event
        docEl.addEventListener('click', () => {
            selectDoctor(doc);
        });

        listContainer.appendChild(docEl);
    });
}

// Map Custom Marker Icons
const defaultIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const activeIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Placing markers on the map
function setupMarkers(docs) {
    // Clear existing markers
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    docs.forEach(doc => {
        const marker = L.marker([doc.lat, doc.lng], { icon: defaultIcon }).addTo(map);
        
        // Popup Content
        const contentString = `
            <div class="info-window-content">
                <h3>${doc.name}</h3>
                <span class="spec">${doc.specialty}</span>
                <p><i class="fa-solid fa-star" style="color:#fbbf24;"></i> ${doc.rating} (${doc.reviews} reviews)</p>
                <p><i class="fa-solid fa-location-dot"></i> ${doc.address}</p>
                <p><i class="fa-solid fa-phone"></i> ${doc.phone}</p>
                <a href="#" onclick="event.preventDefault(); alert('Booking appointment with ${doc.name}...')">Book Appointment</a>
            </div>
        `;

        marker.bindPopup(contentString);

        // Click marker event
        marker.on('click', () => {
            selectDoctor(doc);
        });

        // Store marker reference
        doc.marker = marker;
        markers.push(marker);
    });
}

// Handle Doctor Selection (from map or sidebar)
function selectDoctor(doc) {
    // Highlight sidebar card
    if (currentActiveCard) {
        currentActiveCard.classList.remove('active');
        // Reset previous marker
        if(currentActiveCard.docRef && currentActiveCard.docRef.marker) {
            currentActiveCard.docRef.marker.setIcon(defaultIcon);
        }
    }
    
    const selectedCard = document.getElementById(`doc-${doc.id}`);
    if (selectedCard) {
        selectedCard.classList.add('active');
        currentActiveCard = selectedCard;
        currentActiveCard.docRef = doc;
        
        selectedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Change Marker Color & Pan Map
    if (doc.marker) {
        doc.marker.setIcon(activeIcon);
        map.setView([doc.lat, doc.lng], 15, { animate: true });
        doc.marker.openPopup();
    }
}

// Add simple search functionality
document.getElementById('searchInput').addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredDocs = doctors.filter(doc => 
        doc.name.toLowerCase().includes(searchTerm) || 
        doc.specialty.toLowerCase().includes(searchTerm)
    );
    
    renderDoctors(filteredDocs);
    
    // Hide all markers by removing from map
    markers.forEach(m => map.removeLayer(m));
    
    // Show only filtered markers
    filteredDocs.forEach(doc => {
        if(doc.marker) doc.marker.addTo(map);
    });
});
