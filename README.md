
# TVJ - Tom Vs Jerry

<p align="center">
    <img src="/screenshots/logo.png" alt="" width=400>
<br><br>
A responsive treasure hunt game mixed with intelligence, surprise and risk around every corner.
based on cartoon Tom and Jerry. <br><br>[Live Link](https://harsha2803.github.io/TVJ-Puzzle-Game/)
</p>
<br>

## Table of Contents
<!-- <> -->
* [Features](#features)
* [Flow Chart Markdown](#flow-chart-markdown)
* [Player and Analytics](#player-and-analytics)
* [Login and Registration](#login-and-registration)
* [Authorization and Security](#authorization-and-security)
* [Screen Shots](#screen-shots)
* [Game Structure](#game-structure)
* [General Instructions for the game](#general-instructions-for-the-game-are-as-follows)
* [Stage 1: Find The Cheese](#stage-1-find-the-cheese)
* [Stage 2: What's My Name ?](#stage-2-What's-My-Name-?)
* [Stage 3: Keep In Order!!](#stage-3-Keep-In-Order-!!)
* [Stage 4 : Listen Some Music !](#Stage-4-Listen-Some-Music-!)
* [Stage 5: The Memory Game](#stage-5-the-memory-game)
* [Completion](#completion)
* [Tech stack](#tech-stack)
* [Project Set-up](#project-set-up)
* [Credits](#credits)
<!-- <> -->

## Features

- [x] 5 stages of game
    1. Find The Cheese
    2. What's My Name ?
    3. Keep In Order!!
    4. Listen Some Music !
    5. The Memory Game
- [x] Soft skills assessed
    1. Critical Thinking
    2. Decision Making
    3. Patience
    4. Problem Solving
    5. Eye for Detail
    6. Logical reasoning
    7. Auditory Comprehension
    8. Knowledge
<!--     <p align="left"> -->
- [x] Dead Ends
    1. First on stage 2:  What's My Name ?
    2. Second on stage 3:  Keep In Order !!
<br>

## Flow Chart Markdown
```mermaid
graph LR
A[Stage 1] --> B[Stage 2]
B --> C[Stage 3]
C --> D[Stage 4]
D --> E[Stage 5]
E --> F[Complete]
B --> G[Dead End]
C --> H[Dead End]
G --> A
H --> C
```

### Player and Analytics
- [x] User leader board
- [x] Admin Panel
- [x] Overall and  each Player's analytics in admin panel
- [x] Players can't skip level by changing web adress.
- [x] Saving user state and level after each stage in database.

## Login and Regstration
- [x] Sign in with Google (Oauth) [recommended for better user experience]
- [x] User Sign up
- [x] User Log in
- [x] admin login

## Authorization and Security

Only logged in users can:
- [x] Play game
- [x] Access player analysis
- [x] Only admin can access Admin Panel

# Screen Shots

<p align="left">
        Sign Up Page<hr>
        <br>
        <img src="/screenshots/signup.png" alt="" >
        <br><br>
        Login Page<hr>
        <br>
        <img src="/screenshots/login.png" alt="" >
        <br><br>
         Admin Panel and LeaderBoard<hr>
        <img src="/screenshots/Deadend.png" alt="" >
        <br><br>
         Player Scorecard View <hr>
        <img src="https://user-images.githubusercontent.com/73771646/236883438-2854b849-066d-40a9-8c84-f2db7fb90ddc.png" alt="" >
        <br><br>
         Deadend <hr>
        <img src="/screenshots/Deadend.png" alt="" >
        <br><br>
         Completion View<hr>
        <img src="/screenshots/Completion.png" alt="" >
</p>


# Structure of the game

- The game has develoved to asses user's soft skill while providing an immersive experience.  



## General Instructions for the game are as follows:

- Sign In Using Gmail.
- Read Clues carefully and Proceed.
- If you hit deadend, You'll be redirected to subsequent stage.
- You can restart game at any point of time.

# Stage 1: Find The Cheese
<hr>
<p align="center">
        <img src="/screenshots/stage1.png" alt="" >
    </p>



## Soft skills tested: 

- Eye For Detail
- Patience

## Dead end: 0

## Clues: 

    - The image show a living room where Tom has hidden Cheese.

## Puzzle

You have to find where the cheese is, this will assess your patience and eye for detail soft skill.

## Solution

<details> 
  <summary> Click to view ? </summary>
  Cheese is at left top corner. Exactly Under Stage Name.
</details>

## Motive

This stage aims to give players a head start and take them on a thrilling journey of treasure hunting.  

<br>

# Stage 2: What's My Name ?
<hr>
<p align="center">
        <img src="/screenshots/stage2.png" alt="" >
    </p>


## Soft skills tested: 

- Critical Thinking
- Eye for Detail
- Knowledge
- Memory



## Clues: 

You are given some set of rules. You have to find out Tom's real name that is "THOMAS"(case insensitive). A bulb is kept on screen just as a clue. CLues are given such a way that user's softskills like Memory, Knowledge, Critical Thinking, Eye for detail are assessed.

## Puzzle

Simple Answer, Enter as a  string.

## Dead end: 1

- If the player choose a different answer, the Jerry is caught, Hence Deadend.

## Solution

<details> 
  <summary> Click to see? </summary>
  Thomas  
</details>

## Motive

This stage is design to assess memory and critical thinking.

<br>

# Stage 3: Keep In Order!!
<hr>
<p align="center">
        <img src="/screenshots/stage3.png" alt="" >
    </p>


## Soft skills tested:

- Logical Reasoning
- Memory
- Audio Comprehension
- Detailing


## Clues: 
- You are given a video and set of 5 events.

## Puzzle

Watch the video and arrange these set of events chronologically, choose one correct option among given options.

## Dead end: 2

Wrong answer leads to a deadend, takes you back to stage 3 itself.

## Solution
<details> 
  <summary> Click to see? </summary>
            3, 1, 5, 2, 4
</details>

## Motive
The stage tests user of their Memory and Comprehensive soft skills. 


# Stage 4: Listen Some Music !
<hr>
<p align="center">
        <img src="/screenshots/stage4.png" alt="" height = 450 >
    </p>


## Soft skills tested: 
- Comprehension
- Auditory 

## Clues: 
    The audio is your clue.

## Puzzle
    You need to listen to the audio and answer correctly.

## Solution
<details> 
  <summary> Click to see? </summary>
  2 
</details>

## Motive

The stage is to test user compreshension and Auditory Skills.

<br>

# Stage 5: The Memory Game
<hr>
<p align="center">
        <img src="/screenshots/stage5.png" alt="" >
    </p>


## Soft skills tested: 

- Eye for Detail
- Memory
- Patience
- Logical Reasoning
- Comprehension

## Clues and Puzzle: 

- Basically not a clue game, but U have to remember which one would be in which tile. You should try to open pair consequently in least possible time possible. 

The final showdown, answer the riddle with full answer to get your reward. 

## Solution

<details> 
  <summary> Click to see? </summary>
  Find All Pairs.
</details>

## Motive

The stage test the curiosity of the user and testing player patience to extreme and his Memory and Logical thinking. 

<br>

# Completion Page
<hr>
<img src="/screenshots/Completion.png" alt="badge">

# Tech Stack:

## Frontend
<img src="https://user-images.githubusercontent.com/73771646/236629784-d4202c46-9bc8-4dae-96a2-a9210ced1b2c.png" alt="ReactJS" width="200" height="90">

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Backend
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Database and Authentication
<img src="https://user-images.githubusercontent.com/73771646/236628352-f54fc104-86de-46dc-8a51-809aed479555.jpg" alt="firebase-logo" width="150" height="50">
<img src="https://user-images.githubusercontent.com/73771646/236628740-0dba78ca-a78b-43d3-8fbb-93ea144f57f2.png" alt="realtime-logo" width="150" height="50">

## Hosting 

<img src="https://user-images.githubusercontent.com/73771646/236617770-476657d1-27d9-45f4-9e12-c3918997cb9d.jpg" alt="vercel-logo" width="100" height="50">


# Project Set-up

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## credits 

- Tom and Jerry
 
