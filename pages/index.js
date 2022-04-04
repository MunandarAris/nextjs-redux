import { useState } from "react";
import { connect } from "react-redux";
import { setInfo } from "../redux/actions/main";

function Home(props) {
  // initial state
  const { name, setInfo } = props;
  const [newName, setNewName] = useState();
  // ===== handle change name ====
  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };
  // ===== end handle change name =====

  // ==== handle submit =====
  const handleSubmit = () => {
    setInfo(newName);
  };
  // ==== end handle submit ====

  return (
    <>
      <p>Nama Saya : {name}</p>
      <input placeholder="Change Name" onChange={handleChangeName} />
      <button onClick={handleSubmit}>Change name</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return { name: state.main.name };
};

const mapDispatchToProps = {
  setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
