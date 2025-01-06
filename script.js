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
       description: '"Platonic Chains" is a large-scale kinetic installation, a web of chains in constant reciprocating motion that viewers may navigate through. Metal trinkets and hardware hung from the industrial chain create sound when hit with the floor and the chain itself. The motion aspect was created using a winch connected to the chains, controlled by a remote control with its buttons controlled by a linear actuator connected to an Arduino, controlling the movements of the chains.',
       images: ['Media/platonicChains.jpg', 'Media/platonic1.jpg', 'Media/platonic2.jpg', 'Media/platonic3.jpg', 'Media/platonic4.jpg', 'Media/platonic5.JPEG', 'Media/platonic6.JPG'],
       video: 'Media/PlatonicChains1.mov',
       hasDocumentation: true,
       link: 'https://itp.nyu.edu/shows/spring2024//projects/#10899-platonic-chains'
   },
   project2: {
       title: 'Love is the Universal Language, Louvre Abu Dhabi',
       description: "This artwork was created in response to the theme of sustainability and tangibility, as part of the Louvre Museum Abu Dhabi’s “Universities Take Over the Museum” challenge. Love is What Prevents Tongues from Speaking is an interactive installation designed to teach Morse code while conveying the idea that love is a universal language. We used Morse code to transform feelings of love, memories, or stories into tangible, secret messages that could be understood only by a select few. The installation consisted of two parts: First, users scanned a QR code that prompted them to write a few sentences about love or share a personal story. This story would later appear on the table's screen as Morse code. We wrote a code in p5.js to translate text into Morse code, creating visually engaging visuals on the bowl, which could only be understood by the person whose story was being shared.The bowl is an artifact from the Louvre Abu Dhabi collection, and we were inspired by the poem Love is What Prevents Tongues from Speaking by Al-Mutanabbi, which relates to the artifact and further emphasizes the connection between love and communication.",
       images: ['Media/louvre.png', 'Media/louvre1.jpg', 'Media/louvre2.jpg', 'Media/louvre3.jpg'],
       video: 'Media/louvreVid.mp4',
       hasDocumentation: true,
       link: 'https://drive.google.com/file/d/1hR0psITC96xHL3ggYCSAIJUMdzDjOXFR/view?usp=sharing'
   },
   project3: {
       title: 'Fifi, the Dancing Cactus Robot!',
       description: "As part of the class 'Performing Robots', a classmate and I created a dancing and talking robot, Fifi. Fifi is a robot with a wooden and metal base, movement and talking are controlled by servo motors, connected to Ardunios and an H-bridge, while the movement of the base was controlled a Hobby RC shield and remote control which we coded. The project was part of NYUAD's Interactive Media Showcase and performance in Fall 2023. Both my classmate and I contributed equally to creating the robot, namely in writing the C++ code for the different roles of the Arduino(s) (moving the body of the robot, moving the base, controlling the remote control, controlling the LED lights, controlling the sound and mouth movement), building the robot base, and attaching the different parts like the wheels; metal body; servo motors. I was also in charge of writing, recording, and editing Fifi's script for the performance piece. ",
       images: ['Media/fifiStage.jpg', 'Media/fifiPIC.jpeg', 'Media/fifi.png'],
       video: 'Media/Fifi_Robot.mov',
       hasDocumentation: true,
       link: 'https://github.com/j-da-savage/Performing-robots'
   },
   project4: {
       title: 'TouchDesigner Abstract Soundscape',
       description: "This is a simple network made out of abstract fluid simulations using Touch Designer. The visuals were paired with a soundscape made with Audacity for my work-in-progress capstone project. It represents the sounds of a typical egyptian family's kitchen, while reminiscing memories of the past.",
       images: ['Media/touch.png', 'Media/touch2.png', 'Media/touch3.png'],
       video: 'Media/touchVid1.mov',
       hasDocumentation: true,
       link: 'https://drive.google.com/file/d/1HdaYAFT0Ow3YDNyYAbnuU-7MQ9007TIL/view?usp=sharing'
   },
   project5: {
       title: '"Homes", VR Experience',
       description: "'Homes' is a VR experience created using Unity, for a course called 'Alternate Realities', this project was part of NYUAD's Interactive Media Showcase, Spring 2022. what really is “home”? what is home if not the people in it. there are houses that we struggle to call home because they lack attributes, for home is a special place that lives not in the physical realm, but in our hearts, minds, and spirits. Is home nothing but an empty vessel if there are no memories associated to it, if there is no laughter that fills it, and there are no tears that water it. If a home was a person, who would it be? If home was a feeling, how would it make you feel?And if home was a song, would you sing along? I have always wondered, if rooms could talk, what would they say?  ",
       images: ['Media/homes.png', 'Media/homes1.png', 'Media/homes2.png', 'Media/homes3.png'],
       hasDocumentation: false
   },
   project6: {
       title: 'AI Chatbot, "Creative Fairy Chatbot"',
       description: "The goal of this project is to explore the role of data in the creation of conversational AI. Using p5.js, RiTa.js, p5.speech, and OpenAI API, this chatbot is a creative assistant meant to help artists and creatives brainstorm ideas for their projects, providing them with assistance in coming up with ideas, as well as giving them a space to sketch out their thoughts.",
       images: ['Media/fairyChatbot1.jpg'],
       video: 'Media/AI Creative Fairy Chatbot1.mov',
       hasDocumentation: false
   },

    project7:{
       title: 'AI Chatbot, "Love-island(ish)"',
       description: "This chatbot was created based on scripts from the show 'Love Island', and analyzed by ml.js.",
       images: ['Media/island.png','Media/island1.png','Media/island2.png','Media/island3.png','Media/island4.png','Media/island5.png'],
       hasDocumentation: true,
       link: 'https://docs.google.com/presentation/d/1AsKXr0ZCg5kfdgpjxJhWsRuC3LocKrlhPIqMaQjImm4/edit?usp=sharing'
   },
   project8:{
       title: 'AI Chatbot "FoodMe"',
       description: "This chatbot is an all-round nutrition assistant powered by AI. Its purpose is to help anyone, including college students, and individuals needing financial and nutritional guidance, manage their meals and make wise decisions in regards to time-management and budgeting. FoodMe encourages users to reflect on their own privilege and consumption habits. Created on p5.js and using OpenAI API.",
       images: ['Media/foodMe.png','Media/foodme1.png','Media/foodme2.png','Media/foodme3.png'],
       hasDocumentation: true,
       link: 'https://docs.google.com/presentation/d/1AsjOPurpR9xYMs1MjyE0vQgrqzFE9vXMmSBWH97_NNg/edit?usp=sharing3'
   },
   project9:{
       title: 'weee chair, NYUAD',
       description: "The weeeChair was fully designed and built by me for the class 'Utilitas, Venustas, Firmitas. The WeeeChair is a playful, multi-audience furniture piece designed to bridge generational gaps by combining functionality with fun. Inspired by childhood memories, it integrates a slide into a sophisticated design that suits both children and adults. With vibrant colors and a refined aesthetic, the WeeeChair fosters interaction and connection in shared spaces, blending cultural storytelling with innovative design principles. The chair was designed in Adobe Illustrator and its wooden pieces were cut using a waterjet cutter, then assembled and painted by me. The wooden chair supports up to 60kgs!",
       images: ["Media/wee2.png", "Media/wee3.png", "Media/wee5.png", "Media/wee4.png", "Media/wee1.png", "Media/wee.png"],
       hasDocumentation: true,
       link: 'https://drive.google.com/file/d/12Zvfl0PQ_8u2edfwUcd0C_faIW6Mh7fm/view?usp=sharing'
   },
   project10:{
       title: 'Interactive Media Capstone Project work-in-progress',
       description: "[WORK IN PROGRESS]  Sofra is an interactive installation that explores identity and nostalgia through the universal language of food. Set in a white kitchen, it uses storytelling and projections to bring this blank canvas to life. Sofra utilizes everyday objects to connect people to personal and cultural interpretations of memory and food. Through the experience, the user gets to see a part of their own narrative unfold with the help of technology as a tool for reflection. ",
       images: ['Media/sofra.png','Media/sofra2.png', 'Media/sofra3.png', 'Media/sofra4.png'],
       video: 'Media/sofraVid.mp4',
       hasDocumentation: true,
       link: 'https://drive.google.com/file/d/1Bz7x97F_cQGnEp3bkP7oG8f9zLoRKHQJ/view?usp=sharing'
   },
   project11: {
   title: 'Audiovisual Interactive Installation',
   description: "Created on Max MSP and Ableton Live, connected to an ultrasonic distance sensor connected to an Arduino, this is an interactive generative audiovisual installation where generative music drives real-time graphics, and user input alters the behavior of both sound and visuals, creating a responsive and immersive environment. It was made as the final project for the class 'Computational Approaches to Music and Audio'.",
   images: ['Media/cama.png', 'Media/cama1.png', 'Media/cama2.png', 'Media/cama3.png'],
   hasDocumentation: false
},

