const movies = [
    { title: 'Die Hard', star_Actor: 'Bruce Wiilis', year: '2008', code:'1122' },
    { title: 'Full Metal Alchemist', Star_Actor: 'Paulo Coelho', year: '2012', code: '1133' },
  ]
  
  const stock = {
    112: 1,
    113: 1,
  }
  
  const rent_movies = []
  
  class Movies {
    constructor(_movies = { title, star_Actor, year,  }) {
      this.title = _movies.title
      this.star_Actor = _movies.author
      this.year = _movies.year
      this.code = _movies.code
      
    }
  
    add_movies(movies) {
      movies.created_at = new Date().toISOString()
      movies.push(movies)
      stock[movies.CODE] = stock[movies.CODE] ? stock[movies.CODE] + 1 : 1
      // if (stock[movies.CODE]) {
      //   stock[movies.CODE] = stock[Movies.CODE] + 1
      // } else {
      //   stock[Movies.CODE] = 1
      // }
      return movies
    }
  
  }
  
  const remove_movies = (code) => { }
  
  const add_movies = (movies) => {
    movies.created_at = new Date().toLocaleDateString()
    movies.push(movies)
    stock[movies.CODE] = stock[movies.CODE] ? stock[movies.CODE] + 1 : 1
    // if (stock[movie.CODE]) {
    //   stock[movie.CODE] = stock[movie.CODE] + 1
    // } else {
    //   stock[movie.CODE] = 1
    // }
    return movies
  }
  
  const get_movies = (code) => { }
  
  console.log(movies)
  console.log(stock)
  
  add_movies({ title: 'Die Hard', star_Actor: 'Bruce Wiilis', year: '2008', code:'1122' })
  add_movies({ title: 'Die Hard', star_Actor: 'Bruce Wiilis', year: '2008', code:'1122' })
  add_movies({ title: 'Full Metal Alchemist', star_Actor: 'Paulo Coelho', year: '2012', code: '1133' })
  // add_movies({ title: 'Full Metal Alchemist', author: 'Paulo Coelho', year: '2012', code: '1133' })
  
  console.log(movies)
  console.log(stock)
  
  class Library {
  
    addMovies(_movies) {
      const is_array_of_movies = Array.isArray(movies)
      if (!is_array_of_movies) {
        throw new Error('Invalid movie title')
      }
  
      for (const _movies of _movies) {
        const instance = new Movies(_movies)
  
        const new_movies = instance.add_movies(instance)
      }
    }
  }
  
  new Library().addmovies([
      { title: 'Avengers', star_Actor: 'Dawny Junior', year: '2012', code: '2211' },
      { title: 'Avengers', star_Actor: 'Dawny Junior', year: '2012', code: '2211' }, 
  ])
  
  console.log(movies)
  const email = 'tobechukwu568@gmail.com'
  console.log(email.split('@')[1].split('.')[1])
 
