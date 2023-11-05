# MyFitnessJournal
## Description
Final project for our Web-Based Program (COSC 484) class. The goal of our website is to promote fitness by providing the ability to create personal goals and track progress towards it.

## Features

## Node Modules
- dotenv
- react-icons
- react-router-dom
- sass

## For contributors
#### How to set up your API key?
1. Go to this [website](https://rapidapi.com/apininjas/api/exercises-by-api-ninjas)
2. Make an account
3. Click the button, "Subscribe to Test"
4. Scroll down till you see "X-RapidAPI-Key"
5. Copy it
6. Go to Visual Studio Code
7. Open the terminal and install dotenv
```
npm install dotenv --save
```
8. Create a file in the projects folder called ".env"
9. Paste this in it and replace "[YOUR_API_KEY]" with the "X-RapidAPI-Key" you copied before
```
REACT_APP_SUGGESTION_API_KEY = '[YOUR_API_KEY]'
```
10. Save
11. Restart Visual Studio Code
12. Finished