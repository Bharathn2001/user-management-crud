const API_URL = 'http://localhost:5239/api/Users';


export async function getUsers() {
  return fetch(API_URL).then(res => res.json());
}

export async function createUser(user) {
  return fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }).then(res => res.json());
}

export async function updateUser(id, user) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }).then(res => res.json());
}

export async function deleteUser(id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
