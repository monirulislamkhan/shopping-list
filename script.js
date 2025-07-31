const itemForm = document.getElementById('item-form');
const addInput = document.getElementById('item-input');
const ulList = document.getElementById('item-list');

itemForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = addInput.value.trim();

  if (!value) {
    alert('Please enter value');
    addInput.focus();
    return;
  }

  // Create li element
  const li = document.createElement('li');
  // li.append(value);
  li.appendChild(document.createTextNode(value));

  // Create button element
  const btn = document.createElement('button');
  btn.className = 'remove-item btn-link text-red';
  btn.setAttribute('type', 'button');
  btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  // li.append(btn);
  li.appendChild(btn);

  ulList.appendChild(li);
  addInput.value = '';
  addInput.focus();
});

// remove list item function
ulList.addEventListener('click', function (e) {
  if (e.target.closest('.remove-item')) {
    const li = e.target.closest('li');
    const itemName = li.firstChild.textContent.trim();
    if (confirm('Are you sure you want to delete this item : ' + itemName)) {
      li.remove();
    }
  }
});
