# react-native-dev-tools

A bunch of react native tools to make your development a little more enjoyable.

## Usage

    $ dev <flag>

Options
--clean: Cleans up the React Native projects deeply:

1. Cleans up node modules
2. Cleans up all temp directories
3. Cleans up iOS folders
4. Cleans up Android folders
5. Resets the package manager cache

**--simios**: Displays the list of iOS simulators available. Selecting one will boot it with the app.

**--simand**: Displays the list of Android emulators available. Selecting one will boot it.

**--relios**: Build for release and run on attached iOS device.

**--reland**: Build for release and run on attached Android device.

**--deviceios**: Run the RN app on attached iOS device.

**--deviceand**: Run the RN app on attached Android device.

**--logios**: Display native logs in the console from an attached iOS device.

**--logand**: Display native logs in the console from an attached Android device.

**--update**: Checks and displays the node modules needing update.

## Examples

    $ dev --clean
