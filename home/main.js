// Quations Data start
import data22 from "../test/data.js";
// Quations Data end

const QuationsSection = document.querySelector(".Quations-section");

// creat input quations start
const QuationsFunc = (arr) => {
  let html = "";
  let a = 0;
  let say = 0;
  arr.map((oneMap, index) => {
    a += 1;
    say += 1;
    html +=
      index <= 24
        ? `
    <div
        data-points=${oneMap.xal}
        id="Quations-section-child"
        class="Quations-section-child"
      >
        <div class="Quations-section-child-top">
          <h4> ${say} <span>.</span></h4>
          <span class="points-quations">${oneMap.xal} Xal</span>
        </div>
        ${
          index > 13
            ? `<div class="Quations-img">
        <img src="${oneMap.imgs}" alt="" />
        <p class="radio-container1-p">Funksiya Cavabı nədir ?</p>
      </div>`
            : `<div class="radio-container1">
            <p class="radio-container1-p">
              ${oneMap.sual}
            </p>
          </div>`
        }
        <div class="radio-container">
          ${oneMap.cavab
            .map((oneMap1) => {
              return `
              <input type="radio" id="option${(a += 1)}" name=${
                oneMap.Option
              } value=${oneMap1.Correct} />
          <label for="option${a}"
            >${oneMap1.variant})
            <span class="input-radio-span">${oneMap1.cabalar}</span>
          </label>`;
            })
            .join("")}
        </div>
      </div>
    `
        : ` <div id="Quations-section-child" class="Quations-section-child-input">
    <div class="Quations-section-child-top">
      <h4>
      ${say}  <span>.</span>
      </h4>
    </div>
    <div class="Quations-img">
      <img src="QuationsImg/Quations11.PNG" alt="" />
      <p class="radio-container1-p">
        console.log da geriyə nə qaytarılacaq
      </p>
    </div>
    <div class="radio-container">
      ${oneMap.cavab
        .map((oneMap2) => {
          return `<span class="points-quations">${oneMap2.xal} Xal</span>
        <input
          class="input-text"
          type="text"
          id="option${(a += 1)}"
          placeholder="${oneMap2.Placeholder}"
        />
        <div class="radio-container-text-input"></div>`;
        })
        .join("")}
    </div>
  </div> `;
  });
  return html;
};
// creat input quations end

const HtmlQuationsSection = QuationsFunc(data22);
QuationsSection.innerHTML += HtmlQuationsSection;

// document element select start
const Quations2 = document.querySelectorAll("input[type='radio']");
const SubmitBtn = document.getElementById("Submit-Btn");
const DivelLength = document.querySelectorAll("#Quations-section-child");
const DivelLength2 = document.querySelectorAll(".Quations-section-child");
const DivTotalPonts = document.getElementById("TotalPonts");
const DivTotalPonts2 = document.getElementById("TotalPonts2");
const InputTextDiv = document.querySelectorAll(".radio-container-text-input");
// document element select end

// Submit Btn start
SubmitBtn.addEventListener("click", () => {
  SubmitBtn.disabled = true;
  let TotalPoints = 0;
  let CheckCount = 0;
  let WrongQuations = 0;
  for (let i = 0; i < [...Quations2].length; i++) {
    let isChecked = Quations2[i].checked;
    if (isChecked) {
      CheckCount++;
    }
  }

  if (CheckCount >= DivelLength2.length) {
    DivelLength.forEach((divPoints) => {
      const Quations1 = divPoints.querySelectorAll("input");
      Quations1.forEach((InputsRadios) => {
        InputsRadios.disabled = true;
        if (InputsRadios.checked) {
          switch (InputsRadios.value) {
            case "Correct":
              InputsRadios.className += " Correct";
              TotalPoints += parseInt(divPoints.dataset.points);
              break;

            default:
              const WrongCorrect = [...Quations1].filter((oneFind) => {
                return oneFind.value === "Correct";
              });
              WrongCorrect.forEach((oneCorrect) => {
                oneCorrect.className += " Correct";
              });

              InputsRadios.className += " Wrong";

              WrongQuations += 1;

              break;
          }
        }
        if (InputsRadios.type === "text") {
          switch (InputsRadios.value.trim().toLowerCase()) {
            case "":
              InputsRadios.className += " Wrong-input";
              InputTextDiv[0].innerHTML = "";
              InputTextDiv[1].innerHTML = "";

              // Yeni <p> öğelerini oluştur ve ekle
              const inputTextP1 = document.createElement("p");
              const inputTextP2 = document.createElement("p");
              inputTextP1.textContent = "true";
              inputTextP2.textContent = "false";
              InputTextDiv[0].appendChild(inputTextP1).className +=
                " Correct-inputP";
              InputTextDiv[1].appendChild(inputTextP2).className +=
                " Correct-inputP";
              WrongQuations += 1;
              break;
            case "true":
              InputsRadios.className += " Correct-input";
              TotalPoints += 3;
              break;
            case "false":
              InputsRadios.className += " Correct-input";
              TotalPoints += 3;
              break;

            default:
              InputsRadios.className += " Wrong-input";
              InputTextDiv[0].innerHTML = "";
              InputTextDiv[1].innerHTML = "";

              const inputTextP3 = document.createElement("p");
              const inputTextP4 = document.createElement("p");
              inputTextP3.textContent = "true";
              inputTextP4.textContent = "false";
              InputTextDiv[0].appendChild(inputTextP3).className +=
                " Correct-inputP";
              InputTextDiv[1].appendChild(inputTextP4).className +=
                " Correct-inputP";
              WrongQuations += 1;
              break;
          }
        }
      });
    });
  } else {
    alert("Boş buraxılmış xana var");
    SubmitBtn.disabled = false;
  }
  if (TotalPoints !== 0) {
    const PointsP = document.createElement("p");
    PointsP.textContent = TotalPoints;
    DivTotalPonts.appendChild(PointsP);
    const WrongQuationsP = document.createElement("p");
    WrongQuationsP.textContent = WrongQuations;
    DivTotalPonts2.appendChild(WrongQuationsP);
  }
});
// Submit Btn start
