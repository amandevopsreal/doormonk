import React from 'react'
import './Barberlogin.css'
import { Link } from 'react-router-dom'
const Barberlogin = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h1 className='text-light'>Earn More. Earn Easily</h1>
                </div>

            </div>
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 white fw6 ph0 mh0">Login</legend>
                            <div className="mt3">
                                <label className="db white fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db white fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Login" />
                        </div>
                        <div className="lh-copy mt3">
                            <Link to={"/barberregister"} className="pointer f6 white link dim black db">Register</Link>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
}

export default Barberlogin