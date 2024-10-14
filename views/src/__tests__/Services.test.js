import { getPrompts, login, register, createPrompt, getPromtResponse, fetchUserData } from '../Services/Index';
import fetch from 'jest-fetch-mock';

beforeEach(() => {
  fetch.resetMocks();
});

describe('API Service Functions', () => {
  test('getPrompts fetches data with correct headers', async () => {
    const mockToken = 'test-token';
    localStorage.setItem('token', mockToken);
    const mockData = [{ id: 1, text: 'Test Prompt' }];
    fetch.mockResponseOnce(JSON.stringify(mockData));

    const result = await getPrompts();

    expect(fetch).toHaveBeenCalledWith('/api/prompt', {
      headers: {
        'Authorization': `Bearer ${mockToken}`
      }
    });
    expect(result).toEqual(mockData);
  });

  test('login sends correct data and returns response', async () => {
    const mockLoginData = { username: 'testuser', password: 'testpass' };
    const mockResponse = { token: 'test-token' };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await login(mockLoginData);

    expect(fetch).toHaveBeenCalledWith('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockLoginData)
    });
    expect(result).toEqual(mockResponse);
  });

  test('register sends correct data and returns response', async () => {
    const mockRegisterData = { username: 'newuser', password: 'newpass', email: 'new@test.com' };
    const mockResponse = { message: 'User registered successfully' };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await register(mockRegisterData);

    expect(fetch).toHaveBeenCalledWith('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockRegisterData)
    });
    expect(result).toEqual(mockResponse);
  });

  test('createPrompt sends data with authorization and returns response', async () => {
    const mockToken = 'test-token';
    localStorage.setItem('token', mockToken);
    const mockPromptData = { text: 'New prompt' };
    const mockResponse = { id: 2, text: 'New prompt' };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await createPrompt(mockPromptData);

    expect(fetch).toHaveBeenCalledWith('/api/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${mockToken}`
      },
      body: JSON.stringify(mockPromptData)
    });
    expect(result).toEqual(mockResponse);
  });

  test('getPromtResponse fetches prompt by id with authorization', async () => {
    const mockToken = 'test-token';
    localStorage.setItem('token', mockToken);
    const mockId = 1;
    const mockResponse = { id: 1, text: 'Test Prompt', response: 'Test Response' };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await getPromtResponse(mockId);

    expect(fetch).toHaveBeenCalledWith(`/api/prompt/${mockId}`, {
      headers: {
        'Authorization': `Bearer ${mockToken}`
      }
    });
    expect(result).toEqual(mockResponse);
  });

  test('fetchUserData retrieves user data with provided token', async () => {
    const mockToken = 'test-token';
    const mockUserData = { id: 1, username: 'testuser', email: 'test@example.com' };
    fetch.mockResponseOnce(JSON.stringify(mockUserData));

    const result = await fetchUserData(mockToken);

    expect(fetch).toHaveBeenCalledWith('/api/myaccount', {
      headers: {
        'Authorization': `Bearer ${mockToken}`
      }
    });
    expect(result).toEqual(mockUserData);
  });
});
