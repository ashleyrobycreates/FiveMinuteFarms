# Web Development Project
This is my capstone project for CODE:You. The project utilizes a third-party api to retrieve information, that is then presented to the user with a helpful interface. 
The user is able to interact with the information provided by searching for available options. 
The goal of the project is to demonstrate a general knowledge of HTML, CSS, and JavaScript.

## Overview
 Hello! Welcome to Five Minute Farms! This website was made to advise anyone, in basic steps, how to grow an easy, small farm. //A weather app is included for checking local weather.// Also, according to my own research and web based research, plants DO respond to music and sounds! For this reason, a Spotify profile media player is included for users to login and play music/soundwaves to help their garden grow healthier and happier. Happy plants = happy harvest!

## Resources
The resources I used for this project are as follows:
- [Third-Party API](https://www.weatherapi.com)
    - This provides the weather information seen on the weather forecast page.
- [Third-Party API] (https://.spotify.com/;
- [Third-Party API] (https://developer.spotify.com/documentation/web-api/howtos/web-app-profile)
   - This provides the music to be played for the growing garden via a Spotify Profile on the web app.
   [Research] (www.growoya.com)
   -This website provides planting info according to the users zone based in the U.S.A.

### Project Overview
---

The project is organized as follows:

- **Landing Page:** The landing page provides the user with options to navigate the web application, log in and gives an overview of what to expect.

//- **Weather Forecast:** Using the third-party weather api the weather forecast page allows users to search for local weather. 

**Spotify Profile API and Music Player:** Using the third-party music api allows users to search for various music and sounds to play for their garden from their Spotify profile located on the web app page. "When the page loads, we'll check if there is a code in the callback query string. If we don't have a code, we'll redirect the user to the Spotify authorization page. Once the user authorizes the application, Spotify will redirect the user back to our application, and we'll read the code from the query string... use the code to request an access token from the Spotify token API. Then, use the access token to call the Web API to get the user's profile data and populate the user interface with the user's profile data." -Spotify

**Garden Images:** Images have been added that show the various stages of planting and growing. 

## Features Utilized for the project

  | Feature        | Description                           |
  |----------------|---------------------------------------|
  | Retrieve data from a 3rd party API and use it to display information. | Utilized the third-party Spotify music player to display profile information |
  | Visualize data in a user friendly way | Relaxing images and color scheme, like candy for the eye. |
  | Visually appealing UI | Created a clean and modern UI with a color palette that is cohesive across the project. |
  | Responsive Design | Each page uses media queries and flexbox to adapt the design for multiple screen sizes, and was developed using a mobile-first approach. |
  |Use a regular expression to validate user input and either prevent the invalid input or inform the user about what happens with user input. |

## Getting Started
1. Visit the Spotify API webpage to retrieve your free API key:[Third-Party API] (https://developer.spotify.com/documentation/web-api/howtos/web-app-profile) and  

2. Clone this repository to your local machine using Git:

```bash
git clone https://github.com/ashleyrobycreates/Five-Minute-Farms.git
```
3. Navigate to the project directory:
```bash
cd Five-Minute-Farms
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







