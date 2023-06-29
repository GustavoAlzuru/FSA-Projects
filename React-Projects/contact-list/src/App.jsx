import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedId, setSelectedId] = useState(null)
  const showDetails = (id) => {
    setSelectedId(id)
  }
  return (
    <>
      {
        selectedId ? 
        <SelectedContact selectedId={selectedId} setSelectedId={setSelectedId}/>
        : 
        <ContactList showDetails={showDetails}/>
      }
    </>
  )
}

export default App
