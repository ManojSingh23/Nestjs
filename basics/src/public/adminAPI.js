async function addUserData(obj){
    await $.ajax({
        url:"http://localhost:3000/addUserData/",
        type:'POST',
        data:obj
    }).done('success')
    return ;
}

async function getData(){
    const data = await $.ajax({
        url:"http://localhost:3000/getAdminData",
        type:'GET'
    })
    return data;

}
async function getAdminData(){
     await $.ajax({
        url:"http://localhost:3000/admin",
        type:'GET'
    })
    return ;

}

function deleteUser(id){
    $.ajax({
        url:"http://localhost:3000/deleteAdminData/"+id,
        type:'DELETE'
    }).done("success")
    return
    
}

function updateAdmin(data){

    $.ajax({
        url:"http://localhost:3000/updateAdminData",
        type:'PUT',
        data:data
    }).done("success")

        return
}