# Registration.UI
A small SPA written in React and Typescript


## Setting Up
This project relies on `Registration.API` running first so if you haven't got that working yet then please read the `README` [here](https://github.com/JimmyP29/Registration.API) first.

Assuming that is running fine then once cloned down, please cd into `registration.ui/` and run the following

- `npm i`
- `npm start`
- `npm test` to run the very small collection of tests that have been written.

## How to use

### Registration
![Registration](https://github.com/JimmyP29/Registration.API/blob/master/assets/No_Users.gif)

### Login 
![Login](https://github.com/JimmyP29/Registration.API/blob/master/assets/Register_User.gif)

### Retrieve Users
![Retrieve_Users](https://github.com/JimmyP29/Registration.API/blob/master/assets/Get_Users_with_User.gif)

### `LoginUser` (Sad Path)
![LoginUser_sad_path](https://github.com/JimmyP29/Registration.API/blob/master/assets/Login_sad_path.gif)

### `LoginUser` (Happy Path)
![LoginUser_happy_path](https://github.com/JimmyP29/Registration.API/blob/master/assets/Login_happy_path.gif)

## What I have done


## Where this needs improvement
I know that the purpose of this test was to evaluate coding style, approach and decision-making abilities, so I hope you will forgive some quite glaring ommissions and accept my explanation for them here instead. This is all in the interests of time.

- __Testing__: There are no tests in this project. I would plan to have tests for the service layer and repository layers which would mock the dependencies expected of them that have been passed into the constructors. I would test both the happy and sad paths for each method.
- __Validation__: There is also no real validation for the values coming in. I would add this to check for things such as empty strings and valid email address formatting.
- __Mapping__: On line 21 of the `RegistrationSerice` I use a foreach loop to manually map from a `User` object to a `UserDTO` object. I would prefer to use something such as AutoMapper.
- __Security__: There are 2 security concerns here that would be dangerous in a real application, that being the storage of the password as plaintext. I would hash the string within the registration process and store the hash. The second is storing the Token Key within `appsettings.json`. I named it as such to get the point across but IRL this would be stored completely outside the application and passed in using variables.
- __Authorization__: There is no Authorization as requested for the GetUsers endpoint, I spent some time trying to implement IdentityUser after I had created my own User classes and implemented the business logic. I admit that when I was researching the implementation I realised that that was probably a mistake and I should have thought about it the other way around. This is because I could have used the IdentityUser instead and got a lot of stuff for free, including the Authrization/Authentication. My only concern here is that I couldn't see how to do this using In-Memroy database and not a SQL DB instance.

## Future Considerations
- __Scalability__: 
- __Testability__: 
- __Maintainability__: 
- __Readability__: 
- __Reusability__: 

