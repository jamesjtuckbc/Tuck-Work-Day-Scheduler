// wait for document to be ready
$(document).ready(function () {

    // variables for dates
    var day = moment().format("DD");
    var month = moment().format("MMMM");
    var year = moment().format("YYYY");
    var hour = moment().format("HH");

    var todayComposite = day + "th of " + month + ", " + year;

    // variable for saved content
    var savedContent = JSON.parse(localStorage.getItem("savedContent")) || [];

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
        // loop through array of times to populate the dom
        $.each(times, function (i, item) {
            // variables to create DOM elements
            var divRow = $("<div>").attr("class", "row").attr("id", item.id);
            var divTimeCol = $("<div>").attr("class", "col-sm-2 hour text-center").text(item.value);
            var textareaCol = $("<textarea>").attr("class", "col-sm-8 time-block").attr("id", item.id + "TextArea");
            var btnSaveCol = $("<button>").attr("class", "col-sm-2 saveBtn").attr("id",item.id + "SaveBtn").html("<i class=\"far fa-save\"></i>");
            // append the elements to the div row
            divRow.append(divTimeCol);
            divRow.append(textareaCol);
            divRow.append(btnSaveCol);
            // update classes based on time
            if(item.id < hour){
                divRow.attr("class", "row time-block past");
            } else if (item.id > hour){
                divRow.attr("class", "row time-block future");
            } else {
                divRow.attr("class", "row time-block present");
            };
            // append previous elements to the DOM
            timeDiv.append(divRow);
            // populate any saved content
            $.each(savedContent,function(index, value){
                $("#" + value.time + "TextArea").text(value.text);
            });
        });
    };

    
    // click event for save buttons - saves user inputs
    $(document).on("click", ".saveBtn", function (event) {
        // set id to the clicked elements id attribute
        var id = $(this).attr("id");
        // remove SaveBtn from the id so I am left with only a number
        id = id.replace("SaveBtn","");
        // set input to the text data that corresponds to the clicked save button
        var input = $("#" + id + "TextArea").val();
        // add data to be saved to the array
        savedContent.push({
            time: id,
            text: input
        })
        // save the users input to local storage
        localStorage.setItem("savedContent", JSON.stringify(savedContent));
    });

    // initial function to start the whole process 
    init();
});