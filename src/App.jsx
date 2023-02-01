import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'

const App = () => {
   return (
      <div className='main-container'>
         <h1>My Course List</h1>
         <CourseForm />
         <CourseList />
      </div>
   )
}

export default App