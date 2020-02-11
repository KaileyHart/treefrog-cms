var TREEFROG_SERVICE = (function() {
  var _getGetStartedContent = function() {
    let contentString = `<h1>Treefrog CMS</h1><p>This is the screen where you will create your navigation and page content</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to. </p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;

    return contentString;
  };

  var _getCreateNavButton = function() {
    let buttonString = `<span class="btn btn-dark">Create Main Nav</span><span class="btn btn-dark">Create Sub Nav</span>`;

    return buttonString;
  };

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
    getHomeStartButton: _getHomeStartButton
  };
})();
