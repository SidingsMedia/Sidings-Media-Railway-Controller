Main Process Classes
====================

A number of classes are made available to the main process of the
desktop client. These can all be imported into the main process file by
using a standard typescript import.

Detailed information on each class along with a description of it's
methods and parameters can be found below.

Window
------

This class is responsible for creating and controlling each window of
the application. It is important to note that this class does not extend
the electron BrowserWindow class. More information on why this shouldn't
be done can be found in electron issues `#23`_ and `#8898`_. It instead
creates an instance of the BrowserWindow class it's self and controls
that. There are a number of public methods made available by the class
as well as a few public properties.

new Window([windowSettings], ctrlChannel)
""""""""""""""""""""""""""""""""""""""""""

* windowSettings - An object that provides the settings for 
  the BrowserWindow instance. The object may have any of the properties
  specified in the `BrowserWindow options`_ documentation. Note that
  another property has been added to the windowSettings object. This is
  detailed below:

  * url - A string with the URL from which the window is to load it's
    initial content. Required

* ctrlChannel - A string that specifies the IPC channel to use to send
  and receive window control messages.
    
Instance Methods
^^^^^^^^^^^^^^^^

openDevTools()
""""""""""""""

Opens the window's chrome developer tools.

closeDevTools()
""""""""""""""""

Closes the window's developer tools.

toggleDevTools()
""""""""""""""""

Toggles the window's developer tools. If they are not open this method
will open them else if they are open they will be closed.

getFocus()
""""""""""

Returns ``Boolean`` - Whether the window is in focus

close()
""""""""

Attempts to close the window. This process can be prevented by creating
an event listener that prevents the default action. For more information
on this see the `BrowserWindow Event: Close`_ documentation available
from the `Electron documentation`_.


minimize()
""""""""""

Minimizes the window.

maximize()
""""""""""

Maximizes the window. This method also emits the ``maximize`` event as a
work around for a bug that is present on linux systems. See Electron
issue `#28699`_ for more information on this bug.


unMaximize()
""""""""""""

Unmaximizes the window. THis method also emits the ``unmaximize`` event
as a work around for `#28699`_.

isMaximized()
""""""""""""""

Returns ``Boolean`` - Whether the window is maximized.

toggleFullScreen()
""""""""""""""""""

Toggles the window full screen.

Instance Properties
^^^^^^^^^^^^^^^^^^^

There are no publicly available properties for the `Window` class. 

.. _`#28699`: https://github.com/electron/electron/issues/28699
.. _`#23`: https://github.com/electron/electron/issues/23 
.. _`#8898`: https://github.com/electron/electron/issues/8898
.. _`BrowserWindow options`: https://www.electronjs.org/docs/latest/api/browser-window#new-browserwindowoptions
.. _`BrowserWindow Event: Close`: https://www.electronjs.org/docs/latest/api/browser-window#event-close
.. _`Electron documentation`: https://www.electronjs.org/docs/latest/