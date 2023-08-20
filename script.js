let adviceText = document.querySelector('#adviceText')
let adviceId = document.querySelector('#adviceId span')
let adviceButton = document.querySelector('#adviceGenerateBtn')

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const adviceData = data.slip;
      console.log(adviceData)
      adviceText.textContent = adviceData.advice
      adviceId.textContent = adviceData.id
    })
    .catch((error) => {
      console.error(error);
    });
}

getAdvice()

adviceButton.addEventListener('click', getAdvice)
