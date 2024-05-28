import React from "react";
import ReactDOM from "react-dom/client";
import NotificationComponent from "./components/NotificationComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const shifts = [
  {
    id: 1,
    Ticket: "ABC123",
    Date: "2023-03-22",
    Time: "10:00 AM",
    Outbuilding: "Building A",
  },
  {
    id: 2,
    Ticket: "ABC124",
    Date: "2023-03-23",
    Time: "11:00 AM",
    Outbuilding: "Building B",
  },
  {
    id: 3,
    Ticket: "ABC125",
    Date: "2023-03-24",
    Time: "12:00 PM",
    Outbuilding: "Building C",
  },
  ,
  {
    id: 2,
    Ticket: "ABC124",
    Date: "2023-03-23",
    Time: "11:00 AM",
    Outbuilding: "Building B",
  },
  {
    id: 3,
    Ticket: "ABC125",
    Date: "2023-03-24",
    Time: "12:00 PM",
    Outbuilding: "Building C",
  },
  ,
  {
    id: 2,
    Ticket: "ABC124",
    Date: "2023-03-23",
    Time: "11:00 AM",
    Outbuilding: "Building B",
  },
  {
    id: 3,
    Ticket: "ABC125",
    Date: "2023-03-24",
    Time: "12:00 PM",
    Outbuilding: "Building C",
  },
  ,
  {
    id: 2,
    Ticket: "ABC124",
    Date: "2023-03-23",
    Time: "11:00 AM",
    Outbuilding: "Building B",
  },
  {
    id: 3,
    Ticket: "ABC125",
    Date: "2023-03-24",
    Time: "12:00 PM",
    Outbuilding: "Building C",
  },
  ,
  {
    id: 2,
    Ticket: "ABC124",
    Date: "2023-03-23",
    Time: "11:00 AM",
    Outbuilding: "Building B",
  },
  {
    id: 3,
    Ticket: "ABC125",
    Date: "2023-03-24",
    Time: "12:00 PM",
    Outbuilding: "Building C",
  },
];

const App = () => (
  <div>
    <NotificationComponent shifts={shifts} />
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
