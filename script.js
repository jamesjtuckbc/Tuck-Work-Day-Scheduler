// wait for document to be ready
$(document).ready(function () {

    // variables for dates
    var today = moment().format("DD MMM YYYY");
    var day = moment().format("DD");
    var month = moment().format("MMMM");
    var year = moment().format("YYYY");
    var hour = moment().format("HH");

    var todayComposite = day + "th of " + month + ", " + year;

    // variable for saved content
    var savedContent = JSON.parse(localStorage.getItem("savedContent")) || [];

    // console log to figure out date formatting
    console.log(today);
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(hour);
    console.log(todayComposite);

    // initial function adds today to the DOM and calls the addTimeBlocks function
    function init(){
        $("#currentDay").append(todayComposite);
        addTimeBlocks();
    };
    
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
            var textareaCol = $("<textarea>").attr("class", "col-sm-8 time-block").attr("id", item.id + "TextArea");
            var btnSaveCol = $("<button>").attr("class", "col-sm-2 saveBtn").attr("id",item.id + "SaveBtn").html("<i class=\"far fa-save\"></i>");

            divRow.append(divTimeCol);
            divRow.append(textareaCol);
            divRow.append(btnSaveCol);

            if(item.id < hour){
                divRow.attr("class", "row time-block past");
            } else if (item.id > hour){
                divRow.attr("class", "row time-block future");
            } else {
                divRow.attr("class", "row time-block present");
            };

            timeDiv.append(divRow);
            $.each(savedContent,function(index, value){
                $("#" + value.time + "TextArea").text(value.text);
            });
        });
    };

    
    // click event for save buttons - saves user inputs
    $(document).on("click", ".saveBtn", function (event) {
        var id = $(this).attr("id");
        id = id.replace("SaveBtn","");
        console.log(id);
        var input = $("#" + id + "TextArea").val();
        console.log(input);
        savedContent.push({
            time: id,
            text: input
        })
        localStorage.setItem("savedContent", JSON.stringify(savedContent));
    });














    // initial function to start the whole process 
    init();
});