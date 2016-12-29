rkhaslarov:md5
=================

Javascript implementation of MD5 function for MeteorJS.

# Usage

Calculate the ([hex](https://en.wikipedia.org/wiki/Hexadecimal)-encoded)
[MD5](https://en.wikipedia.org/wiki/MD5) hash of a given string value:

```js
var hash = md5("value"); // "2063c1608d6e0baf80249c42e2be5804"
```

Calculate the ([hex](https://en.wikipedia.org/wiki/Hexadecimal)-encoded)
[HMAC](https://en.wikipedia.org/wiki/HMAC)-MD5 hash of a given string value and
key:

```js
var hash = md5("value", "key"); // "01433efd5f16327ea4b31144572c67f6"
```

Calculate the raw [MD5](https://en.wikipedia.org/wiki/MD5) hash of a given
string value:

```js
var hash = md5("value", null, true);
```

Calculate the raw [HMAC](https://en.wikipedia.org/wiki/HMAC)-MD5 hash of a given
string value and key:

```js
var hash = md5("value", "key", true);
```
