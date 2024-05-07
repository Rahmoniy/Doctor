import client, { BaseUrl } from "./clientApi";

class Auth {
    Singup(props) {

        const postLogin = client
            .post(BaseUrl, {
                email: props.email,
                number: props.number,
                parol: props.password
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });

        return postLogin;
    }
    Login() {

        const postLogin = client
            .get(BaseUrl)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });
        return postLogin;
    }
    UserInfoId(id) {

        const postLogin = client
            .get(BaseUrl + id)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });
        return postLogin;
    }
    UserInfoPut(id, obg) {

        const postLogin = client
            .put(BaseUrl + id, obg)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });
        return postLogin;
    }

}

export default new Auth();