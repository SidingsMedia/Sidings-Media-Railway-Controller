Desktop Client
##############

Directory structure
-------------------

The project uses the following directory structure:

::

    SMRC-Desktop-Client/
    ├─ .github/
    ├─ .reuse/
    ├─ config/
    ├─ electron/
    ├─ LICENSES/
    ├─ public/
    ├─ scripts/
    ├─ src/

The first two directories are for project administration. They contain
config files for managing the repository. The ``config/`` directory
contains configuration ejected from create-react-app. This config
controls things like building the REACT files and running the
development server. The ``electron/`` directory contains the source
files for the electron app. Files like the preloader and main entry
point are located here. ``LICENSES/`` contains all the licences used in
this repository. They have been downloaded using the reuse tool.
``public/`` contains all of the files you want to be accessible to REACT
such as images. They will be copied into ``build/`` when the react files
are built. This directory contains all of the files created by
create-react-app. ``scripts/`` contains all of the scripts referenced by
package.json. This includes the scripts that were ejected by
react-scripts. ``src/`` contains all of the react source files that are
compiled into HTML when react is built.

Building
--------

To build app from source run ``yarn build``. You can also build the
electron code and REACT code separately by running ``yarn react:build``
and ``yarn electron:build`` respectivly. The built files are output to
the ``build/`` directory. REACT files are in the root of the ``build/``
directory with the electron files being located in the
``build/electron/`` sub directory. Note: if you are building react and
electron seperatly, react must be build first as it clears the
directory. If electron is built first any files that were created will
be deleted when react is built.

Running
-------

To run the app in development mode use the command
``yarn electron:dev``. This will start the REACT development server on
``localhost:3000`` and start the electron app. It will also monitor the
electron files for changes and reload electron if any are detected.
There is no need to build the app to run it in development mode as the
electron files are built automatically. The REACT files are not built as
they are served by the development server.

Packaging
---------

Packaging the app can be done using the scripts availibe in
package.json. Simply use the command
``yarn electron:package:<platform>`` where ``<platform>`` is one of
``mac``, ``win`` or ``linux``. There is no need to build the project
before running these commands as this is done during packaging. The
compiled binarys will then be availible in the ``dist/`` directory. The
unpacked files are located in ``dist/<platform>-unpacked``. An installer
is also provided in the ``dist/`` directory.

.. toctree::
    :caption: Desktop Client
    :maxdepth: 2

    desktop-client/preload-api