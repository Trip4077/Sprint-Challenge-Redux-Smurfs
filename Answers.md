1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map()
Array.concat()
Object.Assign <- extends the properties of one obj into a new obj

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store - Holds your global state and can be accessed from any connected component
actions - packets of information that are sent to the reducer and contain a type key
reducers - receives the actions and reads the action type to determine how to update the store   

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application, or global state, is the object of data held by the redux store
Component State is the native React state held in a single component

1.  What is middleware?

Middleware is a function that interjects in some process to execute its own code first

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that allows us access to the dispatch method. This gives us the ability to
easily render different views based on how the current store is composed. Allows for async JavaScript

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()()
