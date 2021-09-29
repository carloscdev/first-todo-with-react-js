import '../assets/css/TodoItem.css'

function TodoItem(props) {
  const deleteStyles = {
    color: '#db3b3b',
    display: 'inline-block',
    marginRight: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  }

  return (
    <section className="list">
      <p className={`${props.completed && 'item-completed'}`}>
        <span onClick={props.onDelete} style={deleteStyles}>
          <i className="fas fa-trash"></i>
        </span>
        {props.text}
      </p>
      <input
        type="checkbox"
        className="checkbox"
        defaultChecked={props.completed}
        onChange={props.onComplete}
      />
    </section>
  )
}

export { TodoItem }