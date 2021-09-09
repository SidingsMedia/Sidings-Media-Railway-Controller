Sidings Media Railway Controller
================================

.. figure::https://raw.githubusercontent.com/SidingsMedia/SMRC-logos/main/track-bw-square-long.svg
    :alt: SMRC Project Logo

    SMRC Project Logo

Sidings Media Railway Controller aims to provide you a quick and easy
way of controlling your model railway from your computer without all of
the complications of DCC.


Repositories
------------

This project is split into multiple repositories. Each repo can be found
in the Sidings Media organization and are prefixed with SMRC. There are
repos for firmware, hardware and various clients. An extensive list can
be found below. All documentation for the project can be found in this
repo under the docs directory.

+-----------------------------------------------------+----------------------------------------------+------------+
| Repo URL                                            | Description                                  | Maintained |
+=====================================================+==============================================+============+
| https://github.com/SidingsMedia/SMRC-Desktop-Client | The cross platform desktop client            | Yes        |
+-----------------------------------------------------+----------------------------------------------+------------+
| https://github.com/SidingsMedia/SMRC-hardware       | All board designs and schematics             | Yes        |
+-----------------------------------------------------+----------------------------------------------+------------+
| https://github.com/SidingsMedia/SMRC-firmware       | All firmware for the boards                  | Yes        |
+-----------------------------------------------------+----------------------------------------------+------------+
| https://github.com/SidingsMedia/SMRC-logos          | The logos for the project                    | Yes        |
+-----------------------------------------------------+----------------------------------------------+------------+
| https://github.com/SidingsMedia/SMRC-bootloader     | The bootloaders for all official SMRC boards | Yes        |
+-----------------------------------------------------+----------------------------------------------+------------+
| https://github.com/SidingsMedia/SMRC-template       | The template for all SMRC repos              | Yes        |
+-----------------------------------------------------+----------------------------------------------+------------+


Licence
-------

All official SMRC projects (i.e all in the table above), use the
`REUSE`_ standard in order to communicate the correct licence for the
file. For those unfamiliar with the standard the licence for each file
can be found in one of three places. The licence will either be in a
comment block at the top of the file, in a ``.license`` file with the
same name as the file, or in the dep5 file located in the ``.reuse``
directory. If you are unsure of the licencing terms please email 
`contact@sidingsmedia.com`_.

.. _contact@sidingsmedia.com: mailto:contact@sidingsmedia.com
.. _REUSE: https://reuse.software

.. toctree::
    :caption: Boards
    :maxdepth: 2
    boards/firmware
    boards/hardware
    logos

.. toctree::
    :caption: Clients
    :maxdepth: 2
    clients/desktop-client

.. toctree::
    :caption: For developers
    :maxdepth: 3
    developers/logos
