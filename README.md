# Shader-RTC

When you need to jam out with your friends.

## How to run

1. Start the Express server:

```
$ node server.js
```

2. Start the front-end server:

```
$ cd client/
$ npm start
```

## What it do

Right now, not much. You can put in an ID from an existing shader on [shadertoy.com](https://www.shadertoy.com) and it'll add it to the display.

> It is known to be broken for streams that selected to not publish via the API, and for streams that contain audio.

## What it do next

- [ ] Add a user authentication system
- [ ] Keep track of "rooms" (different streaming groups)
- [ ] Add web interface for coding in your own shader (similar functionality as shadertoy.com)
- [ ] Allow user to configure a "room" with an audio stream that will provide global constants to all shaders in the room
- [ ] hsync magic
