const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('___'); // you need to fill in the blank to reference the list element
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);
