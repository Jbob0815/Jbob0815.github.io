
fetch("global/bewertung.json")
.then(data => data.json())
.then(data => {
    console.log(data.Bewertung[0].Bereich)
})