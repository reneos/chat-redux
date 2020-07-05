// TODO: add and export your own actions

export function setMessages() {
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log('DATA HERE:');
      console.log(data);
      return {
        type: 'SET_MESSAGES',
        payload: data.messages
      };
    });
}
