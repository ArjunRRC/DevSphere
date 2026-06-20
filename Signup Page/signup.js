document
    .getElementById(
        "Homebtn"
    )

    .addEventListener(

        "click",

        function () {
            window.location.href = "../Home page/index.html"
        })




const form =

    document.querySelector(
        ".Form"
    )



form.addEventListener(

    "submit",

    function (e) {

        e.preventDefault()


        let user =

            document
                .getElementById(
                    "username"
                ).value


        let email =

            document
                .getElementById(
                    "email"
                ).value


        let pass =

            document
                .getElementById(
                    "password"
                ).value


        let confirm =

            document
                .getElementById(
                    "confirm"
                ).value



        if (

            user === ""

            ||

            email === ""

            ||

            pass === ""

            ||

            confirm === ""

        ) {

            alert(
                "Fill all fields"
            )

        }


        else if (

            pass !== confirm

        ) {

            alert(
                "Password not matched"
            )

        }


        else {

            alert(
                "Account Created"

            )

            window.location.href =
                "signin.html"

        }

    })