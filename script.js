// wait for document to be ready
$(document).ready(function () {

    // variables for dates
    var today = moment().format("DD MMM YYYY");
    var day = moment().format("DD");
    var month = moment().format("MMMM");
    var year = moment().format("YYYY");
    var hour = moment().format("HH");

    var todayComposite = day + "th of " + month + ", " + year;

    // console log to figure out date formatting
    console.log(today);
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(hour);
    console.log(todayComposite);

    // add today to the DOM
    $("#currentDay").append(todayComposite);



    // add timeblocks to the DOM
    function addTimeBlocks() {
        var timeDiv = $(".container");
        var times = [
            {
                value: "9AM",
                id: 9
            },
            {
                value: "10AM",
                id: 10
            },
            {
                value: "11AM",
                id: 11
            },
            {
                value: "12PM",
                id: 12
            },
            {
                value: "1PM",
                id: 13
            },
            {
                value: "2PM",
                id: 14
            },
            {
                value: "3PM",
                id: 15
            },
            {
                value: "4PM",
                id: 16
            },
            {
                value: "5PM",
                id: 17
            }
        ];

        $.each(times, function (i, item) {

            var divRow = $("<div>").attr("class", "row").attr("id", item.id);
            var divTimeCol = $("<div>").attr("class", "col-sm-2 hour text-center").text(item.value);
            var textareaCol = $("<input>").attr("class", "col-sm-8 time-block").attr("id", item.id + "TextArea");
            var btnSaveCol = $("<button>").attr("class", "col-sm-2 saveBtn").attr("id",item.id + "SaveBtn").html("<i class=\"far fa-save\"></i>");

            divRow.append(divTimeCol);
            divRow.append(textareaCol);
            divRow.append(btnSaveCol);

            if(item.id < hour){
                textareaCol.attr("class", "col-sm-8 time-block past");
            } else if (item.id > hour){
                textareaCol.attr("class", "col-sm-8 time-block future");
            } else {
                textareaCol.attr("class", "col-sm-8 time-block present");
            };

            timeDiv.append(divRow);
        });
    };



    addTimeBlocks();

















});