/*** Custom HOOK to Check if the Elemen is in View
 *  Pass on the ID will return true or false
 *
 */

import { useEffect, useState } from "react";
const useCheckInViewById = (id: string): boolean => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const _id = document.getElementById(id);

    if (_id) {
      window.addEventListener("scroll", () => {
        const rect = _id!.getBoundingClientRect();
        const bool = rect.top >= 0 && rect.bottom <= window.innerHeight; //returns if true or false
        return setInView(bool);
      });
    }

    return () => {
      // window.removeEventListener("scroll", isInView);
    };
  }, [id]);
  return inView;
};

export default useCheckInViewById;
