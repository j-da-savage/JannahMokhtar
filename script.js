function openPopup(projectId) {
  const popup = document.getElementById('popup');
  const popupDetails = document.getElementById('popup-details');

  if (!popup || !popupDetails) {
      console.error('Popup elements not found');
      return;
  }

  const projects = {
    project1: {
     title: 'Platonic Chains, IMA NYU',
     subtitle: 'Kinetic Installation | Arduino, C++, Physical Computing',
     description:'Platonic Chains is a large-scale kinetic installation composed of a hand-assembled web of metal chains in continuous reciprocating motion. Controlled via an <span class="highlight">Arduino</span>-coded system using <span class="highlight">C++</span>, the chains are powered by a winch and <span class="highlight">linear actuator</span>, allowing for rhythmic movement activated by a <span class="highlight">remote</span> control. Each chain, cut and linked by hand, carries metal trinkets and hardware that produce percussive sounds as they strike the floor and each other; creating an evolving soundscape of mechanical motion and material resonance.',
     images: ['Media/platonicChains.jpg', 'Media/platonic1.jpg', 'Media/platonic2.jpg', 'Media/platonic3.jpg', 'Media/platonic4.jpg', 'Media/platonic5.JPEG', 'Media/platonic6.JPG'],
     video: 'Media/PlatonicChains1.mov',
     hasDocumentation: true,
     link: 'https://itp.nyu.edu/shows/spring2024//projects/#10899-platonic-chains'
 },
 project2: {
     title: 'Love is the Universal Language, Louvre Abu Dhabi',
     subtitle: 'Interactive Installation | Python, p5.js, Physical Fabrication',
     description: "Created for the Louvre Abu Dhabi’s Universities Take Over the Museum challenge, this installation explores love as a universal language through the medium of Morse code. Visitors scan a QR code linked to a custom-built <span class='highlight'>live website server</span>, where they can submit personal reflections or stories about love. Using <span class='highlight'>Python</span> and <span class='highlight'>p5.JS</span>, the submitted text is translated into Morse code and visualized on-screen through animated patterns projected onto a historical bowl from the museum’s collection. Inspired by Al-Mutanabbi’s poem Love is What Prevents Tongues from Speaking, the work connects emotional expression, communication, and cultural heritage through interactive storytelling.",
     images: ['Media/louvre.png', 'Media/louvre1.jpg', 'Media/louvre2.jpg', 'Media/louvre3.jpg'],
     video: 'Media/louvreVid.mp4',
     hasDocumentation: true,
     link: 'https://drive.google.com/file/d/1hR0psITC96xHL3ggYCSAIJUMdzDjOXFR/view?usp=sharing'
 },
 project3: {
     title: 'Fifi, the Dancing Cactus Robot!',
     subtitle: 'Performance Robot | Arduinos, Sensors, C++, Physical Computing',
     description: "Fifi is a dancing and talking robot built from wood and metal, designed to perform autonomously. Movement and speech were programmed using multiple <span class='highlight'>Arduinos</span> in <span class='highlight'>C++</span>, controlling <span class='highlight'>servo motors</span>, <span class='highlight'>LEDs</span>, and sound through an <span class='highlight'>H-Bridge</span> and <span class='highlight'>RC shield</span> system. The project required full hardware integration, from wheel and body construction to circuit wiring, and culminated in a synchronized performance. I co-led coding, assembly, and performance scripting, writing and editing Fifi’s dialogue and sound design.",
     images: ['Media/fifiStage.jpg', 'Media/fifi1.jpeg', 'Media/fifi2.jpeg', 'Media/fifi.png', 'Media/fifiPIC.jpeg'],
     video: 'Media/Fifi_Robot.mov',
     hasDocumentation: true,
     link: 'https://github.com/j-da-savage/Performing-robots'
 },
 project4: {
     title: 'TouchDesigner Abstract Soundscape',
     subtitle: 'Audiovisual Composition | TouchDesigner, Audacity',
     description: "Kitchen Resonance is a generative audiovisual composition created with <span class='highlight'>TouchDesigner</span> and <span class='highlight'>Audacity</span>. The piece uses abstract <span class='highlight'>fluid simulations</span> and <span class='highlight'>real-time feedback networks</span> to visualize the sounds of a typical Egyptian family’s kitchen, transforming clattering dishes and conversation into evolving motion patterns. It blends technical experimentation in signal mapping with conceptual reflection on nostalgia and cultural sound memory.",
     images: ['Media/touch.png', 'Media/touch2.png', 'Media/touch3.png'],
     video: 'Media/touchVid1.mov',
     hasDocumentation: true,
     link: 'https://drive.google.com/file/d/1HdaYAFT0Ow3YDNyYAbnuU-7MQ9007TIL/view?usp=sharing'
 },
 project5: {
     title: '"Homes", VR Experience',
     subtitle: 'VR Experience | Unity, C#',
     description: "Homes is a <span class='highlight'>VR</span> experience that explores the emotional and philosophical meaning of “home.” Designed and developed in <span class='highlight'>Unity</span>, the project invites users to reflect on how memory, emotion, and human connection shape our sense of belonging. Through immersive spatial storytelling, Homes transforms domestic architecture into a metaphorical landscape, questioning whether home is defined by place, people, or feeling, and what remains when those elements fade.",
     images: ['Media/homes.png', 'Media/homes1.png', 'Media/homes2.png', 'Media/homes3.png'],
     hasDocumentation: false
 },
 project6: {
     title: 'AI Chatbot, "Creative Fairy Chatbot"',
     subtitle: 'Generative AI Chatbot | p5.js, RiTa.js, p5.speech, OpenAI API',
     description: "This project investigates how data and language models shape creative collaboration between humans and <span class='highlight'>AI</span>. Built with <span class='highlight'>p5.JS</span>, <span class='highlight'>RiTa.JS</span>, and <span class='highlight'>p5.speech</span>, and powered by the <span class='highlight'>OpenAI API</span>, the chatbot functions as a digital creative partner; helping artists brainstorm concepts, develop narratives, and articulate ideas through conversation. The system blends computational linguistics and generative <span class='highlight'>AI</span> to create a responsive interface for artistic ideation and reflection.",
     images: ['Media/fairyChatbot1.jpg'],
     video: 'Media/AI Creative Fairy Chatbot1.mov',
     hasDocumentation: false
 },

  project7:{
     title: 'AI Chatbot, "Love-island(ish)"',
     subtitle: 'AI Chatbot | ml.js, Data Analysis',
     description: "This chatbot was created based on scripts from the show 'Love Island', and analyzed by ml.js.",
     images: ['Media/island.png','Media/island1.png','Media/island2.png','Media/island3.png','Media/island4.png','Media/island5.png'],
     hasDocumentation: true,
     link: 'https://docs.google.com/presentation/d/1AsKXr0ZCg5kfdgpjxJhWsRuC3LocKrlhPIqMaQjImm4/edit?usp=sharing'
 },
 project8:{
     title: 'AI Chatbot "FoodMe"',
     subtitle: 'AI Nutrition Assistant | p5.js, OpenAI API',
     description: "FoodMe is an <span class='highlight'>AI</span>-powered nutrition assistant designed to help users, especially students and individuals on a budget, plan balanced, affordable meals while reflecting on personal consumption habits. Built using <span class='highlight'>p5.JS</span> and the <span class='highlight'>OpenAI API</span>, the chatbot provides personalized recommendations and meal guidance, combining practical advice with social awareness around food privilege and sustainability.",
     images: ['Media/foodMe.png','Media/foodme1.png','Media/foodme2.png','Media/foodme3.png'],
     hasDocumentation: true,
     link: 'https://docs.google.com/presentation/d/1AsjOPurpR9xYMs1MjyE0vQgrqzFE9vXMmSBWH97_NNg/edit?usp=sharing3'
 },
 project9:{
     title: 'WeeeChair, NYUAD',
     subtitle: 'Physical Design & Fabrication | Adobe Illustrator, Physical Fabrication',
     description: "The WeeeChair is a playful, functional furniture piece that reimagines the traditional chair as an interactive object of connection. Designed to bridge generational gaps, it encourages shared interaction by blending childhood nostalgia with contemporary design. The project demonstrates a full design-to-production workflow: the chair was modeled in <span class='highlight'>Adobe Illustrator</span>, precision-cut using a <span class='highlight'>waterjet cutter</span>, and hand-assembled and painted. Built from durable wood, the WeeeChair supports up to 60 kg and balances structural integrity with with an engaging design.",
     images: ["Media/wee2.png", "Media/wee5.png", "Media/wee3.png", "Media/wee4.png", "Media/wee1.png", "Media/wee.png"],
     video: "Media/weeDemonstration.mov",
     hasDocumentation: true,
     link: 'https://drive.google.com/file/d/12Zvfl0PQ_8u2edfwUcd0C_faIW6Mh7fm/view?usp=sharing'
 },
 project10:{
     title: 'Sofra: An Interactive Experience',
     subtitle: 'Interactive Installation | Food, Storytelling, Projections',
     description: "Sofra (سفرة) in Egyptian Arabic translates to “dining table.” Set in an entirely white kitchen, this immersive installation is a replica of the protagonist's childhood kitchen. Through storytelling, projections, and user interaction, “Sofra” explores themes of identity and nostalgia. Using everyday objects, the installation connects people to personal and cultural interpretations of memory and food through the main character's favorite dish: Stuffed Vine Leaves. \n This project aims to create a shared sense of nostalgia through food and community. By engaging visitors through videos, interactive games, and a hands-on experience of making their own stuffed vine leaves, the space invites them to explore the cultural and personal significance of the dish. In doing so, it encourages reflection on their own memories and experiences connected to food, family, and tradition.",
     images: ['Media/sofra1.jpg', 'Media/sofra2.jpg', 'Media/sofra3.jpg', 'Media/sofra4.jpg', 'Media/sofra5.jpg', 'Media/sofra6.jpg', 'Media/sofra7.png', 'Media/sofra8.png', 'Media/sofra10.png', 'Media/sofra9.png', 'Media/sofra11.png', 'Media/sofra12.png', 'Media/sofra13.png', 'Media/sofra14.png'],
     hasDocumentation: true,
     link: 'https://daniaezz.com/sofra-1'
 },
 project11: {
 title: 'Audiovisual Interactive Installation',
 subtitle: 'Generative Installation | Arduino, Max MSP, Ableton',
 description: "This interactive installation links generative sound and real-time visuals to user proximity. An ultrasonic sensor connected to an <span class='highlight'>Arduino</span> captures audience movement, dynamically altering both music and graphics through <span class='highlight'>Max MSP</span> and <span class='highlight'>Ableton Live</span>. The work investigates human-machine interaction through sensory input, transforming spatial behavior into immersive audiovisual feedback.",
 images: ['Media/cama.png', 'Media/cama1.png', 'Media/cama2.png', 'Media/cama3.png'],
 hasDocumentation: false
},

project12: {
 title: 'Interactive Webpage: The Internet Manifesto',
 subtitle: 'Interactive Web Art | p5.js, JS, HTML',
 description: "This interactive webpage reimagines early internet art through the lens of contemporary digital culture. Inspired by Dirk Paesmans’ art collective JODI, the piece functions as a manifesto encouraging users to engage critically with the internet as both artistic medium and cultural space. Through deliberate distortion, user interaction, and playful code manipulation, it highlights the expressive potential of the browser environment.",
 images: ['Media/manifesto.png', 'Media/manifesto1.png', 'Media/manifesto2.png', 'Media/manifesto3.png'],
 hasDocumentation: true,
 link: 'https://docs.google.com/document/d/1DAt43RyifCFZwcRrcUGrnG2YSnyqZ7EfUOJwOBBW2KM/edit?usp=sharing'
},

project13: {
 title: 'The 1st Portfolio',
 subtitle: 'Web Design | HTML, CSS, JS',
 description: "Created for the class 'Communications Lab', this is the first portfolio website I created which incorporates some of the multimedia projects I've done, including websites, comics, and video-documentaries.",
 images: ['Media/portfolio2.png', 'Media/portfoliooo.png', 'Media/portfolio1.png', 'Media/portfolio3.png'],
 hasDocumentation: true,
 link: 'https://j-da-savage.github.io/portfoliooo/'
},

project14: {
 title: 'Electrical Engineering Workshop- WeSTEM',
 subtitle: 'Educational Workshop | Arduino, C++',
 description: "The weSTEM High School Conference is a collaborative, interdisciplinary and locally engaged initiative, designed to promote diversity and female presence in the STEM fields (Science, Technology, Engineering and Mathematics) in and beyond the United Arab Emirates. I was chosen alongside a classmate to give a workshop on basic methods of <span class='highlight'>Arduino</span> and <span class='highlight'>C++</span>, and taught high school girls fundamentals of circuits, microcontrollers, and sensors.",
 images: ['Media/westem.png', 'Media/westem1.png'],
 hasDocumentation: true,
 link: 'https://westem-nyuad.github.io/web/pages/hs_conference.html'
},

project15: {
 title: 'Interactive Media World',
 subtitle: 'VR Exhibition | Unity',
 description: "Interactive Media World is a <span class='highlight'>VR</span> environment that presents a network of interrelated interactive artworks within a cohesive virtual space. Developed in <span class='highlight'>Unity</span>, the project reimagines the exhibition experience by integrating multiple digital installations into a single, explorable world, allowing users to navigate, engage, and interact with each piece in new and dynamic ways.",
 images: ['Media/IMwonderland3.png', 'Media/IMwonderland.png', 'Media/IMwonderland1.png', 'Media/IMwonderland2.png'],
 video: 'Media/VR Exhibit Walkthrough1.mov',
 hasDocumentation: true,
 link: 'https://gallery.styly.cc/scene/46cc07f2-43d7-4f96-9dc3-d5ed48fd9069'
},

project16: {
 title: 'p5.js Generative Text Art',
 subtitle: 'Generative Art | p5.js',
 description: "This generative text piece was created using <span class='highlight'>p5.JS</span>, it was one of the first projects made for the class 'Introduction to Interactive Media'. My main inspiration for this project was a quote that says: 'You are not a burden. You are not too much. You are free to feel and trust. Even here, you are worthy of Love.'",
 images: ['Media/love.png', 'Media/love1.png'],
 hasDocumentation: true,
 link: 'https://editor.p5js.org/j-da-savage/sketches/b8fOy7OEf'
},

project17: {
 title: '"Cooking Baba", Interactive Cooking Game',
 subtitle: 'Interactive Game | p5.js, Arduino, C++, Computer Vision (OpenCV)',
 description: "Cooking Baba is an interactive cooking game made on <span class='highlight'>p5.JS</span>, controlled by <span class='highlight'>Arduino</span> and <span class='highlight'>C++</span>, and using <span class='highlight'>Computer Vision (OpenCV)</span>. This game was my final project for the class 'Introduction to Interactive Media'. Alongside my colleague, we first coded the game and made our own visuals and graphics using <span class='highlight'>p5.JS</span>, <span class='highlight'>Adobe Illustrator</span>, Adobe Photoshop, and more. The physical aspect of the game included several sensors, such as an accelerometer, force sensor, potentiometer, and buttons. The computer-camera connection was made using <span class='highlight'>Computer Vision</span>, which we manipulated to fit our game and create a smooth user experience.",
 images: ['Media/cookingBaba.png', 'Media/cooking1.png', 'Media/cooking2.png', 'Media/cooking3.png', 'Media/cooking4.png'],
 hasDocumentation: true,
 link: 'https://github.com/daniaezz/Intro-to-IM-Final-Project'
},

project18: {
 title: "Augmented Reality Project, 'Where's Jannah'",
 subtitle: 'Augmented Reality (AR) Experience | Styly.cc',
 description: "Inspired by the puzzle book 'Where's Waldo?', this <span class='highlight'>AR</span> experience designed on Styly.cc takes the adventurous and curious aspects of this puzzle and turns it into a challenge for the user. This experience depicts a classical 'Where's Waldo?' scenario with one hidden person in the crowd, that the user has to find: Me, Jannah!",
 images: ['Media/whereJannah.png', 'Media/where1.png'],
 hasDocumentation: true,
 link: 'https://gallery.styly.cc/scene/b885cd5c-1473-49b5-9556-ff416b74b056'
},

// project19 is commented out in index.html, so I'll keep it commented out here as well.
// project19: {
//  title: '"Pixel Race", p5.js Multiplayer Game',
//  description: "“Pixel Race” is a two-player game in which each player, a unicorn and a horse, has to collect all their designated items, rainbows and hay-bails, before the other player. The winner is whoever collects 20 items before the other player. This was one of the first projects I made using p5.js.",
//  images: ['Media/pixelGame.png', 'Media/pixel1.png'],
//  video: 'Media/PixelRaceVid.mov',
//  hasDocumentation: true,
//  link: 'https://editor.p5js.org/j-da-savage/full/p3-SDJlZo'
// },

project20: {
 title: 'Arduino Musical Instrument',
 subtitle: 'Physical Computing | Arduino, C++, Sensors',
 description: "This was one of my first projects using <span class='highlight'>Arduino</span> and <span class='highlight'>C++</span>, where alongside a team member, we created an instrument out of an accelerometer; force sensor; potentiometer; and buzzer, connected to an <span class='highlight'>Arduino</span>, and wrote a <span class='highlight'>C++</span> code to control the notes depending on force and other inputs.",
 images: ['Media/instrument.png', 'Media/instrument1.png'],
 hasDocumentation: true,
 link: 'https://github.com/j-da-savage/Introduction-to-Interactive-Media/blob/main/Musical%20Instrument/Documentation.md'
},

project21: {
  title: 'Misk: Parametric Pavilion',
  subtitle: 'Parametric Architecture | Rhino, Grasshopper, 3D Modeling & Printing',
  description: "Misk is a parametric pavilion concept inspired by the architectural language of the world’s largest mosques. The design reinterprets principles of Islamic architecture; geometric repetition, modularity, and spiritual symmetry, through computational generation. Using <span class='highlight'>Rhino</span> and <span class='highlight'>Grasshopper</span>, datasets derived from mosque dimensions informed the creation of modular ring structures that were patterned, projected, and volumized through parametric logic. The result is a structurally efficient pavilion that balances cultural symbolism, light interplay, and human scale. A small-scale <span class='highlight'>3D-printed</span> model was produced to explore form, proportion, and spatial experience.",
  images: ['Media/misk1.png', 'Media/misk2.png', 'Media/misk5.png', 'Media/misk4.png','Media/misk3.png', 'Media/misk6.png'],
  hasDocumentation: true,
  link: 'https://drive.google.com/file/d/1NkJY2aUwJb63mnOOoe0dG6UptxBUUjqc/view?usp=sharing'
 },

 project22: {
  title: 'Cradle: Wearable Jewelry',
  subtitle: 'Computational Design | Rhino, Grasshopper, 3D Modeling & Printing',
  description: "Cradle is a jewelry set composed of a ring and bangle that draws inspiration from natural shell structures and other biological forms. The design translates layered geometries and organic asymmetry into elegant, form-fitting pieces that contour to the wrist and hand. Created in <span class='highlight'>Rhino</span> and <span class='highlight'>Grasshopper</span> and optimized for <span class='highlight'>3D</span> printing, Cradle demonstrates how computational design can transform biological systems into functional, wearable art, merging structural intricacy with comfort and durability. The piece is being showcased at Dubai Design Week 2025.",
  images: ['Media/cradle1.png', 'Media/cradle2.png', 'Media/cradle3.png', 'Media/cradle4.png','Media/cradle5.png', 'Media/cradle6.png'],
  hasDocumentation: true,
  link: 'https://drive.google.com/file/d/1verYgdqpoNRDPhdskpB1yKKwNYGJwxhw/view?usp=sharing'
 },

 project23: {
    title: 'Live Coding, Audiovisual Composition',
    subtitle: 'Live Performance | TidalCycles (Haskell), Hydra (JS)',
    description: "This live audiovisual performance merges generative sound and visuals coded in <span class='highlight'>real-time feedback</span> using <span class='highlight'>TidalCycles</span> (<span class='highlight'>Haskell</span>) and <span class='highlight'>Hydra</span> (<span class='highlight'>JS</span>). Through improvisation, rhythmic layering, and live feedback, the composition evolves between structured repetition and chaotic visual abstraction. My contribution focused on crafting the visual language; developing transitions, feedback systems, and reactive patterns that synchronized with musical changes. The piece explores <span class='highlight'>live coding</span> as both a collaborative performance practice and an experimental form of audiovisual composition.",
    video: 'Media/live_final.mp4',
    images: ['Media/live1.png','Media/live2.png','Media/live3.png'],
    hasDocumentation: true,
    link: 'https://blog.livecoding.nyuadim.com/2025/05/09/team-smoking-caterpillar-russel-jiho-adilbek-jannah-clara-final-performance/'
   }
 };

const project = projects[projectId];

if (!project) {
    console.error('Project not found:', projectId);
    return;
}

// Create popup content
const imagesContent = createImagesContent(project);
const videosContent = createVideosContent(project);

// const content = `
//     <h2>${project.title}</h2>
//     <p>${project.description}</p>
//     <div class="popup-images">
//         ${imagesContent}
//         ${videosContent}
//     </div>
//     ${project.hasDocumentation ?
//         `<p class="documentation-link">
//             <a href="${project.link}" target="_blank">View Documentation</a>
//         </p>` :
//         ''}`;

const content = `
    <h2>${project.title}</h2>
    ${project.subtitle ? `
        <h3 class="popup-subtitle">
            ${project.subtitle}
        </h3>
    ` : ''}
    <p>${highlightKeywords(project.description, project.highlight !== false)}</p>
    <div class="popup-images">
        ${imagesContent}
        ${videosContent}
    </div>
    ${project.hasDocumentation ?
        `<p class="documentation-link">
            <a href="${project.link}" target="_blank">View Documentation</a>
        </p>` :
        ''}`;

popupDetails.innerHTML = content;
popup.style.display = 'flex';

// Add click handler to close on background click
popup.onclick = function(event) {
    if (event.target === popup) {
        closePopup();
    }
};
}

