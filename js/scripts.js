{
  /*
      Hamburger menu
  */
  const menu = document.querySelector('#heroMenu');
  const showHideBtn = document.createElement('button');
  function showMenu() {
    showHideBtn.classList.add('hero__showbtn--clicked');
    showHideBtn.setAttribute('aria-expanded', 'true');
    showHideBtn.querySelector('span').innerHTML = 'Hide Menu'
    menu.classList.add('hero__menu--jsshown');
  }

  function hideMenu() {
    showHideBtn.classList.remove('hero__showbtn--clicked');
    showHideBtn.setAttribute('aria-expanded', 'false');
    showHideBtn.querySelector('span').innerHTML = 'Show Menu'
    menu.classList.remove('hero__menu--jsshown');
  }

  function setupMenu() {
    

    menu.classList.add('hero__menu--jshidden');

    showHideBtn.classList.add('hero__showbtn');
    showHideBtn.setAttribute('type', 'button');
    showHideBtn.setAttribute('aria-controls', 'heroMenu');

    showHideBtn.innerHTML = '<span></span>' +
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="24px" height="24px">' +
      '<g id="Rounded">' +
      '<line id="topLine" style="fill:none;stroke:#ffffff;stroke-width:3;stroke-linecap:round;stroke-miterlimit:15;" x1="3" y1="6" x2="21" y2="6"/>' +
      '<line id="middleLine" style="fill:none;stroke:#ffffff;stroke-width:3;stroke-linecap:round;stroke-miterlimit:15;" x1="3" y1="12" x2="21" y2="12"/>' +
      '<line id="bottomLine" style="fill:none;stroke:#ffffff;stroke-width:3;stroke-linecap:round;stroke-miterlimit:15;" x1="3" y1="18" x2="21" y2="18"/>' +
      '</g>' +
      '</svg>';

    menu.parentNode.insertBefore(showHideBtn, document.querySelector('.hero__menu'));

    showHideBtn.addEventListener('click', () => {
      if (showHideBtn.classList.contains('hero__showbtn--clicked')) {
        hideMenu();
      } else {
        showMenu();
      }
    }, hideMenu())
  }

  let viewPort = window.matchMedia('(max-width: 800px)');
  console.log(viewPort)
  if(viewPort.matches) {
    setupMenu();
  }
  viewPort.addListener((query) => {
    if (query.matches) {
      setupMenu();
      showHideBtn.classList.remove('hero__showbtn--biggerscreen');
    } else {
      menu.classList.remove('hero__menu--jshidden');
      showHideBtn.classList.add('hero__showbtn--biggerscreen');
    }
  })
}

{
  /*
      Menu smooth scroll
  */
  // easing functions http://goo.gl/5HLl8
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  Math.easeInCubic = function (t, b, c, d) {
    var tc = (t /= d) * t * t;
    return b + c * (tc);
  };

  Math.inOutQuintic = function (t, b, c, d) {
    var ts = (t /= d) * t,
      tc = ts * t;
    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
  };

  // requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
  var requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  function scrollTo(to, callback, duration) {
    // because it's so fucking difficult to detect the scrolling element, just move them all
    function move(amount) {
      document.documentElement.scrollTop = amount;
      document.body.parentNode.scrollTop = amount;
      document.body.scrollTop = amount;
    }

    function position() {
      return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
    }
    var start = position(),
      change = to - start,
      currentTime = 0,
      increment = 10;
    duration = (typeof (duration) === 'undefined') ? 500 : duration;
    var animateScroll = function () {
      // increment the time
      currentTime += increment;
      // find the value with the quadratic in-out easing function
      var val = Math.inOutQuintic(currentTime, start, change, duration);
      // move the document.body
      move(val);
      // do the animation unless its over
      if (currentTime < duration) {
        requestAnimFrame(animateScroll);
      } else {
        if (callback && typeof (callback) === 'function') {
          // the animation is done so lets callback
          callback();
        }
      }
    };
    animateScroll();
  }


  const menuItems = document.querySelectorAll('.hero__link');
  for (const item of menuItems) {

    item.addEventListener('click', (evt) => {

      const bodyRect = document.body.getBoundingClientRect();
      const elemRect = document.querySelector(evt.currentTarget.getAttribute('href')).getBoundingClientRect();
      console.log(elemRect.top);
      const offset = elemRect.top - bodyRect.top;
      scrollTo(offset, null, 300);
    })
  }

}