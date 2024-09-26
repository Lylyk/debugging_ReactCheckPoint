import React , {useState} from 'react'

function MyComponent() {

        let [name , setName] = useState("Guest");
        const [age , setAge] = useState(0);
        const[isEmployed, setIsEmployed] = useState(false);

        const updateName = () => {
            setName('John Doe')
        }

        const incrementAge = () => {
            setAge(age +1)
        }

        const ToggleEmployeeStatus = () => {
            setIsEmployed(!isEmployed)
        }


    return (
    <>
            <p> Name: {name}</p>
            <button onClick={updateName}>
                Set Name
            </button>

            <p> Age: {age}</p>
            <button onClick={incrementAge}>
                +1 Age
            </button>

            <p> Is Employed: {isEmployed ? "yes":"no"}</p>
            <button onClick={ToggleEmployeeStatus}>
                display Employee Status
            </button>
    </>
  )
}

export default MyComponent