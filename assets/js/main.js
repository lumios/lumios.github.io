$(document).ready(function() {
	GH.loadRepos(document.getElementById("gh-repo-parent"));
});

var GH = {
	"loadRepos": function(parent) {
		$.getJSON("https://api.github.com/orgs/lumios/repos", function(data) {
			for (var i = 0; i < data.length; i++) {
				var repo = document.createElement("div"),
					title = document.createElement("h2"),
					desc = document.createElement("p"),
					link = document.createElement("a");

				repo.setAttribute("class", "gh-repo");

				link.setAttribute("href", data[i].html_url);

				title.innerHTML = data[i].name;
				desc.innerHTML = data[i].description;

				link.appendChild(title);
				link.appendChild(desc);

				repo.appendChild(link);

				parent.appendChild(repo);
			}
		});
	}
}