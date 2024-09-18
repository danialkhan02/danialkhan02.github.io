const projects = [
    {
        title: "Airline Fare ML predictions",
        description: "Airline Fare ML predictions",
        imageUrl: "/assets/img/airline-image.jpg",
        date: "2022-01-01",
        link: "https://github.com/danialkhan02/Airline-Fare-ML-predictions"
    },
    {
        title: "Sneaky Santa",
        description: "A Computer Vision Game",
        imageUrl: "/assets/img/secret-santa.jpg",
        date: "2022-02-01",
        link: "https://github.com/sulynajimsj/SneakySanta_ComputerVision"
    },
    {
        title: "Body Hydration Device",
        description: "Designed a non-invasive bioelectric device.",
        imageUrl: "/assets/img/body-hydration.webp",
        date: "2021-03-01",
        link: "https://github.com/danialkhan02/Body-Hydration-Device"
    },
    {
        title: "Reversi Game",
        description: "Play 8x8 Reversi against a computer algorithm.",
        imageUrl: "/assets/img/reversi-game.jpg",
        date: "2021-03-01",
        link: "https://github.com/danialkhan02/reversi_project"
    },
    {
        title: "StormSim",
        description: "A storm simulator for tornadoes and hurricanes.",
        imageUrl: "/assets/img/storm-simulator.webp",
        date: "2018-06-01",
        link: "https://github.com/danialkhan02/storm-simulator"
    }
];

let currentIndex = 3; // Start from the fourth project since the first three are always shown
const projectsPerRow = 3; // Number of projects to display per row

function displayProjects(startIndex = 0, endIndex = 3) {
    const recentProjectsDiv = document.getElementById('recent-projects');
    for (let i = startIndex; i < endIndex && i < projects.length; i++) {
        const project = projects[i];
        const projectHTML = `
          <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="${project.imageUrl}" alt="${project.title}">
              </div>
              <div class="card-content">
                <span class="card-title">${project.title}</span>
                <p>${project.description}</p>
              </div>
              <div class="card-action">
                <a href="${project.link}" target="_blank">View Project</a>
              </div>
            </div>
          </div>
        `;
        recentProjectsDiv.insertAdjacentHTML('beforeend', projectHTML);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Display the first project with the most recent date first
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Display the first three projects
    displayProjects(0, 3);

    // Add an event listener to the "Load More" button
    document.getElementById('load-more').addEventListener('click', function() {
        displayProjects(currentIndex, currentIndex + projectsPerRow);
        currentIndex += projectsPerRow;

        // Hide the "Load More" button if all projects have been displayed
        if (currentIndex >= projects.length) {
            document.getElementById('load-more').style.display = 'none';
        }
    });
});