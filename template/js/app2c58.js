var UserAddress = "";
var required = 0;
var abi = [
  {
    constant: true,
    inputs: [],
    name: "PERCENTS_DIVIDER",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "referrer",
        type: "address",
      },
    ],
    name: "invest",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserDividends",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserAvailable",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_INVEST",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserPercentRate",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalInvestors",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserReferrer",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "projectAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ADMIN_FEE",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalWithdrawn",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalInvested",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "TIMESTEP",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "BASE_PERCENT",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "CONTRACT_BALANCE_STEP",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "REFF_PERCENT",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalDeposits",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserTotalDeposits",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "isActive",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "marketingAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserAmountOfDeposits",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MARKETING_FEE",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "getUserDepositInfo",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserCheckpoint",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserReferralBonus",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserTotalWithdrawn",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getContractBalanceRate",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "marketingAddr",
        type: "address",
      },
      {
        name: "projectAddr",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NewDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        name: "referral",
        type: "address",
      },
      {
        indexed: true,
        name: "level",
        type: "uint256",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RefBonus",
    type: "event",
  },
];
function getFormattedDate(date) {
  let hour = ("0" + date.getUTCHours()).slice(-2);
  let minute = ("0" + date.getUTCMinutes()).slice(-2);
  let day = ("0" + date.getUTCDate()).slice(-2);
  let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  let year = date.getUTCFullYear();
  return hour + ":" + minute + " " + day + "." + month + "." + year;
}

function getFormattedNumber(num) {
  var num = num + "";
  var value = Number(num);
  var res = num.split(".");
  if (res[0].length <= 2) {
    return value.toFixed(6);
  } else if (res[0].length == 3) {
    return value.toFixed(5);
  } else if (res[0].length == 4) {
    return value.toFixed(4);
  } else if (res[0].length == 5) {
    return value.toFixed(3);
  } else if (res[0].length == 6) {
    return value.toFixed(2);
  } else if (res[0].length == 7) {
    return value.toFixed(1);
  } else if (res[0].length >= 8) {
    return value.toFixed(0);
  }
}

function moneyFormat(yourNumber) {
  var n = yourNumber.toString().split(".");
  n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return n.join(".");
}

