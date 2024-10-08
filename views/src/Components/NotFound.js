function NotFound() {
    return ( 
        
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                        <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
                        <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
                            Go Home
                        </a>
                    </div>
                </div>
        
    );
}

export default NotFound;