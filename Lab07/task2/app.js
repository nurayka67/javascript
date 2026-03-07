import { NotificationFactory } from './NotificationFactory.js';

function sendNotification(type, options, message) {
  try {
    const notification = NotificationFactory.create(type, options);
    return notification.send(message);
  } catch (error) {
    console.error('Error:', error.message);
    return { success: false, error: error.message };
  }
}

console.log(sendNotification('email', { to: 'user@test.com', subject: 'Hello' }, 'Welcome!'));
console.log(sendNotification('sms', { to: '+123456789' }, 'Your code is 123'));
console.log(sendNotification('push', { deviceToken: 'abc123', title: 'Alert' }, 'New message'));