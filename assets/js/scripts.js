$(function() {
  $('body').removeClass('fade-out');
  setTimeout(function() {
    $('#shuffler').addClass('fadeIn');
    var shuffle = $("#shuffler")
    shuffle.shuffleLetters({
      "text": "Shaun Kollannur"
    });
    setTimeout(function() {
      $('.woop').addClass('fadeIn');
      setTimeout(function() {
        $('.scroller svg').addClass('fadeIn');
        setTimeout(function() {
          $('.scroller svg').removeClass('fadeIn');
          $('.scroller svg').addClass('fadeOut');
        }, 7000);
      }, 7000);
    }, 1234);
  }, 200);
  $('.soc').prepend("<a data-aos='fade-zoom-in' target='_top' href='mailto:shaunkollannur@gmail.com'><i class='em fas fa-3x fa-envelope-square'></i></a>")
});

function dontGo(options = {}) {
  const defaults = {
    title: "Don't go!",
    faviconSrc: '',
    timeout: 0,
    interval: 1000
  }

  const opts = Object.assign(defaults, options)
  const originalTitle = document.title

  let favicon
  let originalFavicon
  let img
  let timeout
  let interval
  let counter = 0

  if (document.querySelectorAll('link[rel$="icon"]').length) {
    favicon = document.querySelector('link[rel$="icon"]')
    originalFavicon = favicon.getAttribute('href')
  }

  if (opts.faviconSrc.length) {
    img = new Image()
    img.src = opts.faviconSrc
  }

  const setHidden = () => {
    if (typeof opts.title === 'string') {
      document.title = opts.title
    } else {
      document.title = opts.title[0]
      interval = setInterval(nextTitle, opts.interval)
    }

    if (opts.faviconSrc.length) {
      favicon.setAttribute('href', opts.faviconSrc)
    }
  }

  const nextTitle = () => {
    counter++
    if (counter >= opts.title.length) {
      counter = 0
    }
    document.title = opts.title[counter]
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      if (opts.timeout > 0) {
        timeout = setTimeout(setHidden, opts.timeout)
      } else {
        setHidden()
      }
    } else {
      document.title = originalTitle
      favicon.setAttribute('href', originalFavicon)
      clearTimeout(timeout)
      clearInterval(interval)
    }
  })
}

dontGo({
  title: 'Shaun Kollannur',
  faviconSrc: 'assets/img/favicon2.png',
  timeout: 2000
})
