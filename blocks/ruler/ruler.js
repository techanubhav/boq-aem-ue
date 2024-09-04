/**
 * loads and decorates the ruler
 * @param {Element} block The ruler block element
 */
export default async function decorate(block) {
     // Create the <hr> element
     var hr = document.createElement('hr');

     // Add the class "custom-ruler" to the <hr> element
     hr.className = 'custom-ruler';

     block.append(hr);
}