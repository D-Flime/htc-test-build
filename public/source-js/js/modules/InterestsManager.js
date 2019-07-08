function InterestsManager() {

    this.checkInterestsEmptiness = function () {
        if ($('.user-interests-container').text().replace(/\s/g, '')) {
            $('.user-interests-header').html('Интересы');
        } else {
            $('.user-interests-header').html('Нет интересов');
        }
    }

    this.addInterest = function (interestValue) {
        self = this;
        $('.user-interests-container').prepend('<div class="user-interests-container__element">' + interestValue + '</div>');
        $('.user-interests-container__element').first().click(function(e){
            self.removeInterest(e.target);
        });
        this.checkInterestsEmptiness();
    }

    this.removeInterest = function (elem) {
        $(elem).remove();
        this.checkInterestsEmptiness();
    }

}