# Web Development Project
This is my capstone project for CODE:You. The user is able to interact with the information provided by searching for information. The project utilizes a third-party api to retrieve information, that is then presented to the user with a helpful interface. The goal of the project is to demonstrate a general knowledge of HTML, CSS, and JavaScript with Node.js and express.

## Overview
 Hello! Welcome to Five Minute Farms! This website was made to show, in basic steps, how to grow the easy tomato plant, or any plant, from seeds. Also, according to my own research and web based research, plants DO respond to music and sounds! For this reason, a Spotify media player is embedded for users to see a sample playlist. A USDA planting zone chart shows temperature extremes based on US data, and when to avoid those extremes based on location. A growth chart is provided to show in days approximately how long it takes to grow from a seedling to "ready to plant" status. An images page shows various stages of seedlings and gardens. A jokes API was created to for users to get a joke or two to tell to their plants, and stores a running joke list on the page. Remember, plants love sounds and vibrations (and who doesn't love a good joke)! Finally, a simple contact page was created. Happy plants = happy harvest!

  ## Resources
  ---

The resources I used for this project are as follows:

- **Third-Party API**: (https://official-joke-api.appspot.com/random_joke) This API provides random jokes to entertain users and their gardens. It's a fun way to add humor to the project.

- **GrowOya**: (www.growoya.com) This website offers planting information based on the user's zone in the United States.

- **W3Schools**: (www.w3schools.com) A valuable resource for learning web development. The growing chart is based on my own research as a gardener for five years.

- **Spotify**: (https://open.spotify.com) An embedded music player from Spotify with playlists for users to explore.

- **YouTube**: (https://www.youtube.com/) Used to research various videos on API usage, Copilot AI, technology, coding, and more.

- **Pistils Nursery**: (https://pistilsnursery.com/blogs/journal) One of the resources used to show that gardens thrive with music.

### Project Overview
---

The project is organized as follows:

**Landing Page:** The landing page provides the user with options to navigate the web application, instructions for growing tomato seeds, a Spotify playlist with a sample of music to play for the plants, and a USDA Planting Zone image.

**Garden Chart:** Growing chart in days based on seedlings, made based on my own research of over five years.

**Garden Images:** Images have been added that show the various stages of planting and growing. 

**Jokes to Make Your Garden Laugh:** A simple API that allows users to request random jokes to tell to their seedlings and garden plants and keeps a list of the jokes in a container on the page to view. 

**Contact Page:** Created if the user would like to email with a name field and a note.

## Features Utilized for the project

  | Feature        | Description                           |
  |----------------|---------------------------------------|
  | Retrieve data from a 3rd party API and use it to display information. | Utilized the third-party random jokes API to generate different jokes each time when the button is submitted.
  | Visualize data in a user friendly way | Relaxing images and color scheme, like candy for the eye. |
  | Visually appealing UI | Created a clean and modern UI with a color palette that is cohesive across the project. |
  | Responsive Design | Each page uses media queries and flexbox to adapt the design for multiple screen sizes, and was developed using a mobile-first approach. |
  |Use of a regular expression to validate user input and either prevent the invalid input or inform the user about what happens with user input via the contact page |
  | Visualize data in a user friendly way by using a growing chart. |
  | Using arrays | Display jokes on the jokes app page. When the “Get a Joke” button is pushed, a joke is retrieved from the API and added to the jokes array and stored in a container visable on the page.
  | Create a node.js web server using modern framework such as Express implemented on the contact page. |

## Getting Started
1. [Third-Party API] endpoint (https://official-joke-api.appspot.com/random_joke) for free API with no key needed.

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
5. **Install Dependencies**: Install the required dependencies for both the frontend and backend:
    ```bash
    cd backend/contact-form-server
    npm install
    cd ../../frontend
    npm install

6. **Start the Backend Server**: Navigate to the backend directory and start the server:
    ```bash
    cd ../backend/contact-form-server
    node server.js
    ```

7. **View the Frontend**: Use the Live Server extension in VSCode to view the `index.html` page. Alternatively, you can open the `index.html` file directly in your web browser.This project runs on Node.js and Express. Make sure you have Node.js installed on your machine.

## Additional Notes
- Ensure CORS is enabled in your backend server to allow communication between the frontend and backend.