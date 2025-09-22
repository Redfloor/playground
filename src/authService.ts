class AuthService {
  private tokenKey = 'authToken';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  clearToken() {
    localStorage.removeItem(this.tokenKey);
  }

  async login(username: string, password: string): Promise<boolean> {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `mutation Login($username: String!, $password: String!) { login(username: $username, password: $password) { token } }`,
        variables: { username, password },
      }),
    });
    const result = await response.json();
    const token = result?.data?.login?.token;
    if (token) {
      this.setToken(token);
      return true;
    }
    return false;
  }

  logout() {
    this.clearToken();
    window.location.reload();
  }
}

export const authService = new AuthService();