function closePopup() {
const popup = document.getElementById('popup');
if (!popup) return;

// Pause all videos when closing
const videos = popup.getElementsByTagName('video');
Array.from(videos).forEach(video => {
    if (video) {
        video.pause();
    }
});

popup.style.display = 'none';
}

function createImagesContent(project) {
if (!project.images || !Array.isArray(project.images)) {
    return '';
}

return project.images
    .filter(img => {
        if (!img) return false;
        const fileExtension = img.split('.').pop().toLowerCase();
        return !['mov', 'mp4', 'webm'].includes(fileExtension);
    })
    .map(img => `
        <img
            src="./${img}"
            alt="${project.title} image"
            onerror="this.onerror=null; this.src='placeholder.jpg'; console.error('Failed to load image:', '${img}');"
        >
    `).join('');
}

function createVideosContent(project) {
if (!project.video) {
    return '';
}

const videoPath = `./${project.video}`;
const videoExtension = project.video.split('.').pop().toLowerCase();

const mimeTypes = {
    // 'mov': 'video/quicktime',
    // 'mp4': 'video/mp4',
    // 'webm': 'video/webm'
};

return `
    <video
        controls
        preload="metadata"
        playsinline
        onerror="console.error('Failed to load video:', '${videoPath}')"
    >
        <source src="${videoPath}" type="${mimeTypes[videoExtension] || 'video/mp4'}">
        <source src="${videoPath.replace(/\.[^/.]+$/, '.mp4')}" type="video/mp4">
        Your browser does not support the video tag.
    </video>`;
}

