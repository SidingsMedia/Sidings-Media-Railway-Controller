// SPDX-FileCopyrightText: Copyright (c) 2021 Sidings Media

// SPDX-License-Identifier: MIT

function warnUnstable() {
	var warning = document.createElement('div');
	warning.setAttribute('class', 'admonition danger');
	fetch('https://raw.githubusercontent.com/SidingsMedia/Sidings-Media-Railway-Controller/stable/versions.json').then(response => response.json()).then(data => {
		var version = window.location.pathname.split('/')[4]
		switch (data[version]) {
			case 'stable':
				return
			case 'pre-release':
				warning.innerHTML = "<p class='first admonition-title'>Note</p> " +
					"<p class='last'> " +
					"This document is a pre-release version and as such this documentation may be unstable and may change. " +
					"Documentation is available for the <a href='/projects/smrc/en/stable/'>current stable release</a> and previous versions can be selected by using the &ldquo;v:&rdquo; menu in the navigation pane on the left." +
					"</p>";
				break
			case 'unstable':
				warning.innerHTML = "<p class='first admonition-title'>Note</p> " +
					"<p class='last'> " +
					"This documentation is a development version and as such it is unstable and is prone to change at any time. " +
					"Documentation is available for the <a href='/projects/smrc/en/stable/'>current stable release</a> and previous versions can be selected by using the &ldquo;v:&rdquo; menu in the navigation pane on the left." +
					"</p>";
				break
			case 'unsupported':
				warning.innerHTML = "<p class='first admonition-title'>Note</p> " +
					"<p class='last'> " +
					"This documentation is now unsupported and is outdated. You should use the current stable release instead." +
					"Documentation is available for the <a href='/projects/smrc/en/stable/'>current stable release</a> and previous versions can be selected by using the &ldquo;v:&rdquo; menu in the navigation pane on the left." +
					"</p>";
				break
		}
	})
	var parent = document.querySelector('div.document')
	parent.insertBefore(warning, parent.firstChild);
}

document.addEventListener('DOMContentLoaded', warnUnstable);