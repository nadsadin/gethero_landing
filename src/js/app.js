// import 'bootstrap';
import './../scss/app.scss';

import './bootstrap';
import {MDCTextField} from '@material/textfield';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
$(function() {
    $(document).on('click', '.anchor-link', function(e) {
        e.preventDefault();
        $('#navbar-collapse').collapse('hide');
        $("html, body").stop().animate({
            scrollTop: Math.round($(this.getAttribute('href')).offset().top-70) + 'px'
        }, 1500);
    });
    $(window).scroll(function(){
        $('.navbar.fixed-top').toggleClass('bg-white', $(this).scrollTop() > 20);
    });
    $('.navbar.fixed-top').toggleClass('bg-white', $(this).scrollTop() > 20);
    const text_fields = document.querySelectorAll('.mdc-text-field');
    for (const text_field of text_fields) {
        new MDCTextField(text_field)
    }
    const form_fields = document.querySelectorAll('.mdc-form-field');
    for (const input of form_fields) {
        new MDCFormField(input)
    }
    const checkboxes = document.querySelectorAll('.mdc-checkbox');
    for (const input of checkboxes) {
        new MDCCheckbox(input)
    }
    // const textField = new MDCTextField(document.querySelectorAll('.mdc-text-field'));
});