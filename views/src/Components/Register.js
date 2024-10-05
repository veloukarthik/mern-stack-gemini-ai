import { useState } from "react";
import { register } from "../Services/Index";
import { useNavigate } from "react-router-dom";

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            gender: gender
        }
        const response = await register(data);
        console.log(response);
        if (response.status === false) {
            setError(response.message);
        }
        if (response.status === true) {
            setSuccess(response.message);
        }
        setTimeout(() => {
            if (response.status === true) {

                navigate('/')
            }
            setError('');
            setSuccess('');
        }, 3000);

    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'name') {
            setName(value);
        }
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
        if (name === 'phone') {
            setPhone(value);
        }
        if (name === 'gender') {
            setGender(value);
        }
    }

    return (
        <div className="min-h-screen flex bg-gray-50">

            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max')" }}></div>
            <div className="flex-1 flex items-center justify-center bg-gray-100">
                <div className="px-8 py-6 w-full max-w-md bg-white shadow-lg">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>

                    <form className="" action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="py-2">
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input id="username" value={name} onChange={(e) => handleChange(e)} name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                            </div>
                            <div className="py-2">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" value={email} onChange={(e) => handleChange(e)} name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div className="py-2">
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input id="phone" name="phone" value={phone} onChange={(e) => handleChange(e)} type="tel" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone number" />
                            </div>
                            <div className="py-2">
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" value={password} onChange={(e) => handleChange(e)} type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                            <div className="py-2">
                                <label htmlFor="gender" className="sr-only">Gender</label>
                                <select id="gender" name="gender" value={gender} onChange={(e) => handleChange(e)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        {success ?
                            <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                                <span class="font-medium">{success}</span>
                            </div>
                            :
                            ''
                        }
                        {error ?
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span class="font-medium">{error}</span>
                            </div>
                            :
                            ''

                        }

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Register
                            </button>
                        </div>
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-600">
                                Already have an account? <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-700">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;