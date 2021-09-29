import '../assets/css/TodoButton.css'

function TodoButtom({ openModal, setOpenModal }) {
  
  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <button
      className={`${openModal && 'rotate'} buttonAdd`}
      onClick={toggleModal}
    >
      <i className="fas fa-plus"></i>
    </button>
  )
}

export { TodoButtom }