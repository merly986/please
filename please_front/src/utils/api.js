class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResult(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка:${response.status}`);
  }

  //  getting  cards
  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((response) => this._checkResult(response));
  }

  // postting cards
  postCards(userData) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        link: userData.link,
      }),
    }).then((response) => this._checkResult(response));
  }
  // delete card
  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((response) => this._checkResult(response));
  }

  // like card
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: `${isLiked ? "PUT" : "DELETE"}`,
      headers: this._headers,
    }).then((response) => this._checkResult(response));
  }

  // delete like
  unlikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((response) => this._checkResult(response));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((response) => this._checkResult(response));
  }

  editUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then((response) => this._checkResult(response));
  }

  editAvatar(userData) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: userData.avatar,
      }),
    }).then((response) => this._checkResult(response));
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    authorization: "3506c88d-b52d-4252-882d-40c36d7fbe63",
    "Content-Type": "application/json",
  },
});

export default api;
