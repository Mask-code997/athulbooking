$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            alert(data);
            data = { "data": data, "action": "registration" }
            $.post('Model/registration.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("Registered Sucessfully");
                     console.log(dt);
                //location.reload();
                 }
            })
        }
    })

    
})