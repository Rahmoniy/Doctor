import client, { HospitalURL } from "./clientApi";

class HospitalTotalApi {
    getHospitalTotal() {
        return client
            .get(HospitalURL)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error('Error fetching hospital data: ', err); // Hata mesajını logla
                throw err; // Hatanın yönetilebilir olması için yeniden fırlat
            });
    }

    getHospitalById(id) {
        return client
            .get(HospitalURL + id)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error('Error fetching hospital data by ID: ', err); // Hata mesajını logla
                throw err; // Hatanın yönetilebilir olması için yeniden fırlat
            });
    }
}

export default new HospitalTotalApi();
