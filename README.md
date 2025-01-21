# Sign Language Interpreter

Many people around the world use sign language to communicate. Communication occurs only when a message is sent and also received. Sign-language users are able to efficiently converse when the observer understands sign-language. This is usually not the case in reality. Hence, this tool would be extremely helpful to interpret and pronounce sign language to the listener. The tool would allow sign-language users to communicate with more people and enable them to more easily take part in society.

## Table of Contents

- [About](#about)
- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## About

Sign-Language-Interpreter aims to allow a fluent sign-language user to sign into a camera and have the user's message be spoken aloud.  
*Currently this project has been implemented as a demo website running on [HugggingFace](https://huggingface.co/spaces/HuggingFace-SK/Sign-Language-Interpreter). To reach a wider audience and eliminate dependency on internet availability, this AndroidJS build is being developed*

## Built With

Sign-Language-Interpreter was built with these technologies and libraries:

- [AndroidJS](https://github.com/android-js/)
- [Text2Wav](https://www.npmjs.com/package/text2wav)

## Installation

To install Sign-Language-Interpreter, you first need the Android APK file. You may compile it yourself with AndroidJS, or use one of the [releases](https://github.com/Shantanu-Khedkar/silangint/tags) provided in this repository.

### Compile

If you would like to compile it yourself, first set up the environment by downloading [Node.js](https://nodejs.org/en) on your host machine, and install the [androidjs](https://www.npmjs.com/package/androidjs) and [androidjs-builder](https://www.npmjs.com/package/androidjs-builder) modules.

 `$ npm install androidjs`  
`$ npm install -g androidjs-builder`  

You may also need to install the Java Development Kit if you are running on Debian or its derivatives.  

`$ sudo apt install default-jdk`  

Download, then extract one of the tarballs in the [releases](https://github.com/Shantanu-Khedkar/silangint/tags).  

`$ tar -xvzf silangint-xyz.tar.gz`  

Or clone the repository to get the most up-to-date version of the code.  

`$ git clone https://github.com/Shantanu-Khedkar/silangint.git`  

Once you have the source, you can `$ cd silangint` and install all its dependancies by running `$ npm install`.
Temporarily move the .git repo out of the directory to skip including it in the APK.

`$ mv .git ../`
  
Finally, you can build the APK.  

 `$ androidjs build`  
 
The APK will build and be stored in `dist/SpeakSign.apk`

### Install

Then, you need to set the 'Allow Installation From Unknown Sources' setting in your Android device. Once the APK is downloaded to the device, you can simply install it with your package installer. For more information visit https://www.xda-developers.com/how-to-sideload-install-android-app-apk/

## Usage

The user may sign into a camera and have the signed letters detected by the program.  
Fingerspelling is supported as including many signs in the model would require more resources. Fingerspelling is simply using a standard set of stationary signs as letters and making words from the ground up.

A complete word based implementation is planned. Sign-language ommits many auxiliary words of English and mostly consists of nouns and verbs. The detected words may not make complete sense if directly pronounced. Hence, an LLM model will help to fill in the missing words or restructure the sentence by inferring its intended meaning. The restructured sentence will be spoken.

## License

This project is licensed under the [GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html) or greater.
