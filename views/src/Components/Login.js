function Login() {
    return (
        <div className="flex min-h-screen">
            <div className="flex-1 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max')"}}>
                {/* You can add any content for the left side if needed */}
            </div>
            <div className="flex-1 flex items-center justify-center bg-gray-100">
                <div className="px-8 py-6 w-full max-w-md bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center mb-6">Login to your account</h3>
                    <form action="">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input type="text" placeholder="Email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" placeholder="Password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                Login
                            </button>
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
                        </div>
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-600">
                                Don't have an account? <a href="/register" className="font-medium text-blue-600 hover:text-blue-800">Create one</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;