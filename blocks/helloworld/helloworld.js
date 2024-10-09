export default function appendHelloWorld(el) {
    // Create the <h1> element
    let h1 = document.createElement('h1');
    h1.innerText = "Hello, World!";
    console.log("anubhav");    
    el.appendChild(h1);
    console.log(el);
    return el;
}