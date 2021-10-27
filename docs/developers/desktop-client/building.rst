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