function MainContentManager(options) {

    this.storageManager = options.storageManager;

    this.drawUserData = function () {
        let data = this.storageManager.getUserData();
        for (let i = 0; i < $('.changable-info').length; i++) {
            if (data && data[i]){
                $('.changable-info').eq(i).html(data[i]);
            }
        }
    }

}