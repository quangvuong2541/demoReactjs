import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { layDanhSachPhimApiAction } from '../../redux/actions/PhimActions';

export default function Home(props) {

    //useSelector:Dùng để lấy state từ redux về
    const { mangPhim } = useSelector(state => state.PhimReducer);
    const dispatch = useDispatch();

    useEffect(async () => {

        //action bắt buộc
        //1: object = {type:'',data};
        //2: function hoặc async function 
        const action = layDanhSachPhimApiAction('GP02');
        dispatch(action)




    }, [])

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="cointainer">
            <h3 className="text-center">Danh sách phim</h3>

            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}


// const mapStateToProps = state => {
//     return {
//         mangPhim:state.PhimReducer.mangPhim
//     }
// }

// export default connect (mapStateToProps)(Home)