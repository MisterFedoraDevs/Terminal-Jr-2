# Terminal Jr
Terminal Jr is a fun game where the player works to guess all the commands. Most of which, are about the creator.

This project originally was meant to be a game where you find commands that actually could exist in a Terminal, but I decided to pivot later because it could create a game where people can learn more about the person who hosts it. Plus, I could always change it later.

I plan to add more commands in the future! Stay tunned.

See the list of commands in [commands.md](/commands.md).

## Disclosure on AI Use
AI was used to assist me debugging JavaScript. It did not provide me with any of the code, but it gave me suggestions on how to fix it using the code I already programmed.

## Tech Stuff
Created with HTML, CSS, and JS. Original website was made with only HTML and CSS.

If you want to add more commands, you can use this template:
``` javascript
else if (command === "-COMMANDNAME")    
    {
        new Typed(output, {
            strings: [
            `TEXT GOES HERE` +
            commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }
```
When adding commands:
- To make the typpe wait a few seonds, add ^TIME where TIME is the time you want it to wait in milliseconds.
- To add a line break, add <br> inside the backticks (`).
- Make sure you add a plus sign (+) if you are adding more lines.

## Problems
My biggest issue was making sure that someone can find all 56 commands since 2 of them reset the total commands found. 
To make it work, I made sure that it checks if the other command that resets the list was found. If it is found, it will change the command to true, so it still stays in the list.

## Resources
[Demo](https://MisterFedoraDevs.github.io/Terminal-Jr)

[Repo](https://github.com/MisterFedoraDevs/Terminal-Jr)