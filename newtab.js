document.addEventListener("DOMContentLoaded", function(event) {
  var now = new Date();
  var fullDaysSinceEpoch = Math.floor(now/8.64e7);

  var quote = quotes[fullDaysSinceEpoch % quotes.length];

  var html = "<p class=quote>" + quote["quote"] + "</p>"
  html += "<p class=source>" + quote["source"] + "</p>";

  $('#quote').append(html);
});

var quotes = [
  {quote: "You act like mortals in all that you fear, and like immortals in all that you desire", source: 'Seneca'},
  {quote: "We suffer more in imagination than reality", source: 'Seneca'},
  {quote: "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him", source: 'Viktor Frankl'},
  {quote: "You shouldn't give circumstances the power to rouse anger, for they don't care at all", source: 'Marcus Aurelius'},
  {quote: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is colored by such impressions", source: 'Marcus Aurelius'},
  {quote: "In a little while you will have forgotten everything; in a little while everything will have forgotten you.", source: 'Marcus Aurelius'},
  {quote: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is colored by such impressions", source: 'Marcus Aurelius'},

  {quote: "What decides whether a sum of money is good? The money is not going to tell you; it must be the faculty that makes use of such impressions – reason.", source: 'Epictetus'},
  {quote: "What should we do then? Make the best use of what is in our power, and treat the rest in accordance with its nature.", source: 'Epictetus'},
  {quote: "I have to die. If it is now, well then I die now; if later, then now I will take my lunch, since the hour for lunch has arrived – and dying I will tend to later.", source: 'Epictetus'},
  {quote: "Consider at what price you sell your integrity; but please, for God’s sake, don’t sell it cheap.", source: 'Epictetus'},
  {quote: "What is the goal of virtue, after all, except a life that flows smoothly?", source: 'Epictetus'},
  {quote: "What else are tragedies but the ordeals of people who have come to value externals, tricked out in tragic verse?", source: 'Epictetus'},
  {quote: "Most of us dread the deadening of the body and will do anything to avoid it. About the deadening of the soul, however, we don’t care one iota.", source: 'Epictetus'},
  {quote: "“But my nose is running!” What do you have hands for, idiot, if not to wipe it? “But how is it right that there be running noses in the first place?” Instead of thinking up protests, wouldn’t it be easier just to wipe your nose?", source: 'Epictetus'},
  {quote: "Do as Socrates did, never replying to the question of where he was from with, ‘I am Athenian,’ or ‘I am from Corinth,’ but always, ‘I am a citizen of the world.’", source: 'Epictetus'},
  {quote: "It isn’t death, pain, exile or anything else you care to mention that accounts for the way we act, only our opinion about death, pain and the rest.", source: 'Epictetus'},
  {quote: "We, not externals, are the masters of our judgements.", source: 'Epictetus'},
  {quote: "You can process in your intellect and senses a wealth of thoughts and impressions simultaneously. There are impressions that you assent to, others that you reject; sometimes you suspend judgement altogether.", source: 'Epictetus'},
  {quote: "If you want to know just how little concerned you are about things good and bad, and how serious about things indifferent, compare your attitude to going blind with your attitude about being mentally in the dark. You will realize, I think, how inappropriate your values really are.", source: 'Epictetus'},
  {quote: "It is just charming how people boast about qualities beyond their control. For instance, ‘I am better than you because I have many estates, while you are practically starving’; or, ‘I’m a consul,’ ‘I’m a governor,’ or ‘I have fine curly hair.’", source: 'Epictetus'},
  {quote: "Once, when [Agrippinus] was preparing for lunch, a messenger arrived from Rome announcing that Nero had sentenced him to exile. Unflustered he replied, ‘Then why don’t we just move our lunch to Aricia.’", source: 'Epictetus'},
  {quote: "We are responsible for some things, while there are others for which we cannot be held responsible.", source: 'Epictetus'},
  {quote: "If you commit to philosophy, be prepared at once to be laughed at and made the butt of many snide remarks.", source: 'Epictetus'},
  {quote: "Take a minute and let the matter wait on you. Then reflect on both intervals of time: the time you will have to experience the pleasure, and the time after its enjoyment that you will beat yourself up over it.", source: 'Epictetus'},
  {quote: "[When someone does something you don't like] Say to yourself each time, ‘He did what he believed was right.’", source: 'Epictetus'},
  {quote: "The following are non-sequiturs: ‘I am richer, therefore superior to you’; or ‘I am a better speaker, therefore a better person, than you.’", source: 'Epictetus'},
  {quote: "The mark and attitude of the ordinary man: never look for help or harm from yourself, only from outsiders. The mark and attitude of the philosopher: look for help and harm exclusively from yourself.", source: 'Epictetus'},
  {quote: "How long will you wait before you demand the best of yourself, and trust reason to determine what is best?", source: 'Epictetus'},

  {quote: "The things that are essential are acquired with little bother; it is the luxuries that call for toil and effort.", source: 'Seneca'},
  {quote: "The man who spends his time choosing one resort after another in a hunt for peace and quiet, will in every place he visits find something to prevent him from relaxing.", source: 'Seneca'},
  {quote: "...nothing is burdensome if taken lightly, and how… nothing need arouse one’s irritation so long as one doesn’t make it bigger than it is by getting irritated.", source: 'Seneca'},
  {quote: "It is essential to make oneself used to putting up with a little. Even the wealthy and the well provided are continually met and frustrated by difficult times and situations.", source: 'Seneca'},

  {quote: "Consider that everything is opinion, and opinion is in your power. Take away then, when you choose, your opinion, and like a mariner who has rounded the headland, you will find calm, everything stable, and a waveless bay.", source: 'Marcus Aurelius'},
  {quote: "With respect to what may happen to you from without, consider that it happens either by chance or according to Providence, and you must neither blame chance nor accuse Providence.", source: 'Marcus Aurelius'},
  {quote: "I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others.", source: 'Marcus Aurelius'},
  {quote: "A man must learn a great deal to enable him to pass a correct judgment on another man’s acts.", source: 'Marcus Aurelius'},
  {quote: "Shall any man hate me? That will be his affair. But I will be mild and benevolent toward every man, and ready to show even him his mistake, not reproachfully, nor yet as making a display of my endurance, but nobly and honestly.", source: 'Marcus Aurelius'},
  {quote: "Justice will not be observed, if we either care for indifferent things or are easily deceived and careless and changeable.", source: 'Marcus Aurelius'},
  {quote: "There is no man so fortunate that there shall not be by him when he is dying some who are pleased with what is going to happen.", source: 'Marcus Aurelius'},
  {quote: "A brief existence is common to all things, and yet you avoid and pursue all things as if they would be eternal.", source: 'Marcus Aurelius'},
  {quote: "He who follows reason in all things is both tranquil and active at the same time, and also cheerful and collected.", source: 'Marcus Aurelius'},
  {quote: "If a man is mistaken, instruct him kindly and show him his error. But if you are not able, blame yourself, or not even yourself.", source: 'Marcus Aurelius'},
  {quote: "When you are offended with any man’s shameless conduct, immediately ask yourself, is it possible, then, that shameless men should not be in the world? It is not possible. Do not, then, require what is impossible.", source: 'Marcus Aurelius'},
  {quote: "Today I have got out of all trouble, or rather I have cast out all trouble, for it was not outside, but within and in my opinions.", source: 'Marcus Aurelius'},

];
