import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import AddSubjectFrom from '../Components/Add Subject Page/AddSubjectForm'

export default function AddSubject() {
  return (
    <div>
        <AfterLoginNavbar></AfterLoginNavbar>
        <div className='relative h-full`'>
            <Sidebar></Sidebar>

            <div className='ml-12 h-full overflow-y-auto'>
                <AddSubjectFrom></AddSubjectFrom>
            </div>
        </div>
    </div>
  )
}
