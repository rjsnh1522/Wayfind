### App to get location of people in a group



### How to run the project

#### Update expo
npm install expo@latest

#### upgrade dependecies
npx expo install --fix

#### Install dependencies
npm install

#### Start the project in development mode
npx expo start -c 

#### Run on Android emulator
npx expo run:android

#### Run on iOS simulator (Mac only)
npx expo run:ios

#### Build APK for Android
npx expo build:android

#### Build for iOS (requires Apple credentials)
npx expo build:ios




### SHA for MAP in expo

1. eas credentials -p android





### Tasks

[x] Create backend to fanout user location
[x] Create UI for the app in react native





# System Architecture

## Frontend

- **React Native app**: A mobile application developed using React Native.
- **Google Maps integration**: Displaying maps, markers, and routes within the app.
- **Real-time location updates**: Receiving and displaying live location updates of users or objects.
- **Custom markers with photos**: Using custom markers with images to represent users or points of interest on the map.
- **Direction routing**: Providing real-time navigation and route planning.

## Backend

- **WebSocket server for real-time updates**: A WebSocket server to push live updates (like location and status changes) to the app in real-time.
- **User authentication**: Secure user sign-in, registration, and session management.
- **Group management**: Managing user groups and their interactions, such as adding/removing users and group chat.
- **Location data storage**: Storing users' real-time location and history for future reference.
- **Photo storage**: Storing user-uploaded images for markers, profile pictures, etc.

## Database

- **Users**: User data including authentication credentials, profile information, and history.
- **Groups**: Group data including members, settings, and group history.
- **Location history**: Storing historical location data for tracking movements over time.
- **Routes**: Storing route information (directions, waypoints, etc.) for each user or group.

