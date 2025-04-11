import { Outlet} from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <>
    <main>
       <Outlet />
    </main>
    <br />
    <br />
    <br />
    <footer>
      <p>© 2025 Rush-hour Salah - All rights not reserved.</p>
     
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li> <p><a href="https://github.com/salah-hnt" target="_blank">Mon Github</a></p></li>
        </ul>
      </nav>
    </footer>
    </>
  )
}

export default App
