import React from "react";

import facebook from "../../assets/share_facebook.png";
import kakao from "../../assets/share_kakao.png";
import twitter from "../../assets/share_twitter.png";
import shareTitle from "../../assets/share_title.png";

const kakaoShare = () => {
  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "Catch Up! MDTI 테스트",
      description: "MDTI 테스트 받고 경품까지!",
      imageUrl: "https://i.ibb.co/CV1X2FB/for-Share-Ka-Kao.png",
      link: {
        mobileWebUrl: "https://bit.ly/캐취업",
      },
    },
    itemContent: {
      titleImageUrl: "https://i.ibb.co/GCyyWZk/logo-KAKAO.png",
      titleImageText: "캐취업",
      titleImageCategory: "청년이룸",
    },
    buttons: [
      {
        title: "테스트 하러 가기",
        link: {
          mobileWebUrl: "https://bit.ly/캐취업",
        },
      },
    ],
  });
};

const twitterShare = () => {
  var sendText = "캐취업! 지금 바로 MDTI 테스트 하러가기";
  var sendUrl =
    "https://catchup.shop/                                                         ";
  var sendHashTag = "청년이룸,캐치업,MyDream,MDTI";
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      sendText +
      "&url=" +
      sendUrl +
      "&hashtags=" +
      sendHashTag
  );
};

const facebookShare = () => {
  var sendUrl = "https://bit.ly/캐취업";
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
};

export { kakaoShare, twitterShare, facebookShare };

const Share_SNS = (props) => {
  const copyToClipboard = (val) => {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  };

  const copy = (func) => {
    copyToClipboard("https://bit.ly/캐취업");
    func("complete");
  };

  return (
    <div>
      {" "}
      <img
        id="resultShare"
        src={shareTitle}
        alt="img"
        width="165px"
        height="37px"
      ></img>
      <div id="shareContainer">
        <img
          className="shareIcon"
          src={kakao}
          alt="kakaotalk"
          width="65px"
          height="65px"
          onClick={kakaoShare}
        />

        <img
          className="shareIcon"
          src={facebook}
          alt="facebook"
          width="65px"
          height="65px"
          onClick={facebookShare}
        ></img>

        <img
          className="shareIcon"
          src={twitter}
          alt="twitter"
          width="65px"
          height="65px"
          onClick={twitterShare}
        ></img>

        {/* {ToastStatus && (
          <>
            <Toast msg={ToastMsg} />
          </>
        )} */}
      </div>
    </div>
  );
};

Share_SNS.propTypes = {};

export default Share_SNS;
