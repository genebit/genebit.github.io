

$.ajax({
    dataType: "json",
    url: "projects.json",
    success: function(result) {
        data = JSON.parse(JSON.stringify(result));

        for (var i = 0; i < data.PROJECTS.length; i++) {
            const content = `
                <div class="card">
                    <div class="card-body">
                        <h4>${data.PROJECTS[i].TITLE}</h4>
                        <p>${data.PROJECTS[i].TAGS}</p>
                        <br />
                        <p>${data.PROJECTS[i].DESCRIPTION}</p>
                    </div>
                    <div class="card-footer">
                        <a class="btn outline-dark" target="_blank" href="${data.PROJECTS[i].SOURCE_CODE}">Source Code</a>
                        <a class="btn outline-dark" target="_blank" href="${data.PROJECTS[i].WEB_LINK}">View!</a>
                    </div>
                </div>
            `
                        
            $("#import-projects").append(content);
        }
    }
});