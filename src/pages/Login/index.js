import React, {useState} from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandler';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {

    const api = useApi();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState('');
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);

        const json = await api.login(email, password);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }

    }
    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>

                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Email</div>
                        <div className="area--input">
                            <input required type="email" disable={disable} value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input required type="password" disable={disable} value={password} onChange={e=>setPassword(e.target.value)}/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar Senha</div>
                        <div className="area--input">
                            <input type="checkbox" disable={disable} checked={rememberPassword} onChange={()=>setRememberPassword(!rememberPassword)}/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disable={disable}>Login</button>
                        </div>
                    </label>
                    
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;