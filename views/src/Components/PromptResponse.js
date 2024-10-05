import React, { useEffect, useState } from 'react';
import { getPrompts, getPromtResponse, createPrompt } from '../Services/Index';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import Prompts from './Prompts';
function PromptsResponse() {
    const [prompts, setPrompts] = useState([]);
    const [input, setInput] = useState('');
    const [response, setResponse] = useState([]);
    const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setInput('');
        getItems();
        getResponse();
    }, [location]);


    const getResponse = async () => {
        if (id) {
            const data = await getPromtResponse(id);
            console.log(data, "data");
            setResponse(data.promptResponse);
        }
        else {
            setResponse([]);
        }
    }

    const getItems = () => {
        getPrompts().then((data) => {
            console.log(data, "data");
            setPrompts(data.prompts);
        });
    }



    const handleSubmit = (e) => {
        // e.preventDefault();
        let data = {};
        if (id) {
            data.promptId = id;
            data.subprompt = input;
        }
        else {
            data.prompt = input;
            data.subprompt = '';
        }
        createPrompt(data).then((data) => {
            setInput('');
            if (id) {
                getResponse();
                setInput('');
            }
            else {
                console.log(data.promptResponse.prompt_id, "data");
                navigate("/p/" + data.promptResponse.prompt_id);
                //  Navigate("/p/" + data.promptResponse.prompt_id);
            }

        });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div className="h-screen flex">
            <Prompts />

            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow p-4">
                    <h1 className="text-2xl font-semibold flex justify-between items-center">
                        <span>ChatGPT UI</span>
                        <div className="relative inline-block text-right">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-full py-2 border border-gray-300 shadow-sm w-10 h-10 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                                    id="options-menu"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                  K
                                </button>
                            </div>
                            {isMenuOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div className="py-1" role="none">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">My Account</a>
                                        <a href="#" onClick={() => handleLogout()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </h1>



                </header>

                <main className="flex-1 overflow-y-auto p-4">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">

                        {response && response.map((response, index) => (
                            <div className="space-y-4 w-full" key={index}>
                                <div className="flex justify-start w-full mt-3 mb-3">
                                    <div className="bg-gray-200 p-3 rounded-lg w-full">
                                        <p>{response.subprompt}</p>
                                    </div>
                                </div>
                                <div className="flex justify-end w-full mt-3 mt-3">
                                    <div className="bg-blue-500 text-white p-3 rounded-lg w-full">
                                        <p>{response.response}</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </main>

                <footer className="p-4 bg-white border-t">
                    <div className="flex items-center">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Type your message..." className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button onClick={() => handleSubmit()} disabled={input ? false : true} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">Send</button>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default PromptsResponse;