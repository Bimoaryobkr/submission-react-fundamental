import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Navigation from './components/Navigation';
import PageNotFound from './pages/404';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/api';
import { ThemeProvider } from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
            initializing: true,
            theme: localStorage.getItem('theme') || 'dark',
            toggleTheme: () => {
                this.setState((prevState) => {
                    const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
                    localStorage.setItem('theme', newTheme);
                    return {
                        theme: newTheme
                    };
                });
            }
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
            };
        });
    }

    async componentDidMount() {
        document.documentElement.setAttribute('data-theme', this.state.theme);
        const { data } = await getUserLogged();
        this.setState(() => {
            return {
                authedUser: data,
                initializing: false
            };
        });
    }

    componentDidUpdate (prevState) {
        if (prevState.theme !== this.state.theme) {
            document.documentElement.setAttribute('data-theme', this.state.theme);
        }
    }

    onLogout() {
        this.setState(() => {
            return {
                authedUser: null
            }
        });
        putAccessToken('');
    }

    render() {

        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <ThemeProvider value={this.state}>
                    <div className='app-container'>
                        <div className='app_header'>
                            <h1> Selamat Datang </h1>
                            <ToggleTheme />
                        </div>
                        <main>
                            <Routes>
                                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            )
        }

        return (
            <ThemeProvider value={this.state}>
                <div className='app-container'>
                    <div className='app_header'>
                        <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
                    </div>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/notes/:id" element={<DetailPage />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;