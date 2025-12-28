import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
      console.log("set to offline..");
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
      console.log("set to online..");
    });
  }, []);

  return onlineStatus;
};


export default useOnlineStatus;