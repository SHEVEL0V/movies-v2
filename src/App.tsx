import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header';
import Container from './components/container';
import Loading from './components/loading';
import Error from './components/error';

const queryClient = new QueryClient();
const HomePage = lazy(() => import('./views/home'));
const MovieDetailsPage = lazy(() => import('./views/details'));
const SerchFilm = lazy(() => import('./views/search'));

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="movies/" element={<SerchFilm />}></Route>
            <Route
              path="movies/:movieId/*"
              element={<MovieDetailsPage />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Suspense>
      </Container>
    </QueryClientProvider>
  );
}
