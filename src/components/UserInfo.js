export default class UserInfo {
_profileName
_profileAbout

  constructor({ profileName, profileAbout }) {
    this._userName = document.querySelector(profileName);
    this._userAbout = document.querySelector(profileAbout);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    }
  }

  setUserInfo({ userData }) {
    this._userName.textContent = userData.name;
    this._userAbout.textContent = userData.about;
  }
}
