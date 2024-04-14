const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function (e) {
    const ul = document.querySelector('nav > ul');
    ul.classList.toggle('menu-slide');
    hamburger.classList.toggle('cross');
});

document.addEventListener('DOMContentLoaded', function () {
    // Get all sections
    const sections = document.querySelectorAll('section');

    const anchors = document.querySelectorAll('a')

    
    console.log(anchors)

    // Add click event listener to all nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const target = link.getAttribute('href').substring(1); // Get the target section id

            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            anchors.forEach(anc => {
                anc.className = 'inactive';
            });        

            console.log(link)
            link.className='active'

            

            // Show the section corresponding to the clicked link
            document.getElementById(target).classList.remove('hidden');

            // Change background image based on the section
            document.body.style.backgroundImage = getBackgroundImage(target);
        });
    });
});

function getBackgroundImage(sectionId) {
    switch (sectionId) {
        case 'home':
            return "url('./home-bg.jpg')";
        case 'about':
            return "url('./about-bg.jpg')";
        case 'skills':
            return "url('./skills-bg.jpg')";
        case 'services':
            return "url('./services-bg.jpg')";
        case 'projects':
            return "url('./projects-bg.jpg')";
        case 'contact':
            return "url('./contact-bg.jpg')";
        default:
        return "";
        }
    }
    