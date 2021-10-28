Directory structure
-------------------

The logos repository uses the following directory structure:

.. code-block:: none

	SMRC-logos/
	├─ .github/
	├─ .reuse/
	├─ LICENSES/
	├─ rendered/

The first three files are used for repo administration. They are the same as
in all of the other official SMRC projects. The ``.github/`` directory contains
configuration files for functions such as workflows. The ``.reuse/`` directory 
contains a dep5 file that covers all of the logos and other images without
having to add a ``.licence`` file for each image. ``LICENSES/`` contains all 
of the licences used in the repository. 

All of the SVG files should be placed in the root of the project. The ``rendered/``
directory contains all rendered versions of the SVG files in the document root.
The files should be named in the following format: 

.. code-block:: none

	<name>-<size>.<format>

Here is an example for a logo with the filename ``track-bw-square.svg`` rendered at
a size of 192 pixels by 192 pixels in the portable network graphics (PNG) format.

.. code-block:: none
	
	track-bw-square-192x192.png

There are a few exceptions to this rule, especially regarding favicons. Favicon files
should not follow the rule defined previously and should instead be named in the 
form ``favicon.<format>``.