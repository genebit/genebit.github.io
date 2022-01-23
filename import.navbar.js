$(document).ready(function () {
	const navbar = `
        <nav class="navbar">
            <div class="navbar-toggle">
                <i class="fa fa-bars"></i>
            </div>
            <div class="navlinks center">
                <li>
                    <a href="index.html"><i class="fa fa-home"></i> Home</a>
                </li>
                <li>
                    <a href="projects.html"><i class="fa fa-code"></i> Projects</a>
                </li>
                <li>
                    <a href="certificates"><i class="fa fa-certificate"></i> Certificates</a>
                </li>
                <li>
                    <a href="contacts"><i class="fa fa-address-book"></i> Contacts</a>
                </li>
            </div>
        </nav>
    `
	$('.import-navbar').append(navbar)
})
