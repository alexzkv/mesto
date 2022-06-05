export default class UserInfo {
  _userName
  _userAbout

  constructor({ profileNameSelector, profileAboutSelector }) {
    this._userName = document.querySelector(profileNameSelector);
    this._userAbout = document.querySelector(profileAboutSelector);
  }

  getUserInfo = () => {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    }
  }

  setUserInfo = ({ 'profile-name': name, 'profile-about': about }) => {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
  }
}
