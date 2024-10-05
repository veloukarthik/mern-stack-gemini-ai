import React, { useEffect, useState } from 'react';
import { getPrompts } from '../Services/Index';  // getPromtResponse isn't used
import { Link } from 'react-router-dom';
import { format, isToday, isYesterday, subDays, isAfter, isThisMonth, isThisYear } from 'date-fns';

// Function to categorize the dates
const categorizeDate = (date) => {
    const givenDate = new Date(date);
    const today = new Date();
    const yesterday = subDays(today, 1);
    const sevenDaysAgo = subDays(today, 7);
    const thirtyDaysAgo = subDays(today, 30);

    if (isToday(givenDate)) {
        return 'Today';
    } else if (isYesterday(givenDate)) {
        return 'Yesterday';
    } else if (isAfter(givenDate, sevenDaysAgo)) {
        return 'Previous 7 days';
    } else if (isAfter(givenDate, thirtyDaysAgo)) {
        return 'Previous 30 days';
    } else if (isThisMonth(givenDate)) {
        return 'This Month';
    } else if (isThisYear(givenDate)) {
        return 'This Year';
    } else {
        return format(givenDate, 'yyyy');  // Returns the specific year if outside the current year
    }
};

// Function to group messages by date category
const groupMessagesByDate = (messages) => {
    return messages.reduce((groups, message) => {
        const category = categorizeDate(message.updatedAt);
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(message);
        return groups;
    }, {});
};

function Prompts({ changes }) {
    const [prompts, setPrompts] = useState([]);
    const [input, setInput] = useState('');

    const getItems = () => {
        getPrompts().then((data) => {
            setPrompts(data.prompts);
        });
    };

    useEffect(() => {
        getItems();
    }, [changes]);

    // Grouping prompts by date
    const groupedPrompts = groupMessagesByDate(prompts);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            // Your form submit logic
        }
    };

    return (
        <div className="h-screen flex">
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 font-bold text-xl border-b border-gray-700">Gemini AI</div>
                <div className="w-64 bg-gray-800 text-white flex flex-col">
                    <Link to="/" className="p-4 font-bold text-xl border-b border-gray-700">New</Link>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    {/* Iterate over each group */}
                    {Object.keys(groupedPrompts).map((category, index) => (
                        <div key={index}>
                            {/* Display the group/category name */}
                            <h2 className="font-bold mb-2">{category}</h2>
                            {/* Display the prompts in each group */}
                            {groupedPrompts[category].map((message, messageIndex) => (
                                <div key={messageIndex} className={`${message.user ? 'text-right' : 'text-left'}`}>
                                    <div className={`inline-block p-2 rounded-lg`}>
                                        <Link to={`/p/${message._id}`}>{message.prompt}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Prompts;
