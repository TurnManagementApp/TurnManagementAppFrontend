import React, { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";

const NotificationComponent = ({ shifts }) => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const checkShifts = () => {
      const now = Date.now();

      const newNotifications = shifts.filter((shift) => {
        const [month, day, year] = shift.Date.split("-");
        const [time, period] = shift.Time.split(" ");
        const [hours, minutes] = time.split(":");

        let hours24 = parseInt(hours);
        if (period === "PM" && hours24 !== 12) {
          hours24 += 12;
        }
        if (period === "AM" && hours24 === 12) {
          hours24 = 0;
        }

        const dateShift = new Date(year, month - 1, day, hours24, minutes);
        return dateShift <= now;
      });
      setNotifications(newNotifications);
    };
    const interval = setInterval(checkShifts, 60000);

    checkShifts();

    return () => {
      clearInterval(interval);
    };
  }, [shifts]);
  return (
    <>
      <Container>
        {notifications.map((shift) => (
          <Alert key={shift.id} variant="info">
            The appointment with ticket {shift.Ticket} scheduled for{" "}
            {shift.Time} at {shift.Outbuilding} has been attended.
          </Alert>
        ))}
      </Container>
      ;
    </>
  );
};

export default NotificationComponent;
