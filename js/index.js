const DonationBtn = document.getElementById("Donation");
const HistoryBtn = document.getElementById("History");
const boxContants = document.getElementById("boxContants");
const showDonationHistory = document.getElementById("showDonationHistory");
let myBalance = parseInt(document.getElementById("myBalance").innerText);
const feniDonatioamount = parseInt(
  document.getElementById("feniDonatioamount").innerText
);

// common function

function getInputValue(id) {
  return parseInt(document.getElementById(id).value);
}

// NoakhalifInput.addEventListener("input", function () {
//   NoakhalifBtn.removeAttribute("disabled");
// });

function modalopen() {
  const Modal = document.getElementById("my_modal_1");
  Modal.showModal();
}
function modalClose() {
  const Modal = document.getElementById("my_modal_2");
  Modal.showModal();
}

// common function end

// two button functionnality
HistoryBtn.addEventListener("click", function () {
  boxContants.classList.add("hidden");
  HistoryBtn.classList.add("bg-[#B4F461]");
  HistoryBtn.classList.remove("hover:bg-[#B4F461]");
  DonationBtn.classList.remove("bg-[#B4F461]");
  DonationBtn.classList.remove("hidden");
  showDonationHistory.classList.remove("hidden");
});
DonationBtn.addEventListener("click", function () {
  boxContants.classList.remove("hidden");
  HistoryBtn.classList.remove("bg-[#B4F461]");
  DonationBtn.classList.add("bg-[#B4F461]");
  showDonationHistory.classList.add("hidden");
});

// donation functionality

// boxContants.addEventListener('click',function(e){
//     const parent = e.target.parentElement
//     // const input = parseFloat(parent.querySelector("input").value)
//     const input2 =getInputValue( parent.querySelector("input").getAttribute("id"))
//     // const getValue= input2)

//     let donateAmountBtn =  parent.querySelector("button").getElementsByTagName('p')[0].innerText

//    let number  = Number(donateAmountBtn)

//      const totalDonation = number  + input2

//      parent.querySelector("button").getElementsByTagName('p')[0].innerText = totalDonation

//     // console.log( donateAmountBtn  );
// })

// card1
var NoakhaliFundCollectionTotal = 1000;
document.getElementById("NoakhalifBtn").addEventListener("click", function () {
  let NoakhalifInput = getInputValue("NoakhalifInput");

  if (NoakhalifInput > 1000 && !isNaN(NoakhalifInput)) {
    NoakhaliFundCollectionTotal += NoakhalifInput;

    let remingnMyBlance = myBalance - NoakhalifInput;

    if (remingnMyBlance < 1000) {
      document.getElementById("NoakhalifInput").value = "";
      return alert(`account balance is low`);
    } else {
      document.getElementById("NoakhalifDonatioamount").innerText =
        NoakhaliFundCollectionTotal;
      myBalance = remingnMyBlance;
      document.getElementById("myBalance").innerText = myBalance;
    }

    modalopen();
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="border rounded-lg p-3 ">
            <h1 class="font-semibold">${NoakhalifInput} Taka is Donate for Flood at Noakhali, Bangladesh</h1>
            <p>Date: ${new Date()}</p>
            </div>`;

    showDonationHistory.appendChild(div);

    document.getElementById("NoakhalifInput").value = "";
  } else {
    modalClose();
  }
});

// card-2
var fenifInputFundCollectionTotal = feniDonatioamount;
document.getElementById("fenifBtn").addEventListener("click", function () {
  let fenifInput = getInputValue("fenifInput");

  if (fenifInput > 1000 && !isNaN(fenifInput)) {
    fenifInputFundCollectionTotal += fenifInput;

    let remingnMyBlance = myBalance - fenifInput;
    if (remingnMyBlance < 1000) {
      document.getElementById("fenifInput").value = "";
      return alert(`account balance is low`);
    } else {
      document.getElementById("feniDonatioamount").innerText =
        fenifInputFundCollectionTotal;
      myBalance = remingnMyBlance;
      document.getElementById("myBalance").innerText = myBalance;
    }

    modalopen();
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="border rounded-lg p-3 ">
            <h1 class="font-semibold">${fenifInput} Taka is Donate for Flood Relief in Feni,Bangladesh</h1>
            <p>Date: ${new Date()}</p>
            </div>`;

    showDonationHistory.appendChild(div);

    document.getElementById("fenifInput").value = "";
  } else {
    modalClose();
  }
});