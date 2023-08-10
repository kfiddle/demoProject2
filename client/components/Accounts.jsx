import React, { useEffect } from "react";

function Accounts() {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:3000/users";

  useEffect(() => {
    fetch("http://localhost:3000/accounts")
      .then((res) => res.json())
      .then((list) => setHarmodevs(list));
  }, []);

  return <div>Accounts</div>;
}

export default Accounts;
