document.getElementById('sendSms').addEventListener('click', async () => {
   const mobile = document.getElementById('mobile').value;
   const message = document.getElementById('message').value;
   const resultDiv = document.getElementById('result');

   // Basic validation
   if (!mobile.startsWith("91") || mobile.length !== 12) {
     resultDiv.textContent = "Enter valid Indian mobile number (e.g. 91xxxxxxxxxx)";
     return;
   }
   if (message.trim() === "") {
     resultDiv.textContent = "Message cannot be empty.";
     return;
   }

   try {
     const response = await fetch('http://localhost:3000/sms', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         numbers: mobile,
         message: message
       })
     });
     const data = await response.json();
     if (data.return) {
       resultDiv.textContent = "SMS sent successfully!";
     } else {
       resultDiv.textContent = "Failed: " + data.message;
     }
   } catch (err) {
     resultDiv.textContent = "Error sending SMS.";
   }
});
