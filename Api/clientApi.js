import axios from "axios";

export const BaseUrl = "https://66081cf6a2a5dd477b140190.mockapi.io/api/Regestratsiya/";
export const DoctorURL = "https://66081cf6a2a5dd477b140190.mockapi.io/api/drinfo/";


const client = axios.create({
    baseURL: BaseUrl,
    DoctorURL: DoctorURL
});

export default client;