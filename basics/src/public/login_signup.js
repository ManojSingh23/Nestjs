
    function cp(){
        var password = $('#password')
        var repeatpassword= $('#RepeatPassword')
        if(password.val()!=repeatpassword.val()){
            console.log("password not matched")
        }
    }

    function checkEmailUsername(){
        const  input = $('#loginName').val()
        console.log(input)
        const email =checkEmail(input)
         function checkEmail(input){
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(regex.test(input)){
            console.log("true")
            return true;
        }
        else{
            return false
        }
            
        }
        const username= checkUsername(input)
         function checkUsername(input){
            const regex = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/;
            if(regex.test(input)){
                return true
            }
            else{
                return false
            }
        }
        console.log(email,username)
        if(!email&&!username){
            alert("username or email is not valid")
    }


    }