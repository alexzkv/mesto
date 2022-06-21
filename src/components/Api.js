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

  getUserInfo() {
    return fetch(this._baseUrl + 'users/me', {
      headers: this._headers,
      method: 'GET'
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject('Ошибка');
    });
  }

  updateInfo({ name, about }) {
    return fetch(this._baseUrl + 'users/me', {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name,
        about
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject('Ошибка');
    });
  }

  updateAvatar(url) {
    const body = {avatar: url};
    return fetch(this._baseUrl + 'users/me/avatar', {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject('Ошибка');
    });
  }

  getCards() {
    return fetch(this._baseUrl + 'cards', {
      headers: this._headers,
      method: 'GET'
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject('Ошибка');
    });
  }

  addCard(body) {
    return fetch(this._baseUrl + 'cards', {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject('Ошибка');
    });
  }

  deleteCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      headers: this._headers,
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject('Ошибка');
      });
  }

  likeCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      headers: this._headers,
      method: 'PUT'
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject('Ошибка');
      });
  }

  deleteLikeCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      headers: this._headers,
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject('Ошибка');
      });
  }
}
