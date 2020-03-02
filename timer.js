const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('March 26, 2020 00:00:00').getTime(),
  x = setInterval(function() {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById('days').innerText = Math.floor(distance / day)),
      (document.getElementById('hours').innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById('minutes').innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById('seconds').innerText = Math.floor(
        (distance % minute) / second
      ));

    if (distance < 0) {
      document.getElementById('days').innerText = 0;
      document.getElementById('hours').innerText = 0;
      document.getElementById('minutes').innerText = 0;
      document.getElementById('seconds').innerText = 0;
    }
  }, second);

$(document).ready(function() {
  var faq = document.getElementById('faq');
  $('.set > a').on('click', function() {
    var faq = document.getElementById('faq');
    if (screen.width < 700) {
      faq.style.height = '700px';
    }

    if ($(this).hasClass('active')) {
      event.preventDefault();
      $(this).removeClass('active');
      $(this)
        .siblings('.content')
        .slideUp(200);
      $('.set > a i')
        .removeClass('fa-minus')
        .addClass('fa-plus');
    } else {
      event.preventDefault();
      var faq = document.getElementById('faq');
      if (screen.width < 700) {
        faq.style.height = '850px';
      }
      $('.set > a i')
        .removeClass('fa-minus')
        .addClass('fa-plus');
      $(this)
        .find('i')
        .removeClass('fa-plus')
        .addClass('fa-minus');

      $('.set > a').removeClass('active');
      $(this).addClass('active');

      $('.content').slideUp(200);
      $(this)
        .siblings('.content')
        .slideDown(200);
    }
  });
});
