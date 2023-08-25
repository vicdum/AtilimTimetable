# AtilimTimetable
Combine lecture hours and classes on EduPage into a single document using NodeJS and Selenium for Atilim University.

## What's needed?
- NodeJS +v18.15.0 [Download for Windows](https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi) | [Other Download Options](https://nodejs.org/en/download)
- Firefox (or GeckoDriver) [Download GD](https://github.com/mozilla/geckodriver/releases/download/v0.33.0/geckodriver-v0.33.0-win64.zip)

## Usage

- Download the files and extract them to a folder.
- Open the folder in console.
- Run `npm init -y` from console.
- You can add or remove course codes from the main function in app.js. Simply delete it to reduce
  it and add a new `await getTable("<LESSON CODE>");` line to add new ones.
- By running the `node app.js` command from the console, you will get the timetable output named "output.svg" in a few minutes.
