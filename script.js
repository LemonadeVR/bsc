function redirect(to) {
	window.location.href = `./../${to}`;
}

function socialLink(platform) {
	if (platform == 'discord') {
		window.open('https://discordapp.com/users/866084333809958922', "_blank");
	}
	if (platform == 'email') {
		window.open('mailto:lemondoesstuff42@gmail.com', "_blank");
	}
	if (platform == 'beatsaver') {
		window.open('https://beatsaver.com/profile/4316534', "_blank");
	}
	if (platform == 'tiktok') {
		window.open('https://www.tiktok.com/@itslemonade_', "_blank");
	}
	if (platform == 'steam') {
		window.open('https://steamcommunity.com/id/reallemonade/', "_blank");
	}
	if (platform == 'github') {
		window.open('https://github.com/LemonadeVR', "_blank");
	}
	if (platform == 'reddit') {
		window.open('https://www.reddit.com/user/lemonadefr/', "_blank");
	}
	if (platform == 'itch') {
		window.open('https://totallylemonade.itch.io/', "_blank");
	}
}

function releases(project) {
	if (project == 'kott') {
		window.open('https://totallylemonade.itch.io/kittenonthetaskbar', "_blank");
	}
}