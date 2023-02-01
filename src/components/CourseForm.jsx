import { useState } from 'react'
import useCourseStore from '../app/courseStore'

const CourseForm = () => {

    const addCourse = useCourseStore((state) => state.addCourse)
    
    const [ courseTitle, setCourseTitle ] = useState("")
    console.log("rendered")

    return (
        <div>
            form
        </div>
    )
}

export default CourseForm