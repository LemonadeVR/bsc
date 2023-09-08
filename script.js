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


setInterval(() => {
const divElements = document.getElementsByClassName('container');
const divElement = divElements[0];
const computedStyle = window.getComputedStyle(divElement);
const divWidth = divElement.offsetWidth;
const paddingLeft = parseFloat(computedStyle.paddingLeft);
const paddingRight = parseFloat(computedStyle.paddingRight);
const borderLeft = parseFloat(computedStyle.borderLeftWidth);
const borderRight = parseFloat(computedStyle.borderRightWidth);
const totalWidth = divWidth + paddingLeft + paddingRight + borderLeft + borderRight;


const qlElements = document.getElementsByClassName('ql');

for (let i = 0; i < qlElements.length; i++) {
	qlElements[i].style.marginLeft = `${((totalWidth/2)-paddingLeft)-(150/2)}`;
}


const thumbnailElements = document.getElementsByClassName('thumbnail');

for (let i = 0; i < thumbnailElements.length; i++) {
  thumbnailElements[i].style.marginLeft = `${((totalWidth/2)-paddingLeft)-((totalWidth-paddingLeft-paddingRight)/4)}px`;
}
}, 500);
