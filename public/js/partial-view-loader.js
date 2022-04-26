// NOTES: To load a partial view, on HTML use <section insert-{partialViewName}></section>
// Note that the partialViewName should not include the _ at start.

$(document).ready(() => {
	const path = {
		// Add Partial views here
		sidebar: "/views/shared/_sidebar.html",
		sidebarprofile: "/views/shared/_sidebar-profile.html",
	}
	$.each(path, (key, value) => {
		loadPartialView(value, `insert-${key}`)
	})
})
function loadPartialView(path, dataAttr) {
	fetch(path)
		.then((response) => response.text())
		.then((html) => {
			console.log(html)
			$(`[${dataAttr}]`).append(html)
		})
		.catch((error) => {
			console.warn("Failed to load partial view", error)
		})
}
