// Return Home

document
    .getElementById(
        "Homebtn"
    )
    .addEventListener(
        "click", function () {
            window.location.href = "../Home page/index.html"
        })

// Sign In Validation

const form =
    document.querySelector(
        ".Form"
    )

form.addEventListener(

    "submit",

    function (e) {

        e.preventDefault()

        let email =
            document.querySelector(
                'input[type="email"]'
            ).value

        let password =
            document.querySelector(
                'input[type="password"]'
            ).value

        if (
            email === ""
            ||
            password === ""

        ) {

            alert(
                "Fill all fields"
            )

        }

        else {

            alert(
                "Sign In Successful"

            )

        }

    })
