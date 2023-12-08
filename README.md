# Registration.UI
A small SPA written in React and Typescript. As with the API project please treat this as a WIP. The solution does work, albeit without Authentication as mentioned in the `Registration.API` README. I wanted to keep to the brief so there is no styling or field validation. The test coverage is also lower than I would deem acceptable in a real life scenario.


## Setting Up
__This project relies on `Registration.API` running first so if you haven't got that working yet then please read the `README` [here](https://github.com/JimmyP29/Registration.API) first.__

Assuming the API is running fine then once cloned down, please cd into `registration.ui/` and run the following

- `npm i`
- `npm start` The SPA should open in a browser automatically on port 3000. 
- `npm test` to run the very small collection of tests that have been written.

## How to use

### Registration
![Registration](https://github.com/JimmyP29/Registration.UI/blob/master/assets/UI%20-%20Register.gif)

### Login 
![Login](https://github.com/JimmyP29/Registration.UI/blob/master/assets/UI%20-%20Login.gif)

### Retrieve Users
![Retrieve_Users](https://github.com/JimmyP29/Registration.UI/blob/master/assets/UI%20-%20Retrieve%20Users.gif)

## What I have done
As asked for in the brief, I have created a SPA using `create-react-app` with a Typescript template. From here I have created a UI that uses Semantic HTML and aria for A11y. It consists of 2 forms that communicate with the API using an api layer (`API.ts`), using DTOs that can be found in `models/types.d.ts`. It also has a button which will appear once the Login button has been pressed, simulating that the User in question would be Authenticated on the next button click with the token that is returned. Pressing the button will simply display the Users in a User Display, again - nothing pretty.

The parent components themselves make use of reusable components found in the `components/shared` folder. Some of these also provide some utility methods and/or enums which can be imported where needed to control them with.

I have written 3 simple tests just so there was something there. 

All strings used are kept in the `constants.ts` file, these are then reused where needed including within the tests, keeping them resilient against future changes. 

## Where this needs improvement in the short term
- __Authentication__: The elephant in the room is that the requirement for the retrival of users being suthenticated simply isn't there. This was due to the issue I have described in the backend and time. I figured that What I have produced is a good compromise given these constraints. So when the user has logged in, the token that has been sent back would be passed to the bearer header in the `GET` request. This would then mean that the API would accept the token as valid and allow the request through and returning the response as a 201. If this we not the case then we would expect a 401 response back.
- __Form Validation__: I have implemented these forms using vanilla html forms and component state. If this was going to be heading to production I would prefer to use something like [React Hook Form](https://www.react-hook-form.com/) which I have used before to give us client side validation as well as error messaging using something like Yup.
- __Testing__: The test coverage would need to be a lot more complete, I would like to have tests for each of the form components as well as the `FormWrapper` component, where I would use a `display.each()` block for testing the dynamic rendering of the `renderForm()` function. Mocking would be used where necessary for API calls, and happy + sad paths would be tested to make sure errors were handled gracefully.
-__Styling__: Clearly this would benfit from some responsive styling, I am mostly used to using `StyledComponents` which would be contained within each component file.  


## Future Considerations
- __Scalability__: If this was redesigned to have multiple screens to display the various features it would perhaps start to make sense to use Redux ToolKit to keep the state more global to the application and removing prop drilling from the component hierarchy.
- __Testability__: As previously mentioned, the test coverage would need to be improved, with tests covering the rendering of components, the I/O of utility functions as well as integration with the backend.
- __Readability__: I think the readability is good, but again I am biased, I do think it would be good to have comments on the `Props` interface properties so they show up in Intellisense.
- __Reusability__: I have kept the shared components separated for the most atomic components - such as Text inputs and buttons. This is so if we have Styled Components within these they are kept really modular but complete along with all that component's A11y. If we then used something like [Storybook](https://storybook.js.org/) to house them then this would encourage reuability because we can see the 'Lego bricks' that we have to play with, and what we need to build.
- __Maintainability__: I think that adherance to all of these points would help with future maintainability, especially with Reusing shared components only - and not going rogue with we making something in html because of a lack of awareness that something already exists, this is where Storybook would be invaluable as it would not only keep the code DRY, it would be faster as well.

