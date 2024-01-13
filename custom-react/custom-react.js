function customRender(reactElement, container) {
  /*
    const domEL = document.createElement(reactElement.type)
    domEL.innerHTML = reactElement.children
    domEL.setAttribute('href',reactElement.props.href)
    domEL.setAttribute('target',reactElement.props.target)
    container.appendChild(domEL); 
    */
  const domEL = document.createElement(reactElement.type);
  domEL.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domEL.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domEL);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://github.com/facebook/react",
    target: "_blank",
  },
  children: "Click me to visit google",
};
const mainContainer = document.querySelector("#root ");

customRender(reactElement, mainContainer);
