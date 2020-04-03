var PRACTICE_SERVICE = (function() {
  var _db;
  var _currentPageID;

  var _getAllData = function(callback) {
    _db.collection('Pages')
    .get()
    .then(function(querySnapshot) {
      callback(querySnapshot);
    });
  
  };



  var _deleteData = function(id) {

  _db
  .collection('Pages')
  .doc(id)
  .delete()
  .then(function() {
    console.log("delete successful");
    alert('Delete Successful! Please Refresh the page and click the "Get Data" button to see your changes.')
   //_getAllData(callback);
  });
};


  var _updateData = function(id, newContent, callback) {
    var newObj = {navName: newContent};

    _db
    .collection('Pages')
    .doc(id)
    .update(newObj)
    .then(function() {
      _getAllData(callback);
      alert("Update Successful!");
    });
  };

  var _addData = function(navName, callback) {
    //Starting loading screen
    let pageFakeData = {
      navName: navName,
      content: "<h1>HELLO</h1>",
      subNavs: []
    };

    _db
      .collection("Pages")
      .add(pageFakeData)
      .then(function(docRef) {
        //remove loading screen
        console.log("Document written with ID: ", docRef.id);
        callback("New navigation added");
        alert('New Nav added!')
      })
      .catch(function(error) {
        //Remove loading screen
        //add alert for error
        console.log("Error adding document: ", error);
      });
  };

  var _checkPages = function(mainNavName, callback) {
    var pages = _db.collection("Pages");
    pages
      .where("navName", "==", mainNavName)
      .get()
      .then(function(querySnapshot) {
        if (querySnapshot.empty) {
          _addData(mainNavName, callback);
        } else {
          callback("duplicate");
        }
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  var _initFirebase = function(callback) {
    //Call spinning wheel for loading
    firebase
      .auth()
      .signInAnonymously()
      .then(function(result) {
        console.log("connected");
        _db = firebase.firestore();
        //Remove loader
        callback();
      });
  };


  return {
    initFirebase: _initFirebase,
    addData: _addData,
    checkPages: _checkPages,
    getAllData: _getAllData,
    deleteContent: _deleteData,
    updateContent: _updateData
    
  };

})();