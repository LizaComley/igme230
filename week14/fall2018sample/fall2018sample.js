/* Don't use <script> tags in a linked js file! */
src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"


/************************************************************************
*                        AJAX Content Loading                           *
*************************************************************************/

let selection = ("content1.txt");  // sets default content to be displayed
$("#choose-content").val(selection); // changes menu option to the default
$("#content").load(selection);   // retrieves only default element

/* when the content selection is changed
change the value of selection and load that content */
$("#choose-content").change(function() {
    selection = $(this).val();
    $("#content").load(selection); 
});

/************************************************************************
*                   Content Menu Functionality                          *
*************************************************************************/

/* when a menubox is clicked,
finds the submenu for the selected and toggles it's display on and off */
$(".menubox").click(function() {
    $(this).find(".submenu").slideToggle(); /* slideToggle() - toggle function w. slide animation */
});
