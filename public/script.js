const mainSearch = document.getElementById("mainSearch");
const searchBtn = document.getElementById("searchBtn");
const inputWords = document.getElementById("inputWords");
const suggestions = document.getElementById("suggestions");
const result = document.getElementById("result");
const mosqueName = document.getElementById("mosqueName");
const mosqueLocation = document.getElementById("mosqueLocation");

// Suggestions pop up when you type
mainSearch.addEventListener('input', () => {
    mainSearch.style.borderBottomLeftRadius = "0px";
    mainSearch.style.borderBottomRightRadius = "0px";
    searchBtn.style.borderBottomRightRadius = "0px";
    suggestions.style.display = "flex";
    if(mainSearch.value == ''){
        mainSearch.style.borderBottomLeftRadius = "30px";
        searchBtn.style.borderBottomRightRadius = "30px";
        suggestions.style.display = "none";
    };

    const input = mainSearch.value.toLowerCase();
    const filteredMosques = mosques.filter(mosque => mosque.name.toLowerCase().includes(input));
    if (filteredMosques.length > 0){
        suggestions.innerHTML = filteredMosques.map(mosque =>`<ul class='items' id=${mosque.id}> ${mosque.name} </ul>`).join(' ');
        console.log(filteredMosques.map(mosque => mosque.name).join(' '));
    };

    //Click on Result from suggestion
    filteredMosques.forEach(mosque => {
        const item = suggestions.querySelector(`#${mosque.id}`);
        if(item) {
            item.addEventListener('click', () => {
                mainSearch.value = `${mosque.name}`;
                suggestions.style.display = "none";
                mosqueName.innerHTML = mosque.name;
                mosqueLocation.innerHTML = mosque.location;
            })
        }
    });
});

searchBtn.addEventListener('click', () => {
    const input = mainSearch.value.toLowerCase();
    const matchMosque = mosques.find(mosque => mosque.name.toLowerCase() == input);
    if(matchMosque){
        suggestions.style.display = "none";
        mosqueName.innerHTML = matchMosque.name;
        mosqueLocation.innerHTML = matchMosque.location;
        console.log("red")
    }
});

const mosques = [
    {name: "Darul-Uloom", location:"Moss Street", id:"m1"},
    {name: "Jaame Masjid", location:"Cumberland Street", id:"m2"}
];


