// import 'bootstrap';
import './../scss/app.scss';

import './bootstrap';
import {MDCTextField} from '@material/textfield';
$(function() {
    $(document).on('click', '.anchor-link', function(e) {
        e.preventDefault();
        // $('#navbar-collapse').collapse('hide');
        $("html, body").stop().animate({
            scrollTop: Math.round($(this.getAttribute('href')).offset().top-70) + 'px'
        }, 1500);
    });
    $(window).scroll(function(){
        $('.navbar.fixed-top').toggleClass('bg-white navbar-light', $(this).scrollTop() > 20);
    });
    $('.navbar.fixed-top').toggleClass('bg-white navbar-light', $(this).scrollTop() > 20);
    const text_fields = document.querySelectorAll('.mdc-text-field');
    for (const text_field of text_fields) {
        new MDCTextField(text_field)
    }
    // const textField = new MDCTextField(document.querySelectorAll('.mdc-text-field'));
});