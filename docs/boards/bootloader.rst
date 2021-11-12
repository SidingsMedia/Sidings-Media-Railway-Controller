Bootloader
==========

Repository
----------

The source files for the bootloaders can be located in the
`SMRC-bootloader`_ repository.  

Use of bootloaders
------------------

The bootloader is used on all official SMRC boards (i.e all boards in
the `SMRC-hardware`_) repository. It can also be used in your own SMRC
boards.


General Requirements
--------------------

- Must support updating firmware over USB
- Must make available to the firmware the current bootloader version

Main board
----------

.. _requirements-mainboard:

Requirements
^^^^^^^^^^^^

- Must verify that the firmware being uploaded is correct for the processor

Other Boards
------------

.. _requirements-otherboard:

Requirements
^^^^^^^^^^^^

- Must verify that the firmware being uploaded is correct for the specific board

.. _`SMRC-hardware`: https://github.com/SidingsMedia/SMRC-hardware
.. _`SMRC-bootloader`: https://github.com/SidingsMedia/SMRC-bootloader
