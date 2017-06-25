var quotes = [
  {quote: "You act like mortals in all that you fear, and like immortals in all that you desire", source: 'Seneca'},
  {quote: "We suffer more in imagination than reality", source: 'Seneca'},
  {quote: "We all love ourselves more than other people, but care more about their opinion than our own", source: 'Marcus Aurelius'},
  {quote: "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him", source: 'Viktor Frankl'},
  {quote: "You shouldn't give circumstances the power to rouse anger, for they don't care at all", source: 'Marcus Aurelius'},
  {quote: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is colored by such impressions", source: 'Marcus Aurelius'},

];

document.addEventListener("DOMContentLoaded", function(event) {
  var now = new Date();
  var fullDaysSinceEpoch = Math.floor(now/8.64e7);

  var quote = quotes[fullDaysSinceEpoch % quotes.length];

  var html = "<p class=quote>" + quote["quote"] + "</p>"
  html += "<p class=source> - " + quote["source"] + "</p>";
  
  $('#quote').append(html);
});
