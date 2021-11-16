$('img').css('cursor','pointer')

$('img').on('click', function(event){
    console.log(`https://anapioficeandfire.com/api/houses/${event.target.id}`);
    $.get(`https://anapioficeandfire.com/api/houses/${event.target.id}`, function(data){
        $('#details').empty();

        let titles = '';
        for(let i=0; i<data.titles.length;i++){
            if(i<data.titles.length-1){
            titles+= data.titles[i]+", "}
            else{
                titles+= data.titles[i]
            }
        }

        let details = `
        <h3>Name: ${data.name}</h4>
        <h5>Words: ${data.words}</h4>
        <p>Titles: ${titles}</p>`

        $('#details').append(details);
        $('#details').addClass('black').addClass('white-text')
    })


})