$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click',
            { el: this.el, multiple: this.multiple },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if(!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.accordion-menu'), false);
})


$(document).click( function(event){
    if( $(event.target).closest(".profile__content-menu").length )
        return;
    $(".profile__content").slideUp("slow");
    event.stopPropagation();
});
$('.hide').click( function() {
    $(this).siblings(".profile__content-menu").slideToggle("slow");
    return false;
});

// document.getElementById('burger').onclick = function() {
//     document.getElementById('main').classList.add('bg');
// }

// $(function() {
//     $('.burger').click(function() {
//         $('.main').siblings('.main').toggle();
//         $(this).toggleClass('bg');
//     });
// });

$(document).ready(function(){
    $('.burger').click(function () {
        $(".navigation").toggleClass('navigation__mobile');
        $(".navigation__logo").toggleClass('navigation__logo-mobile img');
        $("a.dropdownlink").toggleClass('dropdownlink-mobile');
        $(".submenuItems").toggleClass('submenuItems__mobile');


    });
});

// $(document).ready(function(){
//     $('.nav__item').click(function () {
//         $(this).toggleClass('nav__item_active');
//     });
// });

$(document).ready(function(){
    $('.content-document-header__advanced-search', ).click(function () {
        $(".content-document-header__advanced-search").toggleClass('content-document-header__advanced-search-active');
        $(".advanced-filters__wrap").toggleClass('advanced-filters__wrap-active');
    });
});
$(document).ready(function(){
    $('.button_left-margin').click(function () {
        $(".content-document-header__advanced-search").toggleClass('content-document-header__advanced-search-active');
        $(".advanced-filters__wrap").toggleClass('advanced-filters__wrap-active');
    });
});

$('.reset').on('click', function() {
    $(this).closest('form')[0].reset();
});

$(document).ready(function(){
    $('#advanced-search').click(function () {
        $("#advanced-search").toggleClass('content-document-header__advanced-search-active');
        $("#advanced-filters__wrap_modal").toggleClass('advanced-filters__wrap-active');
    });
});

$(document).ready(function(){
    $('#id_30').click(function () {
        $(".modal_opacity-bg").toggleClass('modal_opacity-bg-active');
        $(".modal_kontragent").toggleClass('modal_kontragent-active');
    });
});
$(document).ready(function(){
    $('#id_31').click(function () {
        $(".modal_opacity-bg").toggleClass('modal_opacity-bg-active');
        $(".modal_kontragent").toggleClass('modal_kontragent-active');
    });
});


$(document).ready(function(){
    $('#close-modal').click(function () {
        $(".modal_kontragent").toggleClass('modal_kontragent-active');
        $(".modal_opacity-bg").toggleClass('modal_opacity-bg-active');
    });
});

$(document).ready(function(){
    $('#button_left-margin_modal').click(function () {
        $("#advanced-filters__wrap_modal").toggleClass('advanced-filters__wrap-active');
    });
});
