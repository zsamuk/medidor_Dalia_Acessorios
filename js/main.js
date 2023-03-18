$(function() {
  var card = $('.js-card');
  var cardBaseWidth = card.width();
  var arrow = $('.js-arrow');
  var aspectRatio = 312 / 196;

  card.resizable({
    aspectRatio: aspectRatio,
    handles: 'se',
  });

  card.on('resizestop', function() {
    updateAllRings();
  });

  var rings = {
    'ring-10': 56.69,
    'ring-11': 57.44,
    'ring-12': 58.58,
    'ring-13': 60.47,
    'ring-14': 62.36,
    'ring-15': 64.25,
    'ring-16': 64.62,
    'ring-17': 65.00,
    'ring-18': 66.14,
    'ring-19': 68.03,
    'ring-20': 69.92,
    'ring-21': 71.05,
    'ring-22': 71.81,
    'ring-23': 72.56,
    'ring-24': 75.21,
  };

  function updateAllRings() {
    var changeRatio = 1 + ((card.width() - cardBaseWidth) / cardBaseWidth);

    for (var key in rings) {
      var newDiameter = rings[key] * changeRatio;
      $('.' + key).width(newDiameter).height(newDiameter);
    }
  }
});