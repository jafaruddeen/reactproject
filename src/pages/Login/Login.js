import React from 'react'
import classNames from 'classnames'


export function Login() {
    return (
        <div className={classNames(
            'formSection',
            'w-96',
            'mx-auto mt-10'
        )}>
            <h1 className="text-center mt-0 mb-4 font-bold text-lg">Login</h1>
            <div className="bg-white rounded-lg p-6 text-center">
                <input type="text" placeholder="username" className="w-full border-2 p-2 rounded-md mb-3" />
                <input type="password" placeholder="password" className="w-full border-2 p-2 rounded-md mb-3" />
                <button className="mx-auto bg-black rounded-full text-white px-5 py-2 text-sm font-bold">Login</button>
            </div>
        </div>
    )
}