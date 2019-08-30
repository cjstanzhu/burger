$(function() {
    $("#add-burger").on("click", function(event) {
        event.preventDefault();

        if ($("#burger-input").val().trim() === "") {
            alert("Please enter a burger name.");
        } else {

            let newBurger = {
                burger_name: $("#burger-input").val().trim()
                
            };

            $.post("/api/burgers", newBurger, function(data) {
                if (data) {
                    location.reload();
                } else {
                    alert("Please input a burger name and try again.");
                };
                
                $("#burger-input").val("");

            });
        };

    });

    $(".devour-burger").on("click", function(event) {
        let idInput = $(this).data("id");

        // $.put(`/api/burgers/${idInput}`, {devoured: true}, function(data) {
        //     if (data) {
        //         location.reload();
        //     } else {
        //         alert("Please try again.")
        //     };

        // });

        $.ajax(`/api/burgers/${idInput}`, {type: "PUT"}).then(
            function() {
                location.reload();
            }
        );

    });

});


