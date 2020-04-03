function addDeleteNavListener(){
  $("nav a").click(function(e) {
  var id = e.currentTarget.id;

  
  //Gets the name from the input box
  var deleteNavName = $('#deleteContent').val();
  
  PRACTICE_SERVICE.deleteContent(id, deleteNavName, displayDeleteData);
});
}



function addNavListener() {
  $("nav a").click(function(e) {
    var id = e.currentTarget.id;
    var newNavName = $('#updateContent').val();
    
    PRACTICE_SERVICE.updateContent(id, newNavName, displayData);
  });
}



function displayData(addData) {

  var container = '<nav class="viewNav">';

  addData.forEach(function(doc) {
    var id = doc.id;
    var rawData = doc.data();
    console.log(rawData.navName);

    container +=`<a href="#" id="${id}">${rawData.navName}</a>`;
  });

  container += '</nav>';

  $(".showData").html(container);

  addNavListener();
  
}

function displayDeleteData(addData) {

  var container = '<nav class="viewDeleteNav">';

  addData.forEach(function(doc) {
    var id = doc.id;
    var rawData = doc.data();
    console.log(rawData.navName);

    container +=`<a href="#" id="${id}">${rawData.navName}</a>`;
  });

  container += '</nav>';

  $(".showDeleteData").html(container);

 
  addDeleteNavListener();
}


function init() {

  $(".getDeleteData").click(function(e) {
    PRACTICE_SERVICE.getAllData(displayDeleteData);
  });

  $(".getData").click(function(e) {
    PRACTICE_SERVICE.getAllData(displayData);
  });


  $("#addData").click(function(e) {
    e.preventDefault();

    let nName = $("#nav-input")
      .val()
      .toLowerCase()
      .trim();

    if (nName != "") {
      console.log("add data", nName);
      PRACTICE_SERVICE.checkPages(nName, alertUser);
      $("#nav-input").val("");
    } else {
      alert("Empty");
    }
    //console.log("add data");
    //Get info from inout box
    //lowercase data
    //submit

    //PRACTICE_SERVICE.addData(nName);
  });

  //   $("#checkPages").click(function(e) {
  //     e.preventDefault();
  //     console.log("check data");
  //     PRACTICE_SERVICE.checkPages("products");
  //   });
}

function alertUser(result) {

  console.log(result);
}

$(document).ready(function() {
  //alert("alert");
  PRACTICE_SERVICE.initFirebase(init);
  //TREEFROG_SERVICE.initFirebase();
});
