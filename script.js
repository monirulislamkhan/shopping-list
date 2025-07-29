const itemForm = document.getElementById('item-form');
const addInput = document.getElementById('item-input');
const ulList = document.getElementById('item-list');

// Create function

/* addInput.addEventListener('keyup', function (e) {
  console.log(e.target);
  document.querySelector('h1').textContent = e.target.value;
}); */
itemForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log(e.target);
  console.log(e.target);

  // Create li element
  const li = document.createElement('li');
  // li.appendChild(document.createTextNode());
});
