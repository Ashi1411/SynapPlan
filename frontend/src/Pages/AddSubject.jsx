import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import AddSubjectFrom from '../Components/Add Subject Page/AddSubjectForm'

export default function AddSubject() {
  return (
    <div>
        <AfterLoginNavbar></AfterLoginNavbar>
        <div className='flex'>
            <Sidebar></Sidebar>

            <div className='flex-1'>
                <AddSubjectFrom></AddSubjectFrom>
            </div>
        </div>
    </div>
  )
}
