//your JS code here. If required.
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function helper(band){
  return band.replace(/^(a |an |the)/i, '').trim()
}

let listOrder = document.getElementById('band')
let list = bands.sort((a,b) => {
  return helper(a) > helper(b) ? 1 : -1
})
list.map((li) => listOrder.innerHTML += `<li>${li}</li>`)

