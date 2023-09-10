## Get started

1. npm i
2. npx expo start
3. Download the Expo Go app on your device [ios](https://itunes.apple.com/app/apple-store/id982107779) / [android](https://play.google.com/store/apps/details?id=host.exp.exponent)
4. Scan the QR code from your terminal. If using iOS do this from your camera app, if Android use "scan qr code" feature withing the Expo Go app.

## The brief

Our latest venture is to build out the definitive "movie quotes database". This app will be used by
movie lovers to review and vote on which movie quote should be named the "best move quote of
all time".
The first step is to build out the personal "movie quote ranking" feature

## Tasks

- [x] Allow the user to add a new movie quote to the app
- [x] Present the list of movie quotes the user has added, ordered by the users preference, with their favourite appearing at the top of the list
- [x] Display the movie quotes based on data persisted in the app (note - this does not need to link to an external database), and have the state persisted each time the order is changed. The latest state must be presented when the app is closed and re-opened
- [x] Be functional across iOS and Android platforms
- [x] Be functional, whether on a small mobile phone or a large tablet device

## Notes

- Early decision to utilise expo for _easy_ dev setup and QA
- Added jest for initial unit / component level tests
- A simple drawer system added to house the add form.
- Expo compatibility issues with drag and drop libraries (reanimated conflict) led me to implement a simplified ranking UX in order to stay within time boundaries.
- The UI is very raw, utilising basic styles I would have utilised a lib like [kitten](https://github.com/akveo/react-native-ui-kitten) for something more polished if there was more time to become familiar with it.
