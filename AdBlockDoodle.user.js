// ==UserScript==
// @name        Ad Block Doodle
// @namespace   none
// @description A script to block ads in doodle.com
// @include     https://doodle.com/*
// @version     0.1
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @author      EPFL-dojo
// @downloadURL https://raw.githubusercontent.com/epfl-dojo/UserScript_AdBlockDoodle/master/AdBlockDoodle.user.js
// ==/UserScript==

// Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function() {
  
  console.log("Début du script sur Ad Block Doodle " + window.location);
  
  // Remove all iframes every 3s
  setInterval(function(){
      $('iframe').remove()    
  }, 3000);
  
  // Test for a specific ad
  $( "[id|='af_brand_']" ).css( "visibility", "hidden" );
  
  console.log("Fin du script sur Ad Block Doodle");
});
