import { dataActions } from "./data-slice";
import { dataType } from "./data-slice";

export const fetchSkillsData = () => {
  return async (dispatch: any) => {
    const fetchData = async (): Promise<typeof dataType> => {
      const response = await fetch("./dummy.json");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data: typeof dataType = await response.json();
      return data;
    };

    try {
      const skillData = await fetchData();
      const skills = skillData[0].skills;
      const experiences = skillData[0].experiences;
      const trainings = skillData[0].trainings;
      const skillTopics = skillData[0].skillTopics;

      dispatch(
        dataActions.addData({
          skills: skills || [],
          experiences: experiences || [],
          trainings: trainings || [],
          skillTopics: skillTopics || [],
        })
      );
    } catch (error) {
      alert(error);
    }
  };
};

// export const useFetchSkillTopicById = (id: string) => {
//   return async (dispatch: any) => {
//     const fetchData = async () => {
//       const response = await fetch("./dummy.json");

//       if (!response.ok) {
//         throw new Error("Could not fetch cart data!");
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const skillData = await fetchData();
//       const skillsTopics = skillData[0].skilltopics;
//       skillsTopics.filter((e: any) => e.id === id);
//       const filteredTopics = skillsTopics.filter((e: any) => e.id === id);
//       console.log(filteredTopics);
//       //console.log(skills);
//       //dispatch(dataActions.setSkillTopic(filteredTopics));
//     } catch (error) {}
//   };
// };

// export const UpdateMessage = (message: any, action: any) => {
//   const dispatch = useDispatch();
//   switch (action.type) {
//     case "mouseenter":
//       dispatch(uiActions.setCardBackdrop(true));
//       dispatch(uiActions.setMessage(message));
//       break;
//     case "mouseleave":
//       dispatch(uiActions.setCardBackdrop(false));
//       dispatch(uiActions.setMessage(""));
//       break;
//     default:
//       break;
//   }
//   console.log(message);
// };
// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data!",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://react-http-6b4a6.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantity: cart.totalQuantity,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Sending cart data failed.");
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Sent cart data successfully!",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Sending cart data failed!",
//         })
//       );
//     }
//   };
// };
