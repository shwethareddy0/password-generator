# Password Generator

## Description

Password Generator is an application that a user can use to generate a random password based on criteria they have selected. This app will run in the browser and will feature dynamically updated HTML and powered by JavaScript code. It has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

Here is the link to the [deployed application] (https://shwethareddy0.github.io/password-generator/)

### Features

- Fully Responsive
- Easy to modify
- Supports HTML5, CSS3 & JavaScript

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologiesused)
- [Credits](#credits)
- [License](#license)

## Installation

- Create a new repository on your GitHub account.
- Clone this repository to modify the files and images as required.
- Push your changes to your GitHub repository.
- Deploy to your preferred hosting service.

## Usage

This project can be used in any web browser or on any devices including the mobile devices.

The following image is the demo screenshot of the deployed application.

![Demo screenshot](./images/password-generator-demo.gif)

Following is a code snippet of the application page.

Here it refers to the Do...While statement which evaluates the user selected password length, which is one of the selection criterias.

```html5

do {
    //Variable declared for password length.
    var passwordLength = prompt(
      "Password must be at least 8 characters and no more than 128 characters."
    );

    //If statement to validate the password length criteria.
    if (passwordLength < 8 || passwordLength > 128) {
      //Alert when length criteria is not met.
      alert(
        "Password must be at least 8 characters and no more than 128 characters."
      );
    }
  } while (passwordLength < 8 || passwordLength > 128);


```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

## Credits

- MDN / W3Schools
- Stack Overflow

## License

This project is licensed under the [MIT](./LICENSE) license.
