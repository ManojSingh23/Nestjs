function cp(){
    var password = $('#password')
    var repeatpassword= $('#RepeatPassword')
    if(password.val()!=repeatpassword.val()){
        console.log("password not matched")
    }
}

function checkEmailUsername(){
    const  input = $('#loginName').val()
    console.log(input)
    const email =checkEmail(input)
     function checkEmail(input){
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test(input)){
        console.log("true")
        return true;
    }
    else{
        return false
    }    
    }
    const username= checkUsername(input)
     function checkUsername(input){
        const regex = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/;
        if(regex.test(input)){
            return true
        }
        else{
            return false
        }
    }
    console.log(email,username)
    if(!email&&!username){
        alert("username or email is not valid")
}
}

async function addUser(){
   obj={
    name:$('#name').val(),
    username:$('#username').val(),
    email:$('#email').val(),
    password:$('#password').val(),
    roles:$('#selectedrole').val()

   } 
   console.log(obj)
    await addUserData(obj);
    const data = await getData();
    const userData = data[data.length-1];
    console.log(userData)
    $('#tbody').append(`<tr><td>${userData.id}</td><td>${obj.name}</td><td>${obj.username}</td><td>${obj.email}</td><td><span></span><button onclick="editData(this)">Edit</button><button onclick="updataData(this)">Update</button></td><tr/>`)

}

async function search(){
    const arr =[]
    const regex = $('#search').val()
    const data  = await getData();
    for(let i=0;i<data.length;i++){
        if(data[i].name.includes(regex)){
            arr.push(data[i])
        }
    }
    showSelectedData(arr);
}



function showSelectedData(userData){
    $('#tbody').html('')
    for(let i=0;i<userData.length;i++){
        $('#tbody').append(`<tr><td>${userData[i].id}</td><td>${userData[i].name}</td><td>${userData[i].username}</td><td>${userData[i].email}</td><td><span></span><button onclick="editData(this)">Edit</button><button onclick="updataData(this)">Update</button></td><tr/>`)
    }
  
    
}

function deleteData(obj){
    console.log(obj);
    const row = $(obj).parent().parent();
    const col = row.children();
    const id = $(col[0]).html();
    console.log(id)
    deleteUser(id);
    $(row).remove()   
}

function editData(obj){
    const td = $(obj).parent();
    const tdCol = td.children();
    const row = $(obj).parent().parent();
    const col = row.children();
    const id = $(col[0]).html();
    const name = $(col[1]).html(); 
    const username = $(col[2]).html();
    const email  = $(col[3]).html();

   $(obj).hide()
    $(col[0]).html(`<input id="id" readonly class="dataInputs"  value=${id} >`)
    $(col[1]).html(`<input id="name"  class="dataInputs" value=${name} >`)
    $(col[2]).html(`<input id="username" class="dataInputs" value=${username}>`)
    $(col[3]).html(`<input id="email" class="dataInputs" value=${email}>`);
    $(tdCol[0]).html(`<button id="update" onclick="updateData(this)">update</button>`)
}

async function updateData(obj){
    const editedData={
        id:$('#id').val(),
        name:$('#name').val(),
        username:$('#username').val(),
        email:$('#email').val()
    }
    console.log(editedData)
    const td = $(obj).parent().parent();
    const tdCol = td.children();
    const row = $(obj).parent().parent().parent();
    const col = row.children();
    
    $(col[0]).html(`${editedData.id}`)
    $(col[1]).html(`${editedData.name}`)
    $(col[2]).html(`${editedData.username}`)
    $(col[3]).html(`${editedData.email}`)
    $('.form-control').val(' ');
    $(obj).hide()
    console.log(tdCol[1])
    $(tdCol[1]).show()
    updateAdmin(editedData)
}