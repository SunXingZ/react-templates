// export const ConfigRem = (designWidth = 750, rem2px = 100) => {
//   var d = window.document.createElement('div');
//   d.style.width = '1rem';
//   d.style.display = "none";
//   var head = window.document.getElementsByTagName('head')[0];
//   head.appendChild(d);
//   var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
//   d.remove();
//   document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
//   var st = document.createElement('style');
//   var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + ((window.innerWidth / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}";
//   var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + ((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}"
//   st.innerHTML = portrait + landscape;
//   head.appendChild(st);
//   return defaultFontSize;
// };
(function (doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          var fontSize = 20;
          docEl.style.fontSize = fontSize + 'px';
          var docStyles = getComputedStyle(docEl);
          var realFontSize = parseFloat(docStyles.fontSize);
          var scale = realFontSize / fontSize;
          fontSize = clientWidth / 667 * 20;
          if(isIphoneX()) fontSize = 19;
          fontSize = fontSize / scale;
          docEl.style.fontSize = fontSize + 'px';
      };
  // Abort if browser does not support addEventListener
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);

  // iphoneX判断
  function isIphoneX(){
      return /iphone/gi.test(navigator.userAgent) && (win.screen.height === 812 && win.screen.width === 375)
  }

})(document, window);