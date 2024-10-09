/**
 * loads and decorates the helloworld block
 * @param {Element} block The helloworld block element
 */
export default async function decorate(block) {
    // Create the <h1> element
    var h1 = document.createElement('h1');
    h1.innerText = "Hello, World!";
    block.append(h1);
}