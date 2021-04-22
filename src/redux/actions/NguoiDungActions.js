import axios from 'axios';




export const dangNhapAction = (userLogin) => { //{taiKhoan:'',matKhau:''}

    return async (dispatch) => {

        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin
            });

            console.log('result',result.data);
            dispatch({
                type:'XU_LY_DANG_NHAP_THANH_CONG',
                tenDangNhap: result.data.taiKhoan
            })

            localStorage.setItem('userLogin',JSON.stringify(result.data));


        } catch (errors) {
            
            console.log('errors',errors.response?.data);
            //?: optional chaining
        }


    }
}