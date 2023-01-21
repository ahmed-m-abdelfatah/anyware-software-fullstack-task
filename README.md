# Anyware-Software-Fullstack-Task

## Entrepreware (Fullstack Challenge)
### Project Spec:
This project should present student quizzes and announcements data for the current semester.
Create a full-stack application that looks like the image below using (React and Redux) for the frontend part, and
(Express.js or Nest.js and MongoDB) for the backend.

### Frontend Part:
- [X] This dashboard should be rendered only to the logged-in users. Make a log-in/out button on the home page
that allows the user to login without any username or password. If the user is logged in, the dashboard is
shown, otherwise, the home page is shown. Make a Higher Order Component (HOC) called requireAuth that
renders the dashboard component only to logged-in users and redirects other users to the home page.
- [X] The whole challenge should be responsive and can fit to any screen size.
- [X] The application must be built using reusable components as much as you can.
- [X] Use CSS3 and your preferred server-side CSS pre-processing platforms, such as LESS and SASS.
- [X] The background and foreground of the links in the sidebar must be changed to white when the mouse hovers
on it.
- [ ] Prepare your application to be translated in the future using the i10n concept and packages.
- [ ] Use your favorite test library to apply unit tests and integration tests to verify your code.
- [X] There is no restriction on the colors and the fonts. Use your own favorites.
You are free to use any package in React.js. If you choose a framework that generates boilerplate code, please
specify in the README which code was written by you.
Backend Part:
- [X] Create a web service that will be used to retrieve all announcement data.
- [X] Create a web service that will be used to retrieve all of the quiz data.
- [X] Make all of the CRUD operations for the announcement and quiz.

### Be aware that we will mainly take into consideration the following evaluation criteria:
- How clean and structured your code is.
- How you follow Best Practices in your code.
- If you implemented the business rules correctly.

### Delivery:
- [X] Upload your code to a GitHub account, send the URL and specify the time you spent writing the
challenge.
- [X] (Optional) Deploy the challenge into one of the free platforms (Example: https://www.heroku.com/ ).

---

## Some features:
- sidebar shows by default in bigger screens and hidden in smaller ones
- app is responsive
- add 404 page 
- add joi validation in both frontend and backend
- add cors (only for defined urls) and swagger in the backend 

## Solution Data:
- [Task pdf](./Fullstack_Challenge.pdf)
- [Task Images](./img/imgs.md)
- [Time Consumed](https://wakatime.com/@ahmed_m_abdelfatah/projects/dzqikehvsp?start=2023-01-17&end=2023-01-21)
- [Frontend Live Deployment](https://anyware-software-fullstack-task-client.vercel.app)
- [Backend Live Deployment docs](https://anyware-software-fullstack-task-api.onrender.com/docs)