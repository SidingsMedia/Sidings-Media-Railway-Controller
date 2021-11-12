Pull Request Guidelines
=======================

Creating your PR
----------------

For information on creating a pull request you should check out the
GitHub documentation on `creating a pull request`_. This will give you
the basics on how to create a PR from your branch to the repository.

Naming your PR
^^^^^^^^^^^^^^

Your PR name should be in the following format

.. code-block:: none

	<prefix>: <issue number> <issue name>

The prefix should be one of ``[FEATURE]`` or ``[BUG]``. These are the
same as when :ref:`creating an issue<issue-title>`. This prefix should
be followed by the issue number of the issue you created when you
proposed your feature. This is followed by the title of that same issue.
In the following example we are creating a pull request for the feature
entitled ``Update AJAX requests to use fetch()`` with an issue number of


.. code-block:: none

	[FEATURE]: #3 Update AJAX requests to use fetch()

By referencing the issue number it allows GitHub to automatically link
the issue to the pull request making tracing the origin of features far
easier. The repetition of the issue title in the PR title makes it
easier to manually link the PR to an issue. Note that if you are
creating a pull request for documentation that corresponds to a feature
you are adding in a separate repository you should refer to the
:ref:`doc-pr` section of :doc:`/developers/contributing/documentation`.

Describing your PR
^^^^^^^^^^^^^^^^^^

When you describe your PR to us, you should give us both a technical
description of how your feature works as well as giving us a more user
friendly description of the feature. You should make sure to describe
any UI changes that you have made, if applicable and should also make
any corresponding changes to the documentation. See
:doc:`/developers/contributing/documentation` for some more information
on how to create and submit documentation for your contribution.

Describing your tests
^^^^^^^^^^^^^^^^^^^^^

This is vital to getting your PR across the line. If you can't prove
that your contribution works and that it doesn't break anything else
then we won't be able to accept your contribution. When describing your
testing you should include your test configuration. Things like
operating system and node version are good things to include here if
they are relevant. You should include any relevant outputs that show the
feature working, screenshots and animated GIFs are great here. You
should also confirm that all existing tests complete as normal and
detail any new tests you have added to the test suite.

Referencing your issue
^^^^^^^^^^^^^^^^^^^^^^

As well as referencing your initial issue in the PR title, you should
also reference it in the body of your PR. Something like this is fine:

.. code-block:: none

    Added #3

It can either be ``Added`` or ``Fixed`` depending upon whether the PR is
for a feature or a bug.

.. _wip:

Work in progress
----------------

When you are working on your addition to the project, it may be helpful
for you to create a work in progress pull request. This allows us to
more easily see who is working on what features and it makes it easier
for us to give you a hand if you need any help. When creating a work in
progress PR there is no need to fill out all of the details in the
template. These only need to be filled in when you mark the PR ready for
review. You should replace the ``[FEATURE]:`` or ``[BUG]:`` prefix with
a ``[WIP]:`` prefix. You should also mark the PR as a draft. You can do
this whilst `creating a pull request`_ or by `converting a pull request
to draft`_. When you have finished making your changes then you should
mark the PR as ready for review and change the title prefix from
``[WIP]:`` to one of ``[FEATURE]:`` or ``[BUG]:``.

Checks
------

As with all other pull requests, you must make sure that your PR does
not break any checks. The most common errors that you will probably run
into when working on the project are issues with reuse compliance. This
just means that you have not added the correct licence descriptors to
each file. To find out how to do this you should consult the `reuse
spec`_ for more details on how to make a file reuse compliant.

.. _`creating a pull request`: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
.. _`converting a pull request to draft`: https://github.blog/changelog/2020-04-08-convert-pull-request-to-draft/
.. _`reuse spec`: https://reuse.software/spec/#copyright-and-licensing-information
