# TODO-APP


## Team members

 Adeshvir

 Diego

 Stephen 

 Andres 

 Jason

## Project Description 

This project will be a MERN stack application that will focus working with React and MongoDB. The TODO app will display a calendar that the user will be able to interact with. The user will be able to add tasks on any day in accordance to time. 

## App Logic

The TODO app has four main parts: the first is the Add Event page which guides the user to a form indicating to add the title, start day and start time, end day and end time, category, and note for their task/event. This page utilizes the GET and POST routes which shows the form, and pushes the form's entries to mongoDB. Once submitted, there will be a popup indicating to the user that the submission was successful. Then they will be redirected to the main screen with the calendar, and the title they inserted in the form will be displayed on the calendar. The second main part is the Delete Event. This function will have a dropdown to select the tasks by title and a delete button to delete the task off the calendar and database. The third main part is a the Settings page and this allows the user to change the background of the app by clicking on the toggle button. The last function is the Contact Us page, and this page also utilizes the GET/POST routes as it shows the user the form asking for name, email, phone number, and comment. Once the user submits the page, the information is pushed to the database, and a popup shows up saying the submission was sucessful and it redirects them to the main page.


## MVP
- Calendar should appear as user opens the app.

- The navigation should have the four main parts of the app Add Event, Contact Us, Settings, Delete Event.

- Once user clicks on Add Event link, it should take them to the Add Event page in which a form appears, and once user submits the form, a popup should showup indicating success. The user should be redirected to main page and see their inputed title on calendar in accordance to inputed time.

- Once user clicks on Settings link, it should take them to Settings page, and they should be able to toggle dark mode.

- Once user clicks on Contact Us link, it should take them to Contact Us page, and they should be able to submit the form and see a popup saying the submission was successful, and it should redirect them to the main page

- Once user clicks on Delete Event link, it should take them to Delete Event page, and they should be able to see a dropdown with all the inputed titles, and once the chose the desired title and click the delete button the title is delete from the dropdown and calendar.

- This app should keep track of user inputed data of Add Event, Contact Us, and Delete Event entires and submit it to the database.


## Post-MVP
- Added security to site

- Make it mobile with React Native

- Use APIS to utilize different functionality