new Typed('#typedOut', options = {
    strings: [
            "Terminal Jr v1.0.0 <br>" +
            "Created (C) By Darron Johnson Jr. <strong>Enjoy the game!</strong><br><br>" +
            "Welcome to Terminal Jr <br>" +
            "Type '-help' to get help. <br>" +
            "Type '-hint' to get a hint. <br><br>"
            ],
    typeSpeed: 1,
    backSpeed: 0,
    loop: false,
    showCursor: false,
});


const terminal = document.querySelector(".terminal");
createCommandLine();


function createCommandLine() {
    const userText = document.createElement("span");
    userText.textContent = "Player1 > ";
    terminal.appendChild(userText);


    const input = document.createElement("input");
    terminal.appendChild(input);
    input.focus();


    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const command = input.value.trim().toLowerCase();


            input.disabled = true;


            runCommand(command);


            createCommandLine();
        }
    })
};


function runCommand(command) {
        if (commands[command]) {
        commands[command].found = true;
    }


    updateCommandsFound();




    const output = document.createElement("div");
    terminal.appendChild(output);


    if (command === "-help") {
        new Typed(output, {
            strings: [
                "Terminal Jr is a game where you need to find all the commands that are listed in the Terminal. <br>" +
                "Use -hint to get a hint.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-hint") {
        new Typed(output, {
            strings: [
                "Almost all the commands relate to computer science. Think hard about it.<br>" +
                "What makes a webpage? What do you type? Where do you code at? What are some types of webpages?<br>" +
                "Some of them are meant to be funny and hard. You'll never find those even with a hint or 2." +
                "<br><br>" +
                "By the way, these are the only hints you get. Enjoy! :P<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }
   
    else if (command === "-hackclub") {
        new Typed(output, {
            strings: [
                "I am the President of Ridge View Hack Club. A Hack Club located in Columbia, SC.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-html") {
        new Typed(output, {
            strings: [
                "HTML is a coding language used to create a website's structure. It's one of three coding languages most websites use.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-css") {
        new Typed(output, {
            strings: [
                "CSS is a coding language used to create a website's style. That's the way the website looks, like the colors it uses. This website does not have CSS. That's why it looks <em>Flavorless<em>.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-javascript") {
        new Typed(output, {
            strings: [
                "JavaScript (JS) is a coding language used to make a website interactive. This website uses JavaScript to see what you typed, to check it against a dataset, and tell you how many commands you have left.<br>" +
                `Fun Fact: This command use to be called JS, but someone told me you should change it because people don't say "I code in JS."<br>` +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-laptop") {
        new Typed(output, {
            strings: [
                "I use my laptop to code. It's a Dell Inspiron 16'' from like... 2020? Yeah, it's old for a laptop, but it still works!<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-setup") {
        new Typed(output, {
            strings: [
                "So, I use my <strong>laptop</strong> to code. I connect it to a TV that's like... 32''? Then, I show the output on the TV and the code on my laptop. The bad thing is, I sit on the ground.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-404") {
        new Typed(output, {
            strings: [
                "Command not found, wait this is an output to a command that isn't found. That means this command was found.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-topsecret") {
        new Typed(output, {
            strings: [
                "Accessing Darron's Top Secret database. Please wait...<br> ^4000" +
                "Cancelled. You do not have access. Please try again later. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-3dprinter") {
        new Typed(output, {
            strings: [
                "I own 0 3D Printers, but my school has a few. <br>" +
                "I use a few different types, but my favorite is Bamboo Lab's P2S. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-3dprints") {
        new Typed(output, {
            strings: [
                "I love 3D printing stuff. Especially is it solves one of the many, many problems we have on this plannet.<br>" +
                "Right now, I am working on 3D printing a map of where I live. I plan to include terrain and buildings.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-404") {
        new Typed(output, {
            strings: [
                "This command should not exist.<br>" +
                "Please try a different command now.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-art") {
        new Typed(output, {
            strings: [
                "Art is an amazing skill! I am not the best at art. <br>" +
                "I make animations and videos, which are both types of art. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-about") {
        new Typed(output, {
            strings: [
                "My name is Terminal Jr.<br>" +
                "I am a game created with the help of HTML, CSS, and JavaScript. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-aboutdarron") {
        new Typed(output, {
            strings: [
                "My name is Darron Jr.<br>" +
                "I am a Web Designer that uses HTML, CSS, and JavaScript. I am also a Game Designer and Project Manager when I feel like working in a game engine. I've made a roleplay game recently which has gotten 10,000 unique users on Roblox. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-adobe") {
        new Typed(output, {
            strings: [
                "Adobe Creative Cloud... Love it, but I get it for free so...! <br>" +
                "I use the Adobe Suite for animations, designing graphics, editing photos, creating publications, and making vector designs! <br>" +
                "I use Adobe After Effects, Adobe Animate (even though it is discontinued), Adobe Illustrator, Adobe Indesign, Adobe Lightroom, and Adobe Premiere. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-blender") {
        new Typed(output, {
            strings: [
                "Blender is the software I use to use for my animations. <br>" +
                "Now, I use it for 3d Modeling and Visual Effects. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }




    else if (command === "-camera") {
        new Typed(output, {
            strings: [
                "I not only record, but also shoot on a Canon EOS R50 V. <br>" +
                "I constantly leave it in the Robotics Lab. I nee to stop doing that... <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-cheat") {
        new Typed(output, {
            strings: [
                "Loading all commands... <br> ^2000" +
                "Expected wait time: 2 hours, 46 minutes <br>" +
                "Loading all commands... <br> ^10000000" +
                commandsOnly()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-chores") {
        new Typed(output, {
            strings: [
                "I like doing some chores... the rest I hate. <br>" +
                "Why do <em>I</em> have to clean the bathroom every week!? <br>" +
                "It's not even dirty! <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-clickandholdenter") {
        new Typed(output, {
            strings: [
                "I'm serious. Try it. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-coding") {
        new Typed(output, {
            strings: [
                "I only love HTML and CSS. It doesn't have any of that funny buisness like the rest of them. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-college") {
        new Typed(output, {
            strings: [
                "To go, or not to go? That is the question! <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-colors") {
        new Typed(output, {
            strings: [
                '<span class="color">Colors are a tool for designing great things.</span> <br>' +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-credits") {
        new Typed(output, {
            strings: [
                "Created By Darron Johnson Jr, 2026<br>" +
                "Made for Hack Club Flavorless<br>" +
                "Redesigned for Hack Club Cresent<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-debug") {
        debugCommand(commands)


        new Typed(output, {
            strings: [
                "Is that an insult? I do not need debugging, I am perfect!<br>" +
                "System shutdown imminate<br>" +
                commandsFound() +
                updateCommandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-design") {
        new Typed(output, {
            strings: [
                "Designing new things is one of my superpowers.<br>" +
                "I use Adobe Creative Cloud, Blender, Canva, and Figma to make new things. <br>" +
                "Recently, I've started making hardware projects, so I'm learning Fusion 360 and KiCad. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-discord") {
        new Typed(output, {
            strings: [
                "@battlespy <br>I have worked on a wide range of projects on Discord. I've made a few different types of bots that are used for moderating Discord servers to making an economy for a server's members.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-emoji") {
        new Typed(output, {
            strings: [
                "\u{1F4bb} <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-embarrassing") {
        new Typed(output, {
            strings: [
                "I have, and never will be embarrassed in my life.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-embarrassing") {
        new Typed(output, {
            strings: [
                "I have, and never will be embarrassed in my life.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-explosion") {
        const newDiv = document.createElement('div');
        newDiv.id = 'explosion-container';


        document.body.appendChild(newDiv)


        explosion()
        new Typed(output, {
            strings: [
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-feedback") {
        new Typed(output, {
            strings: [
                "Would you like to give feedback on this Terminal?<br>Please leave your feedback below.<br>Just kidding! It doesn't work <em>yet</em>.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-files") {
        new Typed(output, {
            strings: [
                "I need to work on organizing my files.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-following") {
        new Typed(output, {
            strings: [
                "I don't watch YouTube, or Instagram, or TikTok unleess it's for a quick research project.<br>I am looking at Ethan Fang's channel @ethanfangg (not the golfer)." +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-fonts") {
        new Typed(output, {
            strings: [
                "The best font in the world is <span class=anton>ANTON</span>! After that, I think it's <span class=schoolbell>Schoolbell</span>.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-football") {
        new Typed(output, {
            strings: [
                "I am the Head Manager for my High School Football Team!<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-firerescue") {
        new Typed(output, {
            strings: [
                "I am very interested in working for my local Fire Department as a Public Information Officer.<br>I want to write press releases, create vlogs, and talk to reporters at important incidents." +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-flipacoin") {
        new Typed(output, {
            strings: [
                coinflip() +
                "<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-friends") {
        new Typed(output, {
            strings: [
                "I have only one." +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-firerescue") {
        new Typed(output, {
            strings: [
                "I am very interested in working for my local Fire Department as a Public Information Officer.<br>I want to write press releases, create vlogs, and talk to reporters at important incidents." +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-godmode") {
        new Typed(output, {
            strings: [
                "Gode mode activated.<br>It does not work...<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-glasses") {
        new Typed(output, {
            strings: [
                "I can't see.<br>I need glasses... They are very thick.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-glasses") {
        new Typed(output, {
            strings: [
                "I can't see.<br>I need glasses... They are very thick.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-grades") {
        new Typed(output, {
            strings: [
                "A+, always<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }






    else if (command === "-halloffame") {
        new Typed(output, {
            strings: [
                "<strong>Jameer</strong> > <br>"+
                "Co-leader of Ridge View Hack Club who knows a lot about hardware..<br>" +
                commandsFound()
            ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-hidden") {
        new Typed(output, {
            strings: [
                "<span class=hidden>You shouldn't see this.</span><br>" +
                commandsFound()
            ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-hardware") {
        new Typed(output, {
            strings: [
                "Hardware < Software<br>"+
                "I do want to get better at Hardware.<br>" +
                commandsFound()
            ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


   
    else if (command === "-homework") {
        new Typed(output, {
            strings: [
                "\u2713 Code a website for a small buisness that you created.<br>" +
                "\u2713 Make a budget so you can buy everything you want within the next 10 years.<br>" +
                "\u2713 Finsh reading all 374 pages of <em>The Hunger Games</em> by Suzanne Collins<br>" +
                "\u2713 Create a brand kit for the local buisness you made a website for.<br>" +
                '\u2713 Learn 50 medical terms for a "pop" quiz tomorrow.<br>' +
                commandsFound()
            ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-iamahacker") {
        new Typed(output, {
            strings: [
                "Me too! A hacker who makes <em>amazing</em> projects.<br>" +
                commandsFound()
            ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-job") {
        new Typed(output, {
            strings: [
                "I work at a Karate Studio. I teach people karate, work at our summer camp, andd my favoite thing of all... <em>clean!</em><br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-joke") {
        new Typed(output, {
            strings: [
                "I don't like going outside. ^1000<br>" +
                "There are sooo... many <em>bugs</em>!<br>" +
                "<span class=fine-print>Get it? Get it?</span><br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-logo") {
        new Typed(output, {
            strings: [
                '<img style="height:100px;" src="assets/TerminalJrThumbnail.svg" alt="Terminal Jr logo."><br>' +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-math") {
        new Typed(output, {
            strings: [
                '1 + 1 = ^1000 2<br>' +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-netherlands") {
        new Typed(output, {
            strings: [
                "I love how the Netherlands has excellent cycling infrastructure. It's way better than the Uunited States, for sure. I kinda want to live there.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-pd") {
        new Typed(output, {
            strings: [
                "If I can't get a job as a Public Information Officer for the Fire Department, I would do it for the Police Department instead.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-pixelart") {
        new Typed(output, {
            strings: [
                '<div class="pixelart-border>"' +
                    `<div class="greenpixel"></div><div class="greenpixel"></div><div class="greenpixel"></div>` +
                    `<div class="greenpixel"></div><div class="blackpixel"></div>` +
                    `<div class="greenpixel"></div>` +
                '</div><br>' +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-podcasts") {
        new Typed(output, {
            strings: [
                "I don't listen to that many types of podcasts, but I do enjoy a good murder mystery.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-riddle") {
        new Typed(output, {
            strings: [
                "01000010 01111011 01110100 01100101<br>What am I? ^10000<br> A Byte.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-roblox") {
        new Typed(output, {
            strings: [
                "I play a fex Roblox games (and I also have made a few). Right now, my favorite game is Emergency Response; Liberty County.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-repo") {
        new Typed(output, {
            strings: [
                `If you're trying to cheat, you minus wel use the button at the bottom.<br>^1000 If you really want it though, here's the <a href="https://github.com/MisterFedoraDevs/Terminal-Jr">Repo</a><br>.` +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-reset") {
        resetCommands(commands)


        new Typed(output, {
            strings: [
                "Why would you want to do that!? If you insist I guess... <br>" +
                "Rebooting... <br> ^1000" +
                updateCommandsFound() +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-restaurants") {
        new Typed(output, {
            strings: [
                "I like going out to eat. I wish I could make the stuff at home though using their recipes.<br>" +
                "My go-to meal is Fettuccine Alfredo with Broccoli and Salmon. My favorite resturant though is BJ's because of their Pizookie.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else if (command === "-software") {
        new Typed(output, {
            strings: [
                "Software > Hardware<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }


    else {
        new Typed(output, {
            strings: [
                "Command not fond. Please try again. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        })
    }


    terminal.appendChild(output);
};


const commands = {
    "-3dprinter": {
        found: false
    },
    "-3dprints": {
        found: false
    },
    "-404": {
        found: false
    },
    "-about": {
        found: false
    },
    "-aboutdarron": {
        found: false
    },
    "-adobe": {
        found: false
    },
    "-art": {
        found: false
    },
    "-blender": {
        found: false
    },
    "-camera": {
        found: false
    },
    "-cheat": {
        found: false
    },
    "-chores": {
        found: false
    },
    "-clickandholdenter": {
        found: false
    },
    "-coding": {
        found: false
    },
    "-college": {
        found: false
    },
    "-colors": {
        found: false
    },
    "-credits": {
        found: false
    },
    "-debug": {
        found: false
    },
    "-design": {
        found: false
    },
    "-discord": {
        found: false
    },
    "-emoji": {
        found: false
    },
    "-explosion": {
        found: false
    },
    "-feedback": {
        found: false
    },
    "-files": {
        found: false
    },
    "-following": {
        found: false
    },
    "-fonts": {
        found: false
    },
    "-football": {
        found: false
    },
    "-firerescue": {
        found: false
    },
    "-flipacoin": {
        found: false
    },
    "-friends": {
        found: false
    },
    "-godmode": {
        found: false
    },
    "-glasses": {
        found: false
    },
    "-grades": {
        found: false
    },
    "-halloffame": {
        found: false
    },
    "-hackclub": {
        found: false
    },
    "-hidden": {
        found: false
    },
    "-homework": {
        found: false
    },
    "-html": {
        found: false
    },
    "-iamahacker": {
        found: false
    },
    "-css": {
        found: false
    },
    "-javascript": {
        found: false
    },
    "-job": {
        found: false
    },
    "-joke": {
        found: false
    },
    "-laptop": {
        found: false
    },
    "-logo": {
        found: false
    },
    "-math": {
        found: false
    },
    "-pd": {
        found: false
    },
    "-pixelart": {
        found: false
    },
    "-podcasts": {
        found: false
    },
    "-reset": {
        found: false
    },
    "-riddle": {
        found: false
    },
    "-roblox": {
        found: false
    },
    "-repo": {
        found: false
    },
    "-restaurants": {
        found: false
    },
    "-setup": {
        found: false
    },
    "-software": {
        found: false
    },
    "-topsecret": {
        found: false
    },
};


function commandsLeft() {
    return Object.values(commands)
        .filter(command => !command.found)
        .length
}


function commandsOnly() {
    return Object.keys(commands)
    .map(command => command + "<br>")
    .join ("")
}




function commandsFound() {
    const total = Object.keys(commands).length;
    const found = Object.values(commands)
        .filter(command => command.found)
        .length
   
    return `${found} / ${total} commands found.`;
}


function updateCommandsFound() {
    const foundList = document.getElementById("foundList");


    foundList.innerHTML = "";
   
    Object.keys(commands).forEach(command => {
        if (commands[command].found) {
            foundList.innerHTML += "&#x2713 " + command + "<br>";
        }
    })
}


function coinflip() {
    return Math.random() > 0.5 ? "Heads" : "Tails";
}


function debugCommand(obj) {
    const resetFound = commands["-reset"].found;


    resetAllCommandsBut(commands, "-debug");
    commands["-reset"].found = resetFound;
    commands["-debug"].found = true;
}


function resetCommands(obj) {
    const debugFound = commands["-debug"].found;


    resetAllCommandsBut(commands, "-reset");
    commands["-debug"].found = debugFound;
    commands["-reset"].found = true;
}


function resetAllCommandsBut(obj, activeKey) {
    Object.keys(obj).forEach(key => {
        obj[key].found = (key === activeKey);
    });
}


function explosion() {
const container = document.getElementById("explosion-container");


    const colors = [
        "#ff3838",
        "#ff8c37",
        "#f1c40f",
        "#ffffff",
        "#ff5733"
    ];


    const particleCount = 90;


    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");


        particle.classList.add("particle");
       
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() *200 + 50;


        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;


        particle.style.left = "50%";
        particle.style.top = "50%";


        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];


        particle.style.setProperty("--x", `${x}px`);
        particle.style.setProperty("--y", `${y}px`);
   
        container.appendChild(particle);


        particle.addEventListener("animationend", () => {
            particle.remove();
            container.remove();
        })
    }
}