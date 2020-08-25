$(document).ready(function () {

	 $('.product-bg').each(function() {
    var off = $(this).offset().top
    $(this).data('orig-offset', off);
  });

    var buttonPlus  = $(".plus");
    var buttonMinus = $(".minus");

    buttonPlus.click(function() {
      var $n = $(this).parent(".counter").find(".count")
      var $tcount =  $(this).find("#muliply-val")
      // var $tcountVal = $tcount.text(val);
      console.log($tcount)
      $("#muliply-val").text(67);
      var count = 
      $("#muliply-val").text(67);
      $n.val(Number($n.val())+1 );
    });

    buttonMinus.click(function() {
      var $n = $(this).parent(".counter").find(".count")
      var amount = Number($n.val());
      if (amount > 0) {
        $n.val(amount-1);
      }
    });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#navbar').addClass('navbar-nova');
    } else {
      $('#navbar').removeClass('navbar-nova');
    }
    if (window.innerWidth > 767) {
      var scroll = $(window).scrollTop();

      //js for clinic page background 
      $('.product-bg').each(function(){
      var off = $(this).data('orig-offset');
     
      if (scroll >= off) {
        var translate =  (scroll - off) / $(window).height() * 100;
        console.log(translate);
        $(this).css({transform: 'translateY(' + -translate +'%)'});
      }
     });

      // js for hoem page
      if ((scroll > 40) && (scroll < 800)) {
        $(".td-stage-wrapper").removeClass("scrollhide")
        $('.telemedecine-stage-content').addClass('hide-text');
        $('.td-stage-woman').addClass('scale-img');
        $('.td-stage-notebook').addClass('scale-image-bg');
        $('.td-stage-phone').addClass('slide-up-bg');
      } else if (scroll < 40) {
        $('.telemedecine-stage-content').removeClass('hide-text');
        $('.td-stage-woman').removeClass('scale-img');
        $('.td-stage-notebook').removeClass('scale-image-bg');
        $('.td-stage-phone').removeClass('slide-up-bg');
      }
    }

  });

});