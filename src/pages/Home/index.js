import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../helpers/OlxAPI';
import { PageArea, SearchArea } from './styled';
import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

const Page = () => {

    const api = useApi();
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort:'desc',
                limit:8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);

    return (

        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                                {stateList.map((i,k)=>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categorieItem">  
                                <img src={i.img} alt=""></img>
                                <span>{i.name}</span>
                            </Link>  
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Útimos Anúncios</h2>
                    <div className="list">
                        {adList.map((i,k) => 
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver todos</Link>
                    <hr/>

                    Abusou psicologicamente do homem negro convocado ao desejo de se autosabotar para proveito proprio. Ofendeu as vulnerabilidades das pautas minoritárias se aproveitando de uma pauta coletiva para resolver um B.O que é seu.
                </PageArea>
            </PageContainer>
        </>
    );

}

export default Page;