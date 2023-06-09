//To get an alert when we submit

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

//To get an alert when we delete

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request={
            "url":`http://localhost:3002/api/users/${id}`,
            "method":"DELETE",
        }
        if(confirm("Do you want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully!");
                location.reload()
            })
        }
    })
}