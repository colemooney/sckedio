class Auth {
    constructor() {
        this.authenticated = false;
        this.token = '';
    }

    login(callBack) {
        this.authenticated = true;
        callBack();
    }

    logout(callBack) {
        this.authenticated = false;
        callBack();
    }

    setToken(tokenString) {
        this.token = tokenString;
    }

    isAuthenticated() {
        return this.authenticated;
    }

    getToken() {
        return this.token;
    }
}

export default new Auth();