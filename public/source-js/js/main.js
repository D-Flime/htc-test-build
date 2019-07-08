window.onload = function () {

    const storageManager = new StoragesManager();
    const mainContentManager = new MainContentManager( { storageManager : storageManager } );
    const tabsManager = new TabsManager();
    const interestsManager = new InterestsManager();

    // init tabs functionality
    $('.tabs__tab').click(function () {
        tabsManager.changeMainContent($('.tabs__tab').index(this));
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
        interestsBlockButton.click(function () {
            interestsBlock.addClass('hidden');
            if (interestsBlockInput.val().replace(/\s/g, '')) {
                interestsManager.addInterest(interestsBlockInput.val());
            }
            interestsBlockInput.val('');
        });
    }

    // delete interest when it clicked
    $('.user-interests-container__element').click(function (e) {
        interestsManager.removeInterest(e.target);
    });

    // init change information fields functionality

    $('.changable-info').click(function () {
        $(this).addClass('hidden');
        $(this).next('input').val($(this).html());
        $(this).next('input').removeClass('hidden');
        $(this).next('input').focus();
    });

    $('.changable-info').next('input').blur(function () {
        $(this).addClass('hidden');
        // update value if input value is not empty
        if ($(this).val().replace(/\s/g, '')) {
            $(this).prev('div, a').html($(this).val());
            storageManager.updateUserData($('.changable-info').index($(this).prev()), $(this).val());
        }
        $(this).prev('div, a').removeClass('hidden');
    });

    // draw user data
    mainContentManager.drawUserData();

}