$(function() {

  coverMeLikeABlanket = function() {
    $('head').append('<style id="everyoneChill">.dashboard-left,.dashboard-right,.moments,.SidebarCommonModules,.ProfileTweet-actionCount,[id^=stream-item-recap_entry] { display: none };</style>');
  };

  coverMeLikeABlanket(".dashboard-left", '');

  txtwav = function() {
    var textWaveElements = document.getElementsByClassName('txtwav');

    function spanWrapHelper(el, text) {
      for(var i = 0; i < text.length; i++) {
        var span = document.createElement('span');
        span.innerHTML = text[i] === ' ' ? '&nbsp;' : text[i];
        el.appendChild(span);
      }
    }

    for (var i = 0, length = textWaveElements.length; i < length; i++) {
      var el = textWaveElements[i],
        text = el.textContent.trim();

      el.innerHTML = '';
      spanWrapHelper(el, text);
    }
  }

  chrome.runtime.onMessage.addListener((message) => {
    switch (message) {
      case 'iconClicked': {
        if ($('#darkmode').length) {
          $('#darkmode').remove();
          $('body').removeClass('ft-body');
        } else {
          const darkmode = document.createElement('div');
          darkmode.id = 'darkmode';
          document.body.appendChild(darkmode);
          $('#darkmode').append('<div id="ft-container"><h1 id="ft-tagline" class="txtwav bounce">Fuck Twitter</h1></div>');
          txtwav();
          $('body').addClass('ft-body');
        }
        break;
      }
      default: {
        console.log(`Msg: ${message}`);
      }
    }
  });
});
