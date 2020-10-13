// wait for document to be ready
$( document ).ready(function() {

// variables for dates
var today = moment().format('DD MMM YYYY');
var day = moment().format('DD');
var month = moment().format('MMMM');
var year = moment().format('YYYY');

var todayComposite = day + 'th of ' + month + ', ' + year;

// console log to figure out date formatting
console.log(today);
console.log(day);
console.log(month);
console.log(year);
console.log(todayComposite);

// add today to the DOM
$('#currentDay').append(todayComposite);




















});