# Digital Character Sheet for P2e

## Introduction

This page is designed to implement a digital character sheet for Pathfinder Second Edition. To run this app you will need two repos, the Frontend(this one) and the [Backend](https://github.com/Zietieflr/project-week-backend-Mod4). This README will focus on Frontend installation and overall goals, while the Backend will exclusively cover its installation. 

At the time of writing this, I am wrapping up the twelfth week of my Flatiron School experience. For this project I wanted to focus on making features complete as I did each one, including full styling. Over the course of three days, I built out two fully integrated and complete components of the P2e character sheet. 

Inside of React, I specifically chose to use Hooks for my state. This allowed me to track different elements of my page more easily as well as create custom Hooks to simplify some of my requirements. 

## Demonstration Video

[App in use.](https://youtu.be/wsU3MPdfwTo)

## Technologies Used

To be able to run this project you'll need:
-yarn and/or npm
-React
-Ruby on Rails

## Installation

After cloning down this repo, open the local folder in your command line and run: 
```
yarn install
```
This will initiate the installation of the React app on your machine. 

## Running the Application

Once both the Frontend and [Backend](https://us04web.zoom.us/j/79071125630?pwd=YUtQUWVkQzcxU2pVVy9oekRab3VlZz09) are installed, the application can be launched. 
In your [Backend](https://us04web.zoom.us/j/79071125630?pwd=YUtQUWVkQzcxU2pVVy9oekRab3VlZz09) command line directory, run:
```
rails s
```
This will open a server on port 3000, which this application is designed to run on. If you must have this run on a different port then see [Backend](https://us04web.zoom.us/j/79071125630?pwd=YUtQUWVkQzcxU2pVVy9oekRab3VlZz09) for the appropriate rails command. Additionally, inside your local frontend folder you'll need to go to ./src/helpers/urls.js and edit line 2 to the appropriate port number. 

Then run: 
```
yarn start
```
Continue to watch the terminal, as this command defaults to port 3000. As such, it will prompt you to type y/n to give it permission to find the next available port, which we do want. Press ENTER/RETURN to confirm this choice. Now a browser tab will open to interact with the website. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My Info

If you'd like to see more about me I can be found at:

-[LinkedIn](https://www.linkedin.com/in/logan-mcguire/)
-[GitHub](https://github.com/Zietieflr)

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

For more about Ruby on Rails check out [Ruby on Rails API](https://api.rubyonrails.org/).