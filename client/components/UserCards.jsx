import React, { useEffect } from "react";

function UserCards() {
  const [cool_stuff, setCool_Stuff] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/library")
      .then((res) => res.json())
      .then((list) => setHarmodevs(list));
  }, []);

  return <div>UserCards</div>;
}

export default UserCards;
