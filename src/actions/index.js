// TODO: add and export your own actions

export function setMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'SET_MESSAGES',
        payload: data.messages
      };
    });
}

export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  };
}
