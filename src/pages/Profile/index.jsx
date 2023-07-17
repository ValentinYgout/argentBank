import React from 'react';
import "./style.css";
import { useSelector,useDispatch } from 'react-redux';
import ApiService from '../../services/ApiService';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editFirstName, setEditFirstName] = useState(null);
  const [editLastName, setEditLastName] = useState(null);
  const dispatch = useDispatch();

 
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const fetchedProfile = await ApiService.fetchProfile(dispatch,token);
        setEditFirstName(fetchedProfile.firstName)
        setEditLastName(fetchedProfile.lastName)
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [token]);

  const handleToggleEdit = ()=>{
    setIsEditing(!isEditing)
  }

  const handleEdit =  async ()=>{
        try {
          const EditedProfile = await ApiService.EditProfile(dispatch,editFirstName,editLastName,token);
          console.log(EditedProfile)
          setIsEditing(false)
     
        } catch (error) {
          console.error("Error editing profile data", error);
        }
  }

  return (
    <main className="main bg-dark">
      <div className="header">
     
      {editLastName && (
  isEditing ? (
    <div className="editing">
      <div className="editing-top">

        <input onChange={(event) => setEditFirstName(event.target.value)}type="text" placeholder={editFirstName} />
        <input onChange={(event) => setEditLastName(event.target.value)} type="text" placeholder={editLastName} />
      </div>
      <div className="editing-bottom">
        <button onClick={handleEdit}>Save</button>
        <button onClick={handleToggleEdit}>Cancel</button>
      </div>
    </div>
  ) : (
    <div className='welcome'>
      <h1>
        Welcome back<br />
        {editFirstName} {editLastName}
      </h1>
      <button onClick={handleToggleEdit} className="edit-button">
        Edit Name
      </button>
    </div>
  )
)}

      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default Profile;
