Packaging
---------

Packaging the app can be done using the scripts available in
package.json. Simply use the command
``yarn electron:package:<platform>`` where ``<platform>`` is one of
``mac``, ``win`` or ``linux``. There is no need to build the project
before running these commands as this is done during packaging. The
compiled binaries will then be available in the ``dist/`` directory. The
unpacked files are located in ``dist/<platform>-unpacked``. An installer
is also provided in the ``dist/`` directory.