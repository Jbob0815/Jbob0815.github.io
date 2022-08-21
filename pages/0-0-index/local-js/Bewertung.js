
fetch("global/bewertung.json")
.then(data => data.json())
.then(data => {
    console.log(data.Bewertung[1].data)

    const listitems = data.Bewertung.map(el =>{
        return `<div class="card">
            <h1>${el.Bereich}</h1>
            <div class="${el.Bereich}"></div>
            </div>`
    })


    const interesse = data.Bewertung[0].data.map(el => {
        return `<h2>${el.name}</h2>
                <div class="graph ${el.bw}" data-bw="${el.bw}"></div>`

    });

    const fahigkeiten = data.Bewertung[1].data.map(el => {
        return `<h2>${el.name}</h2>
                <div class="graph" style="--prozent: ${el.bw}"></div>`

    })
    const social = data.Bewertung[2].data.map(el => {
        return `<h2>${el.name}</h2>
                <div class="graph" data-bw="${el.bw /0.05}%"></div>`

    })
    const entwicklung = data.Bewertung[3].data.map(el => {
        return `<h2>${el.name}</h2>
                <div class="graph" data-bw="${el.bw}"></div>`

    })

    function join(){
    document.querySelector(".ul-graph").innerHTML = listitems.join('');
    document.querySelector(".Arbeitsverhalten").innerHTML = interesse.join('');
    document.querySelector(".Fahigkeiten").innerHTML = fahigkeiten.join('');
    document.querySelector(".Soziales-Verhalten").innerHTML = social.join('');
    document.querySelector(".Entwicklung").innerHTML = entwicklung.join('');
    }
    join()






})
