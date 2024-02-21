import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target = "_blank">Visit google</a>
)

const username = "Chai aur react with Mohit"

const reactElement = React.createElement(
	'a', 
	{href: 'https://google.com', target: '_blank'},
	'Click me to visit google',
	username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
    reactElement
  // </React.StrictMode>,
)
