
function clearCookies(){
    $.ajax({
        url:'http://localhost:3000/clearCookie',
        type:'GET'
    })
}