
document.addEventListener('DOMContentLoaded', () => {

    
    fetch(`https://reqres.in/api/users?page=1`)
    .then(response =>  response.json())
    .then(data => {
        
        fetch(`https://reqres.in/api/users?page=2`)
        .then(response => response.json())
        .then(data2 => {
            
            for(let i = 0; i < data.per_page; i++){
                data.data.push(data2.data[i])
            }
            console.log(data)

            const markup = data.data.map(el => {
                return `            
                <li class="container">
                <div class="image">
                    <img src="${el.avatar}" alt="">
                </div>
                <div class="name">
                    <span class="first_name">${el.first_name}</span>
                    <span class="first_name">${el.last_name}</span>
                </div>
                <p class="email">${el.email}</p>
                </li>`
            })

            document.querySelector('.items').innerHTML = markup.join('');
            console.log(markup)
            
        })
    })
})