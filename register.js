// Firebase configuration and initialization
const firebaseConfig = {
    // Replace with your Firebase config
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("checkinForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    db.collection("attendees").add({ name: name, timestamp: new Date() })
        .then(() => {
            document.getElementById("statusMessage").textContent = "Check-in successful!";
            sendEmailUpdate();
        })
        .catch(error => {
            document.getElementById("statusMessage").textContent = "Error: " + error;
        });
});

function sendEmailUpdate() {
    db.collection("attendees").get().then(snapshot => {
        let names = [];
        snapshot.forEach(doc => names.push(doc.data().name));
        // Email sending logic would be handled via Firebase Functions or third-party service
        console.log("Email update to j.waite26@gmail.com with attendees:", names);
    });
}
