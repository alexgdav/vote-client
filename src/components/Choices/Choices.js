// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
//
// const Choices = props => {
//   const [choices, setChoices] = useState([])
//   const userId = props.user.id
//   // const [choices, setChoices] = useState([])
//
//   useEffect(() => {
//     axios({
//       url: `${apiUrl}/choices`,
//       method: 'GET',
//       headers: {
//         'Authorization': `Token token=${props.user.token}`
//       }
//     })
//       .then(response => {
//         setChoices(response.data.choices)
//         // setChoices(response.data.choices.choices)
//         console.log(response.data.choices[0].choices)
//       })
//       // .then(() => props.alert({ heading: 'Success', message: 'You got Choices', variant: 'success' }))
//       .catch(console.error)
//   }, [])
//
//   const choicesJsx = choices.map(choice => (
//     <div key={choice.id}>
//       {userId === choice.user.id && <Button className="box list inner-shadow" as={'a'} href={`#/choices/${choice.id}`}><p className="text-shadow">Choice ID : {choice.id}<br/>Title: {choice.title} <br /> Description: {choice.description}<br/>by - {choice.user.email}</p></Button>}
//     </div>
//   ))
//
//   // const choicesJsx = choices.map(choice => (
//   //   <div key={choice.id}>
//   //     <p>{choice.name}</p>
//   //   </div>
//   // ))
//
//   return (
//     <div className="choice-board">
//       <h1>Choose a choice to UPDATE or DELETE.</h1>
//       <Container>
//         <Row className="justify-content-md-center">
//           <Col>{choicesJsx}</Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }
//
// export default Choices
