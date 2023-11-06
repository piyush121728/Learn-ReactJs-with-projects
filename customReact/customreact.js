//Step 1 

//Grab root from index.html or create a container
const mainContainer = document.querySelector("#root")

// Step 2

//Create a react element

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

//Step 3

//implement customRender function

function customRender(reactElement, mainContainer) {

    //create a dom html element
    const domElement = document.createElement(reactElement.type);

    //set attributes or properties in domElement
    domElement.innerHTML = reactElement.children;

    /*
        domElement.setAttribute('href', reactElement.props.href);
        domElement.setAttribute('target', reactElement.props.target);
    */
    for (const prop in reactElement.props) {
        if (prop === 'children') { continue; }
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement);
}

//Inject react element in container and Render the container
customRender(reactElement, mainContainer);