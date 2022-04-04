import { useState } from "react";
import { connect } from "react-redux";
import { setContact } from "../redux/actions/contact";

function Contact(props) {
  // initial state
  const { name, no_tlp, address, email, setContact } = props;
  const [newContact, setNewContact] = useState({
    name: "",
    no_tlp: "",
    address: "",
    email: "",
  });

  // ==== change data ====
  const changeName = (e) => {
    setNewContact({ ...newContact, name: e.target.value });
  };
  const changeNoTlp = (e) => {
    setNewContact({ ...newContact, no_tlp: e.target.value });
  };
  const changeAddress = (e) => {
    setNewContact({ ...newContact, address: e.target.value });
  };
  const changeEmail = (e) => {
    setNewContact({ ...newContact, email: e.target.value });
  };
  // === end change data ===

  // === handle submit ===
  const handleSubmit = () => {
    setContact(newContact);
  };
  // === end handle submit ===

  return (
    <>
      #### Data Diri ####
      <p>Nama : {name}</p>
      <p>Email : {email}</p>
      <p>Address : {address}</p>
      <p>No Tlp : {no_tlp}</p>
      <br></br>
      ### Input Data Diri ####
      <br />
      <input placeholder="name" onChange={changeName} /> <br />
      <input placeholder="no tlp" onChange={changeNoTlp} /> <br />
      <input placeholder="address" onChange={changeAddress} /> <br />
      <input placeholder="email" onChange={changeEmail} /> <br />
      <button onClick={handleSubmit}>Kirim</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.contact.name,
    no_tlp: state.contact.no_tlp,
    address: state.contact.address,
    email: state.contact.email,
  };
};

const mapDispatchToProps = {
  setContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
