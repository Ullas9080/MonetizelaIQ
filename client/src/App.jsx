
import Menu from "./components/Menu/Menu"
import Home from "./pages/Home"

const App = () => {



  return (
     <>

      <aside className="hidden md:block fade-in">
        <Menu />
        
      </aside>
   
      <main className="md:ml-64 flex-1 ">
        <Home />
        
      </main>
    </>
  )
}

export default App
