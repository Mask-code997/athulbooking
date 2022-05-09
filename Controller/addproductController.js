$(function(){
    $('#myForm1').submit(function(e){
        e.preventDefault()
        
        $(this).validate()
        // if ($('#passwd').val() != $('#cpasswd').val()) {
        //     $('#msg').addClass('alert-danger')
        //     $('#msg').html("Password not matching !!!!")
        // } else 
        if ($(this).valid()) {
            data1=new FormData()
            data1.append('pname',$('#pname').val())
            data1.append('pcode',$('#pcode').val())
            data1.append('bname',$('#bname').val())
            data1.append('price',$('#price').val())
            data1.append('img', $('#image')[0].files[0]);
            data1.append("action","register");
            
            $.ajax({
                url:"Model/addproduct.py",data:data1,type:'POST',contentType: false,
                cache: false,
                processData: false,
                success: function(dt) {
                    
                    alert("Data Inserted Sucessfully");
                    location.reload();

                   console.log(dt);
                        
                    
                }
            })
        }
    })

    
})