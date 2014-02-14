var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

$(function() {
    var pause = 100;
    // will only process code within delay(function() { ... }) every 100ms.

    $(window).resize(function() {
        delay(function() {
            var width = $(window).width();
            if( width >= 768 && width <= 959 ) {
                // code for tablet view
            } else if( width >= 480 && width <= 767 ) {
                // code for mobile landscape
            } else if( width <= 479 ) {
                // code for mobile portrait
            }
        }, pause );
    });

    $(window).resize();
});