Documenting your contribution
=============================

Documentation is vital to any project. Without it how would anyone know
how to use it? This is why, if you make changes that require modifying
the documentation, you must update the docs as well.

What changes need documenting
-----------------------------

Whilst this is not an extensive list of what changes would need
documenting, it should give you an idea of what types of changes would
need docs. If you are still unsure then feel free to ask a question on
the `SMRC-help`_ Gitter channel or send an email to
contact@sidingsmedia.com. You could also add a comment on your initial
issue but it will probably take longer for you to get a response. The
sort of changes that would require documentation changes are:

*  API changes
*  Class method or property changes
*  User interface changes

.. _doc-pr:

Creating a documentation pull request
-------------------------------------

.. note:: 

    This is only relevant for creating pull requests for documentation
    modifications created as a result of pull requests in other
    repositories. This does not cover creating ordinary pull requests.
    See the :doc:`/developers/contributing/pr-guide` for more
    information on creating normal pull requests.

When you make contributions to the project, you may have to update the
projects documentation. To do this you will need to open a separate pull
request in the ``Sidings Media Railway Controller`` repository. This
pull request does not have to follow the same standards as stipulated in
:doc:`/developers/contributing/pr-guide`. Instead you should follow the
formatting standards below.

Naming your PR
^^^^^^^^^^^^^^

In your PR title you should include the name and pull request number of
the PR which this documentation links to in the following format:

.. code-block:: none

    [PR]: SidingsMedia/<repo>#<pr number>

This helps us track which documentation is about which contribution.
Notice the ``[PR]`` prefix, this helps us differentiate a contribution
pull request from the general ``[FEATURE]`` and ``[BUG]`` which can also
appear in the docs repository. These two prefixes are used for when a PR
does not relate to a contribution in another repository.

Describing your PR
^^^^^^^^^^^^^^^^^^

You should give a short description of what you have changed. There is
no need to repeat what you put in your contribution PR here, all we need
is a short description of what you have changed or added. You should
also add a link to the PR in the other repo here as well. You should
check out `linking pull requests from other issues`_ for more
information on how to do this.

Checks
^^^^^^

As with all other pull requests, you must make sure that your PR does
not break any checks. The most common issue you will have with breaking
the checks is if you have misspelled any words in your documentation. It
may be that you have actually misspelled some words in which case you
should go back and fix your errors, you can see which words are marked
as incorrect by viewing the `workflow output`_. It may be the case that
the words marked as errors are not errors but technical language that is
not included in the standard dictionaries. In this case you should add
the word to one of the dictionary files in the ``dictionaries/``
directory.

You may also run into issues with reuse compliance. This just means that
you have not added the correct licence descriptors to each file. To find
out how to do this you should consult the `reuse spec`_ for more details
on how to make a file reuse compliant.

.. _`SMRC-help`: https://gitter.im/SidingsMedia/SMRC-help?utm_source=share-link&utm_medium=link&utm_campaign=share-link
.. _`linking pull requests from other issues`: https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#issues-and-pull-requests
.. _`workflow output`: https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures
.. _`reuse spec`: https://reuse.software/spec/#copyright-and-licensing-information