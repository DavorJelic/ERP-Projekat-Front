import react, { useEffect, useState } from "react";
import axios from "axios";
import { UseAuthContext } from "../context/auth_context";
import jwt from 'jwt-decode';
import { useHistory } from "react-router-dom";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const { token } = UseAuthContext();
  const history = useHistory();

  if(token) {
      var role = jwt(token).role;
  }

  useEffect(() => {
    const response = axios
      .get("http://localhost:5000/api/invoice")
      .then((data) => {
        console.log(data.data);
        setInvoices(data.data);
      });
  }, []);

  if(token && role === "ADMIN") {
    return (
        <div>
          {invoices.map((i) => {
            return (
              <div key={i.dateTime}>
                <p>Amount: {i.amount}</p>
                <p>DateTime: {i.dateTime}</p>
                <p>User: {i.user.name}</p>
                <p>-------------</p>
              </div>
            );
          })}
        </div>
      );
  } else {
      history.push("/");
      return <></>;
  }
};

export default Invoices;