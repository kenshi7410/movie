import { Tabs } from "antd";
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
    <div>
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
                alt={itemRap.maHeThongRap}
                className="w-24"
                src={itemRap.logo}
              />
            ),
            key: itemRap.maHeThongRap,
            children:
              listSchedule.length > 0 &&
              listSchedule[0].lstCumRap.map((itemCumRap) => {
                return (
                  <p>
                    {itemCumRap.tenCumRap} <br />
                    {itemCumRap.diaChi}
                  </p>
                );
              }),
          };
        })}
      />
    </div>
  );
};

export default ScheduleMovie;
