# Urlify

A simple url concatenator to use in requests and API calls. After going crazy in counting backslash, setting envs variables, and matching paths I decided to build my (easy) url concatenator, urlify.
## Installation

In your project run:

```bash
npm i @alessiopremoli/urlify
```

import it in your file:

```js
const { urlify } = from '@alessiopremoli/urlify';
```

## Usage

urlify handles path concatenation and query params mapping:

```js
id = 1;
let url = urlify(
    'api.myapi.test', // base url
    ['api', 'v1', 'pippo///pluto/', id],  // an array of additional uris
    {param1: 'param1'} // an object of query params
);

console.log(url) // prints api.myapi.test/api/v1/pippo/pluto/1?param1=param1
```