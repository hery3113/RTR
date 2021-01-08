$( document ).ready(function() {



        $('.nav2 a[href^="#"]').on('click', function(event) {
            event.preventDefault();
            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            $('html, body').animate({scrollTop: dn}, 1000);
        });



    $( ".navigate a.burger" ).click(function() {
        $('.nav2').slideToggle(333);
    });
    $( ".navigate a" ).hover(function() {
        $('.navigate a').removeClass('active');
        $( this ).addClass('active' );
    });

    $( ".lang" ).click(function() {
        $('.lang .dropdown').toggleClass('active');
    });

    $( ".tabs a" ).click(function() {
        $('.tabs a').removeClass('active');
        $(this).addClass('active');
    });




    $( ".lang .dropdown a" ).click(function() {
        $('.lang .dropdown li').removeClass('active');
        $( this ).parent().addClass('active' );
        $('.lang .dropdown').removeClass('active');
        $('#lg, #tg').attr('class', '');
        $('#lg, #tg').addClass($(this).attr('attr-lang'));
		var selectedLNG = "_" + $(this).attr('attr-lang');
		if(selectedLNG == "_id"){
			selectedLNG = "_ind";
		}else if(selectedLNG == "_sp"){
			selectedLNG = "_esp";
		}else if(selectedLNG == "_ru"){
			selectedLNG = "_rus";
		}else if(selectedLNG == "_en"){
			selectedLNG = "";
		}else{
			
		}
		$('#lg, #tg').attr("href", "https://t.me/tronprom" + selectedLNG);


        $('#lg').html($(this).html());


    });



    var clipboard = new ClipboardJS('.copy');
	
    clipboard.on('success', function(e) {
		

        $('.copied').fadeIn(222);
        setTimeout(function(){

            $('.copied').fadeOut(222);

        }, 2000);
        e.clearSelection();

    });
	
    var clipboardBanner = new ClipboardJS('.copyBanner');
	
    clipboardBanner.on('success', function(e) {
		

        $('.copied').fadeIn(222);
        setTimeout(function(){

            $('.copied').fadeOut(222);

        }, 2000);
        e.clearSelection();

    });



});


function tab(n)
{
    $('.tb').hide();
    $('.tb_'+n).show();
}

function popup(n)
{
    $(n).fadeIn(444);
    $(n).css('top', $(window).scrollTop()+50+'px');
    $('#bg-popup').fadeIn(333);
    return false;
}


function closex()
{
    $('body').css('height','')
    $('body').removeClass('hid');
    $('.popup').fadeOut(222);
    $('#bg-popup').fadeOut(333);
    return false;
}