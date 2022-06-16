export default class Api {
  _url
  _token
  _headers

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
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Ошибка');
      });
  }
}
