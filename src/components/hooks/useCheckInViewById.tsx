/*** Custom HOOK to Check if the Elemen is in View
 *  Pass on the ID will return true or false
 *
 */

import { useEffect, useState, useCallback } from "react";
const useCheckInViewById = (id: string): boolean => {
  const [inView, setInView] = useState(false);

  const isInView = useCallback(() => {
    const _id = document.getElementById(id);

    if (_id) {
      window.addEventListener("scroll", () => {
        //const rect = _id.getBoundingClientRect();
        const bool =
          _id.getBoundingClientRect().top >= 0 &&
          _id.getBoundingClientRect().bottom <= window.innerHeight; //returns if true or false
        return setInView(bool);
      });
    }
  }, []);
  useEffect(() => {
    isInView();
    return () => {
      window.removeEventListener("scroll", isInView);
    };
  }, [id]);
  return inView;
};

export default useCheckInViewById;
// const bool =
// _id.getBoundingClientRect().top >= 0 &&
// _id.getBoundingClientRect().bottom <= window.innerHeight; //returns if true or false
