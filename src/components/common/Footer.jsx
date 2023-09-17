import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow text-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm text-gray-500 text-center dark:text-gray-400">© {currentYear} <a href="#" className="hover:underline">Mad Brain</a>. All Rights Reserved.</span>
            </footer>
        </div>
    )
}