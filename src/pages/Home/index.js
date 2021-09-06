import React from "react";
import { useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import { Formik, Field, Form } from "formik";
import ListOfGifs from "../../components/ListOfGifs";
import { LazyTrending } from "../../components/TrendingSearch/LazyTrendingSearches";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation();

  // eslint-disable-next-line no-unused-vars
  const { loading, gifs } = useGifs();

  const handleSubmit = (e) => {
    //navegar a otra ruta
    pushLocation(`/search/${e}`);
  };

  return (
    <div className="bg-purple-back h-full min-h-screen">
      <div className="sticky top-0 z-10 bg-purple-back py-4 w-full flex flex-col items-center">
        <Formik
          initialValues={{
            keyword: "",
          }}
          onSubmit={(values) => handleSubmit(values.keyword)}
        >
          <Form>
            <Field id="keyword" name="keyword" placeholder="Search a gif..." />
          </Form>
        </Formik>
      </div>
      <div className="flex flex-col md:flex-row bg-purple-back h-full min-h-screen w-full px-2">
        <div className="flex-grow bg-purple-back h-full min-h-screen ">
          <h3 className="text-white text-2xl">Last Search</h3>
          {<ListOfGifs gifs={gifs} />}
        </div>
        <LazyTrending />
      </div>
    </div>
  );
};

export default Home;
