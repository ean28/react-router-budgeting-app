// react-router-dom imports
import { Form, NavLink } from "react-router-dom"

//assets
import logomark from "../assets/logomark.svg"

//library
import { TrashIcon } from '@heroicons/react/24/solid'

const Nav = ({ userName }) => {
  return (
    <nav>
        <NavLink
            to="/"
            aria-label="Go to Home"
        >
            <img src={logomark} alt="" height={30}/>
            <span>Budget</span>
        </NavLink>
        {
            userName && (
                <Form
                    method="post"
                    action="/logout"
                    onSubmit={(event) => {
                        if(!confirm("Are you sure you want to delete all your data?")) {
                            event.preventDefault()
                        }
                    }} 
                >
                    <button type="submit" className="btn btn--warning">
                        <span>Delete User</span>
                        <TrashIcon width={20} />
                    </button>
                </Form>
            )
        }
    </nav>
  )
}

export default Nav
