import MainPageView from '../views/MainPageView';
import model from '../models/MainPageModel.js';
import { useEffect, useState } from 'react';

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    model.getCoins(page).then((data) => setCoins(coins.concat(data)));
  }, [page]);



  return (
    <div>
      <MainPageView coins={coins} setPage={setPage}/>
    </div>
  );
};

export default MainPageController;
