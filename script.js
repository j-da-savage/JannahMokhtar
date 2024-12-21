// JavaScript for Popup Functionality
function openPopup(projectId) {
    const popup = document.getElementById('popup');
    const popupDetails = document.getElementById('popup-details');

    const projects = {
        project1: {
            title: 'Platonic Chains, IMA NYU',
            description: '"Platonic Chains" is a large scale kinetic installation. A web of chains in constant reciprocating motion that viewers may navigate through. Metal trinkets and hardware hung from the industrial chain create sound when hit with the floor and the chain itself. The motion aspect was created using a winch connected to the chains, controlled by a remote control with its buttons being controlled by a linear actuator connected to an Arduino, controlling the movements of the chains. ',
            images: ['platonicChains.jpg', 'platonic1.jpg', 'platonic2.jpg', 'platonic3.jpg','platonic4.jpg', 'platonic5.JPEG', 'platonic6.jpg'],
            link: 'https://example.com/project1'
        },
        project2: {
            title: 'Love is the Universal Language, Louvre Abu Dhabi',
            description: "This artwork was created in response to the theme of sustainability and tangibility, as part of the Louvre Museum Abu Dhabi’s “Universities Take Over the Museum” challenge. Love is What Prevents Tongues from Speaking is an interactive installation designed to teach Morse code while conveying the idea that love is a universal language. We used Morse code to transform feelings of love, memories, or stories into tangible, secret messages that could be understood only by a select few. The installation consisted of two parts: First, users scanned a QR code that prompted them to write a few sentences about love or share a personal story. This story would later appear on the table's screen as Morse code. We wrote a code in p5.js to translate text into Morse code, creating visually engaging visuals on the bowl, which could only be understood by the person whose story was being shared.The bowl is an artifact from the Louvre Abu Dhabi collection, and we were inspired by the poem Love is What Prevents Tongues from Speaking by Al-Mutanabbi, which relates to the artifact and further emphasizes the connection between love and communication.",
            images: ['louvre.png', 'louvre1.jpg', 'louvre2.jpg', 'louvre3.jpg'],
            video:'louvreVid.mp4',
            link: 'https://example.com/project2'
        },
        project3:{
          title: 'Fifi, the dancing cactus robot, Performing Robots Class',
          description: "As part of the class 'Performing Robots', a classmate and I created a dancing and talking robot, Fifi. Fifi is a robot with a wooden and metal base, movement and talking controlled by servo motors, connected to Ardunios and an H-bridge, while the movement of the base was controlled a Hobby RC shield and remote control which we coded. The project was part of NYUAD's Interactive Media Showcase and performance in Fall 2023 ",
          images: ['fifiStage.jpg', 'fifiPIC.jpeg', 'fifi.png', 'fifi.MOV'],
          link: 'https://github.com/j-da-savage/Performing-robots'
        },

        project4:{
          title: 'TouchDesigner Abstract Soundscape',
          description: "This is a simple network made out of a simple network to make abstract fluid simulations using Touch Designer. The visuals were paired with a soundscape made with Audacity for my work-in-progress capstone project. It represents the sounds of a typical egyptian family's kitchen, while reminiscing memories of the past.",
          images: ['touch.png', 'touch1.png', 'touch2.png', 'touch3.png'],
          link: 'https://example.com/project3'
        },

        project5:{
          title: '"Homes", VR Experience',
          description: "'Homes' is a VR experience created using Unity, for a course called 'Alternate Realities', this project was part of NYUAD's Interactive Media Showcase, Spring 2022. what really is “home”? what is home if not the people in it. there are houses that we struggle to call home because they lack attributes, for home is a special place that lives not in the physical realm, but in our hearts, minds, and spirits. Is home nothing but an empty vessel if there are no memories associated to it, if there is no laughter that fills it, and there are no tears that water it. If a home was a person, who would it be? If home was a feeling, how would it make you feel?And if home was a song, would you sing along? I have always wondered, if rooms could talk, what would they say?  ",
          images: ['homes.png', 'homes1.png', 'homes2.png', 'homes3.png'],
          link: 'https://example.com/project3'
        },

        project6:{
          title: 'AI Chatbot, "Creative Fairy Chatbot"',
          description: "The goal of the project is to explore the role of data in the creation of Conversational AI. Using p5.js, RiTa.js, p5.speech, and OpenAI API, this chatbot is a creative assistant meant to help artists and creatives in brainstorming ideas for their projects.",
          images: ['fairyChatbot1.jpg'],
          link: 'https://example.com/project3'
        },

        project7:{
          title: 'AI Chatbot, "Love-island(ish)',
          description: "This chatbot was created based on scripts from the show 'Love Island', and analyzed by ml.js.",
          images: ['island.png','island1.png','island2.png','island3.png','island4.png','island5.png'],
          link: 'https://example.com/project3'
        },

        project8:{
          title: 'AI Chatbot "FoodMe"',
          description: "This chatbot is an all round nutrition assistant powered by AI. Its purpose is to help anyone, including college students, and individuals needing financial and nutritional guidance, manage their meals and make wise decisions in regards to time-management and budgeting. FoodMe encourages users to reflect on their own privilege and consumption habits. Created on p5.js and using OpenAI API.",
          images: ['foodMe.png','foodme1.png','foodme2.png','foodme3.png'],
          link: 'https://example.com/project3'
        },

        project9:{
          title: 'weee chair, NYUAD',
          description: "The weeeChair was fully designed and built by me for the class 'Utilitas, Venustas, Firmitas. The WeeeChair is a playful, multi-audience furniture piece designed to bridge generational gaps by combining functionality with fun. Inspired by childhood memories, it integrates a slide into a sophisticated design that suits both children and adults. With vibrant colors and a refined aesthetic, the WeeeChair fosters interaction and connection in shared spaces, blending cultural storytelling with innovative design principles. The chair was designed on Adobe Illustrator and its wooden pieces were cut using a waterjet cutter, then assembled and painted by me. The wooden chair supports up to 60kgs!",
          images: ["wee2.png", "wee3.png", "wee4.png", "wee5.png", "wee1.png", "wee.png"],
          link: 'https://example.com/project3'
        },

        project10:{
          title: 'Interactive Media Capstone Project work-in-progress',
          description: "[WORK IN PROGRESS] Sofra is an interactive installation that explores identity and nostalgia through the universal language of food. Set in a white kitchen, it uses storytelling and projections to bring this blank canvas to life. Sofra utilizes everyday objects to connect people to personal and cultural interpretations of memory and food. Through the experience, the user gets to see a part of the main character Yasmine’s life, and her struggles as she tries to reconnect with her childhood, family, and friends through food.",
          images: ['capstone.png','capstone2.png','capstone3.png','capstone5.png','capstone4.png','capstone6.png'],
          link: 'https://example.com/project3'
        },

        project11:{
          title: 'Audiovisual Interactive Installation with Max MSP, Ableton Live, and Arduino',
          description: "Created on Max MSP and Ableton Live, conncected to an ultrasonic distance sensor, this is an interactive generative audiovisual installation where generative music drives real-time graphics, and user input alters the behavior of both sound and visuals, creating a responsive and immersive environment. It was made as the final project for the class 'Computational Approaches to Music and Audio'. ",
          images: ['cama.png','cama1.png', 'cama2.png','cama3.png'],
          link: 'https://example.com/project3'
        },

        project12:{
          title: 'p5.js Internet Manifesto',
          description: "“Better Internet Art For a Better World” is an interactive page on p5.js, inspired by Dirk Paesmans art collective “Jodi”. This piece, created for the class “Understanding Interactive Media”, is our very own internet art manifesto, which invites users to engage with the internet as both a medium and a space for artistic expression, while maintaing the core values of internet art.",
          images: ['manifesto.png','manifesto1.png','manifesto2.png','manifesto3.png'],
          link: 'https://example.com/project3'
        },

        project13:{
          title: 'The 1st Portfolio',
          description: "Created for the class 'Communications Lab', this is the first portfolio website I created which encorporates some of the multimedia projects I've done, including websites, comics, and video-documentaries. ",
          images: ['portfolio2.png', 'portfoliooo.png','portfolio1.png', 'portfolio3.png'],
          link: 'https://j-da-savage.github.io/portfoliooo/'
        },

        project14:{
          title: 'Electrical Engineering Workshop- WeSTEM',
          description: "The weSTEM High School Conference is a collaborative, interdisciplinary and locally engaged initiative, designed to promote diversity and female presence in the STEM fields (Science, Technology, Engineering and Mathematics) in and beyond the United Arab Emirates. I was chosen alongside a classmate to give a workshop on basic methods of Arduino and C++, and taught highschool girls fundamentals of circuits, microcontrollers, and sensors. ",
          images: ['westem.png','westem1.png'],
          link: 'https://westem-nyuad.github.io/web/pages/hs_conference.html'
        },

        project15:{
          title: 'Interactive Media Wonderland',
          description: "'Interactive Media Wonderland' is a VR project created on styly.cc respresenting an environment of interrelatted interactive media art works, and displaying them in different ways. The project was part of NYUAD's Interactive Media Showcase, Spring 2023.",
          images: ['IMwonderland3.png','IMwonderland.png', 'IMwonderland1.png', 'IMwonderland2.png'],
          link: 'https://gallery.styly.cc/scene/46cc07f2-43d7-4f96-9dc3-d5ed48fd9069'
        },

        project16:{
          title: 'p5.js Generative Text Art',
          description: "This generative text piece was created using p5.js, it was one of the first projects made for the class 'Introduction to Interactive Media'. My main inspiration for this project was a quote that says: 'You are not a burden. You are not too much. You are free to feel and trust. Even here, you are worthy of Love'",
          images: ['love.png','love1.png'],
          link: 'https://example.com/project3'
        },

        project17:{
          title: '"Cooking Baba", Interactive Cooking Game',
          description: "Cooking Baba is an interactive cooking game made on p5.js, controlled by Arduino and C++, and using Computer Vision (OpenCV). This game was my final project for the class 'Introduction to Interactive Media'. Alongside my team member, we first coded the game and made our own visuals and graphics using p5.js, Adobe Illustrator, Adobe Photoshop, and more. The physical aspect of the game included several sensors, such as an accelerometer, force sensor, potentiometer, and buttons. The computer-camera connection was made using Computer Vision, which we manipulated to fit our game and create a smooth user experience.",
          images: ['cookingBaba.png','cooking1.png','cooking2.png','cooking3.png','cooking4.png'],
          link: 'https://example.com/project3'
        },

        project18:{
          title: "Augmented Reality Project, 'Where's Jannah'",
          description: "Inspired by the puzzle book 'Where's Waldo?', this AR experience designed on Styly.cc takes the adventurous and curious aspects of this puzzle and turns it into a challenge for the user. This experience depicts a classical 'Where's Waldo?' scenario with one hidden person in the crowd, that the user has to find: Me, Jannah!",
          images: ['whereJannah.png', 'where1.png' ],
          link: 'https://gallery.styly.cc/scene/b885cd5c-1473-49b5-9556-ff416b74b056'
        },

        project19:{
          title: '"Pixel Race", p5.js Multiplayer Game',
          description: "“Pixel Race” is a two-player game in which each player, a unicorn and a horse, has to collect all their designated items, rainbows and hay-bails, before the other player. The winner is whoever collects 20 items before the other player. This project was made using p5.js",
          images: ['pixelGame.png',"pixel1.png"],
          link: 'https://editor.p5js.org/j-da-savage/full/p3-SDJlZo'
        },

        project20:{
          title: 'Arduino Musical Instrument',
          description: "This was one of my first projects using Arduino and C++, where alongside a team member, we created an instrument out of an accelerometer; force sensor; potentiometer; and buzzer, connected to an Arduino, and wrote a C++ code to control the notes depending of force and other inputs.",
          images: ['instrument.png','instrument1.png'],
          link: 'https://github.com/j-da-savage/Introduction-to-Interactive-Media/blob/main/Musical%20Instrument/Documentation.md'
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
