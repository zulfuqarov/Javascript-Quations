// // Fare sayfanın dışına çıktığında
// document.addEventListener("mouseout", function (e) {
//   // Eğer önceki bir bekleme süresi varsa, iptal et

//   // Fare olayı sayfanın dışına çıkıyorsa
//   if (
//     e.clientY < 0 ||
//     e.clientX < 0 ||
//     e.clientX > window.innerWidth ||
//     e.clientY > window.innerHeight
//   ) {
//     const a = confirm("sehife yeniden yuklenecek ?");
//     if (a) {
//       location.reload();
//     } else {
//       setTimeout(() => {
//         location.reload();
//       }, 3000);
//     }
//   }
// });

// ------------------------------

// var onay = false;  // Varsayılan değer false

// // Confirm penceresini göster
// var confirmTimeout = setTimeout(function() {
//   // 2 saniye içinde bir cevap gelmezse bu kod çalışacak
//   if (onay === false) {
//     console.log("Kullanıcı 2 saniye içinde cevap vermedi veya pencereyi kapattı.");
//   }
// }, 2000);  // 2 saniye (2000 milisaniye) süreyle bekleyecek

// // Confirm penceresini göster ve kullanıcının cevabını bekleyecektir
// onay = confirm("Emin misiniz?");

// // Kullanıcı cevap verirse, timeout'u temizle
// clearTimeout(confirmTimeout);

// // Kullanıcının cevapına göre işlemleri devam ettir
// if (onay === true) {
//   console.log("Kullanıcı 'Evet' dedi!");
// } else if (onay === false) {
//   console.log("Kullanıcı 'Hayır' dedi veya pencereyi kapattı.");
// }

// input Select start
const Quations2 = document.querySelectorAll("input[type='radio']");
const SubmitBtn = document.getElementById("Submit-Btn");
const DivelLength = document.querySelectorAll("#Quations-section-child");
const DivelLength2 = document.querySelectorAll(".Quations-section-child");
const DivTotalPonts = document.getElementById("TotalPonts");
const DivTotalPonts2 = document.getElementById("TotalPonts2");
const InputTextDiv = document.querySelectorAll(".radio-container-text-input");
SubmitBtn.addEventListener("click", () => {
  let TotalPoints = 0;
  let CheckCount = 0;
  let WrongQuations = 0;
  for (i = 0; i < [...Quations2].length; i++) {
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
                " Correct-input";
              InputTextDiv[1].appendChild(inputTextP2).className +=
                " Correct-input";
              break;
            case "true":
              InputsRadios.className += " Correct-input";
              break;
            case "false":
              InputsRadios.className += " Crrect-input";
              break;

            default:
              InputsRadios.className += " Wrong-input";

              break;
          }
        }
      });
    });
  } else {
    alert("Bos buraxilmis xatana var");
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
// input Select end
