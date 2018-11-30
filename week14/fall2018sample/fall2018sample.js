/* Don't use <script> tags in a linked js file! */
src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

let select = ("content1.txt")  // sets default verse element
$("#choose-content").val(select); // changes menu option to default
$("#content").load(select);   // retrieves only default element

$("#choose-content").change(function() {
    select = $(this).val();
    $("#content").load(select); 
});


$("nav").click(function() {
    $(".submenu").toggle();
});