// notification model can find at mobile nav bar component

import firebase from "firebase/compat/app";

// send notification
function sendNotification(
  type: "global" | "personal",
  message: string,
  userId: string,
) {
  const notification = {
    type,
    message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    isRead: false,
  };

  if (type === "personal") {
    // model error
    notification.userId = userId;
  }

  return firebase.firestore().collection("notifications").add(notification);
}

// fetch
function getUserNotifications(userId: string) {
  return firebase
    .firestore()
    .collection("notifications")
    .where("userId", "==", userId)
    .orderBy("timestamp", "desc")
    .get();
}

function getGlobalNotifications() {
  return firebase
    .firestore()
    .collection("notifications")
    .where("type", "==", "global")
    .orderBy("timestamp", "desc")
    .get();
}

// mark read
function markAsRead(notificationId: string, userId: string) {
  return firebase
    .firestore()
    .collection("notifications")
    .doc(notificationId)
    .update({
      isRead: true,
      readBy: firebase.firestore.FieldValue.arrayUnion(userId),
    });
}

// mark all read, batch update
function markAllAsRead(userId: string, notificationIds: string[]) {
  const batch = firebase.firestore().batch();

  notificationIds.forEach((notificationId) => {
    const readNotificationRef = firebase
      .firestore()
      .collection("ReadNotifications")
      .doc(userId);

    // Assuming you have a structure to hold all notifications
    batch.set(
      readNotificationRef,
      {
        notificationId,
        isRead: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    ); // Use merge to avoid overwriting other read statuses
  });

  return batch
    .commit()
    .then(() => {
      console.log("All notifications marked as read");
    })
    .catch((error) => {
      console.error("Error marking notifications as read: ", error);
    });
}
