$(document).ready(function() {
   AOS.init();
   AOS.refresh();
  var target = $('.navbar')

if (target !== null) {
  var position = target.position()
  window.addEventListener('scroll', function () {
    var height = $(window).scrollTop()
    if (height > position.top) {
      // target.css('visibility', 'hidden')
      target.removeClass('d-none')
    } else {
      target.addClass('d-none')
      // target.css('visibility', 'visible')
    }
  })
}

let imgcard1 = `<div style="color:white; font-weight:700" class="card-body card-overlay d-flex flex-column align-items-center">
                <p class="text-center"> About 1 percent of the world population has autism spectrum disorder.</p>
                <a href="http://www.cdc.gov/ncbddd/autism/data.html" class="btn btn-outline-danger w-50 mt-3" style="font-size: 1.1rem;">Learn more</a>
              </div>`
  $("#stat1").hover(function() {
    $(this).html(imgcard1);
  }, function() {
    $(this).empty();
  });

  let imgcard2 = `<div style="color:white; font-weight:700" class="card-body card-overlay d-flex flex-column align-items-center">
                <p class="text-center"> Autism is the fastest-growing developmental disability.</p>
                <a href="https://www.cdc.gov/features/dsdev_disabilities/" class="btn btn-outline-danger w-50 mt-3" style="font-size: 1.1rem;">Learn more</a>
              </div>`
  $("#stat2").hover(function() {
    $(this).html(imgcard2);
  }, function() {
    $(this).empty();
  });

  let imgcard3 =`<div style="color:white; font-weight:700" class="card-body card-overlay d-flex flex-column align-items-center">
                <p class="text-center">Cost of lifelong care can be reduced by 2/3 with early diagnosis and intervention.</p>
                <a href="https://www.bloomberg.com/news/articles/2014-06-09/autism-costs-more-than-2-million-over-patient-s-life" class="btn btn-outline-danger w-50 mt-3" style="font-size: 1.1rem;">Learn more</a>
              </div>`
  $("#stat3").hover(function() {
    $(this).html(imgcard3);
  }, function() {
    $(this).empty();
  });

  let imgcard4 =`<div style="color:white; font-weight:700" class="card-body card-overlay d-flex flex-column align-items-center">
                <p class="text-center"> Prevalence has increased by 6-15 percent each year from 2002 to 2010.</p>
                <a href="https://www.cdc.gov/ncbddd/autism/data.html" class="btn btn-outline-danger w-50 mt-3" style="font-size: 1.1rem;">Learn more</a>
              </div>`
  $("#stat4").hover(function() {
    $(this).html(imgcard4);
  }, function() {
    $(this).empty();
  });

let scroll = $('.myscroll');
  scroll.click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1500)
  })
})