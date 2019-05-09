const ap = new APlayer({
    container: document.getElementById('aplayer'),
	theme: '#ffffff',
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
        url: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/music/moon%20river.mp3',
        cover: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/image/音乐图标.jpg',
      },
	  {
        name: "Jesus bleibet meine Freude　",
        artist: ' ',
        url: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/music/Jesus%20bleibet%20meine%20Freude.mp3',
        cover: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/image/音乐图标.jpg',
      },
	  {
        name: "one flew over the cuckoo nest",
        artist: ' ',
        url: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/music/One%20Flew%20over%20the%20Cuckoos%20Nest.mp3',
        cover: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/image/音乐图标.jpg',
      }
    ]
});