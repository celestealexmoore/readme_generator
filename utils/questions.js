const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "fullName",
    message: "What is your full name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Is your project licensed?",
    choices: ["Yes, MIT.", "Yes, Other.", "No it is not licensed."],
  },
  {
    type: "list",
    name: "status",
    message: "What is the current status of your project??",
    choices: ["Completed", "In Progress"],
  },
  {
    type: "input",
    name: "media",
    message: "Insert the file path of your README.md media.",
  },
  {
    type: "checkbox",
    name: "features",
    message: "Check all of the following features that your project includes.",
    choices: [
      new inquirer.Separator(" = Front End Features = "),
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "React.js",
      },
      {
        name: "JavaScript",
      },
      {
        name: "jQuery",
      },
      {
        name: "Angular",
      },
      {
        name: "Next.js",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Foundation",
      },
      {
        name: "Bulma",
      },
      new inquirer.Separator(" = Backend Features = "),
      {
        name: "SQL",
      },
      {
        name: "Python",
      },
      {
        name: "Java",
      },
      {
        name: "PHP",
      },
      {
        name: "C#",
      },
      {
        name: "C++",
      },
      new inquirer.Separator(" = Additional Features = "),
      {
        name: "A Responsive Interface",
      },
      {
        name: "Animations",
      },
      {
        name: "Search Option",
      },
      {
        name: "Authentication",
      },
      {
        name: "API Requests and Fetching",
      },
    ],
  },
];

module.exports = questions ;
