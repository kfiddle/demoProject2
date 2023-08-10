import React, { useEffect } from "react";

function Users() {
  const [harmodevs, setHarmodevs] = useState([]);

  useEffect(() => {
    const getDevs = async () => {
      const reply = await fetch("http://localhost:3000/users");
      const parsedList = await reply.json();
      if (parsedList.length > 0) setHarmodevs(parsedList);
    };

    const getCoolStuff = async () => {
      const reply = await fetch("http://localhost:3000/delete-user");
      const parsedList2 = await reply.json();
      if (parsedList2.length > 0) console.log(parsedList2);
    };

    getDevs();
    getCoolStuff();
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/add-user")
      .then((res) => res.json())
      .then((list) => setHarmodevs(list));
  }, []);

  return <div>Users</div>;
}

export default Users;
