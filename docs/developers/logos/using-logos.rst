Using the Logos
===============

Adding the repository
---------------------

Using the logos in the SMRC-logos repository is fairly simple. All you need
to do is add the repository as a submodule in your projects repository using
the following commands:

.. code-block:: none

	$ git submodule add https://github.com/SidingsMedia/SMRC-logos 

You can then commit your changes and start using the logos.

More information about git submodule and instructions on some advanced features
can be found in Git's `documentation`_. 

After you have added the logos repo as a submodule you can reference the logos
in your code, just use the path to the logos directory within your project.

Updating the repository
-----------------------

To update your submodule to the latest commit you can run the following command:

.. code-block:: none

	$ git submodule update

After you have updated the submodule you will just need to commit it and then
you will be able to use the latest logos.

.. _`documentation`: https://git-scm.com/book/en/v2/Git-Tools-Submodules