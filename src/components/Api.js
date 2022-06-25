export default class Api {
  _baseUrl
  _token
  _headers

  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
    this._headers = {
      'Content-type': 'application/json',
      authorization: this._token
    }
  }

  _сheckServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('Ошибка');
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      method: 'GET'
    })
    .then(this._сheckServerResponse);
  }

  updateInfo({ name, about }) {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(this._сheckServerResponse);
  }

  updateAvatar(url) {
    const body = {avatar: url};
    return fetch(`${this._baseUrl}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body)
    })
    .then(this._сheckServerResponse);
  }

  getCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
      method: 'GET'
    })
    .then(this._сheckServerResponse);
  }

  addCard(body) {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(this._сheckServerResponse);
  }

  deleteCard(_id) {
    return fetch(`${this._baseUrl}cards/${_id}`, {
      headers: this._headers,
      method: 'DELETE'
    })
    .then(this._сheckServerResponse);
  }

  likeCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      headers: this._headers,
      method: 'PUT'
    })
    .then(this._сheckServerResponse);
  }

  dislikeCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      headers: this._headers,
      method: 'DELETE'
    })
    .then(this._сheckServerResponse);
  }
}