$(function () {
  function updateUserAddress(addr) {
    updateData();
    $(".copy").attr("data-clipboard-text", addr);
    $(".dplink").attr("href", "#depo-logged");
    $(".js-investor-wallet").html(addr);
    if (addr == "") {
      $(".js-login-button").attr(
        "onclick",
        "javacript:popup('#pinfo');return false;"
      );
    } else {
      $(".js-ref-link").html("https://ricetron.com/ref/" + addr);
      $(".js-ref-link-copy").attr(
        "data-clipboard-text",
        "https://ricetron.com/ref/" + addr
      );
      $(".js-login-button").attr(
        "onclick",
        "javacript:popup('#wallet');return false;"
      );
    }
  }
  var wdata = setInterval(async () => {
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      clearInterval(wdata);
      UserAddress = window.tronWeb.defaultAddress.base58;
      $("#depo").slideUp(400);
      $("#depo-logged").slideDown(400);
      $(".connect").addClass("wal");
      $(".connect").html($(".js-copy-title").html());
      updateUserAddress(UserAddress);
      updateData();
      setTimeout(function () {
        updateData();
      }, 5000);
      setTimeout(function () {
        var accountInterval = setInterval(async () => {
          if (window.tronWeb.defaultAddress.base58 !== UserAddress) {
            UserAddress = window.tronWeb.defaultAddress.base58;
            updateUserAddress(UserAddress);
            if (UserAddress == "") {
              $("#depo").slideDown(400);
              $("#depo-logged").slideUp(400);
              $(".dplink").attr("href", "#depo");
              $(".connect").removeClass("wal");
              $(".connect").html($(".connect").attr("data-default-title"));
              $(".js-login-button").attr(
                "onclick",
                "javacript:popup('#pinfo');return false;"
              );
            } else {
              $("#depo").slideUp(400);
              $("#depo-logged").slideDown(400);
              $(".dplink").attr("href", "#depo-logged");
              $(".connect").addClass("wal");
              $(".connect").html($(".js-copy-title").html());
              $(".js-login-button").attr(
                "onclick",
                "javacript:popup('#wallet');return false;"
              );
            }
          }
        }, 100);
      }, 5000);
    }
  }, 10);

  async function deposit() {
    var amount = parseFloat($(".js-deposit-amount").val().replace(",", "."));
    if (!amount) {
      alert("Invalid Amount");
    } else if (amount < 100) {
      //    alert('Amount cant be less then 100');
    } else {
      amount = Math.floor(amount * 1000000);
      if (!tronWeb.isAddress(userReferrer)) {
        userReferrer = referrerDefault;
      }
      try {
        let instance = await tronWeb.contract(
          abi,
          "TCi8DLLfsm3Q5Ma5xU6D5sGdtK2psjXjwv"
        );
        let res = await instance.invest(userReferrer).send({
          callValue: amount,
        });
        setTimeout(function () {
          updateData();
        }, 5000);
      } catch (error) {}
    }
  }

  async function depositM() {
    var amount = parseFloat($(".js-deposit-amountM").val().replace(",", "."));
    if (!amount) {
      alert("Invalid Amount");
    } else if (amount < 100) {
      //    alert('Amount cant be less then 100');
    } else {
      amount = Math.floor(amount * 1000000);
      if (!tronWeb.isAddress(userReferrer)) {
        userReferrer = referrerDefault;
      }
      try {
        let instance = await tronWeb.contract(
          abi,
          "TCi8DLLfsm3Q5Ma5xU6D5sGdtK2psjXjwv"
        );
        let res = await instance.invest(userReferrer).send({
          callValue: amount,
        });
        setTimeout(function () {
          updateData();
        }, 5000);
      } catch (error) {}
    }
  }

  $(".js-deposit-button").click(function (e) {
    e.preventDefault();
    deposit();
    return false;
  });
  $(".js-deposit-buttonM").click(function (e) {
    e.preventDefault();
    depositM();
    return false;
  });

  async function withdrawal() {
    try {
      let instance = await tronWeb.contract(abi, contractAddress);
      let res = await instance.withdraw().send({
        callValue: 0,
      });
      setTimeout(function () {
        update();
      }, 5000);
    } catch (error) {}
  }

  $(".js-withdrawal").click(function (e) {
    e.preventDefault();
    withdrawal();
    return false;
  });

  async function ContractBalance() {
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getContractBalance().call();
    contractBalanceN = tronWeb.toDecimal(res);
    $.post("/update/data.php", {
      method: "balance",
      balance: contractBalanceN,
    }).done(function (data) {
      console.log("complete");
    });
    console.log("Contract Balance " + contractBalanceN / 1000000);
    $(".js-contract-balance-usd").html(
      "" + moneyFormat((contractBalanceN / 1000000).toFixed(0)) + " TRX"
    );
    $(".js-contract-balance-trx").html(
      moneyFormat((contractBalanceN / 1000000).toFixed(0)) + " TRX"
    );
    if (1000000 > contractBalanceN) {
      required = 1000000 - contractBalanceN;
    } else {
      convtoText = contractBalanceN.toString(); //convert to string
      lastChar = convtoText.slice(-6); //gets last character
      trxneeded = +lastChar; //convert last character to number
      required = 1000000 - trxneeded;
    }
    $(".js-trx-upgrade").html(
      $(".js-trx-upgrade").html().replace("balance", required)
    );
    setTimeout(function () {}, 1000);
  }

  async function getUserAvailable() {
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getUserAvailable(UserAddress).call();
    userAvailable = tronWeb.toDecimal(res);
    userAvailable = userAvailable / 1000000;
    userAvailableTrx = parseFloat(getFormattedNumber(userAvailable));
    $(".js-balance-now").html(userAvailableTrx + " <small>TRX</small>");
    console.log(userAvailableTrx);
  }

  async function getUserReferralBonus() {
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getUserReferralBonus(UserAddress).call();
    userBonus = tronWeb.toDecimal(res);
    userBonus = userBonus / 1000000;
    userBonusTrx = parseFloat(getFormattedNumber(userBonus));
    $(".js-referral-bonus").html(userBonusTrx + " <small>TRX</small>");
  }

  async function UserDeposited() {
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getUserTotalDeposits(UserAddress).call();
    Deposit = tronWeb.toDecimal(res);
    DepositsFormatted = Deposit / 1000000;
    DepositsFormatted = parseFloat(getFormattedNumber(DepositsFormatted));
    $(".js-userDeposited").html(DepositsFormatted + " <small>TRX</small>");
  }

  async function UserWithdrawn() {
    await getUserAvailable();
    await getUserReferralBonus();
    await GetDividends();
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getUserTotalWithdrawn(UserAddress).call();
    Withdrawed = tronWeb.toDecimal(res);
    userWithdrawn = Withdrawed / 1000000;
    userWithdrawnTrx = parseFloat(getFormattedNumber(userWithdrawn));
    userEarnedTrx = parseFloat(
      getFormattedNumber(userWithdrawn + userAvailable)
    );
    $(".js-userWithdrawn").html(userWithdrawnTrx + " <small>TRX</small>");
    $(".js-totalEarned").html(userEarnedTrx + " <small>TRX</small>");
    if (userEarnedTrx - DividendsTotal / 1000000 > 0) {
      $(".js-totalRefEarned").html(
        (userEarnedTrx - DividendsTotal / 1000000).toFixed(2) +
          " <small>TRX</small>"
      );
    } else {
      $(".js-totalRefEarned").html("0 <small>TRX</small>");
    }
  }

  async function DepositsCount() {
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getUserAmountOfDeposits(UserAddress).call();
    Total = tronWeb.toDecimal(res);
    $(".js-DepositsCount").html(Total);
  }

  async function GetDividends() {
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getUserDividends(UserAddress).call();
    DividendsTotal = tronWeb.toDecimal(res);
  }

  async function GetRefferer() {
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getUserReferrer(UserAddress).call();
    return tronWeb.address.fromHex(res);
  }

  async function LastDeposit() {
    await DepositsCount();
    if (Total > 0) {
      let instance = await tronWeb.contract(abi, contractAddress);
      let res = await instance
        .getUserDepositInfo(UserAddress, Total - 1)
        .call();
      DepositTime = tronWeb.toDecimal(res[2]);
      DepositTime = getFormattedDate(new Date(DepositTime * 1000));
      $(".js-DepositTime").html(DepositTime);
    } else {
      $(".js-DepositTime").html("N/A");
    }
    referrer = GetRefferer();
    $.post("/update/data.php", {
      method: "input",
      client: UserAddress,
      referrer: referrer,
      status: Total,
    }).done(function (data) {
      console.log("complete");
    });
    $.post("/update/data.php", { method: "output", client: UserAddress }).done(
      function (data) {
        $(".js-reflvl-1").html(
          "" + data.lvl1Count + " " + $(".js-reflvl-1").attr("data-text")
        );
        $(".js-reflvl-2").html(
          "" + data.lvl2Count + " " + $(".js-reflvl-1").attr("data-text")
        );
        $(".js-reflvl-3").html(
          "" + data.lvl3Count + " " + $(".js-reflvl-1").attr("data-text")
        );
      }
    );
  }

  async function getContractBalanceRate() {
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getContractBalanceRate().call();
    contractBalanceRate = tronWeb.toDecimal(res);
    console.log("Contract Balance Rate first " + contractBalanceRate);
    contractBalanceRate = (contractBalanceRate - 50) / 10;
    contractBalanceRate = contractBalanceRate.toFixed(1);
  }

  async function getUpline() {
    let instance = await tronWeb.contract(abi, contractAddress);
    await DepositsCount();
    if (Total > 0) {
      let res = await instance.getUserReferrer(UserAddress).call();
      Upline = tronWeb.address.fromHex(res);
      if (Upline == "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb") {
        Upline = "N/A";
      } else {
        Upline = Upline;
      }
    } else {
      Upline = userReferrer;
      if (userReferrer == UserAddress) {
        Upline = "N/A";
      } else if (Upline == "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb") {
        Upline = "N/A";
      } else if (Upline == referrerDefault) {
        Upline = "N/A";
      } else {
        Upline = userReferrer;
      }
    }
  }

  async function UserPercent() {
    await getContractBalanceRate();
    await getUpline();
    let instance = await tronWeb.contract(abi, contractAddress);
    let res = await instance.getUserPercentRate(UserAddress).call();
    userPercentRate = tronWeb.toDecimal(res);
    userPercentRate = userPercentRate / 10;
    userPercentRate = userPercentRate.toFixed(1);
    $(".js-userPercent").html("+" + userPercentRate + "%");
    var basicPercent = 5;
    basicPercent = basicPercent.toFixed(1);
    holdPercentRate = userPercentRate - contractBalanceRate - basicPercent;
    holdPercentRate = holdPercentRate.toFixed(1);
    $(".js-holdPercent").html("+" + holdPercentRate + "%");
    $(".js-basicPercent").html("+" + basicPercent + "%");
    $(".js-contractPercent").html("+" + contractBalanceRate + "%");
    $(".js-current-bonus").html(
      "+" + (basicPercent * 1 + contractBalanceRate * 1).toFixed(1) + "%"
    );
    $(".js-calc").attr("data-current-bonus", contractBalanceRate);
    $.post("/update/data.php", {
      method: "input2",
      bonus: contractBalanceRate,
    }).done(function (data) {
      console.log("complete");
    });
    $(".js-calc").attr("data-base-bonus", basicPercent);
    if (Upline == "TVGSrCEM7pTJRxSCSUaT1fPTUudScar3Mu") {
      Upline = "N/A";
    }
    if (Upline == "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb") {
      Upline = "N/A";
    }
    $(".js-upline-link").html(Upline);
  }

  async function updateData() {
    await UserPercent();
    await UserWithdrawn();
    await UserDeposited();
    await LastDeposit();
    await ContractBalance();
  }
  setTimeout(function () {
    updateData();
  }, 1000);
});

