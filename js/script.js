$(document).ready(function(){
    $("#compute").click(function(){
        // alert("clicked");

        $("#result").val(converterObj.convert($("#value").val(), $("#coeff").val()));
        $("#inv-result").val(converterObj.convertInverse($("#value").val(), $("#coeff").val()));
        return false;
    });
});


var converterObj = {
    convert : function(value, coeff) {
        return value * coeff;
    },

    convertInverse : function(value, coeff) {
        return value / coeff;
    }
}