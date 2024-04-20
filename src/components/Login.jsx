import { useState } from 'react';
import { useAuth } from '../hooks/AuthProvider';

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    const auth = useAuth();
    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.username !== '' && input.password !== '') {
            auth.loginAction(input);
            return;
        }
        alert("please provide a valid input");
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div class="flex min-h-full flex-col justify-center">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmitEvent}>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input
                                id='user-email'
                                name='username'
                                type="email"
                                placeholder='example@mail.com'
                                aria-describedby='user-email'
                                aria-invalid='false'
                                required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleInput}
                            />
                            <div id='user-email' className='sr-only'>
                                Please enter a calid username. It must contain at least 6 characters.
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input
                                type='password'
                                id='password'
                                name='password'
                                aria-describedby='user-password'
                                aria-invalid='false'
                                onChange={handleInput}
                                autocomplete="current-password"
                                required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <div id='user-password' className='sr-only'>
                                your password should be more than 6 character
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;