let content = document.getElementById('content');
let word = document.getElementById('word-stats');
let character = document.getElementById('character-stats');

content.addEventListener("input", () => {
	character.innerHTML = content.value.length;

	let trimmed = content.value.trim();
	word.innerHTML = trimmed.split(/\s+/).filter((item) => item).length;
});