const containerEl = document.querySelector(".container");
// 타이핑 효과가 들어가는 문구를 배열로 담기
const careers = ["youtuber", "web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`
  // 글자의 인덱스와 문구 배열의 요소의 길이와 동일하면, 문구 배열의 요소의 길이와 글자 인덱스 초기화
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  // 배열의 인덱스와 문구 배열의 인덱스 수가 동일하면, 배열 인덱스 초기화
  if(careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 150);
}

