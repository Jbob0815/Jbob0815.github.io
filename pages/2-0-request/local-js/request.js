
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('form').onsubmit = () => {
       
       let names = []



        const fetchdata = async() => {

            
            let sname =  document.querySelector('.input').value;
                
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

                
                for(let a = 0; a< 12 ;a++) {
                    
                    if(data.data[a].first_name == sname){
                        document.querySelector('.round').src  = `${data.data[a].avatar}`
                        document.querySelector('.firstname').innerHTML = `${data.data[a].first_name}`
                        document.querySelector('.lastname').innerHTML = `${data.data[a].last_name}`
                        document.querySelector('.email').innerHTML = `${data.data[a].email}`;
                        console.log(`found!`)
                        return false
                    } else {
                        console.log("name not found")
                        document.querySelector('.firstname').innerHTML = `Error`
                        document.querySelector('.lastname').innerHTML = `Name not found`
                        document.querySelector('.email').innerHTML = `-`
                    }
                }
                })
                
            })
        };
        fetchdata()

        return false   
    }

    const container = document.querySelector('.container');
    const data = document.querySelector('.data');

    const img = document.querySelector(".img img");
    const circle = document.querySelector('.img div')
    const heading = document.querySelector(".names h1 ")
    const names = document.querySelector('.names')

    container.addEventListener("mousemove", (e) => {
        let yAxis = (window.innerWidth /2  - e.pageX) / 25;
        let xAxis = (window.innerHeight / 2 - e.pageY) / 25;
        data.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
    });


    container.addEventListener('mouseenter', e => {



        img.style.transform = "translateZ(150px)";
        names.style.transform = 'translateZ(60px)';
        circle.style.transform = 'translateZ(75px)';


        data.style.transition = ' none'

    })

    container.addEventListener('mouseleave', e => {
        data.style.transition = 'all 0.2s ease-in';
        data.style.transform = 'rotate(0deg)';
        img.style.transform = "translateZ(0px)";
        names.style.transform = 'translateZ(0px)';
        circle.style.transform = 'translateZ(0px)';

    })

})

