chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    var token = (function($){
      var anchor = $("a[href*=access_token]:first");
      var matches = anchor.attr("href").match(/access_token=([^&]+)/);
      return matches[1];
    })(jQuery);    
    port.postMessage({token: token});
  });
});
