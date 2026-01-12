// main.js
// Terminal engine & input handling

const output = document.getElementById("output");
const input = document.getElementById("commandInput");

/* ---------- Printing helpers ---------- */

function printBlock(text) {
    text.split("\n").forEach(line => {
        const div = document.createElement("div");
        div.textContent = line || " ";
        output.appendChild(div);
    });
    output.scrollTop = output.scrollHeight;
}

function printPrompt(command) {
    const line = document.createElement("div");
    line.className = "old-command";

    line.innerHTML =
        `<span class="prompt-user">visitor@portfolio</span>` +
        `<span class="prompt-path">:~$</span>` +
        `<span class="command-text"> ${command}</span>`;

    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

function typeText(text, speed = 15) {
    let i = 0;
    const line = document.createElement("div");
    output.appendChild(line);

    const interval = setInterval(() => {
        line.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, speed);
}

/* ---------- Command execution ---------- */

input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    const raw = input.value.trim();
    input.value = "";

    if (!raw) return;

    const parts = raw.split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    printPrompt(raw);

    if (cmd === "clear") {
        output.innerHTML = "";
        return;
    }

    // Exact match (e.g. "help help")
    if (commands[raw]) {
        const result = commands[raw](args);
        if (result !== null) printBlock(result);
        return;
    }

    // Command + arguments (e.g. "ls projects")
    if (commands[cmd]) {
        const result = commands[cmd](args);
        if (result !== null) printBlock(result);
        return;
    }

    printBlock(`${cmd}: command not found`);
});

/* ---------- Boot message ---------- */

typeText('Type "help" to see available commands');
