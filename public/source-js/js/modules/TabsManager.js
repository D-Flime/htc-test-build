function TabsManager() {

    this.changeMainContent = function (index) {
        // change tabs style
        $('.tabs__tab_selected').removeClass('tabs__tab_selected');
        $('.tabs__tab').eq(index).addClass('tabs__tab_selected');

        // hide shown pages
        $('.main').addClass('hidden');
        
        // show new page
        $('.main').eq(index).removeClass('hidden');
    }

}