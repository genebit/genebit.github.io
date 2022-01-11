$(document).ready(function () {
	$.ajax({
		dataType: 'json',
		url: 'projects.json',
		success: function (result) {
			var data = JSON.parse(JSON.stringify(result))

			for (var i = 0; i < data.PROJECTS.length; i++) {
				var category = data.PROJECTS
				var content = `
				<div class="col-md-6" style="margin-top: 1rem">
				    <div class="card">
				        <img src="${category[i].IMAGE_SRC}" />
				        <div class="card-body">
				            <h5 class="card-title">${category[i].TITLE}</h5>
				            <h6 class="card-subtitle mb-2 text-muted">${category[i].TAGS}</h6>
				            <p class="card-text">${category[i].DESCRIPTION}</p>
				            <p>View project on:</p>
                            <div class="row">
                                <div class="col-md-12">
                                    <a class="btn btn-outline-dark" href=${category[i].SOURCE_CODE_LINK} target="_blank"><i class="fab fa-github"></i> Source Code</a>
                                    <a class="btn btn-success" href=${category[i].WEB_LINK} target="_blank">Web</a>
                                </div>
                            </div>
				        </div>
				    </div>
				</div>
				`
				$('#projects').append(content)
			}
		},
	})
})
