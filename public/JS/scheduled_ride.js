function handleStartClick(email,id)
{
    $.ajax({
        method:"POST",
        url:"/ride/start/request",
        data:{
            id,
            email,
        }
    })
    .then((data)=>{
        console.log("email sent");
        window.location.assign("/validate/OTP/start/ride/")
    })
    .catch((err)=>{
        console.log(err);
    })
}

function handleEndRide(email,id)
{
    $.ajax({
        method:"POST",
        url:"/send/otp/end/ride",
        data:{
            id,
            email,
        }
    })
    .then((data)=>{
        console.log(data);
        document.getElementById("otp-form-container").style.display = "block";
    })
    .catch((err)=>{
        console.log(err);
    })
}

function removePOP()
{
    document.getElementById("otp-form-container").style.display = "none";
}


function handleSubmit(event)
{
    event.preventDefault();

    let otp = document.getElementById("otp");

    $.ajax({
        method:"POST",
        url:"/end/ride/verify/otp",
        data:{
            otp:otp.value,
        }
    })
    .then((data)=>{
        alert("Ethers have been transfered!");
        document.getElementById("otp-form-container").style.display = "none";
    })
    .catch((err)=>{
        alert("something went wrong !");
        document.getElementById("otp-err").innerText = "Otp is invalid";
    })

}