// Reducer are the Pure Functions. 
// Now, after defined the actions, we have to give them task - How to do?

// Initialize with initial state first
const initialState = 0;

//it takes two parameter, (first- state),,,, and the (second one is- action).
const changeNumber = (state = initialState, action) => {

         switch(action.type) {

            case "INCREMENT": return state + 1;

            case "DECREMENT": return state - 1;

            default: return state;

         }
}

export default changeNumber;

//now we can used this reducer in anywhere in the application.
//you can create a multiple reducer

//now go the root file, where you can combined all the reducer that have created in this folder.
// index.js - combined them - in our case there is only one reducer.