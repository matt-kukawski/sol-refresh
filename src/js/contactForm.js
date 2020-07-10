
export function contactForm() {
    let contactPreference;
    function selectedRadio(){
        var phoneRadio = document.querySelector("#phoneRadio");
        var emailRadio = document.querySelector("#emailRadio");
        
        if (phoneRadio.checked) {
            contactPreference = "Phone";
            // console.log(contactPreference);
        } else if (emailRadio.checked) {
            contactPreference = "Email";
            // console.log(contactPreference);
        } else {
            contactPreference = "None";
            // console.log(contactPreference);
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector("#contactSubmitBtn").click(function() {
            // let contactPreference;
            selectedRadio();
            var radio = contactPreference;
            var name = document.querySelector("#contactFormName").val();
            var email = document.querySelector("#contactFormEmail").val();
            var phone = document.querySelector("#contactFormPhone").val();
            var message = document.querySelector("#contactFormMsg").val();
            document.querySelector("#successMsg").empty(); // To empty previous error/success message.
            // Checking for blank fields.
            if (name == '' || email == '') {
                alert("Please Complete All Required Fields");
            } else {
            // Returns successful data submission message when the entered information is stored in database.
                //console.log(".post about to execute");
                this.post("contact_form_php.php", {
                    name1: name,
                    email1: email,
                    phone1: phone,
                    message1: message,
                    radio1: radio
                }, function(data) {
                    //alert("function(data) started");
                    document.querySelector("#successMsg").append(data); // Append returned message to message paragraph.
                    if (data == "Thanks for your query, we'll be in touch soon.") {
                        document.querySelector("#contactForm")[0].reset(); // To reset form fields on success.
                    }
                    console.log("email sent");
                });
            }
            return false;
            alert("Data posted");
        });
    });
};