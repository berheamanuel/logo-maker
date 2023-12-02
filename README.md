# Object-oriented Programming Challenge: SVG Logo Maker
## Description
This command-line application dynamically generates a logo “logo.svg” file based on user desire as an SVG image.

## User Story

- AS a freelance web developer
- I WANT to generate a simple logo for my projects
- SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

* GIVEN a command-line application that accepts user input
* WHEN I am prompted for text
* THEN I can enter up to three characters
* WHEN I am prompted for the text color
* THEN I can enter a color keyword (OR a hexadecimal number)
* WHEN I am prompted for a shape
* THEN I am presented with a list of shapes to choose from: circle, triangle, and square
* WHEN I am prompted for the shape's color
* THEN I can enter a color keyword (OR a hexadecimal number)
* WHEN I have entered input for all the prompts
* THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
* WHEN I open the `logo.svg` file in a browser
* THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Demonstration

* https://drive.google.com/file/d/1rsL9Tl6U-lzlveIbSPFJK43y8aZSPtEg/view

![QR code](image.png)

## Installation

* Before attempting to use this project, make sure to have these programs installed on your computer: 
    - VS Code 
    - GitBash 
    - Node.js
* Steps to initialize the project:
1. Copy Link: Hit the "Code" button within this GitHub repo to copy link
2. Clone: Within GitBash, use the command "git clone paste link here"
3. npm: Use the command "npm init -y" to install Node Package Manager
4. Inquirer: Use the command "npm install inquirer" to get npm's inquirer package

## Usage

Once software is downloaded and Node packages are initialized, it's time to get started!

Within the directory for this project, initialize prompts using the command "node index.js".

From there, simply enter the necessary information for your project, abd A new logo.svg file will be generated and placed into the 'example' folder.

## Technology Used

* JavaScript
* Node.js
* Visual Studio Code
* Inquirer.js
* Jest
* GitBash

## License

* MIT License License