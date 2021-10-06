function calculateLove(yourName, yourAge, partnerName, partnerAge, e) {
    lovePercent = Math.floor(Math.random() * 101);

    if (yourName == "Ajay Kale" && partnerName == "Aarya Wadgaonkar") {
        lovePercent = 100
    }

    function animateElements() {
        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = lovePercent;
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 180,
                    thickness: 30,
                    emptyFill: "rgba(0,0,0, .2)",
                    fill: {
                        color: '#ff7aa0'
                    }
                }).on('circle-animation-progress', function(event, progress, stepValue) {
                    $(this).find('strong').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    e.preventDefault();
    $('#redraw').hide().show(0);
}

// Eveen Odd calculator -

if(number % 2 == 0) {
    console.log("The number is even.");
}
