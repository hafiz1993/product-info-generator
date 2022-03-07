// const date = document.getElementById("issueDate");
// const productName = document.getElementById("productName");
// const receiver = document.getElementById("receiver");
// const mobile = document.getElementById("phone");
// const quantity = document.getElementById("quantity");

// const submitBtn = document.getElementById("submitBtn");
// const genId = document.getElementById("idNumber");
// const senderInfo = document.getElementById("senderInfo");
// const qrImg = document.getElementById("qr-img");
// submitBtn.onclick = () => {
//   idGenerator();
// };

// const idGenerator = () => {
//   const product = productName.value.slice(0, 2);
//   const sender = senderInfo.value.slice(0, 5);
//   const issueDate = date.value.slice(0, 10);
//   const receiverName = receiver.value.slice(0, 5);
//   const receiverNameUpper = receiverName.toUpperCase();
//   const mobileNumber = mobile.value.slice(7, 11);
//   const quantityNumber = quantity.value;

// if

//   const idNumber =
//     issueDate +
//     product +
//     receiverNameUpper +
//     mobileNumber +
//     quantityNumber +
//     sender;
//   console.log(idNumber);
//   genId.innerHTML = idNumber;

//   const genNumber = idNumber.value;
//   JsBarcode("#barcode", idNumber, {
//     displayValue: false,
//   });
//   const qrNumber = idNumber;
//   const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrNumber}`;
//   qrImg.src = url;
// };

const date = document.getElementById("issueDate");
const productName = document.getElementById("productName");
const receiver = document.getElementById("receiver");
const mobile = document.getElementById("phone");
const quantity = document.getElementById("quantity");
const senderInfo = document.getElementById("senderInfo");

const submitBtn = document.getElementById("submitBtn");
const genId = document.getElementById("idNumber");

const qrImg = document.getElementById("qr-img");
const printBtn = document.getElementById("printBtn");

submitBtn.onclick = () => {
  serialGenerator();
  idgen();

  const secOne = document.getElementById("sect-one");
  secOne.style.display = "none";
  const secTwo = document.getElementById("sec-two");
  secTwo.style.display = "block";
};

const idgen = () => {
  const product = productName.value.slice(0, 2);
  const productUpper = product.toUpperCase();
  const issueDateOne = date.value.slice(6, 9);
  const receiverName = receiver.value.slice(0, 5);
  const receiverNameUpperOne = receiverName.toUpperCase();
  const mobileNumber = mobile.value.slice(7, 11);

  const id = productUpper + receiverNameUpperOne + mobileNumber + issueDateOne;

  const ids = document.getElementById("id");
  ids.innerHTML = id;
  const senderName = document.getElementById("senderInfo").value;
  const receiverInfo = document.getElementById("receiver").value;
  const mobileInfo = document.getElementById("phone").value;

  document.getElementById("senderName").innerHTML = senderName;
  document.getElementById("receiveName").innerHTML = receiverInfo;
  document.getElementById("mobile").innerHTML = mobileInfo;
};
const serialGenerator = () => {
  const product = productName.value.slice(0, 2);
  const sender = senderInfo.value.slice(0, 5);
  const issueDate = date.value.slice(0, 10);
  const receiverName = receiver.value.slice(0, 5);
  const receiverNameUpper = receiverName.toUpperCase();
  const mobileNumber = mobile.value.slice(7, 11);
  const quantityNumber = quantity.value;

  if (
    !product ||
    !sender ||
    !issueDate ||
    !receiverNameUpper ||
    !mobileNumber ||
    !quantityNumber
  ) {
    alert("required");
    idNumber = "";
    secTwo.style.display = "none";
  } else {
    const idNumber =
      issueDate +
      product +
      receiverNameUpper +
      mobileNumber +
      quantityNumber +
      sender;
    console.log(idNumber);
    genId.innerHTML = idNumber;

    const genNumber = idNumber.value;
    JsBarcode("#barcode", idNumber);
    const qrNumber = idNumber;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrNumber}`;
    qrImg.src = url;

    date.value = "";
    product.innertext = "";
    issueDate.value = "";
    receiverNameUpper.value = "";
    mobileNumber.value = "";
    quantityNumber.value = "";
  }
};
