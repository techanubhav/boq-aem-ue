import appendHelloWorld from '../helloworld/helloworld';  // Adjust the path as needed

test('it appends an h1 with "Hello, World!" to the block', () => {
    let el = document.createElement('div');
    // Call the function to append the <h1>
    el = appendHelloWorld(el);
    console.log(el);
    expect(el.children.length).toBe(1);
    expect(el.children[0].tagName).toBe('H1');
    expect(el.children[0].innerText).toBe('Hello, World!');
});
