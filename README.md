rate
====

  **[peer](http://github.com/bredele/peer)** codec to change the speed limitation of a data **[channel](http://github.com/bredele/channel)**.

## Installation

with [component](http://github.com/component/component):

	$ component install bredele/rate


## Usage

  A default data channel speed rate is about 30kb/s which in some case is not enough to transmit some data to an other peer. `rate` set this speed to 1638400 kb/s by default:

```js
var rate = require('rate');

var master = peer();
master.codec(rate()); //1638400
master.use(channel('data'));
```

  Make sure you created a data channel before setting a peer local session description with the plugin [channel](http://github.com/bredele/channel) for example. 


## API

  rate allows you to manually set the speed limitation (default is 1638400).

```js
master.codec(rate(100));
```

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
