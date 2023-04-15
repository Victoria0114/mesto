export default class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    //возвращает объект с данными пользователя
    //когда данные пользователя нужно будет подставить в форму при открытии.
    const userInfo = {};
    userInfo['name'] = this._userName.textContent;
    userInfo['job'] = this._userJob.textContent;
    return userInfo;
  }

  setUserInfo({ name, job }) {
    //принимает новые данные пользователя и добавляет их на страницу
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}