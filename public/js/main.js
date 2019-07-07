window.onload = function() {


    function updateUserData(key, value) {
        let data = JSON.parse(window.localStorage.getItem('userData'));
        if (!data){
            window.localStorage.setItem('userData', '{}');
        }
        data = JSON.parse(window.localStorage.getItem('userData'));
        data[key] = value;
        window.localStorage.setItem('userData', JSON.stringify(data));
    }

    function drawUserData() {
        let data = JSON.parse(window.localStorage.getItem('userData'));
        for (let i = 0; i < $('.changable-info').length; i++) {
            if (data && data[i]){
                $('.changable-info').eq(i).html(data[i]);
            }
        }
    }

    function changeMainContent(index) {
        // change tabs style
        $('.tabs__tab_selected').removeClass('tabs__tab_selected');
        $('.tabs__tab').eq(index).addClass('tabs__tab_selected');

        // hide shown pages
        $('.main').addClass('hidden');
        
        // show new page
        $('.main').eq(index).removeClass('hidden');
    }

    function checkInterestsEmptiness() {
        if ($('.user-interests-container').text().replace(/\s/g, '')) {
            $('.user-interests-header').html('Интересы');
        } else {
            $('.user-interests-header').html('Нет интересов');
        }
    }

    function addInterest(interestValue) {
        $('.user-interests-container').prepend('<div class="user-interests-container__element">' + interestValue + '</div>');
        $('.user-interests-container__element').first().click(function(e){
            removeInterest(e.target);
        });
        checkInterestsEmptiness();
    }

    function removeInterest(elem) {
        $(elem).remove();
        checkInterestsEmptiness();
    }

    function init() {

        drawUserData();

        // init tabs functionality
        $('.tabs__tab').click(function() {
            changeMainContent($('.tabs__tab').index(this));
        });

        // init add interests functionality
        let interestsBlock = $('.interests-add-block');
        let interestsBlockInput = $('.interests-add-block > input');
        let interestsBlockButton = $('.interests-add-block > button');
        if ($('.avatar-wrap__button_type_add-interests') && interestsBlock) {
            $('.avatar-wrap__button_type_add-interests').click(function () {
                interestsBlock.removeClass('hidden');
                interestsBlockInput.focus();
            });
            interestsBlockButton.click(function() {
                interestsBlock.addClass('hidden');
                if (interestsBlockInput.val().replace(/\s/g, '')) {
                    addInterest(interestsBlockInput.val());
                }
                interestsBlockInput.val('');
            });
        }

            // delete interest when it clicked
        $('.user-interests-container__element').click(function(e){
            removeInterest(e.target);
        });

        // init change information fields functionality

        $('.changable-info').click(function(){
            $(this).addClass('hidden');
            $(this).next('input').val($(this).html());
            $(this).next('input').removeClass('hidden');
            $(this).next('input').focus();
        });

        $('.changable-info').next('input').blur(function(){
            $(this).addClass('hidden');
            // update value if input value is not empty
            if ($(this).val().replace(/\s/g, '')){
                $(this).prev('div, a').html($(this).val());
                updateUserData($('.changable-info').index($(this).prev()), $(this).val());
            }
            $(this).prev('div, a').removeClass('hidden');
        });

    }
    init();
}