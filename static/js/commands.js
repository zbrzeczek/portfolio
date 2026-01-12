const commands = {
    help: () => `GNU bash, version 5.2.15(1)-release (x86_64-pc-linux-gnu). Read README file for more information \n 

        Builtin commands:
            help
            clear
            ls
            cat
            neofetch
\n
Use 'help <command>' to find out more about the command.`,

    ls: (args) => {
        if (!args.length) {
            return `projects  contact.txt  README.md`;
        }

        if (args[0] === "projects") {
            return `karate-app-thesis
                    qt-app
                    image-recognition
                    `;
        }

        return `ls: cannot access '${args[0]}': No such file or directory`;
    },

    cat: (args) => {
        if (!args.length) {
            return `cat: missing file operand`;
        }

        if (args[0] === "contact.txt") {
            return `Email: zuzannabrzeczek71@gmail.com
                    GitHub: https://github.com/zbrzeczek`;
        }

        if (args[0] === "README.md") {
            return `Zuzia's Portfolio
=========================
Type 'ls projects' to explore the terminal.

About me:
3rd year computer science student at Politechnika Gdańska (althought I spent the last semester on awsome Erasmus in Spain).
I like to learn new things (the harder the better) and go out of my comfort zone.

Focus areas:
- Artificial Intelligence
- Virtual Reality
- Research-driven development

I would love to work in a place where asking many (sometimes dumb) questions is seen as positive.

Apart from studies I'm currently training for marathon and Karate competition. I like to make my life harder :PP`;
        }

        return `cat: ${args[0]}: No such file or directory`;
    },

    neofetch: () => `
       /\_/\
      ( o.o )   zuzia@portfolio
       > ^ <    ----------------
                OS: Linux
                Host: Portfolio VM
                Kernel: 6.6.x
                Uptime: 20 yrs
                DE: none
                WM: terminal
                CPU: 200mg of caffeine 
                GPU: fried neurons
                Memory: full
                `.trim(),

    clear: () => null,

    // hidden ee

    sudo: () => `zuzia is not in the sudoers file.  This incident will be reported.`,

    rm: () => `rm: cannot remove '/': Permission denied`,

    reboot: () => `Broadcast message from root@portfolio:
The system is going down for reboot NOW!`
};
