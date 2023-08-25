# AtilimTimetable
Combine lecture hours and classes on EduPage into a single document using NodeJS and Selenium for Atilim University.

## What's needed?
- NodeJS +v18.15.0
- Firefox

## Usage

- Download the files and extract them to a folder.
- Open the folder in console.
- Run `npm init -y` from console.
- You can add or remove course codes from the main function in app.js. Simply delete it to reduce it and add a new `await getTable("<LESSON CODE>");` line to add new ones.
- By running the `node app.js` command from the console, you will get the timetable output named "output.svg" in a few minutes.
