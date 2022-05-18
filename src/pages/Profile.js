import React from "react";
import { post, get } from "../authService/authService";

const Profile = () => {
  const [user, setUser] = React.useState({});
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    get("/users/profile-info")
      .then((results) => {
        setUser(results.data);
      })
      .catch((err) => {
        console.log("error", err.mesasge);
      });
  }, []);

  function handleFileUpload(e) {
    //create FormData

    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    post("/users/image-upload", uploadData)
      .then((results) => {
        console.log("This is the image path", results.data);
        setUser({ ...user, image: results.data });
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  }

  function create(e) {
    e.preventDefault();

    post("/users/edit", user)
      .then((results) => {
        console.log("Results", results.data);
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  }

  return (
    <div>
      <h2>Update your profile</h2>
      <h3>
        Welcome {user.firstName}, your contact code is {user.contactCode}
      </h3>
      <form onSubmit={create}>
        <label>First Name</label>
        <input
          name="firstName"
          value={user.firstName}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Last Name</label>
        <input
          name="lastName"
          value={user.lastName}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Email</label>
        <input
          name="email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Phone Number</label>
        <input
          name="phone"
          value={user.phone}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Address - street</label>
        <input
          name="street"
          value={user.street}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Address - City</label>
        <input
          name="city"
          value={user.city}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Address - State</label>
        <input
          name="state"
          value={user.state}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Address - ZipCode</label>
        <input
          name="zipCode"
          value={user.zipCode}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Address - Country</label>
        <input
          name="country"
          value={user.country}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Primary Chat</label>
        <input
          name="primaryChatName"
          value={user.primaryChatName}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Link to Chat</label>
        <input
          name="primaryChatLink"
          value={user.primaryChatLink}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Primary Social</label>
        <input
          name="primarySocialName"
          value={user.primarySocialName}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label>Link to Social</label>

        <input
          name="primarySocialLink"
          value={user.primarySocialLink}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />

        <label>Image</label>
        <input type="file" onChange={(e) => handleFileUpload(e)}></input>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
