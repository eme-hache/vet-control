import { useState, useEffect } from 'react'

import Header from './components/Header'
import List from './components/List'
import Form from './components/Form'

const App = () => {
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  const deletePatient = patientId => {
    setPatients(patients.filter(p => p.id !== patientId))
    setPatient({})
  }

  useEffect(() => {
    setPatients(JSON.parse(localStorage.getItem('patients')) ?? [])
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  return (
    <div className='container mx-auto mt-10 mb-20'>
      <Header />

      <div className='mt-12 md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />

        <List
          patients={patients}
          setPatient={setPatient}
          setPatients={setPatients}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
