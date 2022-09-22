$(document).ready(async ()=>{
    $('#id').hide()
    console.log('hello')
    const user =await getData();
    console.log(user)
    $('#id').val(user.id)
    $('#name').val(user.name)
    $('#username').val(user.username)
    $('#email').val(user.email)
})
$('#update').hide()
function editUser(){
    $('#edit').hide()
    $('.input_class').attr('readonly',false)
    $('#update').show()
}

async function updateUser(){
    
    const user={
        id:$('#id').val(),
        name:   $('#name').val(),
        username:$('#username').val(),
        email:$('#email').val(),
    }
    console.log(user)
    $('.input_class').attr('readonly',true)
    $('#edit').show()
    $('#update').hide()
    putData(user);
}

function deleteUser(){
    console.log('delete')
    const id = $('#id').val();
    console.log(id)
    deleteData(id);
    

}

