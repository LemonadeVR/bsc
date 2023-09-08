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


window.addEventListener('resize', adjustElementPositions);

function adjustElementPositions() {
  const container = document.querySelector('.container');
  const thumbnail = document.querySelector('.thumbnail');
  const ql = document.querySelector('.ql');

  const containerHeight = container.offsetHeight;
  const thumbnailHeight = thumbnail.offsetHeight;
  const qlHeight = ql.offsetHeight;

  const marginThumbnail = (containerHeight - thumbnailHeight) / 2;
  const marginQL = (containerHeight - qlHeight) / 2;

  thumbnail.style.marginTop = `${marginThumbnail}px`;
  thumbnail.style.marginBottom = `${marginThumbnail}px`;

  ql.style.marginTop = `${marginQL}px`;
  ql.style.marginBottom = `${marginQL}px`;
}

adjustElementPositions();
