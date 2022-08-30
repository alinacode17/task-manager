To start local build please use: npm run dev

This will run both build and json server

I have used a json server for BE.This runs on http://localhost:5000

I have created 3 routes:- to get task:
http://localhost:5000/taskItems
- to get task lists:
http://localhost:5000/tasksCollection
- to submit data: 
http://localhost:5000/submittedFormData

Task list and task items will be generated dynamically.
If there is submission needed I render a form, if not just a normal component.

Forms are created dynamically based on json data.
I have used Formik with Yup for validation.
For creating dynamic validation schema, I have used: https://github.com/ridoansaleh/dynamic-form-json/blob/master/src/utils/yupSchemaCreator.js
// Bugs known: Validation for upload type is missing

Once page is loaded we see the list of tasks.The corresponding task item to the first task on the list will be always open
Tasks have 3 statuses: 
'open', - task needs to be completed
'completed', - task completed
'instructions' - this is not a task to be submitted, it has a different logic from the previous two tasks

If task is completed:I am updating the status in both task list and task itemOnce clicking on a completed task you will see the completed task component.
// Improvements:
// If more time, I would have called the endpoint where submitted data is and render that too
// Another idea was to have completed tasks lists too and remove the completed tasks from to do list
// Another improvement would have been to preserve data on the session so when user types something but moves to another task, they would have the data saved 
// Also there can be a reset button for forms

For the search tool, I have used the BE search provided by json server.Search is optimised with debouncing, min characters, and cancelling previous token.Each time there are no results we get back the list.First item will always be open.
// Improvements:// Make search sticky on mobile
For getting grids sizes on different breakpoints you can see my approach inLayout folder. I created a generic container based on React/Bootstrap docs where I am setting the breakpoints based on datahttps://react-bootstrap.github.io/layout/grid/
// not implemented due to lack time

Styling is minimal due to lack of time but responsive
// Improvements:
// Highlight the active task

Unit testing not implemented
// I think it would have been good to test forms validations, api calls and tasks logic
