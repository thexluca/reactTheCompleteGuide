
// *** 41. ANALYZING A STANDART REACT PROJECT *** 

// src/index.js - It is the first file to be executed when you run https://localhose:3000

// - - - - - - - - - - - - - - - - - - - -
// ** src/index.js EXPLAINED **
// - - - - - - - - - - - - - - - - - - - -
import ReactDOM from 'react-dom/client';
// Imports the react-dom object from the "react-dom" 3rd party library, which 
// is one of our dependencies that is downloaded and installed locally.

// You can see the React dependencies if you look into the package.json file. 
// In package.json, "react-dom": "^18.0.0", "react-scripts": "^5.0.1" these two 
// dependencies together form the react library.

import './index.css';
// Import the src/index.css file.

import App from './App';
// Impot the App component.

const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.createRoot() - 
// This creates the main entry point(main hook) of the overall user interface 
// you are about to build with React. 

// 'root' - 
// If you look into public/index.html file there is a <div id="root"></div> element.
// <div id="root"></div> is the entry point where the react driven user interface will be rendered into. 

// Conclusion: we select the 'root' element in public/index.html file. Than we use ReactDOM.createRoot() method to 
// tell React that 'root' element is the main place where react will render the application(root of our react application).
// Than we store this object into our const root variable.

root.render(<App />);
// Once root object is created, we use it to render the App component.
// <App /> is JSX syntax

// - - - - - - - - - - - - - - - - - - - -
// ** src.App.js EXPLAINED ** 
// - - - - - - - - - - - - - - - - - - - -
function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
        </div>
    );
    // HTML returned in this function is called JSX, a syntax invented by React.
}
  
  export default App;
  // Exports the function created above. 
  // In modern JavaScript if you have a function, class or object defind in 
  // one file, you have to export it. 