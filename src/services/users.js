const API_URL = process.env.REACT_APP_URL;

// eslint-disable-next-line import/prefer-default-export
export async function createUser(user) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  try {
    const response = await fetch(`${API_URL}/api/users`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUser(user) {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${API_URL}/api/users/${user.id}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllUsers() {
  try {
    const response = await fetch(`${API_URL}/api/users`);
    const users = await response.json();
    return users;
  } catch (error) {
    return null;
  }
}

export async function filteringUserByEmail(email) {
  try {
    const response = await fetch(`${API_URL}/api/users?email=${email}`);
    const user = await response.json();
    return user;
  } catch (error) {
    return null;
  }
}
