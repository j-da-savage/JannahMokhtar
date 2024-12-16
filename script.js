// JavaScript for Popup Functionality
function openPopup(projectId) {
    const popup = document.getElementById('popup');
    const popupDetails = document.getElementById('popup-details');

    // Sample project data (Replace with dynamic data as needed)
    const projects = {
        project1: {
            title: 'Project 1',
            description: 'Description for Project 1.',
            images: ['project1-image1.jpg', 'project1-image2.jpg'],
            link: 'https://example.com/project1'
        },
        project2: {
            title: 'Project 2',
            description: 'Description for Project 2.',
            images: ['project2-image1.jpg', 'project2-image2.jpg'],
            link: 'https://example.com/project2'
        }
    };

    const project = projects[projectId];

    if (project) {
        let content = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="popup-images">
                ${project.images.map(img => `<img src="${img}" alt="${project.title} image">`).join('')}
            </div>
            <a href="${project.link}" target="_blank">View Documentation</a>
        `;
        popupDetails.innerHTML = content;
        popup.style.display = 'flex';
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
