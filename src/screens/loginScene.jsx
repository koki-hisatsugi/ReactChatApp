import React from "react";
import { Link } from "react-router-dom";

//スタイルシートの定義
const styles = {
  //タイトルのスタイル
  title: {
    color: "#000055",
    backgroundColor: "white",
    border: "medium solid #555555",
    fontFamily: "serif",
    fontSize: "30px",
    fontWeight: "bold",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
    margin: "auto auto"
  },
  fuga: {
    color: "#FFAC5E",
    backgroundColor: "#AAFFFF",
    width: "600px",
    margin: "auto auto",
    padding: "auto",
    border: "medium solid #555555",
    borderRadius: "20px"
  },
  inputArea: {
    backgroundColor: "#AAFFFF",
    display: "inlineBlock",
    borderRadius: "20px"
  }
};

export const LoginScene = () => {
  return (
    <React.Fragment>
      <p style={styles.fuga}>
        <p style={styles.title}>ひさチャット</p>
      </p>
      <div>
        ログインID:
        <input style={styles.inputArea} />
        <br />
        パスワード:
        <input style={styles.inputArea} />
        <br />
        <button>login</button>
        <br />
        <Link to="/">ユーザー登録</Link>
      </div>
    </React.Fragment>
  );
};
