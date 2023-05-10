let messageId = 0;

function getNextId() {
  messageId += 1;
  return messageId;
}

export function createTextMessage(text) {
  return {
    id: getNextId(),
    type: 'text',
    text
  };
}

export function createImageMessage(uri) {
  return {
    id: getNextId(),
    type: 'image',
    uri
  };
}

export function createLocationMessage(coordinate) {
  return {
    id: getNextId(),
    type: 'location',
    coordinate
  };
}
