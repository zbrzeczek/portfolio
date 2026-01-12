import { getNode } from "./filesystem.js";

export const commands = {
    help: (args) => {
        if (!args.length) { return `GNU bash, version 5.2.15(1)-release (x86_64-pc-linux-gnu). 
Read README file for more information \n 
    Builtin commands:
        help
        clear
        ls
        cat
        neofetch\n
Use 'help <command>' to find out more about the command.`;
        }

        if (args[0] == "help") return `Helps :)`;
        if (args[0] == "clear") return `Clears your terminal's screen if this is possible, including the terminal's 
scrollback buffer`;
        if (args[0] == "ls") return `List information about the FILEs (the current directory by default)`;
        if (args[0] == "cat") return `Concatenate FILE(s) to standard output.`;
        if (args[0] == "neofetch") return `Display system information`;

       return `command '${args[0]}' doesn't exist`;
    },

    ls: (args) => {
        const path = args[0] || "";
        const node = getNode(path);

        if (!node) return `ls: cannot access '${path}': No such file or directory`;
        if (typeof node !== "object") return `ls: '${path}': Not a directory`;

        return Object.keys(node).join("  ");
    },

    cat: (args) => {
        if (!args.length) return "cat: missing file operand";

        const path = args[0];
        const node = getNode(path);

        if (!node) return `cat: ${path}: No such file or directory`;
        if (typeof node === "object") return `cat: ${path}: Is a directory`;

        return node;
    },

    neofetch: () => `
       /\\_/\\
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

    sudo: () => `zuzia is not in the sudoers file. 
This incident will be reported.`,

    rm: () => `rm: cannot remove '/': Permission denied`,

    reboot: () => `Broadcast message from root@portfolio:
The system is going down for reboot NOW!`
};
