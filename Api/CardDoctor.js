import client, { DoctorURL } from "./clientApi";

class CardDoctorApi {
    getCardDoctor() {
        const getCardDoctor = client
            .get(DoctorURL)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });

        return getCardDoctor;
    }
    getDoctorInfo(id) {
        const getCardDoctor = client
            .get(DoctorURL + id)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });

        return getCardDoctor;
    }
    pushDoctorInfo(id, data) {
        const getCardDoctor = client
            .put(DoctorURL + id, data)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });

        return getCardDoctor;
    }
}

export default new CardDoctorApi();