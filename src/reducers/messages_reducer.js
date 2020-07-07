export default function(state = null, action) {
  switch (action.type) {
    case 'SET_MESSAGES': {
      return action.payload;
    }
    case 'CREATE_MESSAGE': {
      const messages = [...state];
      messages.push(action.payload);
      return messages;
    }
    default: {
      return state;
    }
  }
}
