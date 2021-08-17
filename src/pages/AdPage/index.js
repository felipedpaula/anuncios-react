import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { PageArea } from './styled';
import { Slide } from 'react-slideshow-image';
import { PageContainer } from '../../components/MainComponents';
import { Fake } from './styled';
import useApi from '../../helpers/OlxAPI';
import 'react-slideshow-image/dist/styles.css';


const Page = () => {

    const api = useApi();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }

        getAdInfo(id);
    }, []);

    const formatDate = (date) => {
        let cDate = new Date(date);
        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    };

    return (
        <PageContainer>
            <PageArea>
                
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={300}/>}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((img, k) => 
                                        <div key={k} className="slide">
                                            <img src={img} alt=""/>
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20}/>}
                                {adInfo.title &&
                                    <h3>{adInfo.title}</h3>
                                }
                                {adInfo.dateCreated &&
                                    <small>Postado em: {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={100}/>}
                                {adInfo.description}
                                <hr />
                                {adInfo.views &&
                                   <small>Visualizações: {adInfo.views}</small> 
                                }
                            </div>
                        </div>
                    </div>    
                </div>
            
            
                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake height={20}/>}
                    </div>
                    <div className="box box--padding">
                        {loading && <Fake height={20}/>}
                    </div>
                </div>
                
            </PageArea>
        </PageContainer>
    );
};

export default Page;