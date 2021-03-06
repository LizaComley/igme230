src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
/************************************************************************
*                   Content Menu Functionality                          *
*************************************************************************/

/* when a menu is clicked,
finds the items for the selected and toggles it's display on and off */
$("nav div").click(function() {
    $(this).find(".items").slideToggle(); /* slideToggle() - toggle function w. slide animation */
});

/**************************************************************************
*                        AJAX Content Loading                           *
*************************************************************************/

let selection = ("article0.txt");  // sets default content to be displayed
$("form").val(selection); // changes menu option to the default
$("article").load(selection);   // retrieves only default element

/* when the content selection is changed:
change the value of selection to current selection and load that content */
$('input[type=radio][name=article]').change(function() {
    selection = $(this).val();
    $("article").load(selection);
});

/**************************************************************************
*                               Extra credit                              *
*************************************************************************/
var clicks = 0; //var to hold number of clicks
$("#count").text(clicks); //display number of clicks

$("#clickme").click(function(){
    clicks++; //add one for each time clicked
    $("#count").text(clicks); //update clicks
});
