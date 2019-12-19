import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Subject = props => {
  const [subject, setSubject] = useState(null)
  const userId = props.user ? props.user_id : null

  useEffect(() => {
    axios({
      url: `${apiUrl}/subjects/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setSubject(res.data.subject))
      .catch(console.error)
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/subjects/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'You deleted a subject', variant: 'success' })
        props.history.push('/subjects')
      })
      .catch(() => {
        props.alert({ heading: 'Uh Oh!', message: 'You did not delete a subject', variant: 'warning' })
      })
  }

  if (!subject) {
    return <p>Loading...</p>
  }

  console.log(subject.choices)

  const choicesJsx = subject.choices.map(choice => (
    <div key={choice.id}>
      <p>{choice.name} : {choice.description}</p>
    </div>
  ))

  return (
    <div className="subject-board">
      <h2>Title: {subject.title}</h2>
      <h2>Description: {subject.description}</h2>
      <h2>ID: {subject.id}</h2>
      <h2>User: {subject.user.email}</h2>
      <h2>Choices: {choicesJsx}</h2>
      <div>
        <Button href={`#subjects/${props.match.params.id}/edit`} variant="primary" className="mr-2">Update</Button>
        {userId === subject.user_id && <Button onClick={handleDelete} className="btn btn-danger">delete</Button>}
        <Button href={`#subjects/${props.match.params.id}/create-choice`} subject={subject} variant="primary" className="mr-2">Add a Choice</Button>
      </div>
    </div>
  )
}

export default withRouter(Subject)
