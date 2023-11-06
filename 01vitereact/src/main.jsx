import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//1. Creating react element without using createElement method of dom

/*
const reactElement = {

  //element type div, a , h1 etc
  type: 'a',

  //attributes and properties
  props: {
    href: 'https://www.google.com/',
    target: '_blank'
  },

  children: 'Click me to visit Google'
}

//Note : This element will not render because it does not made by using createElement method of react react dom

*/

////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Creating react element

/*
const anotherElement = (
  <a href='https://google.com' rel='' target='_blank'>Visit Google</a>
)
*/

////////////////////////////////////////////////////////////////////////////////////////////////////

//3. creating own react element using createElement method of react

/*
const reactElement = React.createElement(
  'a', //element like a, div, img etc
  { href: 'https://google.com', target: '_blank' }, //attributes and properties
  'click me to visit google' //content
)
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*
To render a React element, first pass the DOM element to ReactDOM.createRoot(), 
then pass the React element to root.render():
*/

//create a react root which refer to a div of index.html which id is 'root' and render the react component inside the root
ReactDOM.createRoot(document.getElementById('root')).render(

  <App />

  // anotherElement

  // reactElement



)
