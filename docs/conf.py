# -*- coding: utf-8 -*-
#
# Configuration file for the Sphinx documentation builder.
#
# This file does only contain a selection of the most common options. For a
# full list see the documentation:
# http://www.sphinx-doc.org/en/master/config

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))
import subprocess


# -- Project information -----------------------------------------------------

project = 'Sidings Media Railway Controller'
copyright = '2021, Sidings Media'
author = 'Sidings Media'

# Versions
# These may get over written later depending upon the branch and tags.
# The short X.Y version
version = ''
# The full version, including alpha/beta/rc tags
release = ''
warning = ''

revision = subprocess.check_output(
    ['git', 'rev-parse', '--short', 'HEAD']).strip().decode('ascii')
out = subprocess.check_output(["git", "branch"]).decode("utf8")
current = next(line for line in out.split("\n") if line.startswith("*"))
branch = current.strip("*").strip()

if branch == 'develop':
    version = f'DEV-{revision}'
    release = f'DEV-{revision}'
    warning = 'This documentation is a development version and as such it is unstable and is prone to change at any time. Stable documentation can be found at https://docs.sidingsmedia.com/projects/smrc/en/stable/.'
    revisionNotice = f"Revision {revision} on branch {branch}"
elif branch == 'main':
    version = f'Latest-{revision}'
    release = f'Latest-{revision}'
    warning = 'This document is a pre-release version and as such this documentation may be unstable and may change. Stable documentation can be found at https://docs.sidingsmedia.com/projects/smrc/en/stable/.'
    revisionNotice = f"Revision {revision} on branch {branch}"
else:
    # Try to get the current tag
    try:
        tag = subprocess.check_output(
            ['git', 'describe', '--tags', '--abbrev=0', '--exact-match']).strip().decode('ascii')
    except subprocess.CalledProcessError:
        tag = None
    if tag is None:
        revisionNotice = f"Revision {revision} on branch {branch}"
        if version == '':
            version = f"{branch.upper()}-{revision}"
        if release == '':
            release = f"{branch.upper()}-{revision}"
    
    else:
        # The short X.Y version
        version = tag
        # The full version, including alpha/beta/rc tags
        release = tag
        warning = ''
        revisionNotice = f"Revision {revision} on tag {tag}"

# -- General configuration ---------------------------------------------------

# If your documentation needs a minimal Sphinx version, state it here.
#
# needs_sphinx = '1.0'

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = ['sphinxcontrib.bibtex']

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# The suffix(es) of source filenames.
# You can specify multiple suffix as a list of string:
#
# source_suffix = ['.rst', '.md']
source_suffix = ['.rst']

# The master toctree document.
master_doc = 'index'

# The language for content autogenerated by Sphinx. Refer to documentation
# for a list of supported languages.
#
# This is also used if you do content translation via gettext catalogs.
# Usually you set "language" from the command line for these cases.
language = None

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# The name of the Pygments (syntax highlighting) style to use.
pygments_style = None


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'sphinx_rtd_theme'

# Theme options are theme-specific and customize the look and feel of a theme
# further.  For a list of options available for each theme, see the
# documentation.
#
html_theme_options = {
    'canonical_url': '',
    'logo_only': False,
    'display_version': True,
    'prev_next_buttons_location': 'both',
    'style_external_links': True,
    'vcs_pageview_mode': 'raw_github',
    # Toc options
    'collapse_navigation': True,
    'sticky_navigation': True,
    'navigation_depth': 3,
    'includehidden': True,
    'titles_only': False,
}

html_theme_path = ["_themes", ]

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

html_js_files = [
    'stable-warning.js',
]

html_logo = '_static/track-bw-square-192.png'
html_favicon = '_static/favicon.ico'

# Custom sidebar templates, must be a dictionary that maps document names
# to template names.
#
# The default sidebars (for documents that don't match any pattern) are
# defined by theme itself.  Builtin themes are using these templates by
# default: ``['localtoc.html', 'relations.html', 'sourcelink.html',
# 'searchbox.html']``.
#
# html_sidebars = {}


# -- Options for HTMLHelp output ---------------------------------------------

# Output file base name for HTML help builder.
htmlhelp_basename = 'SMRC'


# -- Options for LaTeX output ------------------------------------------------

