// NOTES: To load a partial view, on HTML use <section insert-{partialViewName}></section>
// Note that the partialViewName should not include the _ at start.

$(document).ready(() => {
	const path = {
		// Add Partial views here
		sidebar: "/_sidebar.html",
		sidebarprofile: "/_sidebar-profile.html",
	}
	$.each(path, (key, value) => {
		loadPartialView(value, `insert-${key}`)
	})
})
function loadPartialView(path, dataAttr) {
	fetch(path)
		.then((response) => response.text())
		.then((html) => {
			$(`[${dataAttr}]`).append(html)
		})
		.catch((error) => {
			console.warn("Failed to load partial view", error)
		})
}
