// What to do ? - Actions
// So, there are two action we performed in this application that is - Increment and Decrement


//action-1
export const incNumber = () => {
  return {
    type: "INCREMENT"
  }
}

//action-2
export const decNumber = () => {
  return {
    type: "DECREMENT"
  }
}




//Now go to the reducer and set this method for -  How to do ? - (upDown.js)