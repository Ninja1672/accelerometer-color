# Overview

For this project I wanted to work on app creation/development, at first I attempted Android Studios but found Expo to be easier due to being able to use Visual Studio Code. The app itself is very simple, it reads in data from an accelerometer on a phone and manipulates that data to allow for RGB changes in the background. Simply Rotating the phone changes the colors across the spectrum but shaking the phone can add significant number changes making it so you can get flashes of white or other colors. It is quite entertaining to watch but please be careful not to throw your phone!

[Code Demo](https://www.youtube.com/watch?v=922N3hIfF2w&ab_channel=HunterPowell)
Skip to the end of the video to see the app actually changing colors

# Development Environment

I used Visual Stuido Code as my IDE while using Expo to write the app itself 

When using Expo it imports a great deal, I mainly used the Accelerometer from expo-sensors, it allows an xyz coordinate data to be returned and used.

# Useful Websites
Documentations that were helpful
* [Expo Documentation](https://docs.expo.dev/)
* [React Documentation](https://reactjs.org/docs/getting-started.html)

# Future Work

* Add Gyroscope numbers being read
* Let the user pick to have the colors change based on whichever sensor
* Let the user tap the screen to stop on a certain color
