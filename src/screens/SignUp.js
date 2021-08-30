import React, { useState} from 'react'
import Head from '../components/Head'
import StepNavigation from '../components/StepNavigation'
import Form from '../components/Form'

function SignUp() {
    const labelArray=[['STEP 1:', 'CREATE YOUR ACCOUNT PASSWORD',], ['STEP 2:', 'PERSONAL INFORMATION'], ['STEP 3:', 'EMPLOYMENT DETAILS'], ['STEP 4:', 'UPLOAD DOCUMENTS'], ['STEP 5:', 'COMPLETE']]
    const[currentStep, setCurrentStep] = useState(1);

    return (
        <>
            <Head/>
            <StepNavigation labelArray={labelArray} currentStep={currentStep} ></StepNavigation>
            <Form/>
        </>
    )
}

export default SignUp
