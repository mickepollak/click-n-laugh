import { useNavigate } from "react-router";

function BackButton(props) {
  let navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default BackButton;
