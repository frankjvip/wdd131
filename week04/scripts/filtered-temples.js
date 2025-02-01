document.addEventListener('DOMContentLoaded', () => {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Tegucigalpa",
            location: "Tegucigalpa, Honduras",
            dedicated: "2009, September, 12",
            area: 28254,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/tegucigalpa-honduras-temple-3878-main.jpg"
        },
        {
            templeName: "San Pedro Sula",
            location: "San Pedro Sula, Honduras",
            dedicated: "2020, September, 5",
            area: 35818,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-pedro-sula-honduras-temple/san-pedro-sula-honduras-temple-52518-main.jpg"
        },
        {
            templeName: "Panama City",
            location: "Provincia de Panama, Panama",
            dedicated: "2005, October, 30",
            area: 18943,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/127-Panama-City-Panama-Temple.jpg"
        },
        {
            templeName: "Buenos Aires Argentina",
            location: "Ciudad Evita, Buenos Aires, Argentina",
            dedicated: "1983, April, 20",
            area: 30659,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
        },
        {
            templeName: "Madrid Spain",
            location: "Madrid, Spain",
            dedicated: "1996, June, 11",
            area: 45800,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
        }
    ];
        
        const templeGrid = document.getElementById("templeGrid");
    
        function displayTemples(filteredTemples) {
            templeGrid.innerHTML = ""; // Clear the current contents
            filteredTemples.forEach(temple => {
                const templeCard = `
                    <figure>
                        <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
                        <figcaption>
                            <h3>${temple.templeName}</h3>
                            <p><strong>Location:</strong> ${temple.location}</p>
                            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                            <p><strong>Size:</strong> ${temple.area} sq ft</p>
                        </figcaption>
                    </figure>
                `;
                templeGrid.insertAdjacentHTML("beforeend", templeCard);
            });
        }
    
        function filterTemples(criteria) {
            let filteredTemples;
            switch (criteria) {
                case 'old':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                    break;
                case 'new':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                    break;
                case 'large':
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    break;
                case 'small':
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    break;
                default:
                    filteredTemples = temples; // Show all if "Home" is selected
            }
            displayTemples(filteredTemples);
        }
    
        // Event Listener for Navigation Links
        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const filter = event.target.dataset.filter;
                filterTemples(filter);
            });
        });
    
        // Initial Display of All Temples
        displayTemples(temples);
    });