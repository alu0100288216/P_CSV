// See http://en.wikipedia.org/wiki/Comma-separated_values
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

$(document).ready(function() {
    $("button").click(function () {
        if (window.localStorage) localStorage.original = document.getElementById("original").value;
        console.log(document.getElementById("original").value);
        $.get("/", { input: document.getElementById("original").value }, function (data) {
            var tabla = document.getElementById("tabla").innerHTML;
            $("#finaltable").html(_.template(tabla, { rows: data.rows }));
           console.log(_.template(tabla, { rows: data.rows }));
       }, 'json');
   });
 });



window.onload = function() {
  // If the browser supports localStorage and we have some stored data
  if (window.localStorage && localStorage.original) {
    document.getElementById("original").value = localStorage.original;
  }
};
