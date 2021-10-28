Directory structure
-------------------

The project uses the following directory structure:

.. code-block:: none
	
    SMRC-Desktop-Client/
	├─ .github/
	├─ .reuse/
	├─ config/
	├─ LICENSES/
	├─ main-process/
	├─ public/
	├─ scripts/
	├─ src/
	│  ├─ styles/
	│  ├─ ui/


The first two directories are for project administration. They contain
config files for managing the repository. The ``config/`` directory
contains configuration ejected from create-react-app. This config
controls things like building the REACT files and running the
development server. The ``main-process/`` directory contains the source
files for the electron app and the main process. Files like the preloader and main entry
point are located here. ``LICENSES/`` contains all the licences used in
this repository. They have been downloaded using the reuse tool.
``public/`` contains all of the files you want to be accessible to REACT
such as images. They will be copied into ``build/`` when the react files
are built. This directory contains all of the files created by
create-react-app. ``scripts/`` contains all of the scripts referenced by
package.json. This includes the scripts that were ejected by
react-scripts. ``src/`` contains two sub-directories, ``styles/`` and ``ui/``.
``styles/`` contains all of the styles for the react components. ``ui/`` contains 
the react components themselves.