project12: {
   title: 'p5.js Internet Manifesto',
   description: "“Better Internet Art For a Better World” is an interactive page on p5.js, inspired by Dirk Paesmans art collective “Jodi”. This piece, created for the class “Understanding Interactive Media”, is an internet art manifesto, which invites users to engage with the internet as both a medium and a space for artistic expression, while maintaining the core values of internet art.",
   images: ['Media/manifesto.png', 'Media/manifesto1.png', 'Media/manifesto2.png', 'Media/manifesto3.png'],
   hasDocumentation: true,
   link: 'https://docs.google.com/document/d/1DAt43RyifCFZwcRrcUGrnG2YSnyqZ7EfUOJwOBBW2KM/edit?usp=sharing'
},

project13: {
   title: 'The 1st Portfolio',
   description: "Created for the class 'Communications Lab', this is the first portfolio website I created which incorporates some of the multimedia projects I've done, including websites, comics, and video-documentaries.",
   images: ['Media/portfolio2.png', 'Media/portfoliooo.png', 'Media/portfolio1.png', 'Media/portfolio3.png'],
   hasDocumentation: true,
   link: 'https://j-da-savage.github.io/portfoliooo/'
},

project14: {
   title: 'Electrical Engineering Workshop- WeSTEM',
   description: "The weSTEM High School Conference is a collaborative, interdisciplinary and locally engaged initiative, designed to promote diversity and female presence in the STEM fields (Science, Technology, Engineering and Mathematics) in and beyond the United Arab Emirates. I was chosen alongside a classmate to give a workshop on basic methods of Arduino and C++, and taught high school girls fundamentals of circuits, microcontrollers, and sensors.",
   images: ['Media/westem.png', 'Media/westem1.png'],
   hasDocumentation: true,
   link: 'https://westem-nyuad.github.io/web/pages/hs_conference.html'
},

