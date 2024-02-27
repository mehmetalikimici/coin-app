import InputFieldView from './InputFieldView';
import { inputs } from '../constant';

const LoginPageView = ({formik}) => {
  return (
    <div className="loginpage">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/c-logo.png" />
          <span>Coinmania</span>
        </h2>
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data,index) => (
            <InputFieldView formik={formik} data={data} key={index}/>
          ))}

          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPageView