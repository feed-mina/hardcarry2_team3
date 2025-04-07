import React, { useState, useEffect, Component } from "react";
import styles from "./DiaryList.module.css";
import fulllove from "../../assets/fulllove.png";
import emptylove from "../../assets/emptylove.png";
import axios from "axios";
import more from "../../assets/more.png";
import $ from "jquery";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Like extends Component {
  state = {
    liked: 0,
    heart: "none",
    heart_disabled: "",
  };

  toggleHeart = async (like, id) => {
    $(".heart").on("click", () => {
      $(this).toggleClass("heart-blast");
    });

    const post_id = this.props.post;
    // const send_param = {id, user_id, headers};

    const send_param = { id, headers };
    if (!this.state.liked) {
      const result = await axios.post(
        "http://3.35.152.195/api/diary/ Like?diary_id=" + id,
        send_param
      );
      if (result.data.message) {
        this.setState({ liked: 1, heart: "", heart_disabled: "none" });
        this.props.show();
      } else {
        alert("시스템에러_좋아요");
      }
    } else {
      const result = await axios.post(
        "http://3.35.152.195/api/diary/disLike?diary_id" + id,
        send_param
      );
      if (result.data.message) {
        alert("좋아요;");
        this.setState({ liked: 0, heart: "none", heart_disabled: "none" });
        this.props.show();
      } else {
        alert("시스템에러_좋아요취소");
      }
    }
  };
  render() {
    const heartStyle = {
      display: this.state.heart,
    };
    const hearatStyle_disabled = {
      display: this.state.heart_disabled,
    };
    return (
      <div>
        <button
          variant="light"
          size="em"
          onClick={() => {
            this.toggleHeart(this.props_user);
          }}
        >
          <img style={heartStyle} src={fulllove} width="15" height="1" />
        </button>
        <button variant="light" size="em" disabled={this.state.liked}>
          <img style={heartStyle} src={emptylove} width="15" height="1" />
        </button>{" "}
        <span variant="light">{this.props.like}</span>
      </div>
    );
  }
}
export default Like;
