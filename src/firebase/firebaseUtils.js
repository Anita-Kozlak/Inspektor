import { firestore } from "./firebaseConfig";

export const usersListCollection = firestore.collection("usersList");

export const acceptUser = (userId) => {
  usersListCollection.doc(userId).update({
    acceptance: true,
  });
};

export const setUserTeam = (userId, teamType) => {
  usersListCollection.doc(userId).update({
    team: teamType,
  });
};

// Firestore
// db.collection("users").document(FirebaseAuth.getInstance().currentUser.uid).delete()
// .addOnSuccessListener { FirebaseAuth.getInstance().currentUser!!.delete().addOnCompleteListener {//Go to login screen} }
// .addOnFailureListener { ... }
