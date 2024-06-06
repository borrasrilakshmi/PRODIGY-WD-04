// Sample projects data (you can replace it with your actual projects)
const projects = [
    { name: "Project 1", description: "Description of project 1", link: "#" },
    { name: "Project 2", description: "Description of project 2", link: "#" },
    { name: "Project 3", description: "Description of project 3", link: "#" }
];

// Function to dynamically populate projects section
function populateProjects() {
    const projectsContainer = document.querySelector('.projects-container');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
        `;
        projectsContainer.appendChild(projectDiv);
    });
}

// Call the function to populate projects when the page loads
document.addEventListener('DOMContentLoaded', populateProjects);
