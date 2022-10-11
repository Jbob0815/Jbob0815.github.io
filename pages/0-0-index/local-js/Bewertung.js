
fetch("global/bewertung.json")
.then(data => data.json())
.then(data => {

    const listitems = data.Bewertung.map(el =>{
        return `<div class="card">
            <h1>${el.Bereich}</h1>
            <div class="${el.Bereich} graph-content"></div>
            </div>`
    })


    const interesse = data.Bewertung[0].data.map(el => {
        return `<h2>${el.name}</h2>
                <div class="graph ${el.bw}"><div class="graph-after" style="left:${el.bw /0.05}%"></div></div>`

    });

    const fahigkeiten = data.Bewertung[1].data.map(el => {
        return `<h2>${el.name}</h2>
                <div class="graph"><div class="graph-after" style="left:${el.bw /0.05}%"></div></div>`

    })
    const social = data.Bewertung[2].data.map(el => {
        return `<h2>${el.name}</h2>
                <div class="graph"><div class="graph-after" style="left:${el.bw /0.05}%"></div></div>`

    })
    const entwicklung = data.Bewertung[3].data.map(el => {
        return `<h2>${el.name}</h2>
                <div class="graph"><div class="graph-after" style="left:${el.bw /0.05}%"></div></div>`

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



