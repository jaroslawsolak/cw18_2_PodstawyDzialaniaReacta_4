// CW 1
// var element = React.createElement('div', {}, 'Hello world!');


/* CW 2
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, 'Harry Potter'),
        React.createElement('p', {}, 'Film o czarodzieju')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Król Lew'),
        React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
      )
    )
  );
  */

  // cw 3
  var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      pix: 'https://gfx.radiozet.pl/var/radiozet/storage/images/rozrywka/plotki/harry-potter-ma-juz-38-lat!-oto-6-ciekawostek-z-okazji-urodzin-bohatera/655326-1-pol-PL/Harry-Potter-ma-juz-38-lat!-Oto-6-ciekawostek-z-okazji-urodzin-bohatera_article.jpg'
    },
      {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      pix: 'https://cdn.galleries.smcloud.net/t/galleries/gf-vipy-mN78-7tZc_krol-lew-664x442-nocrop.jpg' 
    },
    {
      id: 3,
      title: 'Psy',
      desc: 'Film o UB',
      pix: 'https://cdn.natemat.pl/3040daf794b65df0389e622823878d80,780,0,0,0.jpg' 
    },
    {
      id: 4,
      title: '4 Pancerni i pies',
      desc: 'Film o wojsku',
      pix: 'https://cdn01.dziennikwschodni.pl/media/quiz/80/ae6d9b683b43bf2c070ac0f00c673812_mid.jpg' 
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, 
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.pix})
      );
  });

  var element =
    React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, moviesElements))

ReactDOM.render(element, document.getElementById('app'));