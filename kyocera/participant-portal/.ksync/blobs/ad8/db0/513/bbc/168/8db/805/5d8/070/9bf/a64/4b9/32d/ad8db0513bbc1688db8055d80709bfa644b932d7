$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
  
    var targetEle = this.hash;
    var $targetEle = $(targetEle);
  
    $('html, body').stop().animate({
        'scrollTop': $targetEle.offset().top
    }, 800, 'swing', function () {
        window.location.hash = targetEle;
    });
});