import React, { Component } from "react";
import axios from "axios";

export default class DemoApiClass extends Component {
  state = {
    mangPhim: [],
  };

  // mang phim
  loadMovie = async () => {
    //  async  khai báo một hàm bất đồng bộ
    //      tự đọng biến đổi mọt hàm thông thường thành một Promise
    //      khi  gọi tới hàm async nó sẽ xử lý mọi việc trong hàm của nó

    //      Async cho phép sử dụng Await.

    // cách mọt :
    // cách sử dụng promis

    // const promis = axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // });

    // promis.then((result) => {
    //   console.log("thanh hcong ", result.data);
    //   //   this.mangPhim = result.data;
    //   //   console.log(this.mangPhim);
    //   this.setState({
    //     // mangPhim: result.data,
    //     mangPhim: result.data,
    //   });
    // });

    // promis.catch((err) => {
    //   console.log("hong thanh công ", err.response.data);
    // });

    // cach 2: su dung async
    try {
      const result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });

      this.setState({
        mangPhim: result.data,
      });
    } catch (err) {
      console.log("hong thanh công ", err.response.data);
    }
  };
  renderPhim = () => {
    // console.log("demo");
    // map laf mot object
    return this.state.mangPhim.map((phim, index) => {
      console.log("coi thuw  coi co khoog na ", phim);
      return (
        <div>
          <div>
            <img src={phim.hinhAnh} alt="{phim.hinhAnh}" />
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderPhim()}</div>;
  }
  // componentDidMount : là khi call data từ backend  thì componentDidMount đóng vài trò là lấy dữ liệu ngay từ lần đầu tiên
  // hàm này chỉ thực hiện một lần duy nhất:

  componentDidMount() {
    this.loadMovie();
  }
}
