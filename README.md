# AtilimTimetable
Combine lecture hours and classes on EduPage into a single document using NodeJS and Selenium for Atilim University.

## What's needed?
- NodeJS +v18.15.0 [Download for Windows](https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi) | [Other Download Options](https://nodejs.org/en/download)
- Firefox (or GeckoDriver) [Download GD](https://github.com/mozilla/geckodriver/releases/download/v0.33.0/geckodriver-v0.33.0-win64.zip)

## Usage

- Download the files and extract them to a folder.
- Open the folder in console.
- Run `npm i -y` from console.
- You can add or remove course codes from the `lectures.yml` file. Simply delete a course code to remove it, or add a new line with the format `- <LESSON CODE>` to include new ones.
- By running the `node app.js` command from the console, you will get the timetable output named "output.svg" in a few seconds.

## Images

![image](https://github.com/vicdum/AtilimTimetable/assets/33635097/cc4f1d11-78d3-4d4c-b0ab-003d0d7f6203)

![image](https://github.com/vicdum/AtilimTimetable/assets/33635097/bbd236db-f1aa-4c93-a63f-195fd9b0fdcf)
