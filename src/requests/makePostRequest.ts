import axios from "axios";
import { HOST } from "../globals";

const makePostRequest = (url: string, form: HTMLFormElement, setData: Function) => {
  const access_token = window.sessionStorage.getItem("access");

    axios({
        method: "POST",
        url: HOST + url,
        data: new FormData(form),
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: access_token ? "Bearer " + access_token : null
        }
    }).then((res) => res.data).then((data) => {
        form.reset();
        setData(data)
    }).catch((err) => {

        if (err?.response?.data) {
            setData({ isError: true, ...err?.response?.data });
        } else {
            setData(null);

        }


    });

};

export default makePostRequest;
