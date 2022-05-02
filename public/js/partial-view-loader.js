// NOTES: To load a partial view, on HTML use <section insert-{partialViewName}></section>
// Note that the partialViewName should not include the _ at start.

$(document).ready(() => {
    const path = {
        // Add Partial views here
        sidebar: "/public/views/sidebar.txt",
        sidebarprofile: "/public/views/sidebar-profile.txt",
    }
    $.each(path, (key, value) => {
        loadPartialView(value, `insert-${key}`)
    })
})

function loadPartialView(file, dataAttr) {
    var rawFile = new XMLHttpRequest()

    rawFile.open("GET", file, false)
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText
                $(`[${dataAttr}]`).html(allText)
            }
        }
    }
    rawFile.send(null)
}
