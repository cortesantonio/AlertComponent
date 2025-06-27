import { useState } from 'react'
import './styles/main.scss'
import Alert from './components/Alert'

type AlertType = 'info' | 'warning' | 'success' | 'error';

function App() {
  const alerts: AlertType[] = ['info', 'warning', 'success', 'error']
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState<AlertType>('info')
  const [alertMessage, setAlertMessage] = useState('')
  const [alertDuration] = useState(3000) // 3 seconds default

  function handleAlert(type: AlertType, message: string) {
    if (!showAlert) {
      setAlertMessage(message);
      setAlertType(type);
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage('')
      }, alertDuration);
    }
  }

  return (
    <>
      {showAlert && <Alert type={alertType} message={alertMessage} />}
      <div className='container'>
        <div className='alertContainer'>
          <h4>{"> "}Examples</h4>
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>
                <p>Test {alert.charAt(0).toUpperCase() + alert.slice(1)}</p>
                <button 
                  onClick={() => handleAlert(alert, `Test ${alert} message.`)} 
                  className={`${alert} btnTest`}
                >
                  TRY
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
