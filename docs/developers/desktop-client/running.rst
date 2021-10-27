Running
-------

To run the app in development mode use the command
``yarn electron:dev``. This will start the REACT development server on
``localhost:3000`` and start the electron app. It will also monitor the
electron files for changes and reload electron if any are detected.
There is no need to build the app to run it in development mode as the
electron files are built automatically. The REACT files are not built as
they are served by the development server.
