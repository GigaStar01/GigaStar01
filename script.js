// Sample data for anime
const animeList = [{
        title: "Attack on Titan",
        description: "Humans are nearly exterminated by giant creatures called Titans. In a world where humans are the prey, Eren Yeager and his friends join the Survey Corps to fight back.",
        image: "attack.jpg",
    },
    {
        title: "Naruto",
        description: "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the village's leader and strongest ninja.",
        image: "naruto.jpg",
    },
    {
        title: "My Hero Academia",
        description: "In a world where people with superpowers (known as 'Quirks') are the norm, a boy without them still dreams of becoming a hero.",
        image: "hero.jpg",
    },
];

// Function to display anime list
function displayAnimeList() {
    const listElement = document.getElementById("anime-list");
    animeList.forEach((anime, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = anime.title;
        listItem.addEventListener("click", () => displayAnimeDetails(index));
        listElement.appendChild(listItem);
    });
}

// Function to display anime details
function displayAnimeDetails(index) {
    const anime = animeList[index];
    const detailsElement = document.getElementById("anime-details");
    detailsElement.innerHTML = `
        <h2>${anime.title}</h2>
        <img src="${anime.image}" alt="${anime.title}" style="width:100%; max-width:300px;">
        <p>${anime.description}</p>
    `;
}

// Initialize the anime list on page load
window.onload = displayAnimeList;