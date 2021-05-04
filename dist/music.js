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
        name: "バッハ无伴奏チェロ组曲第一番ト长调作品1007より前奏曲　",
        artist: ' ',
        url: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/music/%E3%83%90%E3%83%83%E3%83%8F%E6%97%A0%E4%BC%B4%E5%A5%8F%E3%83%81%E3%82%A7%E3%83%AD%E7%BB%84%E6%9B%B2%20%E7%AC%AC%E4%B8%80%E7%95%AA%E3%83%88%E9%95%BF%E8%B0%83%20%E4%BD%9C%E5%93%811007%E3%82%88%E3%82%8A%E5%89%8D%E5%A5%8F%E6%9B%B2.mp3',
        cover: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/image/音乐图标.jpg',
      },
	  {
        name: "Jesus bleibet meine Freude　",
        artist: ' ',
        url: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/music/Jesus%20bleibet%20meine%20Freude.mp3',
        cover: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/image/音乐图标.jpg',
      },
	  {
        name: "Where Have All The Flowers Gone　",
        artist: ' ',
        url: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/music/Where%20Have%20All%20The%20Flowers%20Gone.mp3',
        cover: 'https://image-1253170309.cos.ap-guangzhou.myqcloud.com/image/音乐图标.jpg',
      }
    ]
});