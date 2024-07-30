// document.addEventListener('DOMContentLoaded', function() {
//     const addTaskBtn = document.getElementById('addTaskBtn');
//     addTaskBtn.addEventListener('click', function() {
//         const container = document.querySelector('.container');
//         const newToDo = document.createElement('div');
//         newToDo.classList.add('ToDo');
//         newToDo.innerHTML = `
//             <input class="ToDo_value" type="text" placeholder="(empty)">
//             <input class="ToDo_checkbox" type="checkbox">
//         `;
//         container.insertBefore(newToDo, addTaskBtn);
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const container = document.querySelector('.container');

    // Log the button and container to check if they're selected correctly
    console.log('Add Task Button:', addTaskBtn);
    console.log('Container:', container);

    addTaskBtn.addEventListener('click', function() {
        console.log('Button Clicked'); // Confirm button click is detected

        const newToDo = document.createElement('div');
        newToDo.classList.add('ToDo');
        newToDo.innerHTML = `
            <input class="ToDo_value" type="text" placeholder="(empty)">
            <input class="ToDo_checkbox" type="checkbox">
        `;

        // Log newToDo to verify it's created correctly
        console.log('New ToDo Element:', newToDo);

        // Insert newToDo before the button
        container.insertBefore(newToDo, addTaskBtn);

        // Log the container content to check if newToDo is added
        console.log('Container Content After Adding New ToDo:', container.innerHTML);
    });
});
