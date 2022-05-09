$(function(){
    
    $('#myForm').submit(function(e) {            //doubt on localstorage April-06
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            data = { "data": data, "action": "login" }
            $.post('Model/adminloginModel.py', data, function(dt) {
                dt = JSON.parse(dt)
                alert(dt.length)
                console.log(dt)
               
               if (dt.length == 0) {
                    $('#msg').addClass('alert-danger')
                    $('#msg').html("Invalid User !!!!")
                    alert("invalid user")
                    
                } else {
                    name1=$('#uname').val()
                    //alert(name1)
                    localStorage.setItem("uname",name1)
                    $.each(dt,function(k,v){
                        loginId=v.username

                    })
                    //alert(lid)
                    localStorage.setItem("loginId",loginId)
                   // localStorage.clear()
                    //localStorage.removeItem("name")
                    //name3=localStorage.getItem("name")
                   // alert(name3)
                    //if (name3==null)
                   // alert("invalid user")
                   // else
                    alert("valid user")
                    location.href = "afterIndexAdmin.py" 
                }
            })
        }
    })
})