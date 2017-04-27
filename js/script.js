$(document).ready(function(){
    $("#compute").click(function(){
        // alert("clicked");

        var res = $("#value1").val() * $("#coeff").val();
        $("#result").val(res);
        return false;
    });
});