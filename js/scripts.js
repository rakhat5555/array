
var converter = function(convert) {
  return convert*9/5 + 32
}
function buttonReport(buttonId, buttonName, buttonValue) {
  var userMassage1 = "Button id: " + buttonId + "<br>";
  var userMassage2 = "Button name: " + buttonName +"<br>";
  var userMassage3 = "Button Value: " + buttonValue;
  alert(userMassage1 + userMassage2 + userMassage3)
}

// same
function cube(x) {
  return (x*x*x)
}
// same
var cube = function(x) {
  return (x*x*x)
}

function endCaseWords(input) {
    return input.toLowerCase().split(" ").map(function(item) {
        return item.slice(0, -1) + item.slice(-1).toUpperCase();
    }).join(" ");
}
var firstUpperCase = function(word) {
	return word.split(' ').map(function(index) {
  	return index.charAt(0).toUpperCase() + index.slice(1)
  }).join(' ');
}
// function strReverse(word) {
//   return word.split("").map(function(index) {
//     return index.reverse();
//   }).join("");
// }
function strReverse(str) {
    return str.split("").reverse().join("");
}


// var endUpperCase = function(word){
// 	return word.split(' ').map(function(index) {
//   	return index.slice(0,-1) + index.slice(-1).toUpperCase();
//   });
// } ;

$(document).ready(function() {
  $("form").submit(function(event) {
    var number =$("input#number1").val();
    // var result = converter(number)
    // var result = cube(number)
    // var result = capital(number)
    var result = endCaseWords(number)
    var newResult = firstUpperCase(result)
    var stringReversed = strReverse(newResult)


    $("#result").show();
    $(".result").append("<li>" + stringReversed +"</li>")
    // $("form").hide();

    event.preventDefault();
  });

});
