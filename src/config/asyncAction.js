import axios from "axios";
import {addNewUser, loadUsers} from "../store/userReducer";
import {loadPositions} from "../store/positionReducer";
import {newToken} from "../store/tokenReducer";
import {VARIABLE} from "../variables/variables";
import {endRequest} from "../store/loadReducer";
import {successStatus} from "../store/newUserReducer";


const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';
const TOKEN = BASE_URL + 'token';
const USERS = BASE_URL + 'users';
const POSITIONS = BASE_URL + 'positions';


export const fetchToken = () => {
    return async dispatch => {
        const response = await axios.get(TOKEN);
        dispatch(newToken(response.data));
    }
}

export const fetchUser = (page, count) => {
    return async (dispatch) => {
        const response = await axios.get(`${USERS}?page=${page}&count=${count}`);
        dispatch(loadUsers(response.data));
    }
}

export const fetchUserPosition = () => {
    return async dispatch => {
        const response = await axios.get(POSITIONS);
        dispatch(loadPositions(response.data.positions))
    }
}

export const createUser = (name, email, phone, position_id, photo) => {
    const tryToAddUser = async(dis) =>{
        let bodyFormData = new FormData();
        bodyFormData.append('name', name);
        bodyFormData.append('email', email);
        bodyFormData.append('phone', phone);
        bodyFormData.append('position_id', position_id);
        bodyFormData.append('photo', photo);
        const postRequest = await axios({
            method: "post",
            url: USERS,
            data: bodyFormData,
            headers: {
                Token: localStorage.getItem('token'),
                'Content-type': 'application/json',
            },
        });
        const response = await axios.get(`${USERS}?page=${1}&count=${6}`);
        dis(successStatus());
        dis(addNewUser(response.data));
    }
    return async dispatch => {
            try{
                await tryToAddUser(dispatch);
            } catch (e){
                if(e.response.status === VARIABLE.REQUEST_ERROR.TOKEN.status){
                    await fetchToken();
                    await tryToAddUser(dispatch);
                }
                if(e.response.status === VARIABLE.REQUEST_ERROR.UNIQUE.status) {
                   alert(e.response.data.message);
                }
        }
        finally {
                dispatch(endRequest());
            }
    }
}
