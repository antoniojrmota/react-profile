import { useState } from "react";


function Profile(props) {
  return (
    <>
      <div class="card">
        <div class="card__top">
          <div class="profile__photo">
            <img src={props.avatar} alt={props.name} />
          </div>
        </div>
        <div class="card__content">
          <h2>{props.name}</h2>
          <p>
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            {props.local}
          </p>
          <p>
            <span>
              <i class="far fa-address-card"></i>
            </span>
            <a
              href={props.linkedinUrl}
              target="_blank"
            >
              linkedin
            </a>
          </p>
          <p>
            <span>
              <i class="far fa-envelope"></i>
            </span>
            <a href={props.email} target="_blank">
              {props.email}
            </a>
          </p>
          <a href={props.githubUrl} class="button" target="_blank">Github</a>
        </div>
        
      </div>
    </>
  );
}

export default Profile;
