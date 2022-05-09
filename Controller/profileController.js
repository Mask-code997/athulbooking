$(function(){
    $('#myForm2').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm2"))
            alert(data);
            data = { "data": data, "action": "profile" }
            $.post('Model/profile.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("Data Inserted Sucessfully");
                     console.log(dt);
                //location.reload();
                 }
            })
        }
    })

    
})