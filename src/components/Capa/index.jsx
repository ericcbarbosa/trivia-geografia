import React, { useEffect, useState } from "react";
import "./capa.css";

// const Capa = () => {
//
//     return (
//         <div className="wrapper-capa">
//             <div className="container">
//                 <div className={ step + 'btn' }>
//                 </div>
//             </div>
//         </div>
//
//
//     );
// }
//
// export default Capa;


export default () => {
    const [ state, setState ] = useState( { currentStep: 1 } );

    function _next() {
        let currentStep = state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        setState( {
            currentStep: currentStep
        } )
    }

    function _prev() {
        let currentStep = state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        setState( {
            currentStep: currentStep
        } )
    }

    /*
* the functions for our button
*/
    function previousButton() {
        let currentStep = state.currentStep;
        if ( currentStep !== 1 ) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={ _prev }>
                    Previous
                </button>
            )
        }
        return null;
    }

    const nextButton = ({children})  => {
        let currentStep = state.currentStep;
        if ( currentStep < 3 ) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={ _next }>
                    { children }
                </button>
            )
        }
        return null;
    }


    function Step1( props ) {
        if ( props.currentStep !== 1 ) {
            return null
        }
        return (
            <>
                <h1>
                    Intro
                </h1>
                <p>LOREM IPSUM</p>
                { nextButton("1") }
            </>
        );
    }


    function Step2( props ) {
        if ( props.currentStep !== 2 ) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    className="form-control"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={ props.username }
                    onChange={ props.handleChange }
                />
            </div>
        );
    }

    function Step3( props ) {
        if ( props.currentStep !== 3 ) {
            return null
        }
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={ props.password }
                        onChange={ props.handleChange }
                    />
                </div>
                <button className="btn btn-success btn-block">Sign up</button>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>

            <div className="wrapper-capa">
                <div className="container">
                    <Step1
                        currentStep={ state.currentStep }
                        email={ state.email }
                    />
                    <Step2
                        currentStep={ state.currentStep }
                        username={ state.username }
                    />
                    <Step3
                        currentStep={ state.currentStep }
                        password={ state.password }
                    />
                    { previousButton() }
                </div>
            </div>
        </React.Fragment>
    );

};




