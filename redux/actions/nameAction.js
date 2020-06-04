import firestore from "@react-native-firebase/firestore";

// Like Name
export const likeName = name => ({
  type: "LIKE_NAME",
  payload: name
});

// Dislike Name
export const dislikeName = name => ({
  type: "DISLIKE_NAME",
  payload: name
});

export const addName = name => {
  return async (dispatch, getState) => {
    const { user } = getState();

    let doc = await firestore()
      .collection("names")
      .add({ name, uid: user.uid });
    const payload = {
      name,
      uid: user.uid,
      id: doc.id
    };
    dispatch({ type: "ADD_NAME", payload });
  };
};
