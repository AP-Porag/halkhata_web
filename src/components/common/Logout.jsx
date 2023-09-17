import React from 'react'

export default function Logout() {
    function logout() {
        console.log('logout function here!')
    }
    return (
        <div>
            <button
                className="bg-amber-300 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={logout}>
                <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 1L8 1V2L2 2L2 13H8V14H1L1 1ZM10.8536 4.14645L14.1932 7.48614L10.8674 11.0891L10.1326 10.4109L12.358 8L4 8V7L12.2929 7L10.1464 4.85355L10.8536 4.14645Z" fill="#ffffff"/>
                </svg>
                <span className="pl-2">Logout</span>
            </button>
        </div>
    )
}