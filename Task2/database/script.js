var data = {
  "AccountName": "Current Account",
   "BankBalance": "XXXXX",
  "transactionamount" : "15,000",
  "transactiondate":"2022-08-12 15:55",
  "PaymentType": {
      "Id": "X",
      "Name": "Bank to Wallet Transfer"
    },
  "senderDetails" : {
  "sender": "Saurabh Sharma",
  "bank" : "SBI",
  "IFSC": "SBIN016095",
  "accountno": "xxxxxxxxx5736",
  "transactiondate" : "2022-08-12 15:55"
  },
  "recieverDetails" : {
  "reciever": "Saurabh Sharma",
  "wallet" :" Growpital Wallet ",
  "referenceno": "DBTR/222201998174",
  "transactiondate" : "2022-08-12 15:55"
  },
  "paymentmethod": "UPI",
  "transactionId": "DBTR/222201998174"
  }


//parsing json
var stringifiedData = JSON.stringify(data);
var parsedData = JSON.parse(stringifiedData);

//amount and date on top of card
document.getElementById("amount").innerHTML = `<span>&#8377;${parsedData.transactionamount}</span>`

document.getElementById("p2").innerHTML = `<span>${parsedData.transactiondate}</span>`
//sender details
document.getElementById("sender").innerHTML = `<span>${parsedData.senderDetails.sender}</span>`

document.getElementById("text2").innerHTML = `<span>${parsedData.senderDetails.bank}</span>, IFSC ${parsedData.senderDetails.IFSC}<br><span>A/c No. ${parsedData.senderDetails.accountno}</span><br>`

document.getElementById("text3").innerHTML = `<span>${parsedData.senderDetails.transactiondate}</span>`

//reciever details
document.getElementById("receiver").innerHTML = `<span>${parsedData.recieverDetails.reciever}</span>`

document.getElementById("text5").innerHTML = `<address>${parsedData.recieverDetails.wallet}<br><span>Ref No. ${parsedData.recieverDetails.referenceno}</span></address>`

document.getElementById("text6").innerHTML = `<sapn>${parsedData.recieverDetails.transactiondate}</span>`

//payment method id transaction id
document.getElementById("pay-method").innerHTML = `<div><span><small>Payment Method: ${parsedData.paymentmethod}</small></span></div>`

document.getElementById("trans-id").innerHTML = `<div><span><small>Transaction ID: ${parsedData.transactionId}</small></span></div>`

