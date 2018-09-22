var team = JSON.parse(teamMembers);
var content = "<h1>Our Team</h1><br>"
for (var i = 0; i < team.length; i++) {
	content += "<div class='team'><a href='mailto:"+team[i].email+"'><img src='"+team[i].image+"' alt='"+team[i].name+"'></a><h2>"+team[i].name+"</h2><p><a href='mailto:"+team[i].email+"'>"+team[i].email+"</a></p></div>"	
}
document.getElementById("container").innerHTML = content;