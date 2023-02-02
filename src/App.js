import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  function pagination() {
    let pages = []
    for (let i = 1; i <= Math.ceil(allUsers.length / 3); i++) {
      pages.push(i)
    }
    return pages
  }

  function changePage(command) {
    if (command === 'prev') {
      if (page === 1) return
      else {setPage(page-1)}
    }
    else if (command === 'next') {
      if (page === Math.ceil(allUsers.length / 3)) return
      else {setPage(page + 1)}
    }
  }

  useEffect(() => {
    (async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const res = await data.json()
      setAllUsers(res)
    })()
  }, [])

  useEffect(() => {
    setUsers(allUsers.slice(3 * (page - 1), 3 * (page - 1) + 3))
  }, [page, allUsers])

  return (
    <div className='container'>
      {users.map((user) => {
        return <Card key={user.id} data={user} />
      })}

      <div className='pagination'>
        <div onClick={() => changePage('prev')}>{'<'}</div>
        {pagination().map((curr) => {
          if (curr === page) {
            return <div onClick={() => setPage(curr)} className='activePage' key={curr}>{curr}</div>
          }
          else {
            return <div onClick={() => setPage(curr)} key={curr}>{curr}</div>
          }
        })}
        <div onClick={() => changePage('next')}>{'>'}</div>
      </div>
    </div>
  );
}

export default App;