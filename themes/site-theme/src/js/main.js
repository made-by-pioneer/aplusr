import styles from './../css/main.css';
import $ from 'jquery';
import AOS from 'aos';
import './scriptTools/bootstrapDropdown.js';

AOS.init({
    disable: 'mobile',
    once: true
});

$(function() {
  $(".mobile-menu-button").click(function() {
    $('.mobile-menu').addClass("mobile-menu-toggle");
  });
});

$(function() {
  $(".mobile-menu-button").click(function() {
    $('body').addClass("overflow-hidden");
  });
});

$(function() {
  $(".close-menu").click(function() {
    $('.mobile-menu').removeClass("mobile-menu-toggle");
    $('body').removeClass("overflow-hidden");
  });
});

$(function() {
  $(".mobile-menu-item").click(function() {
    $('.mobile-menu').removeClass("mobile-menu-toggle");
    $('body').removeClass("overflow-hidden");
  });
});