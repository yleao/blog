const ap = new APlayer({
    container: document.getElementById('aplayer'),
	loop: 'one',
    listFolded: true,
    listMaxHeight: 60,
    autoplay: false,
	mutex: true,
    audio: [
      {
        name: "Moon River　　　",
        artist: 'Aoi Teshima',
        url: 'http://m10.music.126.net/20180901194938/d200e67e797f26f59915a921da34719a/ymusic/f7bf/b90b/3da4/2ededc71b37b25c7913bb34579832fde.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      },
	  {
        name: "Lonesome Town",
        artist: 'Ricky Nelson',
        url: 'http://m10.music.126.net/20180901190956/a7ce5e9d36861a65458ec667f34a622b/ymusic/b275/e35e/58aa/cea1da949ef871cfe3f32f366e32791e.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      },
	  {
        name: "To Build A Home　　　　",
        artist: 'tCO',
        url: 'http://m10.music.126.net/20180901192430/fc3c3bdcd70bec6ca9ddd2da274f6f10/ymusic/5e1a/6a8b/c616/026527b7260387ba91b26866a52d74c0.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      },
	  {
        name: "声声慢　　　　　　　",
        artist: '崔开潮',
        url: 'http://m10.music.126.net/20180901194850/d744a77fff4fe5c4b5bed865d8ad2e0a/ymusic/1073/061c/d374/8a8c3cb2286298609deffef29a6c7883.mp3',
        cover: 'https://i.loli.net/2018/09/01/5b8a69059a269.jpg',
      }
    ]
});