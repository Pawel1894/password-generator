# [Password Generator](https://react-pass-generator.netlify.app/)

This is password generator app created using [React](https://reactjs.org/), and designed by myself.

## Table of contents

- [Overview](#overview)
  - [Motivation](#motivation)
  - [Password strength conditions](#password-strength-conditions)
  - [Preview](#preview)
  - [Website](#website)
- [Built with](#built-with)  
- [Install process](#install-process)
- [Build process](#build-process)
  
## Overview
  
### Motivation

My goal for creating this app was to practice my react, css, design skills and get better knowledge about passwords strength. 
I created my strength indicators based on this [Hive Systems Blog written by Corey Neskey](https://www.hivesystems.io/blog/are-your-passwords-in-the-green)

### Password strength conditions

#### length = length of password
#### options = include numbers, upper letters, symbols
#### indicators = weak, average, strong

- length <= 16 && length > 13 with none of options selected is average
- length <= 13 && length > 10 with 1 or 2 options selected is average
- length <= 12 && length > 9 with 3 options selected is average

- length > 16 is strong
- length > 13 with 1 or 2 options is strong
- length > 12 with 3 options is strong

#### if none of these conditions is true then password is defined as weak

### Preview
![obraz](https://user-images.githubusercontent.com/45789222/210012816-6a32e478-84d6-4da4-b491-967add9a7055.png)
![obraz](https://user-images.githubusercontent.com/45789222/210013011-36f12859-742d-4b26-8e8b-7248f978d6c9.png)


### Website

[App live demo](https://react-pass-generator.netlify.app/)

## Built with

 - [Vite](https://vitejs.dev/)
 - [React](https://reactjs.org/)  
 - [TypeScript](https://www.typescriptlang.org/)
 - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
 
## Install process

1. install [nodejs](https://nodejs.org/en/download/)
2. navigate project folder in Command Line
3. run `npm install` script
4. run `npm run dev` script


## Build process

1. open project folder in Command Line
2. run `npm run build` script
