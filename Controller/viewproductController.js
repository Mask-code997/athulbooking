var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/viewproduct.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            /*
            s += "<div class='col-lg-4 col-md-6 mb-4'>"
            s += "<div><h6><span>Product Id</span>: " + v.pid + "</div>"
            v1 = "<img src='uploads/" + v.pid + "." + v.image + "' width '150px' height='150px'/>"
            s += v1
            s += "<div><h5><span>Product Name</span>: " + v.pname + "</div>"
            s += "<div><h5><span>Product Code</span>: " + v.pcode + "</div>"
            s += "<div><h5><span>Brand Name</span>: " + v.bname + "</div>"
            s += "<div><h5><span>Price</span>: " + v.price + "</div>"
            
            s += "<div class='text-center'>"
            s += "<a href='#' id='"+v.id+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=editproduct&id1=" + v.pid + "' class='btn btn-sm btn-outline-success cart' id='" + v.id + "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
            s += "</div>" */


            s += "<div class='col-lg-4 col-md-6 mb-4'>"
            s += "<div class='item-1'>"
            
            v1 = "<img src='uploads/" + v.pid + "." + v.image + "'class='img-fluid'/>"
            s += v1
            s += ""
            s += "<div class='item-1-contents'>"
            s += "<div class='text-center'>"
            s += "<h3 class='text-primary'>"+v.pname+"</h3>"
            s += "<div class='rent-price'><span><i class='mdi mdi-account'></i>Price:"+v.price+".00</span></div>"
            s += "</div>"
            
            s +=   "<ul class='specs'>"
            s +=     "<li>"
            s +=        "<span>Product Code: </span>"
            s +=        "<span class='spec'>"+v.pcode+"</span>"
            s +=     "</li>"
            s +=     "<li>"
            s +=        "<span>Brand Name: </span>"
            s +=        "<span class='spec'>"+v.bname+"</span>"
            s +=     "</li>"
            s +=     "<li>"
            s +=        "<span>Price</span>"
            s +=        "<span class='spec'>"+v.price+"</span>"
            s +=     "</li>"
            s +=     
            s +=   "</ul>"

            s +="<div class='d-flex action'>"
            s +="      <a href='?id=editproduct&id1=" + v.pid + "' class='btn btn-info'>edit</a>&nbsp;&nbsp;&nbsp;"
            s += "<a href='#' id='"+v.pid+"' class='btn btn-outline-danger del'>Remove</a>"
            s +="</div>"
            s +="</div>"

            s += "</div>"
            s += "</div>"

            
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Product ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "delcar" }
                $.post('Model/delproduct.py', data, function (dt) {
                    showDetails()
                })
            }
        })
    })
}

$(function () {
    showproducts()

})