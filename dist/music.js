const ap = new APlayer({
    container: document.getElementById('aplayer'),
	loop: 'one',
    listFolded: true,
    listMaxHeight: 60,
    autoplay: false,
	mutex: true,
	volume: 0.7,
    audio: [
      {
        name: "Moon River　",
        artist: 'Audrey Hepburn',
        url: 'http://www.ytmp3.cn/down/48128.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      },
	  {
        name: "Lonesome Town",
        artist: 'Ricky Nelson',
        url: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/music/Ricky%20Nelson-Lonesome%20Town.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      },
	  {
        name: "And The Winner Is　　",
        artist: 'Gérard',
        url: 'http://www.ytmp3.cn/down/50003.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      },
	  {
        name: "Lemon　　　　  　　　",
        artist: 'Hachi',
        url: 'http://www.ytmp3.cn/down/51031.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      }
    ]
});