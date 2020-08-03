# timeago-js

**timeago-js** is a small (<1 kb) Javascript utility used to automatically update date elements with user friendly statements (just now, n seconds ago etc.). 

It supports different languages.

## How to install

1. `git clone https://github.com/osmanjtekin/timeago-js.git` where your HTML page can access it.

2. Add `type="module"` to the script tag, and `import {timeago} from "./helpers/timeago-js/timeago.js"` to the js file.

## How to use

`timeago("time")` targets all elements with `time` class and gets timestamp's value from the `data-timestamp` attribute. 

Default language is English and refresh rate is 30 seconds.

For custom values use `timeago(<class_name>, <refresh_rate>, <language>)`.

## Adding languages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.