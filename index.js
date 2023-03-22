const [inquirer, fs, questions] = [
  require("inquirer"),
  require("fs"),
  require("./utils/questions"),
];

inquirer.prompt(questions).then((answers) => {
  fs.appendFile(
    "README.md",
    `
  <div align="center">

  # ${answers.projectName}
  
  ### _${answers.description} _
  </div>
  
  ## Table of Contents
  
  - [Description](#Description)
  
  - [Media](#Media)
  
  - [Deployed Site](#deployed-site)
  
  - [Features](#Features)
  
  - [Contributors](#Contributors)
  
  - [Contact](#Contact)
  
  - [Project Status](#project-status)
  
  - [License](#License)
  
  ## Media
   
  ![Photo 1](${answers.media})  
   
  
  ## Deployed Site
  
     The deployment is coming soon. In the meantime, view my other repositories: (https://github.com/celestealexmoore?tab=repositories)
  
  ## Features
  ${answers.features}
  
  ## Contributors
  
  This website was created by ${answers.fullName}.
  
  ## Contact
  
  If you have any questions about this repository, contact ${answers.github} via GitHub or reach out via email:
  ${answers.email}.
  
  ## Project Status
  
  ${answers.status}
  
  ---
  
  ## License
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)
  
  © 2023 _${answers.github}_

  `,
    (err) =>
      err ? console.error(err) : console.log("Building your README.md file!")
  );
});
