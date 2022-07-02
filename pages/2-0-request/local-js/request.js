/*
let data = []

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?page=1", true);
xhr.onload = function(){
    console.log(JSON.parse(xhr.responseText).data);
    data.push(JSON.parse(xhr.responseText).data)
};
xhr.send();

console.log(data)
*/
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('form').onsubmit = () => {
       
       let names = []

       document.querySelector('.data').innerHTML  = `
       <div class="img">
       <img src="pages/2-0-request/images/Profile_avatar_placeholder.png" class="round">
       </div>
       <div class="names">
       <span class="firstname"></span>
       <span class="lastname"><br></span>
       <span class="email">Loading...</span>
       </div>`

        const fetchdata = async() => {

            
            let sname =  document.querySelector('.input').value;
                
            fetch(`https://reqres.in/api/users?delay=1`)
            .then(response =>  response.json())
            .then(data => {
                
                fetch(`https://reqres.in/api/users?page=2`)
                .then(response => response.json())
                .then(data2 => {
                    
                    for(let i = 0; i < data.per_page; i++){
                        data.data.push(data2.data[i])
                    }
                console.log(data)

                
                for(let a = 0; a< 12 ;a++) {
                    
                    if(data.data[a].first_name == sname){
                        document.querySelector('.data').innerHTML  = `
                        <div class="img">
                        <img src="${data.data[a].avatar}" class="round">
                        </div>
                        <div class="names">
                        <span class="firstname">${data.data[a].first_name}</span>
                        <span class="lastname">${data.data[a].last_name}<br></span>
                        <span class="email">${data.data[a].email}</span>
                        </div>`
                        console.log(`found!`)
                        return false
                    } else {
                        console.log("name not found")
                        document.querySelector('.data').innerHTML  = `
                        <div class="img">
                        <img src="pages/2-0-request/images/Profile_avatar_placeholder.png" class="round">
                        </div>
                        <div class="names">
                        <span class="firstname"></span>
                        <span class="lastname">Error<br></span>
                        <span class="email">No search result!</span>
                        </div>`
                    }   
                }
                })
                
            })
        };
        fetchdata()

        return false   
    }

})