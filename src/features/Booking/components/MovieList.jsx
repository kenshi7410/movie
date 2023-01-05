import { Button, Card, Col, Pagination, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMoviesAction } from "../redux/action";

const MovieList = () => {
  const movies = useSelector((state) => state.booking.movies);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-normal">Danh Sách Phim</h1>
      <Row gutter={30}>
        {movies.items?.map((item) => (
          <Col key={item.maPhim} className="mb-7" xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: "100%", height: "100%" }}
              cover={
                <img
                  className="h-72 object-cover object-left-top"
                  alt={item.biDanh}
                  src={item.hinhAnh}
                />
              }
            >
              <h1 className="text-3xl my-2 font-semibold h-20">
                {item.tenPhim}
              </h1>
              <p className="text-2xl my-2 h-36">
                {item.moTa.substr(0, 100) + "..."}
              </p>
              <Link to={`/detail/${item.maPhim}`}>
                <Button type="primary" size="large">
                  Đặt Vé
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      {movies.items && (
        <Pagination className="text-center mb-10"
          defaultCurrent={movies.currentPage}
          total={movies.totalCount}
          pageSize={8}
          onChange={(page) => {
            dispatch(fetchMoviesAction(page));
          }}
        />
      )}
    </div>
  );
};

export default MovieList;
