import React from 'react'

const Course = props => (
  <div key={props.course.id}>
    <p>{`${props.course.title} by ${props.course.author}`}</p>
    <p>{`${props.course.description}`}</p>
    <p>{`${props.course.topic}`}</p>
    <a href={`${props.course.url}`}>Click here</a>
  </div>
)

export default Course
