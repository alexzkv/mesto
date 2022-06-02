export default class UserInfo {
  _nameSelector
  _aboutSelector

  constructor({ nameSelector, aboutSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const info = {
      name: this._profileName.textContent;
      about: this._profileAbout.textContent;
    }
    return info;
  }

  setUserInfo() {
    this._name.textContent = info.name;
    this._about.textContent = info.about;
  }
}
