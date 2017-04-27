$(document).ready(function(){
    $("#compute").click(function(){
        // alert("clicked");

        var res = $("#value").val() * $("#coeff").val();
        var invRes = $("#value").val() / $("#coeff").val();
        $("#result").val(res);
        $("#inv-result").val(invRes);
        return false;
    });
});