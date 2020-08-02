import * as languages from "./load-lang.js";

export {timeago};




const SECONDS_IN_TIME = [
  1,         // 1 second
  60,        // 1 minute
  3600,      // 1 hour
  86400,     // 1 day
  604800,    // 1 week
  2419200,   // 1 month
  29030400   // 1 year
];




const en_US=[
  "just now",     "seconds ago",
  "a minute ago", "minutes ago",
  "an hour ago",  "hours ago",
  "a day ago",    "days ago",
  "a week ago",   "weeks ago",
  "a month ago",  "months ago",
  "a year ago",   "years ago"
]




function convert(el, timestamp, lang) {

  let now = Math.floor(new Date / 1000);
  let diff = (now - timestamp) || 1; // prevent undefined val when diff == 0

  for (let i = 6; i>=0; i--) {

    if (diff >= SECONDS_IN_TIME[i]) {

      let time_elapsed = Math.floor(diff / SECONDS_IN_TIME[i]);
      let adverbs = languages[lang] || en_US;
      let sentence = adverbs.map((el,idx) => idx % 2 == 0 ? el : time_elapsed +" "+ el);

      return time_elapsed >= 2 ? sentence[i * 2 + 1] : sentence[i * 2];

    }

  }

}




function timeago(el, update_every=1, lang) {
  let time_elements = document.querySelectorAll("."+el);

  time_elements.forEach(el =>
    el.innerHTML = convert(el, el.dataset.timestamp, lang)
  )

  setTimeout( () => 
    timeago(el, (update_every),lang), 
    update_every * 1000);

}