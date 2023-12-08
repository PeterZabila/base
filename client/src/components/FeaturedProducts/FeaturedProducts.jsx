import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

// const startData = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title: 'Hat',
//     oldPrice: 19,
//     price: 12,
//     isNew: true,
//   },
//   {
//     id: 2,
//     img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title: 'Hat',
//     oldPrice: 49,
//     price: 9,
//   },
//   {
//     id: 3,
//     img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title: 'Hat',
//     oldPrice: 34,
//     price: 18,
//     isNew: true,
//   },
//   {
//     id: 4,
//     img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title: 'Hat',
//     oldPrice: 18,
//     price: 10,
//   },
// ]

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try { 
  //       const res = await axios.get(process.env.REACT_APP_API_URL+`/products?populate=*&[filters][type][$eq]=${type}`,
  //       {
  //         headers: {
  //           Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  //         }
  //       }
  //       );
  //       setData(res.data.data);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchData();
  // }, [])

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error ? "Something went wrong" : loading ? "Loading..." : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
