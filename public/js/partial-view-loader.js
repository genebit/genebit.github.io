// NOTES: To load a partial view, on HTML use <section insert-{partialViewName}></section>
// Note that the partialViewName should not include the _ at start.

$(document).ready(function () {
	const path = {
		// Add Partial views here
		sidebar: "/public/shared/_sidebar.html",
	}
	$.each(path, function (key, value) {
		loadPartialView(value, `insert-${key}`)
	})
})
function loadPartialView(path, dataAttr) {
	fetch(path)
		.then((response) => response.text())
		.then((html) => {
			let parser = new DOMParser()
			let doc = parser.parseFromString(html, "text/html")
			$(`section[${dataAttr}]`).append(doc.documentElement)
		})
		.catch((error) => {
			console.warn("Failed to load partial view", error)
		})
}
