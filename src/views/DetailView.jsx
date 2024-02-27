import millify from 'millify';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';

const DetailView = ({ model }) => {
  return (
    <div className="p-2">
      <h3 className="text-center">
        <span className="me-3 fs-4 font-bold">{model.coin?.detail.symbol}</span>
        <span className="fs-2 text-warning">{model.coin?.detail.name}</span>
      </h3>
      <div className="row">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-3 ">
          {model?.infoFields?.map((data, index) => (
            <div
              key={index}
              className="text-bg-light rounded shadow-lg p-3 text-center"
            >
              <span className="fs-3">{data.icon}</span>
              <h4>{data.label}</h4>
              <p className="fw-bold">{millify(data.value)}</p>
            </div>
          ))}
        </section>

        <section className="col-md-9 d-flex flex-column gap-5 justify-content-center align-items-center">
          <Line data={model.chartData} />
          <Bar data={model.chartData}/>
        </section>
      </div>
    </div>
  );
};

export default DetailView;
