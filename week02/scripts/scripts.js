const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapList');

button.addEventListener('click', () => {
  // Trim and validate input
  const chapterName = input.value.trim();

  if (chapterName !== '') {
    // Create list item
    const li = document.createElement('li');
    li.textContent = chapterName;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('aria-label', `Remove ${chapterName}`);

    // Add delete event
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();
    });

    // Append and reset input
    li.append(deleteButton);
    list.append(li);
    input.value = '';
  }

  // Refocus input regardless
  input.focus();
});
