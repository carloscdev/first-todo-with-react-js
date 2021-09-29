import ReactDOM from 'react-dom'
import '../assets/css/TodoModal.css'

function TodoModal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export { TodoModal }