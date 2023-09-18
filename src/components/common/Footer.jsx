import googlePlayStoreLogo from '../../assets/google-play.svg';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full bg-white">
            <footer className="fixed md:flex md:justify-between bottom-0 w-full left-0 z-20 bg-white border-t border-gray-200 shadow text-center dark:bg-gray-800 dark:border-gray-600 px-5">
                <span className="mt-7 hidden md:block text-sm text-gray-500 text-center dark:text-gray-400">© {currentYear} All Rights Reserved.</span>
                <div className="flex justify-center w-full md:w-auto">
                    <span className="capitalize mt-7 mr-3 text-sm text-gray-500 text-center dark:text-gray-400">Download App </span>
                    <a className="w-20" href="#"><img src={googlePlayStoreLogo} alt=""/></a>
                </div>
                <span className="hidden md:block capitalize mt-7 text-sm text-gray-500 text-center dark:text-gray-400">Developed by <a href="#" className="hover:underline text-blue-800 font-bold">Mad Brain</a></span>
            </footer>
        </div>
    )
}