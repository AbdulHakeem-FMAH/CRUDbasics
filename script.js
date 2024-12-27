function fetchAllEmployees() {
    fetch('https://employeemanagement-production-2fb4.up.railway.app/employees/show/all')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response-all').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('response-all').textContent = 'Error: ' + error.message;
        });
}

function fetchEmployeeById() {
    const id = document.getElementById('employee-id').value;
    if (!id) {
        alert('Please enter an employee ID');
        return;
    }

    fetch(`https://employeemanagement-production-2fb4.up.railway.app/employees/show/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('response-id').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('response-id').textContent = 'Error: ' + error.message;
        });
}

function createEmployee() {
    const name = document.getElementById('new-name').value;
    const department = document.getElementById('new-department').value;
    const salary = document.getElementById('new-salary').value;

    const newEmployee = { name, department, salary };

    fetch('https://employeemanagement-production-2fb4.up.railway.app/employees/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEmployee)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-post').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('response-post').textContent = 'Error: ' + error.message;
    });
}

function updateEmployee() {
    const id = document.getElementById('update-id').value;
    const name = document.getElementById('update-name').value;
    const department = document.getElementById('update-department').value;
    const salary = document.getElementById('update-salary').value;

    const updatedEmployee = { name, department, salary };

    fetch(`https://employeemanagement-production-2fb4.up.railway.app/employees/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEmployee)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-put').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('response-put').textContent = 'Error: ' + error.message;
    });
}

function deleteEmployee() {
    const id = document.getElementById('delete-id').value;
    if (!id) {
        alert('Please enter an employee ID');
        return;
    }

    fetch(`https://employeemanagement-production-2fb4.up.railway.app/employees/delete/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        document.getElementById('response-delete').textContent = 'Employee deleted successfully';
    })
    .catch(error => {
        document.getElementById('response-delete').textContent = 'Error: ' + error.message;
    });
}
