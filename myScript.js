window.onload = function() {
  const check = word => {
    if (word.length > 8) {
      return '<span class="hightlight">' + word + '</span>'
    } else {
      return word
    }
  }

  const paragraph = document.querySelector("#paragraph")
  paragraph.innerHTML = paragraph
    .innerText
    .trim()
    .split(' ')
    .map(check)
    .join(' ')
}

const link = document.createElement('a');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'Link';
document.body.appendChild(link);

paragraph.innerHTML = paragraph.innerHTML
.split(/\.[^\.|<]/)
.join('.</p><p>') + '</p>';

const totalWords = paragraph.innerText.split(' ').length;
const wordCounter = document.createElement('span');
wordCounter.innerText = `Total Word Counted: ${totalWords}`;
document.body.insertBefore(wordCounter, paragraph); 