// Add keyboard event listener for ESC key
document.addEventListener('keydown', function(event) {
if (event.key === 'Escape') {
    closePopup();
}
});

//highlighting words
function highlightKeywords(text, enabled = true) {
    if (!enabled) return text;
  
    const keywords = ["TidalCycles","3D-printed", "Haskell","live feedback", "remote","Ableton Live", "LEDs", "TouchDesigner", "Audacity", "real-time feedback networks", "fluid simulations", "live website server", "OpenAI API", "linear actuator", "Hydra", "Arduino", "Arduinos", "servo motors", "motor", "H-Bridge", "RC shield", "Unity","waterjet cutter","VR","AI","Rhino","Grasshopper","HTML","Javascript","CSS","C#","C++", "Python","OpenCV","p5,js","AR","3D","Python","p5.JS","RiTa.JS","p5.speech","JS","Max MSP","Ableton", "Adobe Illustrator"]; // words to highlight
    let highlighted = text;
  
    keywords.forEach(word => {
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
      // If the word contains special symbols, don’t use \b
      const useBoundaries = /^[A-Za-z0-9_]+$/.test(word);
      const regex = new RegExp(
        useBoundaries ? `\\b${escapedWord}\\b` : escapedWord,
        'gi'
      );
  
      highlighted = highlighted.replace(regex, `<span class="highlight">${word}</span>`);
    });
  
    return highlighted;
  }
  

  
  

