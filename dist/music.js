const ap = new APlayer({
    container: document.getElementById('aplayer'),
	loop: 'one',
    listFolded: true,
    listMaxHeight: 60,
    autoplay: false,
	mutex: true,
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
        name: "To Build A Home　　　　",
        artist: 'tCO',
        url: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/music/To%20Build%20A%20Home.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      },
	  {
        name: "W H A T F G　　",
        artist: 'Pete Seeger',
        url: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/music/Pete%20Seeger-Where%20Have%20All%20The%20Flowers%20Gone.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      }
    ]
});