import '../styles/main.scss';
import { IoIosNotifications } from "react-icons/io";

type AlertType = 'info' | 'warning' | 'success' | 'error';

type AlertProps = {
    type: AlertType;
    message: string;
    duration?: number;
};

export default function Alert({ type, message }: AlertProps) {
    return (
        <div className={`alert ${type.toLowerCase()}`}>
            <div className='icon'>
                <IoIosNotifications />
            </div>
            <div>{message}</div>
        </div>
    );
}
