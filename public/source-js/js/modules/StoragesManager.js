function StoragesManager() {

    this.getUserData = function () {
        return JSON.parse(window.localStorage.getItem('userData'));
    }

    this.updateUserData = function (key, value) {
        let data = JSON.parse(window.localStorage.getItem('userData'));
        if (!data){
            window.localStorage.setItem('userData', '{}');
        }
        data = JSON.parse(window.localStorage.getItem('userData'));
        data[key] = value;
        window.localStorage.setItem('userData', JSON.stringify(data));
    }

}