// // Intentional list of pastel colors for cycling through tags
// const TAG_COLORS = [
//     '#ADD8E6', // Light Blue
//     '#90EE90', // Light Green
//     '#FFB6C1', // Light Pink
//     '#F0E68C', // Khaki/Yellow
//     '#E6E6FA', // Lavender
//     '#B0E0E6'  // Powder Blue
// ];

// function formatSubtitleAsTags(subtitle) {
//     if (!subtitle) return '';

//     // Normalize separators: replace pipes (|) and extra spaces with a comma for clean splitting
//     const normalizedSubtitle = subtitle.replace(/ \| /g, ', ').replace(/ , /g, ', ');

//     // Split into individual tags by comma, trim whitespace, and filter out any empty strings
//     const tags = normalizedSubtitle.split(',')
//         .map(tag => tag.trim())
//         .filter(tag => tag.length > 0);

//     // Map each tag to an HTML span with cycling pastel colors
//     const html = tags.map((tag, index) => {
//         // Cycle through the TAG_COLORS array for intentional color variations
//         const color = TAG_COLORS[index % TAG_COLORS.length];
        
//         // Use a dark color for the text for contrast and readability
//         return `<span class="tag-item" style="background-color: ${color}; color: #333;">${tag}</span>`;
//     }).join(''); // Join with no space, letting the CSS margin handle spacing

//     // Wrap all tags in a container for overall spacing
//     return `<div class="popup-subtitle-tags">${html}</div>`;
// }

