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
		"This document is for an <strong>unreleased development version</strong>. " +
		"Documentation is available for the <a href='/en/stable/'>current stable release</a>, " +
		"or for older versions through the &ldquo;v:&rdquo; menu at bottom left." +
		"</p>";
  } else{
	warning.innerHTML = "<p class='first admonition-title'>Note</p> " +
	"<p class='last'> " +
	"This document is for the latest version. This version may be unstable so it is reccomended that the stable version is used. " +
	"Documentation is available for the <a href='/en/stable/'>current stable release</a>, " +
	"or for older versions through the &ldquo;v:&rdquo; menu at bottom left." +
	"</p>";
  }

  var parent = document.querySelector('div.document')
  parent.insertBefore(warning, parent.firstChild);
}

document.addEventListener('DOMContentLoaded', warnUnstable);