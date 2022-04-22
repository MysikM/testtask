import React, {useEffect, useRef, useState} from 'react';
import './work-post-request.scss';
import Button from "../button/Button";
import Input from "../inputs/Input";
import RadioBtn from "../radioBtn/RadioBtn";
import FIleLoad from "../fileLoad/FIleLoad";
import {fetchUserPosition} from "../../config/config";
import PhoneInput from "../inputs/PhoneInput";
import {VARIABLE} from "../../variables/variables";
import Preload from "../preload/Preload";
import {useDispatch, useSelector} from "react-redux";
import {startRequest} from "../../store/loadReducer";
import {createUser} from "../../config/asyncAction";
import {removeStatus} from "../../store/newUserReducer";
import SuccessPopup from "../successPopup/SuccessPopup";

const WorkPostRequest = () => {
    const [positions, setPositions] = useState([]);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState('');
    const [position, setPosition] = useState('');
    const [formFilled, setFormFilled] = useState({
        name: false,
        mail: false,
        phone: false,
        position: false,
        file: false,
    });
    const btnSign = useRef(null);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loadingStatus.loading);
    const [isLoading, setIsLoading] = useState(loading);
    const usersCount = useSelector(state => state.usersInfo.userInfo.total_users);
    const newUserStatus = useSelector(state => state.status.status);

    useEffect(()=>{
            const getPosition = async() => {
                const response = await fetchUserPosition();
                setPositions(response);
            }
            getPosition();
        }, []);

    useEffect(()=>{
        Object.values(formFilled).find((item) => item === false) === undefined
            ? btnSign.current.removeAttribute("disabled")
            : btnSign.current.setAttribute("disabled", true)
    }, [formFilled]);

    useEffect(()=>{
        setIsLoading(loading);
    },[loading])

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(removeStatus());
        },1000)
    },[newUserStatus])

    useEffect(()=>{
        setName('');
        setMail('');
        setPhone('');
        setFile('');
        setFormFilled(
            {
                name: false,
                mail: false,
                phone: false,
                position: false,
                file: false,
            }
        );
    }, [usersCount])


    const createNewUser = async () => {
        dispatch(startRequest());
        const phoneNumber = phone.replace(/[^0-9\+]/g,'');
        const nameTrim = name.trim();
        dispatch(createUser(nameTrim, mail, phoneNumber, position, file));
    }

    return (
        <section className="work-post container">
            <h2 className="work-post__title">
                Working with POST request
            </h2>
            <form
                className="work-post__form form"
                onSubmit={(e)=> e.preventDefault()}
            >

                <Input
                    fieldName='name'
                    formFilled={formFilled}
                    setFormFilled={setFormFilled}
                    value={name}
                    setValue={setName}
                    className="form__input"
                    placeholder="Your name"
                    validMessage={VARIABLE.VALIDATION_MESSAGE.NAME}
                    regex={VARIABLE.REGEX.NAME}
                    type="text"/>
                <Input
                    fieldName='mail'
                    formFilled={formFilled}
                    setFormFilled={setFormFilled}
                    value={mail}
                    setValue={setMail}
                    className="form__input"
                    placeholder="Email"
                    validMessage={VARIABLE.VALIDATION_MESSAGE.EMAIL}
                    regex={VARIABLE.REGEX.EMAIL}
                    type="email"/>

                <PhoneInput
                    formFilled={formFilled}
                    setFormFilled={setFormFilled}
                    className="form__input"
                    placeholder="Phone"
                    helperText="+38 (XXX) XXX - XX - XX"
                    type="text"
                    phone={phone}
                    setPhone={setPhone}
                />

                <p className='form__radio-title'>Select your position</p>

                {
                    positions.map((item, i ) => (
                        <RadioBtn className="form__radio"
                                  key={item.id}
                                  value={item.id}
                                  position={position}
                                  setPosition={setPosition}
                                  formFilled={formFilled}
                                  setFormFilled={setFormFilled}
                        >{item.name}</RadioBtn>
                    ))
                }

                <FIleLoad
                    formFilled={formFilled}
                    setFormFilled={setFormFilled}
                    file={file}
                    setFile={setFile}
                    className="form__file-load"
                />

                {isLoading && <Preload />}

                <Button
                    ref={btnSign}
                    className="form__btn"
                    onClick={createNewUser}
                >
                    Sign up
                </Button>

            </form>

            {newUserStatus && <SuccessPopup />}
        </section>
    );
};

export default WorkPostRequest;