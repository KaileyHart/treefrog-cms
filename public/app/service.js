var TREEFROG_SERVICE = (function() {
  var _getQuillContainer = function() {
    let quillContent = ``;

    return quillContent;
  };

  //Stores the text editor Content
  var _getTextEditorContent = function() {
    let textEditorContent = `<h1>Treefrog CMS</h1><p>Now you have your navigation set now you can create your content. Create your content in the text editor and then click on "Save Page Info". Once you have done that, click on "PREVIEW SITE" to see what your webage looks like.</p><div id="editor">
    <p>Hello World!</p>
    <p>Some initial <strong>bold</strong> text</p> 
    <p><br></p>
    </div>
    
    `;

    return textEditorContent;
  };

  //Stores the buttons within the Modal popup content
  var _getModalPopupButtons = function() {
    let modalPopupButtons = `<div class="btn-holder-modal">
    <span class="btn btn-light ">Create Main Nav</span
    ><span id="close-modal" class="btn btn-light">Cancel</span>
  </div>`;

    return modalPopupButtons;
  };

  //Stores the Modal popup content
  var _getCreateModalPopup = function() {
    let modalPopup = `<div class="modal">
    <div class="alert-box">
    <h2>Use this box to create navigation links.</h2>
    <p>You can create main navigation and sub navigation. To create a sub-navigation you will first need to select a main nav and then create the sub nav.  </p> 
    <p >Using the text box below enter the name of your main navigation</p> 
    <input type="text">`;

    return modalPopup;
  };

  //Stores the add navigation content
  var _getGetStartedContent = function() {
    let contentString = `<h1>Treefrog CMS</h1><p>This is the screen where you will create your navigation and page content</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to. </p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;

    return contentString;
  };

  //Stores the Create Main Nav and Create Sub Nav buttons
  var _getCreateNavButton = function() {
    let buttonString = `<span   id="create-nav" id="createMainNav" class="btn btn-dark">Create Main Nav</span><span class="btn btn-dark">Create Sub Nav</span>`;

    return buttonString;
  };

  //Stores the homepage content
  var _getHomeContent = function() {
    let homeContent = `<h1>Welcome to the Treefrog CMS</h1>
    <p>
      Here you will create your content for your webpages. You won't be able
      to create all page elements but only the content for the page.
    </p>

    <p>
      You must first create the navigation. Once you have the navigation
      created you can add page content and publish the page. You can even
      add sub navigation as well.
    </p>

    <p>
      Your fist step is to click on the Add Navigation link and add your
      first navigation link.
    </p>
  </div>
  `;
    return homeContent;
  };

  //Stores the Get started button
  var _getHomeStartButton = function() {
    let startButton = `<div class="btn-holder">
    <span class="btn btn-dark get-started">Get Started</span>
  </div>`;

    return startButton;
  };

  return {
    getGetStartedContent: _getGetStartedContent,
    getCreateNavButton: _getCreateNavButton,
    getHomeContent: _getHomeContent,
    getHomeStartButton: _getHomeStartButton,
    getCreateModalPopup: _getCreateModalPopup,
    getModalPopupButtons: _getModalPopupButtons,
    getTextEditorContent: _getTextEditorContent,
    getQuillContainer: _getQuillContainer
  };
})();
