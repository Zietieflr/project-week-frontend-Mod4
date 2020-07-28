export function fetchGET(url) {
  return fetch(url)
    .then(response => response.json())
}

export function fetchDELETE(url, id) {
  fetch(url + id, {
    method: 'DELETE'
  })
}

export function fetchWithBody(url, method, body) {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
}