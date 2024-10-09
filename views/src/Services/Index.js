
const API = '/api/';

export const getPrompts = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API}prompt`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}

export const login = async (data) => {
    const response = await fetch(`${API}login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const register = async (data) => {
    const response = await fetch(`${API}register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const createPrompt = async (data) => {
    let token = localStorage.getItem('token');
    const response = await fetch(`${API}prompt`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const getPromtResponse = async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API}prompt/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}

export const fetchUserData = async (token) => {
    const response = await fetch(`${API}myaccount`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}