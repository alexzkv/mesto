export default class UserInfo {
  _userName
  _userAbout
  _userAvatar
  _userId

  constructor(profileNameSelector, profileAboutSelector, profileAvatarSelector) {
    this._userName = document.querySelector(profileNameSelector);
    this._userAbout = document.querySelector(profileAboutSelector);
    this._userAvatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo = () => {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    }
  }

  setUserInfo = ({ name, about, avatar, _id }) => {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userAvatar.style.backgroundImage = `url(${avatar})`;
    this._userId = _id;
  }
}
