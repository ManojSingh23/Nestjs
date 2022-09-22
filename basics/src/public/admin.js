$(document).ready(async ()=>{
    const data = await getData();
    showtable(data)
} );


function showtable(data){
    console.log(data)
    console.log(data.length)
    const tbody =$('#tbody')
    tbody.html('')
    for(let i =0;i<data.length;i++){
        tbody.append(`<tr id="row${data[i].id}"><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td> <td><button onclick="editData(${data[i].id},'${data[i].name}','${data[i].username}','${data[i].email}')">Edit</button> <button onclick="deleteData(${data[i].id})">delete</button></td></tr>`)
    }
}

async function deleteData(id){
    console.log(id);
    deleteUser(id);
    const data = await getData();
    showtable(data)
}

function editData(id,name,username,email){
    
    $(`#row${id}`).html(`<tr id="row${id}"><td><input type="text" name="id" id="id" readonly value=${id}></td><td> <input type="text" name="name" id="name" value="${name}"></td><td> <input type="text" name="username" id="username" value="${username}"></td><td> <input type="text" name="email" id="email" value="${email}"></td> <td><button onclick="updateData()">Update</button> <button onclick="deleteData(${id})">delete</button></td></tr>`)
}

async function updateData(){
    const id=$('#id').val();
    const editedData={
        id:id,
        name:$('#name').val(),
        username:$('#username').val(),
        email:$('#email').val()
    }
    updateAdmin(editedData);
    const data = await getData();
    showtable(data)
}