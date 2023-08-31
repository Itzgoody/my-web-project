// NOW I CLICK album-poster TO GET CURRENT SONG ID
$(".album-poster").on('click', function(e){
    var dataSwitchId = $(this).attr('data-switch');
    //console.log(dataSwitchId);

    // and now i use aplayer switch function see
    ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

    // aplayer play function
    // when i click any song to play
    ap.play();

    // click to slideUp player see
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Daddy Wey dey Pamper',
            artist: 'Moses Bliss',
            url: 'source/Moses-Bliss-Daddy-Wey-Dey-Pamper-(JustNaija.com).mp3',
            cover: 'https://notjustok.com/wp-content/uploads/2022/10/4AEC4296-CF45-48A3-AD5A-D5A86F52D36F.jpeg',
        },
        {
            name: 'Imole De',
            artist: 'Dunsin Oyekan',
            url: 'source/IMOLE-DE-Dunsin-OyekanCeeNaija.com_.mp3',
            cover: 'https://notjustok.com/wp-content/uploads/2021/10/Dunsin-Oyekan.jpeg',
        },
        {
            name: 'Yours',
            artist: 'GUC',
            url: 'source/GUC_-_Yours_CeeNaija.com_.mp3',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5V-e2KkJenegmlNNvP1oeObX1kT9IFE14Q&usqp=CAU',
        },
        {
            name: 'Mr Sunshine',
            artist: 'Arden Jones',
            url: 'source/Arden Jones  mr sunshine Lyric Video.mp3',
            cover: 'https://i.ytimg.com/vi/nPJuP1IalVA/hqdefault.jpg',
        },
        {
            name: 'Running',
            artist: 'NF',
            url: 'source/NF_-_Running_CeeNaija.com_.mp3',
            cover: 'https://i.ytimg.com/vi/SVIQrU2EZZU/maxresdefault.jpg',
        },
    
        {
        name: 'Love the way',
        artist: 'Rihanna',
        url: 'source/Eminem_ft_Rihanna_-_Love_The_Way_You_Lie_[NaijaGreen.Com]_.mp3',
        cover: 'https://pics.filmaffinity.com/Eminem_amp_Rihanna_Love_the_Way_You_Lie_Music_Video-981861735-large.jpg'
    },
    {
        name: 'Faded',  // SONG NAME
        artist: 'Alan Walker', //ARTIST NAME
        url: 'source/Alan_Walker_-_Faded_(Jesusful.com).mp3', // PATH NAME AND SONG URL
        cover: 'https://m.media-amazon.com/images/M/MV5BZTUyYWI4Y2EtZGQ2MC00NDNiLTg3N2UtMWMwY2I1ZTViYzA4XkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_.jpg' // COVER IMAGE
    },
    {
        name: 'Lonely At The top',
        artist: 'Asake',
        url: 'source/Asake-Lonely-At-The-Top.mp3',
        cover: 'https://i.ytimg.com/vi/SKJPSJzlSwM/maxresdefault.jpg',
    },
    {
        name: 'Goodness Of God',
        artist: 'Bethel Music',
        url: 'source/Goodness Of God LIVE  Jenn Johnson  VICTORY.mp3',
        cover: 'https://i.ytimg.com/vi/n0FBb6hnwTo/maxresdefault.jpg',
    },
    {
        name: 'Return To Me',
        artist: 'Don Moen',
        url: 'source/Don_Moen_-_Return_To_Me_CeeNaija.com_.mp3',
        cover: 'https://i0.wp.com/christianstack.com/wp-content/uploads/2021/06/Return-to-Me-Don-Moen-English-Christian-Lyrics.jpeg?fit=1200%2C1200&ssl=1',
    },
    {
        name: 'Olori Ogun',
        artist: 'JayMikee',
        url: 'source/OLORI-OGUN.mp3',
        cover: 'https://i0.wp.com/gospelsong.com.ng/wp-content/uploads/2022/01/olori-ogun-cover-28873325265570002161.jpg?fit=768%2C768&ssl=1',
    },
    {
        name: 'Obapluto',
        artist: 'Shallipopi',
        url: 'source/Shallipopi-Obapluto-(TrendyBeatz.com).mp3',
        cover: 'https://tooxclusive.com/wp-content/uploads/2023/07/Shallipopi-Obapluto.png',
    },
    {
        name: 'S Class',
        artist: 'Stray Kids',
        url: 'source/Stray Kids SClass MV.mp3',
        cover: 'https://6.soompi.io/wp-content/uploads/image/20230608125701_Stray-Kids.jpeg?s=900x600&e=t',
    },
        


    ]
});