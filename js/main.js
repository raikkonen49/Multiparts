$(document).ready(function() {

    $('.sign-input input, .vehicle-vin input, .part-details-holder input, .part-details-holder.part-info ul li input .checkout-input-holder input, .part-details-holder.contacts ul li input').bind('blur', function() {
        $(this).parent().removeClass('active');
    });


    $('.sign-input input, .vehicle-vin input, .part-details-holder input, .part-details-holder.part-info ul li input .checkout-input-holder input, .part-details-holder.contacts ul li input').bind('focus', function() {
        $(this).parent().addClass('active');
    });

    $(".search-tab-nav-mob ul li a").click(function() {
        $(this).next().slideToggle(200);
    });

    // #ScrollToTop

    $(".arrow-top a[href='#top']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $("input, select, textarea, form, button").css("outline", "none");
    $("input, select, textarea, form, button").css("box-shadow", "none");

    $('select').select2({
        width: 100
    });
    $('b[role="presentation"]').hide();
    // $('.select2-selection__arrow').append('<i class="fas fa-caret-down"></i>');

    $(".intro-search-holder").hover(function() {
        $('.search-dropdown-container').toggleClass('down');
    });

    $(".parts-details").parent().hover(function() {
        $(this).find('.parts-details').find('a').slideToggle(200);
    });

    $(".category-list ul li a").hover(function() {
        $(this).find('.about-category').slideToggle(0);
    });

    $(".side-bar-group-title span").click(function() {
        $('.side-bar-group .side-bar-group-list').slideToggle(200);
        $(this).toggleClass('down');
    });

    $(".trigger span").click(function() {
        $('.side-bar').slideToggle(200);
        $(this).toggleClass('down');
    });

    $(".parts-technical-data-title span").click(function() {
        $('.parts-technical-data-info').slideToggle(200);
        $(this).toggleClass('down');
    });

    $(".search-info-btn").click(function() {
        $('.search-info').slideToggle(200);
        $(this).toggleClass('down');
    });

    $(".filter-block-title").click(function() {
        $(this).parent().find('.filter-item').slideToggle(200);
        $(this).toggleClass('down');
    });

    $(".filter-block-title.hold").click(function() {
        $(this).parent().find('.filter-item').stop().slideToggle(200);
        $(this).toggleClass('down');
    });

    $(".print-share > span.share").hover(function() {
        $(this).find('.share-wrap').toggleClass('down');
        $(this).toggleClass('down');
    });

    $(".classification-btn").hover(function() {
        $('.classification-info-wrap').toggleClass('down');
    });

    $(".filter-block-title.classification span").hover(function() {
        $('.classification-info-wrap').toggleClass('down');
    });

    $(".breadcrumbs > ul > li.down").hover(function() {
        $(this).find('> a').toggleClass('down');
    });

    $(".parts-list-bar-title").click(function() {
        $('.filters-container').slideToggle(200);
    });

    $(".header-info-block > ul > li > a.cart").click(function() {
        $('.cart-dropdown').slideToggle(200);
    });

    $(".cart-dropdown > span").click(function() {
        $('.cart-dropdown').slideUp(200);
    });

    $(".parts-list-bar-title").click(function() {
        $('.side-bar-group-list.parts').slideToggle(200);
    });

    $(".side-bar-group-list > ul > li").hover(function() {
        $(this).find('.sub-meniu').slideToggle(200);
    });

    $('.questions-container ul li span').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('down')) {
            $this.next().removeClass('down');
            $this.next().slideUp(200);

        } else {
            $this.parent().parent().find('.questions-container ul li .answer').removeClass('down');
            $this.parent().parent().find('.questions-container ul li .answer').slideUp(350);
            $this.next().toggleClass('down');
            $this.next().slideToggle(200);
            $(this).removeClass('down');
        }
        $(this).toggleClass('down');
    });


    $('#vertical').lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 362,
        vThumbWidth: 90,
        thumbItem: 6,
        thumbMargin: 4,
        slideMargin: 0,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    thumbItem: 5,
                    verticalHeight: 301,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    thumbItem: 6,
                    verticalHeight: 362,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    thumbItem: 2,
                    verticalHeight: 122,
                    thumbMargin: 8,
                }
            }
        ]
    });


    // #href scroll //

    $('.parts-order-question a, .in-stock.right a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function() {
            window.location.hash = target;
        });
    });

    includes_list = $("#includes-list li").size();
    x = 6;
    $('#includes-list li:lt(' + x + ')').slideDown(200);
    $('#includes-list-more').click(function() {
        x = (x + 1000000 <= includes_list) ? x + 1000000 : includes_list;
        $('#includes-list li:lt(' + x + ')').slideDown(200);
    });

    filter_item = $("#filter-item li").size();
    x = 4;
    $('#filter-item li:lt(' + x + ')').slideDown(200);
    $('#filter-item-more').click(function() {
        x = (x + 1000000 <= filter_item) ? x + 1000000 : filter_item;
        $('#filter-item li:lt(' + x + ')').slideDown(200);
    });

});

