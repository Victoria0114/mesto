export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    //возвращает объект с данными пользователя
    //когда данные пользователя нужно будет подставить в форму при открытии.
    const userInfo = {};
    userInfo['name'] = this._userName.textContent;
    userInfo['about'] = this._userAbout.textContent;
    return userInfo;
    // return {
    //   name: this._userName.textContent,
    //   about: this._userAbout.textContent,
    //   avatar: this._userAvatar.src,
    // };
  }

  setUserInfo({ name, about, avatar }) {
    //принимает новые данные пользователя и добавляет их на страницу
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userAvatar.src = avatar;
  }
  setUserAvatar({ avatar }) {
    this._userAvatar.src = avatar;
  }
}