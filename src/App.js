import './App.css'
import React, { useState } from 'react'

function App() {
  const [operation, setOperation] = useState('')

  return (
    <form name='calc'>
      <table>
        <input
          type='text'
          name='input'
          size='16'
          className='input'
          placeholder='0'
          value={operation}
        ></input>
        <tr>
          <td>
            <input
              type='button'
              value='1'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              value='2'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              value='3'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              value='+'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <br></br>
            <input
              type='button'
              value='4'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              value='5'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              value='6'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              value='-'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <br></br>
            <input
              type='button'
              value='7'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              value='8'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              value='9'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              value='*'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <br></br>
            <input
              type='button'
              id='clear'
              name='clear'
              value=' C '
              onClick={() =>
                setOperation(operation.substr(0, operation.length - 1))
              }
            />
            <input
              type='button'
              name='zero'
              value='0'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <input
              type='button'
              name='doit'
              value=' = '
              onClick={(e) => {
                try {
                  setOperation(
                    String(eval(operation)).length > 3 &&
                      String(eval(operation)).includes('.')
                      ? String(eval(operation).toFixed(4))
                      : String(eval(operation))
                  )
                } catch (error) {
                  console.log(error)
                }
              }}
            />
            <input
              type='button'
              name='div'
              value='/'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
            <br></br>
            <input
              type='button'
              value='clear'
              className='clear'
              onClick={() => setOperation('')}
            />
            <input
              type='button'
              value='.'
              onClick={(e) => {
                setOperation(operation + e.target.value)
              }}
            />
          </td>
        </tr>
      </table>
    </form>
  )
}

export default App
