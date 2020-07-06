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
