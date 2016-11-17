function animate(options) {
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;
    var progress = options.timing(timeFraction)
    options.draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

knop.onclick = function() {
	animate({
		duration: 500,
		timing: function(timeFraction) {
			return timeFraction;
		},
		draw: function(button) {
			knop.style.width = button * 100 + '%';
		}
	});
};

knop2.onclick = function() {
	animate({
		duration: 500,
		timing: function(timeFraction) {
			return timeFraction;
		},
		draw: function(p) {
			stroka.style.left = p * 50 + '%';
		}
	});
};

