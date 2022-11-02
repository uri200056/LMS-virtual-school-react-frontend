import React, { useState, useEffect } from 'react'
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Layout from '../../Layout';
import CourseCard from '../CourseCard';
// import './Courses.css'

const Courses = () => {


  return (
    <div className='studentsContainer'>
        <Layout/>

        <div>

          <CardGroup>

              <CourseCard/>
              
          </CardGroup>

        </div>

    </div>
  )
}

export default Courses