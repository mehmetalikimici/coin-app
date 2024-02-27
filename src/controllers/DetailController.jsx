import React, { useEffect, useState } from 'react';
import DetailView from '../views/DetailView';
import { useParams } from 'react-router-dom';
import Model from '../models/DetailModel';

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    Model.getCoin(id).then((res) => setCoin(res));
  }, []);

  const model = new Model(coin)

  return (
    <div>
      <DetailView model={model}/>
    </div>
  );
};

export default DetailController;
