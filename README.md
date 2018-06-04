# string-visual-width

[![Build Status](https://travis-ci.org/NXMIX/string-visual-width.svg?branch=master)](https://travis-ci.org/NXMIX/string-visual-width)
[![Coverage Status](https://coveralls.io/repos/github/NXMIX/string-visual-width/badge.svg)](https://coveralls.io/github/NXMIX/string-visual-width)
[![npm](https://img.shields.io/npm/v/string-visual-width.svg?maxAge=1000)](https://www.npmjs.com/package/@nxmix/string-visual-width/)

> Get the visual width of the string 

## Why

Because of the combination of Unicode and Emoji characters, it is difficult to calculate the actual display width of a string in Terminal applciation. Strictly speaking there is no universal method to do that.

I try to figure it out in accordance with the following steps:
* Strip out all ansi codes in string.
* Nomalize unocide character before calculation, `n\u0303` becomes `ñ`.
* Use [@nxmix/emoji-seq-match](https://github.com/NXMIX/emoji-seq-match.git) to match joined Emoji characters as long as possible and calculate their width as 2.
* Use [@nxmix/is-full-width](https://github.com/NXMIX/is-full-width.git) determine which characters should be treated as East Asian characters and count a width of 2.

## Usage

### Install

`npm i @nxmix/string-visual-width --save`

[Typescript](https://www.typescriptlang.org) definition file is already included.

## Examples

```js
const width = require('@nxmix/string-visual-width').default;

width('中');
//=> 2

width("👩‍👦");
//=> 2
```

```ts
import getMatchedLength from '@nxmix/string-visual-width';

width('中');
//=> 2
```

## Author
[Rong Shen](https://github/jacobbubu)