project15: {
   title: 'Interactive Media Wonderland',
   description: "'Interactive Media Wonderland' is a VR project representing an environment of interrelated interactive media artworks, and displaying them in different ways. The project was part of NYUAD's Interactive Media Showcase, Spring 2023.",
   images: ['Media/IMwonderland3.png', 'Media/IMwonderland.png', 'Media/IMwonderland1.png', 'Media/IMwonderland2.png'],
   video: 'Media/VR Exhibit Walkthrough1.mov',
   hasDocumentation: true,
   link: 'https://gallery.styly.cc/scene/46cc07f2-43d7-4f96-9dc3-d5ed48fd9069'
},

project16: {
   title: 'p5.js Generative Text Art',
   description: "This generative text piece was created using p5.js, it was one of the first projects made for the class 'Introduction to Interactive Media'. My main inspiration for this project was a quote that says: 'You are not a burden. You are not too much. You are free to feel and trust. Even here, you are worthy of Love.'",
   images: ['Media/love.png', 'Media/love1.png'],
   hasDocumentation: true,
   link: 'https://editor.p5js.org/j-da-savage/sketches/b8fOy7OEf'
},

project17: {
   title: '"Cooking Baba", Interactive Cooking Game',
   description: "Cooking Baba is an interactive cooking game made on p5.js, controlled by Arduino and C++, and using Computer Vision (OpenCV). This game was my final project for the class 'Introduction to Interactive Media'. Alongside my colleague, we first coded the game and made our own visuals and graphics using p5.js, Adobe Illustrator, Adobe Photoshop, and more. The physical aspect of the game included several sensors, such as an accelerometer, force sensor, potentiometer, and buttons. The computer-camera connection was made using Computer Vision, which we manipulated to fit our game and create a smooth user experience.",
   images: ['Media/cookingBaba.png', 'Media/cooking1.png', 'Media/cooking2.png', 'Media/cooking3.png', 'Media/cooking4.png'],
   hasDocumentation: true,
   link: 'https://github.com/daniaezz/Intro-to-IM-Final-Project'
},

