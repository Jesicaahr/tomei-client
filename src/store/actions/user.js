import axios from "axios";
import { CREATE_USER } from "./types";
import { hostingUrl } from "./../../host";
import Swal from "sweetalert2";

export const createUser = (data) => (dispatch) => {
    let formData = new FormData();
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('password', data.password)
    formData.append("avatar", data.imageUrl);

  axios({
      url: hostingUrl +"/users/signup",
      method: 'post',
      headers: { "Content-Type": "multipart/form-data" },
      data: formData

  })
  .then(response => {
      console.log(response, "FROM ACTIONS USER");
      Swal.fire({
        icon: "success",
        customClass: {
            confirmButton: "swal-btn",
        },
        html: `
        <h3>${response.data.msg}<h3/>
        `,
        confirmButtonText: `OK`,
    });

    dispatch({
        type: CREATE_USER,
        payload: response.data,
    });

  })

  .catch((err) => {
    const errors = err.response.data.errors;

    console.log("SIGNUP FAILED", errors);
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errors[0].message,
      })
});
};
