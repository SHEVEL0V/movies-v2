/** @format */

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Section from "../../components/section";
import Loading from "../../components/loading";
import NawDetals from "../../components/navDetals";
import CardDetals from "../../components/cardDetals";

const Cast = lazy(() => import("../cast"));
const Reviews = lazy(() => import("../reviews"));

const MovieDetailsPage: React.FC = () => {
  return (
    <>
      <CardDetals />
      <NawDetals />
      <Section>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Routes>
        </Suspense>
      </Section>
    </>
  );
};

export default MovieDetailsPage;
