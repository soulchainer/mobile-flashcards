import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import { NOTIFICATION_KEY } from '../constants';

/*
 * Delete the currect local notification
 */
export const clearLocalNotification = () => {
  /* delete notification from device's storage */
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    /* cancel all previously programmed notifications */
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

/*
* Create an object representing a notification
*/
const createNotification = () => ({
  title: 'Your daily study session',
  body: "👋 Remember to study a bit everyday. It's good for your brain!",
  /* some notification options */
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
});

/*
* Set a new local notification
*/
export function setLocalNotification () {
  /* request notification object from storage */
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) { /* notification doesn't exists */
        /* ask permission to create/add a new notification */
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              /*
               * if permission is granted, cancel scheduled notifications to
               * add a new one
               */
              Notifications.cancelAllScheduledNotificationsAsync()
              /*
               * set the date to start emitting the notification:
               * tomorrow at 12:00
               */
              let t = new Date()
                  t.setDate(t.getDate() + 1)
                  t.setHours(12)
                  t.setMinutes(0)
              /* schedule new repeating notifications */
              Notifications.scheduleLocalNotificationAsync(
                /* create new notification object */
                createNotification(),
                /* set some notification options */
                {
                  /* when start to lauch notifications */
                  time: t,
                  /* frecuency of the notifications */
                  repeat: 'day',
                }
              )
              /* save notification schedule into storage */
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}