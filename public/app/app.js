function initButtons() {
  //Makes it so that when the user clicks on the HOME button they can go back to home from the add nav bar in the top navigation
  $("#home").click(function() {
    $("#addNav div").removeClass("active");
    $("#home div").addClass("active");

    $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());
    addGetStartedListener();
    //turns off the listener on the create main nav button
    $("#createMainNav").off();
  });

  //Makes it so that when the user clicks the Create Main Nav button, it opens the modal
  $(document).on("click", "#create-nav", function() {
    $(".modal, .alert-box").addClass("active");

    $(".btn-holder").html(TREEFROG_SERVICE.getCreateModalPopup());
  });

  //Grabs each spot where the ".closeModal" class is put and it runs the closeModal Function
  $(".closeModal").click(function() {
    closeModal();
  });
}

$(document).on("click", "#submit-nav-input", function() {
  //Removes the modal
  $(".modal, .alert-box").removeClass("active");

  //adds the Text editor Content
  $(".text-wrapper").html(TREEFROG_SERVICE.getTextEditorContent());
  $(".editor").html(TREEFROG_SERVICE.getQuillContainer());
  createQuillContainer();
});

//Console.log's what the user puts in the input in the modal
//Turns the input value into ALL lowercase
//Alerts the user if the input is empty in the modal
$("#submit-nav-input").click(function() {
  //Alerts the user if the input is empty in the modal
  if ($("#nav-input").val() == "") {
    alert("Input is empty! Please add a navigation name to continue");
    $(".modal, .alert-box").addClass("active");
    $(".btn-holder").html(TREEFROG_SERVICE.getCreateModalPopup());
  } else if ($("nav-input").val() != "") {
    alert(
      $(".nav-input")
        .val()
        .toLowerCase() + " has been created!"
    );
  }

  //Console.log's what the user puts in the input in the modal
  console.log($("#nav-input").val());

  //Turns the input value into ALL lowercase
  console.log(
    $("#nav-input")
      .val()
      .toLowerCase()
  );

  if ($("#nav-input").val() == $("nav-input").val()) {
    alert("You already made this navigation! Please make a new one!");
  } else if ($("#nav-input").val() != $("nav-input").val()) {
    $("#nav-input-submit").click(function() {
      $(".modal").removeClass("active");
      $(".create-nav").addClass("active");

      $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
      $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());

      addGetStartedListener();
      //turns off the listener on the create main nav button
      $("#createMainNav").off();
    });
  }
});

function createQuillContainer() {
  var container = $(".editor").get(0);
  var editor = new Quill(container);

  var quill = new Quill("#editor-container", {
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"], //toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], //custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }][ //sperscript/subscript
          ({ indent: "-1" }, { indent: "+1" })
        ], //outdent/indent
        [{ direction: "rtl" }], //text-direction

        [{ size: ["small", false, "large", "huge"] }], //custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }][{ font: [] }], //dropdown defaults from theme
        [{ align: [] }],

        ["clean"] //remove formatting button
      ]
    },
    placeholder: "Compose an epic...",
    theme: "snow" // or "bubble"
  });
}

//Closes the modal
function closeModal() {
  $(".modal").css("display", "none");
}

//Turns off the create main nav button when you click cancel on the modal
function addCreateMNListener() {
  $("#createMainNav").click(function(e) {
    $(".modal").css("display", "flex");
  });
}

//Turns off the listener on the get started button
function addGetStartedListener() {
  $(".get-started").click(function(e) {
    $("#home div").removeClass("active");
    $("#addNav div").addClass("active");

    $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavButton());
    addCreateMNListener();
    $(".get-started").off("click");
  });
}

$(document).ready(function() {
  initButtons();
  addGetStartedListener();
  createQuillContainer();
});
