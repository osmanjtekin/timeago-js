# timeago-js

> **timeago-js** is a small (<1 kb) Javascript utility used to automatically update date elements with user friendly statements (just now, n seconds ago etc.). 

It supports different languages.

## How to install

1. `git clone https://github.com/osmanjtekin/timeago-js.git` where your HTML page can access it.

2. Add `type="module"` to the script tag, and `import {timeago} from "./helpers/timeago-js/timeago.js"` to the js file.

## How to use

Calling `timeago()` by default:
- targets all elements with `time` class
- gets the timestamp value (in ms) from `data-timestamp` attribute
- sets the refresh rate to 30 seconds
- sets the language to English

Custom values can be set with: `timeago(<class_name>, <refresh_rate>, <language>)`.

## Adding languages

To add a language, add a simple array with the right locale code to [languages.js](languages.js):
  `const <language>_<territory> = [
      "<now|one/a second ago>",    "<seconds ago>",
      "<one/a minute ago>", 	   "<minutes ago>",
      "<one/a hour ago>",   	   "<hours ago>",
      "<one/a day ago>",  	 	   "<days ago>",
      "<one/a week ago>",    	   "<weeks ago>",
      "<one/a month ago>",  	   "<months ago>",
      "<one/a year ago>", 		   "<years ago>"
    ];`

Where language is an [ISO 639 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and territory is an [ISO 3166 country code](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes). Some examples are: `it_IT`, `en_GB`, `fr_FR`.

Make sure you add `<language>_<territory>` to export.

Then either open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.