// ==UserScript==
// @name        EPFL Distrilog
// @namespace   none
// @description A script to improve browsing on distrilog.epfl.ch
// @include     https://distrilog.epfl.ch/*
// @include     http://distrilog.epfl.ch/*
// @version     0.1
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @author      EPFL-dojo
// @downloadURL https://raw.githubusercontent.com/epfl-dojo/EPFL_Distrilog_UserScript/master/EPFL_Distrilog.user.js
// ==/UserScript==

//Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function() {
  console.log("Début du script sur Ad Block Doodle");
});
