const userinput = document.getElementById('input');
const addtaskbtn = document.getElementById('add');
const taskdisplay = document.getElementById('display');

addtaskbtn.addEventListener('click', addtasksindisplay)

function addtasksindisplay(){
    const tasktext = userinput.value.trim();
    if(tasktext === '') return;

    const taskitem = document.createElement('li');
    taskitem.textContent = tasktext;

    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'delete';
    deletebutton.addEventListener('click', () => {
    taskitem.remove();
    });

    taskdisplay.appendChild(taskitem);
    userinput.value = '';

    taskitem.appendChild(deletebutton)
 }