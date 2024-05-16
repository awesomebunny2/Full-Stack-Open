# Full-Stack-Open

## Creating A New React Project
* cd into the the folder for the part of the course you are doing exercises for (if there isn't one yet, create it in Finder first)
* Run this command, replacing "exercise chunk name" with the name you want for your batch of exercises that are using the same code (1.1-1.5 is what I named my first one in Part 1): `npm create vite@latest exercise-chunk-name -- --template react`
* cd into this new folder that was created
* `npm install`
* Start the application with `npm run dev`
* Application should be running on port 5173, so just enter into the browser: `localhost:5173`
* Open dev tools and get started

## Add React DevTools to Safari
* In a new terminal window (not running the react env server), type `react-devtools` to open the Electron app
* In your project, go to the HTML and paste `<script src="http://localhost:8097"></script>` at the top of your HEAD element (I like to put it right below the `<meta charset="UTF-8" />` code)
* Refresh your web page
* Electron app should now be connected to your code