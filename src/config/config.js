import axios from "axios";

const token = localStorage.getItem('token');
const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';
const USERS = BASE_URL + 'users';
const POSITIONS = BASE_URL + 'positions';

export const fetchUsers = async (page, count) => {
    const response = await axios.get(`${USERS}?page=${page}&count=${count}`);
    return response.data;
}

export const fetchUserPosition = async () => {
    const response = await axios.get(POSITIONS);
    return response.data.positions;
}

export const newUser = async (name, email, phone, position_id, photo) => {
    let bodyFormData = new FormData();
    bodyFormData.append('name', name);
    bodyFormData.append('email', email);
    bodyFormData.append('phone', phone);
    bodyFormData.append('position_id', position_id);
    bodyFormData.append('photo', photo);
    return axios({
        method: "post",
        url: USERS,
        data: bodyFormData,
        headers: {
            Token: token,
            'Content-type': 'application/json',
        },
    });
}