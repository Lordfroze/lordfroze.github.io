const apiUrl = 'http://localhost:5000/api/users'; //fungsi menyambung ke endpoint api

// fungsi memanggil db users
async function getUsers() {
    try {
        const response = await axios.get(apiUrl);
        const users = response.data;
        const usersDiv = document.getElementById('users');
        usersDiv.innerHTML = '';
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.textContent = `${user.name} - ${user.email}`;
            usersDiv.appendChild(userElement);
        });
    } catch (error) {
        console.error('Error fetching users:', error); //log
    }
}

// fungsi membuat user
async function createUser(name, email) {
    try {
        const response = await axios.post(apiUrl, { name, email });
        console.log('User created:', response.data); //log
        getUsers();
    } catch (error) {
        console.error('Error creating user:', error); //log
    }
}

// mulai fetching
getUsers();
