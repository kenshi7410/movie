import { Tabs, Tag } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getScheludeMovieCinema } from "../utils/bookService";

const ScheduleMovie = () => {
  const [listSchedule, setListSchedule] = useState([]);
  const cinemas = useSelector((state) => state.booking.cinemas);

  useEffect(() => {
    getScheludeMovieCinema(cinemas[0]?.maHeThongRap).then((res) =>
      setListSchedule(res.data.content)
    );
  }, [cinemas]);

  return (
    <div className="container mx-">
      <Tabs
        onChange={(key) => {
          getScheludeMovieCinema(key).then(
            (res) => setListSchedule(res.data.content)
            //   console.log(res.data.content)
          );
        }}
        tabPosition="left"
        items={cinemas.map((itemRap) => {
          return {
            label: (
              <img
                key={itemRap.maHeThongRap}
                alt={itemRap.maHeThongRap}
                className="w-24"
                src={itemRap.logo}
              />
            ),
            key: itemRap.maHeThongRap,
            children: (
              <Tabs
                tabPosition="left"
                items={
                  listSchedule.length > 0 &&
                  listSchedule[0].lstCumRap.map((itemCumRap) => {
                    let phimDangChieu = itemCumRap.danhSachPhim.filter(
                      (itemDanhSachPhim) => itemDanhSachPhim.dangChieu
                    );
                    //console.log(itemCumRap);
                    return {
                      label: (
                        <div className="flex gap-3 text-left">
                          <div>
                            <img
                              alt={itemCumRap.maCumRap}
                              className="w-14 mb-5"
                              src={itemCumRap.hinhAnh}
                            />
                          </div>
                          <div>
                            {itemCumRap.tenCumRap} <br />
                            {itemCumRap.diaChi}
                          </div>
                        </div>
                      ),

                      key: itemCumRap.maCumRap,
                      children: phimDangChieu.map((itemDanhSachPhim, index) => {
                        //console.log(itemDanhSachPhim);

                        if (index < 8) {
                          return (
                            <div key={itemDanhSachPhim.maPhim} className="flex">
                              <div>
                                <img
                                  alt={itemDanhSachPhim.maPhim}
                                  className="w-24 h-24 object-fill"
                                  src={itemDanhSachPhim.hinhAnh}
                                />
                              </div>
                              <div>
                                <p className="my-0">
                                  {itemDanhSachPhim.tenPhim}
                                </p>

                                {itemDanhSachPhim.lstLichChieuTheoPhim.map(
                                  (itemGioChieu) => {
                                    return (
                                      <Tag>
                                        {moment(
                                          itemGioChieu.ngayChieuGioChieu
                                        ).format("DD-MM-YYYY ~ hh:mm")}
                                      </Tag>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          );
                        }
                      }),
                    };
                  })
                }
              />
            ),
          };
        })}
      />
    </div>
  );
};

export default ScheduleMovie;
