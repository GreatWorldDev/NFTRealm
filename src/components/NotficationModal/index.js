import React from "react";
const notificationList = [
  {
    image: "assets/images/video-preview-1.png",
    content: "ETH Recieved",
    verify: true,
  },
  {
    image: "assets/images/video-preview-2.png",
    content: "ETH Recieved",
    verify: true,
  },
  {
    image: "assets/images/video-preview-3.png",
    content: "ETH Recieved",
    verify: true,
  },
  {
    image: "assets/images/video-preview-1.png",
    content: "ETH Recieved",
    verify: true,
  },
];
function Notification(props) {
  return (
    <div>
      <div className={`noti-modal ${props.isShow === true ? "show" : ""}`}>
        <div style={{ color: "white", position: "relative" }}>
          <div className="d-flex justify-content-between mb-32">
            <h3>
              Notification <button>See all</button>
            </h3>
          </div>
          <ul>
            {notificationList.map((list, index) => (
              <li
                className="d-flex justify-content-between px-3"
                key={`list-${index}`}
              >
                <div>
                  <img src={list.image} alt="" width="50" />
                  <p>{list.content}</p>
                </div>
                <div>
                  <span></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notification;
