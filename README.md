# Kombo

Implement a search bar that's connected to Kombo API
and show the result in a new page.

## Install

clone the repo, cd in to it and run this command
```shell
npm i
```

to start the app run
```shell
npm start
```

## Implemented requirements

- use redux hooks to manage the state
- created a loader animation
- browser compatibil
- used ES6

## Explaining

I didn't use any lib because I try to keep the code light as possible,
I added redux reducer and action using redux hooks,
I re-styled the search bar and connected it with the API 
if the request failed, an error notification will be displayed,
if not a result page will be displayed with a list of tickets or a message indicating no tickets existed