$(window).bind("load", function() {

    $('.category-list > ul > li > a').css({
        'height': $('.category-list > ul > li').height()
    });

    $('.found-groups .category-list > ul > li > ul > li a').css({
        'height': $('.category-list > ul > li > ul > li').height()
    });

    // $('.part-information-block').css({
    //     'height': $('.vehicle-information-block').height()
    // });

    $('.part-information-block').each(function() {
        var itemH = $('.vehicle-information-block').outerHeight();
        $(this).css('height', itemH);
    });

    $('.cart-img').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.589;
        $(this).css('height', itemH);
    });

    $('.copyright-img a').css({
        'height': $('.copyright-text').height()
    });

    $('.map-container').css({
        'height': $('.message-container').height()
    });

    $('.parts-item.hold > ul > li > a').css({
        'height': $('.parts-item.hold > ul > li').height()
    });

    $('.modal-content').css({
        'height': $('.popup-wrap').height()
    });

    var slider = document.getElementById("slider-1");

    noUiSlider.create(slider, {
        start: [2006, 2012],
        connect: true,
        step: 1,
        tooltips: true,
        range: {
            'min': 2000,
            'max': 2018
        },
        format: {
            to: function(value) {
                return value + '';
            },
            from: function(value) {
                return value.replace('', '');
            }
        }
    });

    var slider = document.getElementById("slider-2");

    noUiSlider.create(slider, {
        start: [0, 400000],
        connect: true,
        step: 10000,
        tooltips: true,
        range: {
            'min': 0,
            'max': 500000
        },
        format: {
            to: function(value) {
                return value + '';
            },
            from: function(value) {
                return value.replace('', '');
            }
        }
    });

    var keypressSlider = document.getElementById('slider-3');
    var input0 = document.getElementById('input-with-keypress-0');
    var input1 = document.getElementById('input-with-keypress-1');
    var inputs = [input0, input1];

    noUiSlider.create(keypressSlider, {
        start: [0, 6500],
        connect: true,
        step: 500,
        tooltips: false,
        range: {
            'min': 0,
            'max': 50000
        },
        format: {
            to: function(value) {
                return value + '';
            },
            from: function(value) {
                return value.replace('', '');
            }
        }
    });

    keypressSlider.noUiSlider.on('update', function(values, handle) {
        inputs[handle].value = values[handle];
    });

});

$(window).resize(function() {

    $('.category-list > ul > li > a').css({
        'height': $('.category-list > ul > li').height()
    });

    $('.found-groups .category-list > ul > li > ul > li a').css({
        'height': $('.category-list > ul > li > ul > li').height()
    });

    $('.part-information-block').each(function() {
        var itemH = $('.vehicle-information-block').outerHeight();
        $(this).css('height', itemH);
    });

    $('.cart-img').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.589;
        $(this).css('height', itemH);
    });

    $('.copyright-img a').css({
        'height': $('.copyright-text').height()
    });

    $('.map-container').css({
        'height': $('.message-container').height()
    });

    $('.parts-item.hold > ul > li > a').css({
        'height': $('.parts-item.hold > ul > li').height()
    });

    $('.modal-content').css({
        'height': $('.popup-wrap').height()
    });

});
