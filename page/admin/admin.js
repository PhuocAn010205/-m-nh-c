document.addEventListener('DOMContentLoaded', function() {
    const userTableBody = document.querySelector('#userTable tbody');
    const refreshButton = document.getElementById('refreshButton');

    function populateUserTable() {
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};
        userTableBody.innerHTML = '';

        for (const username in users) {
            if (users.hasOwnProperty(username)) {
                const user = users[username];
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.username}</td>
                    <td>${user.password}</td>
                    <td>${user.fullnamne}</td>
                    <td>${user.email}</td>
                    <td>
                        <button onclick="editUser('${username}')">Edit</button>
                        <button onclick="deleteUser('${username}')">Delete</button>
                    </td>
                `;
                userTableBody.appendChild(row);
            }
        }
    }

    refreshButton.addEventListener('click', populateUserTable);

    // Populate table on initial load
    populateUserTable();
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

function editUser(username) {
    // Implement edit user functionality
}

function deleteUser(username) {
    const users = JSON.parse(localStorage.getItem('users'));
    delete users[username];
    localStorage.setItem('users', JSON.stringify(users));
    populateUserTable();
}