const form = document.getElementById('form');
const taskList = document.getElementById('seculo');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('input');
	addTask(inputField.value);
	
    
    form.reset();
};

function addTask(description) {

    if(description !== '' || description !== undefined){
        var seculo = Math.trunc((description/100) + 1)

        const container = document.createElement('div');
        const label = document.createElement('label');
        const descriptionNode = document.createTextNode(description + ' é um ano do século ' + seculo);

        label.appendChild(descriptionNode);

        container.appendChild(label);

        taskList.appendChild(container);
    }
	
}