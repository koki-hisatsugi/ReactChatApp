import React, { useState } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import posed from "react-pose";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export const ChatScene = () => {
  const [chatText, setChatText] = useState("");
  const [chatHistorys, setchatHistorys] = useState([]);

  const [myClassName, setMyClassName] = useState("state");
  const [chatBoxClass, setChatBoxClass] = useState("list-row");

  const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const Box = posed.div(props);

  const onChangeChatText = (event) => setChatText(event.target.value);

  const onClickSpeak = () => {
    if (!(chatText === "")) {
      const newChats = [...chatHistorys, chatText];
      setchatHistorys(newChats);
      setChatText("");
    }
  };

  const onClickRed = () => {
    if (chatBoxClass === "list-row") {
      setChatBoxClass("list-row-red");
    } else {
      setChatBoxClass("list-row");
    }
  };

  const useStyles = makeStyles({
    button: {
      backgroundColor: "green"
    }
  });

  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <input
          className="chatInput"
          placeholder="チャット"
          value={chatText}
          onChange={onChangeChatText}
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={onClickSpeak}
        >
          送信
        </Button>
      </div>
      <div>
        <button onClick={onClickRed}>色変</button>
        <ul>
          {chatHistorys.map((chat, index) => {
            return (
              <div key={chat} className={chatBoxClass}>
                {chat}
              </div>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
