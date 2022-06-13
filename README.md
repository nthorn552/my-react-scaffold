# my-react-scaffold

`create-react-app` is great for a lot of things, but sometimes you want to start with a barebones project but without all the boilerplate webpack, typescript, and dev server setup.  That's why I made this!  For educational or side project purposes, I didn't want to build off of `create-react-app`, but some of that basic config stuff is tedious, and even discouraging.  My goal is to try to keep this at least _somewhat_ up to date, and to make it dead easy to get up and running.  So, without further ado...

## Getting Started

### Prerequisites
- Node.js
-- Run ```node -v```.  If you see a number like ```v##.##.##``` then you're good to go!  Else, go to the [Node.js's download page](https://nodejs.org/en/download/) and follow their instructions.

### Starting the React Scaffold
Pull down this repository, then 
```npm install```.
Once that is finished, run ```npm start ``` to start the development server.  This is available at ```localhost:3000``` by default.  You should be able to navigate to that address in your browser and see "Hello World".  If so, congrats!  Now go have fun!

Alternatively, there is ```npm run build``` and ```npm run build:prod```, which will build the app into a ```/dist``` folder.  You can run ```npm run start:prod``` to then serve the app from the ```/dist```folder.
