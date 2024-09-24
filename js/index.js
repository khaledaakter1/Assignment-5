
const DonationBtn = document.getElementById("Donation");
const HistoryBtn = document.getElementById("History");
const boxContant = document.getElementById("boxContant");
const showDonationHistory = document.getElementById("showDonationHistory");
let myBalance = parseInt(document.getElementById("myBalance").innerText);
const feniDonatioamount = parseInt(
  document.getElementById("feniDonateAmount").innerText
);
const quotaMovementAmount = parseInt(
  document.getElementById("quotaMovementAmount").innerText
);



// common function

function getInputValue(id) {
const values = document.getElementById(id).value
    if (!isNaN(values) && values !== '') {
      return parseInt(values) 
    }
}

function modalopen() {
  const Modal = document.getElementById("modal_1");
  Modal.showModal();
}



function createElementFun(amount, DonationTitle) {
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="border rounded-lg p-3 ">
          <h1 class="font-semibold">${amount} Taka is ${DonationTitle}</h1>
          <p class="bg-blue-50 p-2 mt-2 rounded-lg">Date: ${new Date()}</p>
          </div>`;
          return div
}
// common function end

// two button functionnality
HistoryBtn.addEventListener("click", function () {
  boxContant.classList.add("hidden");
  HistoryBtn.classList.add("bg-[#B4F461]");
  HistoryBtn.classList.add("hover:bg-[#bffe6b]");
  HistoryBtn.classList.remove("border-gray-300");
  DonationBtn.classList.remove("hover:bg-[#bffe6b]");
  DonationBtn.classList.remove("bg-[#B4F461]");
  DonationBtn.classList.remove("hidden");
  DonationBtn.classList.add("border-gray-300");
  showDonationHistory.classList.remove("hidden");

});
DonationBtn.addEventListener("click", function () {
  boxContant.classList.remove("hidden");
  HistoryBtn.classList.remove("bg-[#B4F461]");
  DonationBtn.classList.add("bg-[#B4F461]");
  HistoryBtn.classList.remove("hover:bg-[#bffe6b]");
  DonationBtn.classList.add("hover:bg-[#bffe6b]");
  DonationBtn.classList.remove("hover:bg-[#bffe6b]");
  DonationBtn.classList.remove("border-gray-300");
  HistoryBtn.classList.add("border-gray-300");
  showDonationHistory.classList.add("hidden");
});

// donation functionality

// card1
var noakhaliFundCollectionTotal = 1000;
document.getElementById("noakhaliBtn").addEventListener("click", function () {
  const noakhaliDonateTitle = document.getElementById('noakhaliDonateTitle').innerText

  let noakhaliInput = getInputValue("noakhaliInput");

  if (noakhaliInput > 1000 ) {
    noakhaliFundCollectionTotal += noakhaliInput;

    let remingnMyBlance = myBalance - noakhaliInput;

    if (remingnMyBlance < 1000) {
      document.getElementById("noakhaliInput").value = "";
      return alert(`account balance is low`);
    } else {
      document.getElementById("noakhaliDonateamount").innerText =
        noakhaliFundCollectionTotal;
      myBalance = remingnMyBlance;
      document.getElementById("myBalance").innerText = myBalance;
    }

    modalopen();

    const div = createElementFun(noakhaliInput,noakhaliDonateTitle);
  
    showDonationHistory.appendChild(div);

    document.getElementById("noakhaliInput").value = "";
  } else {
    alert("Invalid Donatio Amount");
    document.getElementById("noakhaliInput").value = "";
  }
});

// card-2
var feniInputFundCollectionTotal = feniDonateamount;
document.getElementById("fenifBtn").addEventListener("click", function () {
  const FeniDonateTitle = document.getElementById('FeniDonateTitle').innerText
  let feniInput = getInputValue("fenifInput");

  if (feniInput > 5000 ) {
    feniInputFundCollectionTotal += feniInput;

    let remingnMyBlance = myBalance - feniInput;
    if (remingnMyBlance < 5000) {
      document.getElementById("feniInput").value = "";
      return alert(`account balance is low`);
    } else {
      document.getElementById("feniDonatioAmount").innerText =
        feniInputFundCollectionTotal;
      myBalance = remingnMyBlance;
      document.getElementById("myBalance").innerText = myBalance;
    }

    modalopen();

    const div = createElementFun(feniInput,FeniDonateTitle)

    showDonationHistory.appendChild(div);

    document.getElementById("feniInput").value = "";
  } else {
    alert("Invalid Donatio Amount");
    document.getElementById("feniInput").value = "";
  }
});


// card-3

var quotaMovementAmountTotal = quotaMovementAmount;
document.getElementById("quotaMovementBtn").addEventListener("click", function () {
  const QuotaMovementTitle = document.getElementById('quotaMovementTitle').innerText
  console.log(quotaMovementTitle);
  
  let quotaMovementAidInput = getInputValue("quotaMovementAid");

  if (quotaMovementAidInput > 3000 ) {
    quotaMovementAmountTotal += quotaMovementAidInput;

    let remingnMyBlance = myBalance - quotaMovementAidInput;
    if (remingnMyBlance < 3000) {
      document.getElementById("quotaMovementAid").value = "";
      invalidModal()
      return ;
    } else {
      document.getElementById("quotaMovementAmount").innerText =
      quotaMovementAmountTotal;
      myBalance = remingnMyBlance;
      document.getElementById("myBalance").innerText = myBalance;
    }

    modalopen();
    const div = createElementFun(quotaMovementAidInput,quotaMovementTitle)
    showDonationHistory.appendChild(div);

    document.getElementById("quotaMovementAid").value = "";
  } else {
    alert("Invalid Donatio Amount");
    document.getElementById("quotaMovementAid").value = "";
  }
});
