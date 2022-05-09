$(function () {
    v = location.href.split("=")[2]
    $('#pid').val(v)

    data = { "action": "viewproduct","id":v }
    $.post('Model/editproductupdate.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#pname').val(v.pname)
            $('#pcode').val(v.pcode)
            $('#bname').val(v.bname)
            $('#price').val(v.price)
           
        })
    })


    $('#myForm').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm"))
            alert(data) 
            data = { "data": data, "action": "updateproduct" }
            $.post('Model/editproductupdate.py', data, function (dt) {
                
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
                alert("data inserted sucessfully")
            })
        }
    })
})
