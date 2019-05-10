let data = [
    {
        "name": "Test Task #1",
        "date": "12/01/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #2",
        "date": "12/02/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #3",
        "date": "12/03/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #4",
        "date": "12/04/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #5",
        "date": "12/05/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #6",
        "date": "12/06/2012",
        "assigned": "John Doe"
    },
    {
        "name": "Test Task #7",
        "date": "12/07/2012",
        "assigned": "John Doe"
    }
];

(function () {
    'use strict';

    function appendTask(task) {
        let table = document.querySelector('table');
        let row   = table.insertRow();
        //console.log(task, "This is the table");

        for (let property in task) {
            let val   = task[property];
            let child = document.createTextNode(val);

            row.insertCell().appendChild(child);
        }
    }

    data.forEach(appendTask);

    function clearFormValues(form) {
        for (let i in [0, 1, 2]) {
            form.elements[i].value = ''
        }
    }

    function isFullyPopulatedTask(task) {
        return (task.name && task.date && task.assigned)
    }

    let dateControl = document.querySelector('input[type="date"]');
			dateControl.value = 'mm/dd/yyyy';
    
    function mapFormElements(form) {
        return {
            name:     form.elements[0].value,
            date:     form.elements[1].value,
            assigned: form.elements[2].value
        }
    }

    function prependTask(task) {
        let table = document.querySelector('table');
        let row   = table.insertRow(0);

        for (let property in task) {
            let val   = task[property];
            let child = document.createTextNode(val);

            row.insertCell().appendChild(child);
        }
    }

    document.querySelector('button').addEventListener('click', function (event) {
        event.preventDefault();
        let task = mapFormElements(this.form);
        console.log(task, "Task attr");

        if (!isFullyPopulatedTask(task)) {
            alert('All form fields must be populated.');

            return false
        }
        prependTask(task);
        clearFormValues(this.form);
    })
})();
