// SPDX-FileCopyrightText: Copyright (c) 2021 Sidings Media

// SPDX-License-Identifier: MIT

function warnUnstable() {
  var warning = document.createElement('div');
  warning.setAttribute('class', 'admonition danger');
  if(!window.READTHEDOCS_DATA){
	  return
  }else if (window.READTHEDOCS_DATA.version === 'develop'){
	warning.innerHTML = "<p class='first admonition-title'>Note</p> " +
		"<p class='last'> " +
		"This documentation is a development version and as such it is unstable and is prone to change at any time. " +
		"Documentation is available for the <a href='/projects/smrc/en/stable/'>current stable release</a> and previous versions can be selected by using the &ldquo;v:&rdquo; menu in the navigation pane on the left."
		+ "</p>";
  } else{
	warning.innerHTML = "<p class='first admonition-title'>Note</p> " +
	"<p class='last'> " +
	"This document is a pre-release version and as such this documentation may be unstable and may change. " +
	"Documentation is available for the <a href='/projects/smrc/en/stable/'>current stable release</a> and previous versions can be selected by using the &ldquo;v:&rdquo; menu in the navigation pane on the left." +
	"</p>";
  }

  var parent = document.querySelector('div.document')
  parent.insertBefore(warning, parent.firstChild);
}

document.addEventListener('DOMContentLoaded', warnUnstable);