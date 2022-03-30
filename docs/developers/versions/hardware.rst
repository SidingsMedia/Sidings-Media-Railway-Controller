Hardware Versions
-----------------

Versions for hardware use the following principles:
``Major``:
This is any hardware change that would mean that the current stable
firmware will not work with the device.
``Minor``:
This is any hardware change that means that the current stable firmware
for that board will continue to work but any new feature may not be
accessible. For example, an LED was added to a previously unused GPIO
pin. This does not affect any other functions but the LED will not be
used until a firmware upgrade has been made.
``Patch``:
This is reserved for fixing errors in schematics only.