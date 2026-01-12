export const fs = {
  projects: {
    "karate-app-thesis": {
      "README.md": "Program that analyses your fighting video and recognises mistakes done. I'm planning to extend it\nto application with Karate training",
      "requirements.txt": "Python, OpenCV, TensorFlow, MediaPipe"
    },
    "qt-app": {
      "README.md": "App done during my internship, used for proffesional measuring scales. \nAllows for scripting and comunincation with the scale through ethernet and usb",
      "requirements.txt": "Qt, C++, Software Design, Bitbucket"
    },
    "hackathon-security": {
      "README.md": "Webapp that checks security of your website based on OpenAPI. \nDone during Goldman sachs hackathon, engineering route",
      "requirements.txt": "RestAPI, Flask, OpenAPI, Cybersecurity"
    },
    "video-to-ascii": {
      "README.md": "Quick project converting video to ascii displayed in terminal",
      "requirements.txt": "C++, OpenCV"
    }
  },

  "contact.txt": `Contact information:  
Email: zuzannabrzeczek71@gmail.com
GitHub: https://github.com/zbrzeczek`,

  "README.md": `Zuzia's Portfolio
=========================

Type 'ls projects' to explore the contents.

About me:
3rd year computer science student at Politechnika Gdańska (althought I spent the last semester on awsome Erasmus in Spain).
I like to learn new things (the harder the better) and go out of my comfort zone.

Focus areas:
- Artificial Intelligence
- Virtual Reality
- Research-driven development

I would love to work in a place where asking many (sometimes dumb) questions is seen as positive.

Apart from studies I'm currently training for marathon and Karate competition. I like to make my life harder :PP`
};

export function getNode(path) {
  if (!path) return fs;

  const parts = path.split("/").filter(Boolean);
  let node = fs;

  for (const part of parts) {
    if (typeof node !== "object" || !(part in node)) {
      return null;
    }
    node = node[part];
  }

  return node;
}