# Soulcards

This app is the final project for the React Native course from the Udacity's React Nanodegree, where we had to build a flashcard mobile app.

The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks, for
study or learn subjects.

**App tested and programmed targeting Android devices only**.

## Dependencies

- `expo`
- `mobx`
- `mobx-react`
- `prop-types`
- `react`
- `react-native`
- `react-navigation`
- `uuid`

Check the [package.json](package.json) file for detailed info about
`dependencies`, `devDependencies` and related bits.

## Installation

Clone the GitHub repository and use `yarn` to install the project dependencies.

```sh
git clone https://github.com/soulchainer/soulcards.git
cd soulcards
yarn
```

## Launch the project

Lauch the project executing

```sh
yarn start
```

After the package ends compiling, it will generate a QR code, that can be
scanned with the
[Android Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent)
to run the app directly in our device.
While this script is running, the app live reloads in the device, showing any
new changes.

## Extra comments

For this third project in the React Nanodegree path the use of Redux wasn't
required, so I took the opportunity to learn another state management library
I was wanting to try for a long time: [MobX](https://mobx.js.org/).

It was a joy and, probably, I will use it again. So powerful, flexible and easy
to use :).

I also enjoyed the most this last project of the React Nanodegree because
React Native. It was a joy to learn something new over the foundations of React.
Still, even when you can do some things with RN, I think is still inmature.
It has so much to improve and I hope it will improve greatly over the time :).

## License

Soulcards is licensed under the [GNU GPLv3](LICENSE) license.
