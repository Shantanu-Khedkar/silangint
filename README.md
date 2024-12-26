# Sign Language Interpreter
Many people around the world use sign language to communicate. Communication occurs only when a message is sent and also received. Sign-language users are able to effeciently converse when the observer understands sign-language. This is usually not the case in reality. Hence, this tool would be extremely helpful to interpret and pronounce sign language to the listener. The tool would allow sign-language users to communicate with more people and enable them to more easily take part in society. 
#

## Table of Contents
- [About](#about)
- [Built With](#built-with)
- [Usage](#usage)
- [License](#license)
#
## About

Sign-Language-Interpreter aims to allow a fluent sign-language user to sign into a camera and have the user's message be spoken aloud. The program finds hand location data using [MediaPipe](https://ai.google.dev/edge/mediapipe/solutions/guide).
#
## Built With
Sign-Language-Interpreter was built with these technologies and libraries:
- [React-Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
#
## Usage

The user may sign into a camera and have the signed letters detected by the program. 
Fingerspelling is supported as including many signs in the model would require more resources. Fingerspelling is simply using a standard set of stationary signs as letters and making words from the ground up.

A complete word based implementation is planned. Sign-language ommits many auxiliary words of English and mostly consists of nouns and verbs. The detected words may not make complete sense if directly pronounced. Hence, an LLM model will help to fill in the missing words or restructure the sentence by inferring its intended meaning. The restructured sentence will be spoken.


#
## License

This project is licensed under the [GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html) or greater.
