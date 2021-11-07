Bootloader
==========

Repository
----------

The repository for the bootloaders can be located at https://github.com/SidingsMedia/SMRC-bootloader  

Use of bootloaders
------------------

The bootloader is used on all official SMRC boards (i.e all boards in the `SMRC-hardware repo`_). It can also be used in your own SMRC boards.

.. _`SMRC-hardware repo`: https://github.com/SidingsMedia/SMRC-hardware

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
