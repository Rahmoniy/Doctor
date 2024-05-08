import axios from "axios";

export const BaseUrl = "https://66081cf6a2a5dd477b140190.mockapi.io/api/Regestratsiya/";
export const DoctorURL = "https://66081cf6a2a5dd477b140190.mockapi.io/api/drinfo/";
export const HospitalURL = "https://645631ed5f9a4f23613d2137.mockapi.io/api/apiinfohospital/";


const client = axios.create({
    baseURL: BaseUrl,
    DoctorURL: DoctorURL,
    HospitalURL: HospitalURL
});

export default client;