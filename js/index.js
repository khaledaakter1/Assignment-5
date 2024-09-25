
const DonationBtn = document.getElementById("Donation");
const HistoryBtn = document.getElementById("History");
const boxContants = document.getElementById("box-contants");
const showDonationHistory = document.getElementById("showDonationHistory");
let myBalance = parseInt(document.getElementById("myBalance").innerText);
const feniDonatioamount = parseInt(
  document.getElementById("feniDonatioamount").innerText
);
const quotaMovementAmount = parseInt(
  document.getElementById("quotaMovementAmount").innerText
);

// common functions start

function getInputValue(id) {
  const values = document.getElementById(id).value;
  if (!isNaN(values) && values !== "") {
    return parseInt(values);
  }
}

function modalopen() {
  const Modal = document.getElementById("my_modal_1");
  Modal.showModal();
}

function createElementFun(amount, DonationTitle) {
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="border rounded-lg p-3 ">
          <h1 class="font-semibold">${amount} Taka is ${DonationTitle}</h1>
          <p class="bg-blue-50 p-2 mt-2 rounded-lg">Date: ${new Date()}</p>
          </div>`;
  return div;
}
// common function end

// buttons
HistoryBtn.addEventListener("click", function () {
  boxContants.classList.add("hidden");
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
  boxContants.classList.remove("hidden");
  HistoryBtn.classList.remove("bg-[#B4F461]");
  DonationBtn.classList.add("bg-[#B4F461]");
  HistoryBtn.classList.remove("hover:bg-[#bffe6b]");
  DonationBtn.classList.add("hover:bg-[#bffe6b]");
  DonationBtn.classList.remove("hover:bg-[#bffe6b]");
  DonationBtn.classList.remove("border-gray-300");
  HistoryBtn.classList.add("border-gray-300");
  showDonationHistory.classList.add("hidden");
});

// donation card 

// card-1
var NoakhaliFundCollectionTotal = 0;
document.getElementById("NoakhalifBtn").addEventListener("click", function () {
  const NoakhaliDonateTitle = document.getElementById(
    "NoakhaliDonateTitle"
  ).innerText;

  let NoakhalifInput = getInputValue("NoakhalifInput");

  if (NoakhalifInput > 0) {
    NoakhaliFundCollectionTotal += NoakhalifInput;

    let remingnMyBlance = myBalance - NoakhalifInput;

    if (remingnMyBlance < 0) {
      document.getElementById("NoakhalifInput").value = "";
      return alert(`Your account balance is less than ${NoakhalifInput}`);
    } else {
      document.getElementById("NoakhalifDonatioamount").innerText =
        NoakhaliFundCollectionTotal;
      myBalance = remingnMyBlance;
      document.getElementById("myBalance").innerText = myBalance;
    }

    modalopen();

    const div = createElementFun(NoakhalifInput, NoakhaliDonateTitle);

    showDonationHistory.appendChild(div);

    document.getElementById("NoakhalifInput").value = "";
  } else {
    alert("Invalid Donation Amount");
    document.getElementById("NoakhalifInput").value = "";
  }
});

// card-2
var fenifInputFundCollectionTotal = feniDonatioamount;
document.getElementById("fenifBtn").addEventListener("click", function () {
  const FeniDonateTitle = document.getElementById("FeniDonateTitle").innerText;
  let fenifInput = getInputValue("fenifInput");

  if (fenifInput > 0) {
    fenifInputFundCollectionTotal += fenifInput;

    let remingnMyBlance = myBalance - fenifInput;
    if (remingnMyBlance < 0) {
      document.getElementById("fenifInput").value = "";
      return alert(`Your account balance is less than ${fenifInput}`);
    } else {
      document.getElementById("feniDonatioamount").innerText =
        fenifInputFundCollectionTotal;
      myBalance = remingnMyBlance;
      document.getElementById("myBalance").innerText = myBalance;
    }

    modalopen();

    const div = createElementFun(fenifInput, FeniDonateTitle);

    showDonationHistory.appendChild(div);

    document.getElementById("fenifInput").value = "";
  } else {
    alert("Invalid Donation Amount");
    document.getElementById("fenifInput").value = "";
  }
});

// card-3

var quotaMovementAmountTotal = quotaMovementAmount;
document
  .getElementById("quotaMovementBtn")
  .addEventListener("click", function () {
    const QuotaMovementTitle =
      document.getElementById("QuotaMovementTitle").innerText;
    console.log(QuotaMovementTitle);

    let quotaMovementAidInput = getInputValue("quotaMovementAid");

    if (quotaMovementAidInput > 0) {
      quotaMovementAmountTotal += quotaMovementAidInput;

      let remingnMyBlance = myBalance - quotaMovementAidInput;
      if (remingnMyBlance < 0) {
        document.getElementById("quotaMovementAid").value = "";
        alert(`Your account balance is less than ${quotaMovementAidInput}`);
        return;
      } else {
        document.getElementById("quotaMovementAmount").innerText =
          quotaMovementAmountTotal;
        myBalance = remingnMyBlance;
        document.getElementById("myBalance").innerText = myBalance;
      }

      modalopen();
      const div = createElementFun(quotaMovementAidInput, QuotaMovementTitle);
      showDonationHistory.appendChild(div);

      document.getElementById("quotaMovementAid").value = "";
    } else {
      alert("Invalid Donation Amount");
      document.getElementById("quotaMovementAid").value = "";
    }
  });
