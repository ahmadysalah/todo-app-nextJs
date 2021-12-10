import React from 'react'
import API from '../../API'
 import Todo from "../../components/Todo/Todo"

export default function TodoPage({todos}) {
    return (
        <div style={{width:'80%', margin:'0 auto'}}>
                 <Todo data={todos}/>
         </div>
    )
}

export async function getServerSideProps(context) {
    const  {data}= await API.get('/todos')
    
    return {
      props: {
        todos: data
    }
  }}