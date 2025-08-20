// Firebase configuration and initialization
const firebaseConfig = {
    // Replace with your Firebase config
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function updateAttendeeCount() {
    db.collection("attendees").get().then(snapshot => {
        document.getElementById("attendeeCount").textContent = snapshot.size;
    });
}

updateAttendeeCount();
