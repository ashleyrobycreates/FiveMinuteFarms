# Web Development Project
This is my capstone project for CODE:You. The project utilizes a third-party api to retrieve information, that is then presented to the user with a helpful interface. 
The user is able to interact with the information provided by searching for available options.The goal of the project is to demonstrate a general knowledge of HTML, CSS, and JavaScript.

## Overview
 Hello! Welcome to Five Minute Farms! This website was made to advise anyone, in basic steps, how to grow the easy tomato plant, or any plant, from seeds. According to my own research and web based research, plants DO respond to music and sounds! For this reason, a Spotify media player is included for users to see a sample playlist. A USDA planting zone chart shows locations with temperature extremes based on US data. A weather API was incorporated to show a 5 day weather forecast for the users locale. A growth chart is provided to show in days approximately how long it takes to grow from a seedling to "ready to plant" status. An images page shows various stages of seedlings and gardens. Finally, a simple contact page was created. Happy plants = happy harvest!

## Resources
The resources I used for this project are as follows:
  [Third-Party API] (www.weatherapi.com)
  - This provides the user up-to-date weather based on their location as well as weather icons.
  [Research] (www.growoya.com)
   -This website provides planting info according to the users zone based on location in the United States.
  [Research] Chart.js (w3schools.com)
   - Growing Chart, based on my own research as a gardener for over five years.
  [Research] (https://www.w3.org/2000), (https://fonts.googleapis.com), (https://Youtube.com)
   -This website provides images & fonts. Also, I watched various Youtube tutorials and consulted copilots on how to set up a weather API.
   [Research] (https://open.spotify.com) 
   -An embedded music player from Spotify with playlist was included for users to explore.

### Project Overview
---

The project is organized as follows:

- **Landing Page:** The landing page provides the user with options to navigate the web application, log in and gives an overview of what to expect.

**Sign Up Sign In** The user can sign up or sign in if they want to.

**Weather API** Using third-party API, this allows users to get the weather based on their locale, and use this to help with planting needs. Note: I had to install a certificate so that I could change my http to https. I also had to get help to make a backend server to store my API Key. 

**Garden Chart:** Growing chart in days based on seedlings, made based on my own research of over five years.

**Garden Images:** Images have been added that show the various stages of planting and growing. 

**Contact Page:** Created if the user would like to email me and send a note.

## Features Utilized for the project

  | Feature        | Description                           |
  |----------------|---------------------------------------|
  | Retrieve data from a 3rd party API and use it to display information. | Utilized the third-party weather API |
  | Visualize data in a user friendly way | Relaxing images and color scheme, like candy for the eye. |
  | Visually appealing UI | Created a clean and modern UI with a color palette that is cohesive across the project. |
  | Responsive Design | Each page uses media queries and flexbox to adapt the design for multiple screen sizes, and was developed using a mobile-first approach. |
  |Use of a regular expression to validate user input and either prevent the invalid input or inform the user about what happens with user input. |
  |Visualize data in a user friendly way by using a growing chart. |

## Getting Started
1.  Visit the weather API webpage to retrieve your free API key:[Third-Party API] (https://https://www.weatherapi.com/)

2. Clone this repository to your local machine using Git:

```bash
git clone https://github.com/ashleyrobycreates/FiveMinuteFarms.git
```
3. Navigate to the project directory:
```bash
cd FiveMinuteFarms
```
4. Open the project directory in VsCode:
```bash
code .
```
5. Install dependencies:
```bash
npm install
```
6. Use the live server VsCode extension to view the Index.html page

7. Create a package.json2. You want the server to be started and listening while you're working on your project or you will not be able to get the weather info. 
-create file
-name it package.json2
-put this into the file:

{
    "name": "weather-app",
    "version": "1.0.0",
    "private": true,
    "scripts": {
        "start": "node backend/server.js"
    },
"workspaces": [
    "backend",
    "frontend"
  ]
}