function calculate() {
  var input = $(".js-calc");
  var amount = input.val();
  var totalBonus =
    input.attr("data-current-bonus") * 1 + input.attr("data-base-bonus") * 1;
  console.log(totalBonus);
  var hourly = (((amount / 100) * totalBonus) / 24).toFixed(6);
  var daily = ((amount / 100) * totalBonus).toFixed(6);
  var roi = parseInt(amount / ((amount / 100) * totalBonus).toFixed(6));
  $(".js-calc-amount").html(amount + " <small>TRX</small>");
  $(".js-calc-amount-hourly").html(
    hourly + " <small>TRX (" + (totalBonus / 24).toFixed(2) + "%)</small>"
  );
  $(".js-replace-roi").html(roi + " days");
}

$(".js-calc").on("keyup change", function () {
  calculate();
});

$(".js-bannerSwap").click(function () {
  $(".tabs a").removeClass("active");
  $(this).addClass("active");
  var size = $(this).attr("data-size");
  var splitSize = size.split("x");
  var code =
    "<a href='https://tronprom.com/ref/" +
    UserAddress +
    "'><img src='https://tronprom.com/banners/TronProm_" +
    size +
    ".gif' width='" +
    splitSize[0] +
    "px' height='" +
    splitSize[1] +
    "px' /></a>";
  var preview = "https://tronprom.com/banners/TronProm_" + size + ".gif";
  $("#banner").val(code);
  $(".js-banner-preview").attr("href", preview);
  $(".js-banner-name").html(size);
});

$(document).ready(function () {
  setTimeout(function () {
    calculate();
  }, 1000);
});
