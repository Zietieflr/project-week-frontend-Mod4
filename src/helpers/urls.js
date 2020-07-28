const urls = {
  characters: 'http://localhost:3000/characters/'
}

export default function url(key) {
  return urls[key]
}