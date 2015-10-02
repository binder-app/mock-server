# Binder Mock Server

For when you want to test the Android app against something, but the server [isn't done yet|is offline|whatever]

## Usage

1. Change `hostname` in `app.js` to be your IP address, otherwise links will be calculated incorrectly.
2. `npm install`
3. `node app.js`
4. Change `server` in `strings.xml` the the Android app to point to the same address you set in `hostname`