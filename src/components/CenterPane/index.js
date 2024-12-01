import React from "react";
import "./index.css";



const CenterPane = () => {
  return (
    <div className="chat-section">
      <div className="chat-header">
        <button className="chat-tab active">Conversation</button>
        <button className="chat-tab">Attachment</button>
      </div>
      <div className="chat-messages">
        <div className="chat-message received">
          <div className="avatar">CB</div>
          <div className="message-content">
            <div className="message-info">
              <span className="sender-name">Rachel Adams</span>
              <span className="timestamp">9:08 PM</span>
              <span className="status">Received by WhatsApp</span>
            </div>
            <div className="message-text">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus
              ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
            </div>
          </div>
        </div>
        <div className="chat-message sent">
          <div className="avatar">HK</div>
          <div className="message-content">
            <div className="message-info">
              <span className="sender-name">You</span>
              <span className="timestamp">27 Jul, 2024</span>
              <span className="status">Sent by WhatsApp</span>
            </div>
            <div className="message-text">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus
              ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
            </div>
          </div>
        </div>
      </div>
      <div className="chat-footer">
        <div className="message-options">
          <label>
            <input type="checkbox" /> SMS
          </label>
          <label>
            <input type="checkbox" /> WhatsApp
          </label>
          <label>
            <input type="checkbox" /> Email
          </label>
        </div>
        <div className="message-input">
          <input type="text" placeholder="Type a message..." />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};




export default CenterPane;
