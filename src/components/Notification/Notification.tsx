import style from "./Notification.module.css";

interface NotificationProps {
  text: string;
}

function Notification({ text }: NotificationProps) {
  return (
    <div className={style.notification}>
      Looking for: <span className={style.specialText}>{text}</span>
    </div>
  );
}

export default Notification;
