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
const Quations1 = document.querySelectorAll("input");
const SubmitBtn = document.getElementById("Submit-Btn");

SubmitBtn.addEventListener("click", () => {
  let CorrectCount = 0;
  for (i = 0; i < [...Quations1].length; i++) {
    let isChecked = Quations1[i].checked;
    if (isChecked) {
        CorrectCount++;
    }
  }
  if (CorrectCount >= Quations1.length / 5) {
    Quations1.forEach((InputsRadios) => {
      InputsRadios.disabled = true;
      if (InputsRadios.checked) {
        switch (InputsRadios.value) {
          case "Correct":
            InputsRadios.className += " Correct";
            break;

          default:
            const WrongCorrect = [...Quations1].filter((oneFind) => {
              return oneFind.value === "Correct";
            });
            WrongCorrect.forEach((oneCorrect) => {
              oneCorrect.className += " Correct";
            });

            InputsRadios.className += " Wrong";
            break;
        }
      }
    });
  } else {
    alert("Bos buraxilmis xatana var");
  }
});

// input Select end
