export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
    this._headers = {
      'Content-type': 'application/json',
      authorization: this._token,
    }
  }

  getCards() {
    return fetch(this._url, {
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject('Ошибка');
      });
  }
}
