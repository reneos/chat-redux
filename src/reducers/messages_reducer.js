export default function(state = null, action) {
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload;
    case 'CREATE_MESSAGE': {
      let messages = state.messages || [];
      messages = messages.slice(0);
      messages.push(action.payload);
      return messages;
    }
    default:
      return state;
  }
}
