// http://localhost:3000/isolated/examples/unnecessary-rerenders.js

import * as React from 'react'

function CountButton({count, onClick}) {
  return <button onClick={onClick}>{count}</button>
}

// Memoize the CountButton component so it only updates when the props change.
CountButton = React.memo(CountButton)

function NameInput({name, onNameChange}) {
  return (
    <label>
      Name: <input value={name} onChange={e => onNameChange(e.target.value)} />
    </label>
  )
}

// Memoize the NameInput component so it only updates when the props change.
NameInput = React.memo(NameInput)

function Example() {
  const [name, setName] = React.useState('')
  const [count, setCount] = React.useState(0)
  const increment = React.useCallback(() => setCount(c => c + 1))
  return (
    <div>
      <div>
        <CountButton count={count} onClick={increment} />
      </div>
      <div>
        <NameInput name={name} onNameChange={setName} />
      </div>
      {name ? <div>{`${name}'s favorite number is ${count}`}</div> : null}
    </div>
  )
}

export default Example

/*
eslint
  no-func-assign: 0,
*/
