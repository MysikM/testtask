import React, {useEffect, useState} from 'react';
import './work-get-request.scss'
import Card from "../Card/Card";
import Button from "../button/Button";
import Preload from "../preload/Preload";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../config/asyncAction";

const WorkGetRequest = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.usersInfo.userInfo);
    const [cards, setCards] = useState([]);
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const countLoad = 6;

    const getInfo = async (pageNum, count) => {
        setIsLoading(true);
        dispatch(fetchUser(page, count));
    }

    useEffect(()=> {
        dispatch(fetchUser(page, countLoad));
    }, [])

    useEffect(()=>{
        setCards([...userInfo.users]);
        setTotalPage(userInfo.total_pages);
        setPage(userInfo.page + 1)
        setIsLoading(false);
    },[userInfo])

    const showMore = async () => {
        if(totalPage >= page) {
            await getInfo(page, countLoad);
        }
    }

    return (
        <section className="work-get container">
            <h2 className="work-get__title">Working with GET request</h2>
            <div className="work-get__list">
                {
                    cards.map((item) => (
                        <Card key={item.id} {...item} />
                    ))
                }
            </div>
                {isLoading && <Preload />}
            {
                totalPage >= page && (
                                        <Button
                                        className="work-get__btn"
                                        onClick={showMore}
                                        >Show more</Button>
                                     )
            }
        </section>
    );
};

export default WorkGetRequest;