latex_elements = {
    # The paper size ('letterpaper' or 'a4paper').
    #
    'papersize': 'a4paper',

    # The font size ('10pt', '11pt' or '12pt').
    #
    # 'pointsize': '10pt',

    # Additional stuff for the LaTeX preamble.
    'preamble': f'''
        %%%%%%%%%%%%%%%%%%%% Meher %%%%%%%%%%%%%%%%%%
        %%%add number to subsubsection 2=subsection, 3=subsubsection
        %%% below subsubsection is not good idea.
        \\setcounter{{secnumdepth}}{{3}}
        %
        %%%% Table of content upto 2=subsection, 3=subsubsection
        \\setcounter{{tocdepth}}{{2}}

        \\usepackage{{amsmath,amsfonts,amssymb,amsthm}}
        \\usepackage{{graphicx}}

        %%% reduce spaces for Table of contents, figures and tables
        %%% it is used "\\addtocontents{{toc}}{{\\vskip -1.2cm}}" etc. in the document
        \\usepackage[notlot,nottoc,notlof]{{}}

        \\usepackage{{color}}
        \\usepackage{{transparent}}
        \\usepackage{{eso-pic}}
        \\usepackage{{lipsum}}

        \\usepackage{{footnotebackref}} %%link at the footnote to go to the place of footnote in the text

        %% spacing between line
        \\usepackage{{setspace}}
        %%%%\\onehalfspacing
        %%%%\\doublespacing
        \\singlespacing


        %%% page number
        \\fancyfoot[CO, CE]{{\\thepage}}


        \\RequirePackage{{tocbibind}} %%% comment this to remove page number for following
        \\addto\\captionsenglish{{\\renewcommand{{\\contentsname}}{{Table of contents}}}}
        % \\addto\\captionsenglish{{\\renewcommand{{\\chaptername}}{{Chapter}}}}
		%%%% Custom copyright
		\\fancyfoot[LO,RE]{{Copyright \\textcopyright\\ 2021, Sidings Media. Licensed under CC-BY-SA-4.0}}
		\\fancypagestyle{{plain}}{{
		\\fancyhf{{}}
		\\fancyfoot[LE,RO]{{\\thepage}}
		\\renewcommand{{\\headrulewidth}}{{0pt}}
		\\renewcommand{{\\footrulewidth}}{{0.4pt}}
		% add copyright stuff for example at left of footer on odd pages,
		% which is the case for chapter opening page by default
        \\fancyfoot[LO,RE]{{Copyright \\textcopyright\\ 2021, Sidings
        Media. Licensed under CC-BY-SA-4.0\\\\{revisionNotice}}}}}
		}}
    ''',
    'maketitle': f'''
	\\newcommand\\sphinxbackoftitlepage{{{{This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\\\\\\\\{warning}}}}}\\sphinxmaketitle
	'''
    # Latex figure (float) alignment
    #
    # 'figure_align': 'htbp',
}

latex_show_urls = 'footnote'

# Grouping the document tree into LaTeX files. List of tuples
# (source start file, target name, title,
#  author, documentclass [howto, manual, or own class]).
latex_documents = [
    (master_doc, 'SMRC.tex', 'Sidings Media Railway Controller',
     'SMRC Team', 'manual'),
]


# -- Options for manual page output ------------------------------------------

# One entry per manual page. List of tuples
# (source start file, name, description, authors, manual section).
man_pages = [
    (master_doc, 'smrc', 'Sidings Media Railway Controller',
     [author], 1)
]


# -- Options for Texinfo output ----------------------------------------------

# Grouping the document tree into Texinfo files. List of tuples
# (source start file, target name, title, author,
#  dir menu entry, description, category)
texinfo_documents = [
    (master_doc, 'smrc', 'Sidings Media Railway Controller',
     author, 'SidingsMediaDocs', 'Documentation relating to Sidings Media Railway Controller',
     'Miscellaneous'),
]


# -- Options for Epub output -------------------------------------------------

# Bibliographic Dublin Core info.
epub_title = project

# The unique identifier of the text. This can be a ISBN number
# or the project homepage.
#
# epub_identifier = ''

# A unique identification for the text.
#
# epub_uid = ''

# A list of files that should not be packed into the epub file.
epub_exclude_files = ['search.html']
