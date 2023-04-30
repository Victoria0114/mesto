export default class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    //возвращает объект с данными пользователя
    //когда данные пользователя нужно будет подставить в форму при открытии.
    const userInfo = {};
    userInfo['name'] = this._userName.textContent;
    userInfo['job'] = this._userJob.textContent;
    //userInfo['avatar'] = this._userJob.textContent;
    return userInfo;
  }

  setUserInfo({ name, job, avatar }) {
    //принимает новые данные пользователя и добавляет их на страницу
    this._userName.textContent = name;
    this._userJob.textContent = job;
    this._userAvatar.src = avatar;
  }
  setUserAvatar({ avatar }) {
    this._userAvatar.src = avatar;
  }
}