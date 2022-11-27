const Profile = () => {
  return (
    <div className="profile-box">
      <div className="profile-picture-container">
        <img className="profile-picture" src="/profile.jpeg" alt="profile" />
      </div>
      <div>
        <h2 className="profile-name">Vincent</h2>
      </div>
      <div>
        <p className="profile-login"> v.durox@icloud.com</p>
      </div>
    </div>
  );
};

export default Profile;
