const inputText = document.getElementById('inputText');

const charCount = document.getElementById('charCount');

const wordCount = document.getElementById('wordCount');
console.log(wordCount);
inputText.addEventListener('input', () => {
  const text = inputText.value;
  charCount.textContent = text.length;

  const words = text.trim().split(/\s+/);
  wordCount.textContent = words.length;
});
