$(document).ready(function() {
    console.log('ready boss!');
    $(".js-primal-submit").on("click", function() {
        console.log("primal submit!");
        var form = $(".js-primal-form"), 
            name = $("#primal-name").val(),
            primalsSelected = "";
        form.find("input:checked").each(function() {
            primalsSelected += this.value + "\r\n";
        });
        console.log(primalsSelected);
        console.log(name);
        var data = {
            name: name,
            primal: primalsSelected
        };
        debugger;
        $.post('http://magitek.thehaydens.org/AddRun', data);
/*var threadPost = $("#thread-form");
threadPost.find("#id_title").val("Primal run for: " + name);
threadPost.find("#id_message").val(primalsSelected);
threadPost.submit();*/
});
});