project18: {
   title: "Augmented Reality Project, 'Where's Jannah'",
   description: "Inspired by the puzzle book 'Where's Waldo?', this AR experience designed on Styly.cc takes the adventurous and curious aspects of this puzzle and turns it into a challenge for the user. This experience depicts a classical 'Where's Waldo?' scenario with one hidden person in the crowd, that the user has to find: Me, Jannah!",
   images: ['Media/whereJannah.png', 'Media/where1.png'],
   hasDocumentation: true,
   link: 'https://gallery.styly.cc/scene/b885cd5c-1473-49b5-9556-ff416b74b056'
},

project19: {
   title: '"Pixel Race", p5.js Multiplayer Game',
   description: "“Pixel Race” is a two-player game in which each player, a unicorn and a horse, has to collect all their designated items, rainbows and hay-bails, before the other player. The winner is whoever collects 20 items before the other player. This was one of the first projects I made using p5.js.",
   images: ['Media/pixelGame.png', 'Media/pixel1.png'],
   video: 'Media/PixelRaceVid.mov',
   hasDocumentation: true,
   link: 'https://editor.p5js.org/j-da-savage/full/p3-SDJlZo'
},

project20: {
   title: 'Arduino Musical Instrument',
   description: "This was one of my first projects using Arduino and C++, where alongside a team member, we created an instrument out of an accelerometer; force sensor; potentiometer; and buzzer, connected to an Arduino, and wrote a C++ code to control the notes depending on force and other inputs.",
   images: ['Media/instrument.png', 'Media/instrument1.png'],
   hasDocumentation: true,
   link: 'https://github.com/j-da-savage/Introduction-to-Interactive-Media/blob/main/Musical%20Instrument/Documentation.md'
}
    };

    const project = projects[projectId];

   if (project) {
       let imagesContent = '';
       let videosContent = '';

       if (project.images && Array.isArray(project.images)) {
           project.images.forEach(img => {
               if (img) {
                   const fileExtension = img.split('.').pop().toLowerCase();
                   const imgPath = `./${img}`; // Add relative path

                   if (fileExtension !== 'mov') {
                       imagesContent += `
                           <img
                               src="${imgPath}"
                               alt="${project.title} image"
                               onerror="this.onerror=null; this.src='placeholder.jpg'; console.error('Failed to load image:', '${imgPath}');"
                           >`;
                   }
               }
           });
       }

       if (project.video) {
           const videoPath = `./${project.video}`;
           videosContent += `
               <video controls onerror="console.error('Failed to load video:', '${videoPath}');">
                   <source src="${videoPath}" type="video/quicktime">
                   Your browser does not support the video tag.
               </video>`;
       }

       let content = `
           <h2>${project.title}</h2>
           <p>${project.description}</p>
           <div class="popup-images">
               ${imagesContent}
               ${videosContent}
           </div>
           ${project.hasDocumentation ? `<a href="${project.link}" target="_blank">View Documentation</a>` : ''}`;

       popupDetails.innerHTML = content;
       popup.style.display = 'flex';

       // Add event listener for closing popup when clicking outside
       popup.onclick = function(event) {
           if (event.target === popup) {
               closePopup();
           }
       };
   } else {
       console.error('Project not found:', projectId);
   }
}

function closePopup() {
   const popup = document.getElementById('popup');
   if (!popup) return;

   const videos = popup.getElementsByTagName('video');
   Array.from(videos).forEach(video => {
       if (video) {
           video.pause();
       }
   });

   popup.style.display = 'none';
}

// Add keyboard event listener for ESC key
document.addEventListener('keydown', function(event) {
   if (event.key === 'Escape') {
       closePopup();
   }
});
