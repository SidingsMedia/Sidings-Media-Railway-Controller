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
		"This documentation is unstable and is prone to change at any time." +
		"Documentation is available for the <a href='/en/stable/'>current stable release</a>, " +
		+ "</p>";
  } else{
	warning.innerHTML = "<p class='first admonition-title'>Note</p> " +
	"<p class='last'> " +
	"This document is for the latest version. This documentation may be unstable and may change." +
	"Documentation is available for the <a href='/en/stable/'>current stable release</a>, " +
	"</p>";
  }

  var parent = document.querySelector('div.document')
  parent.insertBefore(warning, parent.firstChild);
}

document.addEventListener('DOMContentLoaded', warnUnstable);