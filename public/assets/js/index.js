// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoured").on("click", function (event) {
    let id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#submit").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if ($("#burgerName").val().trim() != "") {
      let newBurger = {
        name: $("#burgerName").val().trim(),
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function () {
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });
});

  // $(".delete-burger").on("click", function (event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function () {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });