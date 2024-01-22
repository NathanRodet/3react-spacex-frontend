# Application specs

The index page should display the next launch and the last three launches (simple card - image/logo, date, launcher used).

When clicking on one displayed launch it should redirect you to a new page which display all the information relative to the launch and the first_stage used.

If the first_stage was used for other mission you should allow the user to click on it and display the list of all mission done by this first_stage (display all missions ID and name, first flight date, and some 2 others).

Finally a page should display all the launches with some rules
- Only display items 10 by 10
- Allow user to “navigate” to the next 10 items (show more)
- Allow the user to order the result by date
- Offer the user a search field based on the mission_name

Testing is important. You are required to implement a few tests on your project.

API spec: https://api.spacex.land/rest/#/ 
API: https://api.spacex.land/rest/

# Installation steps :

- Download the project
- Install NodeJs in latest version
- Use node packet manager to install dependancies using 'npm install' command.
- Finally, to run the project use 'npm start' command.

# Script commands

For localhost
- npm start
To test
- npm test
To build 
- npm run build

You can publish a static version of the project in local,  do :
- npm install -g serve
- serve -s build
