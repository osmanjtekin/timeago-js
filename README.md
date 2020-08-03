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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.