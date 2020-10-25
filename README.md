# Self Care Center: Solo Project

## Contributors
- Tashia Davis - [GitHub](https://github.com/tashiad)

## Technologies Used
- Javascript
- HTML
- CSS
- GitHub
- Git
- Atom

## Project Goals
- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events
- Individualize your programming skill set

## Overview
How can I care for myself? One way is with affirmations and mantras!
Affirmations are thoughts of positive self-empowerment, meant to assert your self-worth.
Mantras are repetitive phrases that are repeated again and again during mindfulness practices. Your challenge is to build an app that helps users remind themselves of their inherent value!

This Solo Challenge gives students and instructors the opportunity to get a pulse on where you are with the foundational concepts of Module 1 curriculum. Students should use this as an opportunity to challenge themselves and work completely independently. Google can (and probably should!) be used, but any other code base should not be referenced. Instructors will be able to use your work, both completion of functionality and code quality, to determine where you stand and if you are behind for this point in the module, provide supports to intervene.

The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/self-care-center.html).

## Instructions For Running and Viewing
**>>Visit the deploy link [here.](https://tashiad.github.io/self-care-center/)**

### Iteration 0: Build Out Comp
<img width="1434" alt="Screen Shot 2020-10-15 at 10 05 58 AM 👁 " src="https://user-images.githubusercontent.com/49926352/96159974-93c4c780-0ed2-11eb-9009-68501c2b5bd7.png">

<hr/>

### Iteration 1: Minimum Viable Product (MVP) - Add Random Affirmation and Mantra feature
- When a user selects a message option and then clicks the "Receive Message" button, the user sees a random message from the list of possible messages for that category
- When the message appears, the mediation icon disappears from the message area

<img width="1434" alt="Screen Shot 2020-10-15 at 10 06 20 AM 👁 " src="https://user-images.githubusercontent.com/49926352/96160091-b7880d80-0ed2-11eb-9e16-2c7e52b72509.png">

<hr/>

### Choose your own Adventure
Students had the opportunity to choose one additional feature from a list of options. Considerations for this choice included which features align with your strengths, which features would challenge you to grow, and which features you'd find to be useful in this application. I chose to add error handling and a clear button, which involved the following functionality:  
- User should not be able to click the "Receive Message" button unless they have selected a message option.
- The user can click a clear button, which clears the page of any message .
- User should only be able to click the clear button if a message is visible.
- When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.

<hr/>

## Future Features
#### User can add their own message
- Add an "Add Message" button in a logical spot.
- When the user clicks "Add Message" a form will appear in the message box. The form should contain two inputs - one to specify which type of message is being added, and another to add the text of the message itself. The form should also contain a "Submit" button.
- If the user doesn't specify the type of message, they should get an error and be unable to submit their message until the type is specified.
- When the user clicks the "Submit" button and that message will be added to the appropriate list of messages.
- When a new message is added, that message should automatically be displayed in the message box, instead of the meditation icon.
- As you add these new elements to the page, be sure to match the style of existing elements.

#### User can favorite a message
- When a message appears, it should appear with a "Favorite" button.
- When the "Favorite" button is clicked, that message should be added to a new list of favorite messages.
- Users should be able to view their favorites by clicking a "View Favorites" button that exists somewhere on the page
- When the "View Favorites" button is clicked, users should be taken to a new page that displays all of their favorite messages.
- Users should be able to navigate back to the main page by clicking a button.
- Users should be able to remove a message from their list of favorites, by clicking a button.
- As you add these new elements to the page, be sure to match the style of existing elements.

#### User can delete a message
- Add the ability to delete a message (ie: when a message shows up, show a button that says "I don't like this messge" (or something similar), and remove it from the list so that it will not show up any more. Make sure to alert the user in some way that the message has been removed.

#### User never sees a repeated message
- Use JavaScript to ensure that the user never sees a repeated message until they've seen them all.
- After they've seen them all they should be notified that they will now start seeing repeat messages.

#### All Messages interface
- Add a "View All Messages" button.
- When that button is clicked, the user is taken to a new pages that displays all messages, sorted by message type.
- On this page, user should have the ability to add/edit/delete messages.

#### CSS Animations
- Add a loading animation when a user clicks the "Receive Message" button to simulate searching for a message. Hint - You will need to use CSS Keyframes, and a Javascript timeout function for this.
- Make your buttons grow in size or change color when the user hovers over them, enticing them to click the dang thing.
- When the message appears, the text should fade in, from white to black to deliver the message in a calming way.
- Have the background change depending on if a user has selected an affirmation or mantra. Choose a calming secondary gradient for each type of message Remember your user experience and animate this in gradually!

#### Login Page
- Refactor your application so that the user lands on a "Login" page
- The login page should match the style of the application.
- The login page should contain an input for a user to enter their name, and a button to submit.
- After the user clicks the submit button, they should be taken to the main application page, and see a personalized greeting that displays their name and some sort of welcome message.
- The welcome message and name should appear in a logical place of your choosing.

#### Responsive Design
- Do some research and determine how to make your app respond to the user's screen size.
- Layout and spacing should adapt to mobile, tablet, desktop and extra large screens.

#### Local Storage
- Only do this if you've added the "Favorite a Message" functionality.
- Do some research to utilize Local Storage, so that the user's favorite messages will persist, even if they reload the page.
