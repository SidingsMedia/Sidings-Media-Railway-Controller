Desktop Client Preload API
==========================

A number of API endpoints are made available to the render process by
the preloader script. These endpoints can be called by any script
running in the render process. They expose various methods and data
normally unavailable to the render process. To find out more about
preloaders and the render process as well as context isolation in
electron then see the electron `Context Isolation`_ tutorial. All of the
API endpoints are created under the window context and are defined in
``src/global.d.ts``.

window.control
--------------

This API handles all of the window control functions such as closing the
windows and alerting when the window comes into or out of focus. It is
primarily used on Windows based devices by the titlebar although the API
is still active on other operating systems.

Methods
^^^^^^^

The ``window.control`` API has the following methods.

window.control.registerIPC(channel, callback)
"""""""""""""""""""""""""""""""""""""""""""""

* channel - A string that represents the IPC channel. This should be the
    same as the ctrlChannel the Window class was initialized with.
* callback - A function that is called when an IPC message is received
    from the main process. 

This method registers the IPC handlers for window control features. It
also sets the channel name that the API should use when sending requests
to the main process. If this method is not called then features such as
detecting when the window goes in and out of focus or when it is
minimized or maximized will not work and requests sent to control the
window will be sent on the ``win-ctrl`` channel which may or may not
have any handlers registered and may cause errors in the main process
as well as the render process. If the ``window.control`` API is to be
used this method should be called as soon as possible after page load.

window.control.openDevTools()
""""""""""""""""""""""""""""""

This method opens the developer tools on the calling window. It is
equivalent to running ``this.win.openDevTools()`` in the main process.

window.control.closeDevTools()
""""""""""""""""""""""""""""""

This method closes the developer tools on the calling window. It is
equivalent to running ``this.win.closeDevTools()`` in the main process.

window.control.toggleDevTools()
""""""""""""""""""""""""""""""""

This method toggles the developer tools on the calling window. It is
equivalent to running ``this.win.toggleDevTools()`` in the main
process.

window.control.close()
"""""""""""""""""""""""

This method closes the calling window and if all other windows are
closed will exit the application. Note: this behaviour does not occur on
macOS based devices. It is equivalent to running ``this.win.close()`` in
the main process.

window.control.minimize()
""""""""""""""""""""""""""""""

This method minimizes the calling window. It is equivalent to running
``this.win.minimize()`` in the main process.

window.control.maximize()
""""""""""""""""""""""""""""""

This method maximizes the calling window. It is equivalent to running
``this.win.maximize()`` in the main process.

window.control.unMaximize()
""""""""""""""""""""""""""""""

This method restores the calling window. It is equivalent to running
``this.win.unmaximize()`` in the main process.

window.control.toggleFullScreen()
""""""""""""""""""""""""""""""""""

This method toggles full screen the calling window. It is equivalent to
running ``this.win.setFullScreen(true)`` or
``this.win.setFullScreen(false)`` in the main process.

Properties
^^^^^^^^^^

The ``window.control`` API has the following properties.

window.control.platform
""""""""""""""""""""""""

This is a string representation of the current platform that the
application is running on. It is equivalent to ``process.platform``.
More information on ``process.platform`` can be found in the `process`_
documentation available from NodeJS.


.. _`Context Isolation`: https://www.electronjs.org/docs/latest/tutorial/context-isolation
.. _`process`: https://nodejs.org/api/process.html#processplatform