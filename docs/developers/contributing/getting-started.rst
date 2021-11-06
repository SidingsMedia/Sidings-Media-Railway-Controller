Getting Started
===============

Getting started on your contribution is often one of the hardest parts
of opensource, especially if your new. If you have a new idea for a
feature or have found a bug then you should `create an issue`_ in the
appropriate repository. More information on which parts of the project
belong to which repository can be found in the :doc:`/repo-info/repos`
section. We ask that you do this so that we can discuss your proposal
and decide if we want to incorporate the feature into the project. We
don't want you to spend hours working on your contribution only for it
to be rejected. Don't worry if we don't think that your idea should be
incorporated, this just means that we feel the project isn't quite ready
for such a feature, you never know, we may come back to you once the
project has progressed a little further to see if you still want to work
on your idea.

Forking and Cloning the repository
----------------------------------

In order to start making your changes you will first need to `create a
fork`_ of the repository you wish to make changes on. Once you have
created the fork you need to clone your version of the repository. This
is fairly simple but because we use `submodules`_, there are a few more
step that you must undertake to successfully pull all of the required
files to your local environment. The commands that you should run are as
follows:

.. code-block:: console

    $ git clone https://github.com/(username)/(repository).git
    $ git submodule init
    $ git submodule update

In this example we first clone the repository as normal. The next two
commands initilize the submodules and pull them from their repositories.
If you are running Git 2.13 or later you can run the following command
instead:

.. code-block:: console

    $ git clone --recurse-submodules https://github.com/(username)/(repository).git 
    
This command does all that was done with the previous three commands at
once. It doesn't really matter which you use as both methods do the same
thing.

Creating your issue
-------------------

This is a fairly simple process. Most of the repos will have pre-made
templates for you to fill in when creating an issue. If this is the case
then when you create an issue you will be given the option of creating a
feature or bug issue. Pick whichever one is appropriate. This will give
you a form to fill in. Just fill this in to the best of your ability,
remember, try to be detailed yet concise, we won't know what your
talking about if you just write something like ``Update request to
board`` but then again, we can't spend an hour reading one issue so
don't be too in depth. 

.. _issue-title:

Giving your issue a title
^^^^^^^^^^^^^^^^^^^^^^^^^

This is one of the most important parts of creating your issue as this
is the first thing we see when we scan down the list of new issues and
pull requests. Your issue title should be breif and to the point, whilst
also giving some idea about what you want to do. Using the example from
before, a good title would be something like:

.. code-block:: none

	[FEATURE]: Update AJAX requests to use fetch()

Notice the [FEATURE]: section of the title. This should be pre-filled if
you use the templates but if it isn't it should be one of the following:

*  [BUG]:
*  [FEATURE]:

You should choose the appropriate option for your issue. 

Describing your bug or feature
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
This is key to helping us understand what you want to do. As we said
before, you should try and be as detailed as possible whilst still being
breif. Something like this is great:

.. code-block:: none

	I want to update the AJAX requests in the desktop client to use the
	new fetch method instead of XMLHttpRequest. I think that this would
	be beneficial as the fetch API is more geared towards the modern web
	app and provides numerous helpfull features.

This clearly tells us what the contributer wants to do, replace all of
the AJAX calls with a new method, and it tells us why they think it
would be beneficial to the project, a more modern API designed for web
apps.

Describing alternatives
^^^^^^^^^^^^^^^^^^^^^^^
Although this may seem a bit unnecessary, it is actually very important
as it allows us to see if your idea is the best way of approaching the
issue. This allows us to get the overall best possible solution for the
project. Something like this is good:

.. code-block:: none

	I have considered keeping the original XMLHttpRequest calls. This
	would mean that large portions of the request code would not need to
	be rewritten but overtime these old sections of code would become
	harder to maintain.

This is good because it details both the pros and cons of the
alternative. This allows us to form a balanced assesement of what is
best for the project.

What to do next
---------------

After you have created your issue, all you need to do is wait. We know
this may seem a bit boring but we will try to respond to your issue
within a couple of days. It may take us a little longer if we are really
busy with a new release or lots of issues are comming in. We may not
give you a definite answer at first and we may want to discuss it
further with you. Don't worry, we are just trying to find out more about
your idea or bug so we can make a decision on it.

Once you have gotten the go ahead for your idea then you can start
making your changes. Just fork the repository and make your changes
there. Once your done you can :doc:`/developers/contributing/pr-guide`
proposing to merge your changes into the ``develop`` branch. You can
also create a pull request when you start working on your feature by
creating a :ref:`wip` pull request.
This isn't essential but it just makes it a bit easier for us to see how
your feature is progressing and assist you if you need any help.

.. _`submodules`: https://git-scm.com/book/en/v2/Git-Tools-Submodules
.. _`create a fork`: https://docs.github.com/en/get-started/quickstart/fork-a-repo
.. _`create an issue`: https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue
