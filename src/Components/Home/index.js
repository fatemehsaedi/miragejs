import { useEffect, useState } from "react";
import api from "../../libs/api";
import "./HomeCss.css";

const Home = () => {
  const [reminderList, setReminderList] = useState();
  const getReminder = async () => {
    const response = await api.getReminder("/api/reminder");
    setReminderList(response?.reminders);
  };

  useEffect(() => {
    getReminder();
  }, []);

  return (
    <div>
      {reminderList && reminderList.map((item) => (
        <div className="container" key={item.id}>
          <img src="img/reminder-image.gif" alt="Avatar" className="img" />
          <div>
            <h4 className="textCenter">
              <b>{item.name}</b>
            </h4>
            <p className="textCenter">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
