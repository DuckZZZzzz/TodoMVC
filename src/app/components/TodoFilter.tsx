function TodoFilter ({setFilter}: any) {
  return (
    <div>
      <button onClick={() => {setFilter('active')}}>待办</button>
      <button onClick={() => {setFilter('completed')}}>已办</button>
      <button onClick={() => {setFilter('all')}}>全部</button>
    </div>
  )
}

export default TodoFilter