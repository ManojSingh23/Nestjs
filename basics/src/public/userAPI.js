async function getData(){
    const user = await $.ajax({
        url:"http://localhost:3000/getData",
        type:'GET'
    })
    return user;

}

function putData(user){
    $.ajax({
        url:"http://localhost:3000/putData",
        type:'PUT',
        data:user
    })

}

function deleteData(id){
    $.ajax({
       url:"http://localhost:3000/deleteData/"+id,
       type:'DELETE'
    })
}