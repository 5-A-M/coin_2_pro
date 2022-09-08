import moment from "moment";
import React from "react";
import { TD } from "../Liquidation/TBody";

const TR = (props) => {
  return (
    <tr
      className="djhkfdhilsfadsa"
      style={{ position: "relative", flexDirection: "row-reverse" }}
    >
      <TD
        className="dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew rfu8oeuasasadfvcsd dfsdgsrtdddsdasasgfd"
        content={props.boardName}
        {...props}
      />
      <TD
        className="dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew rfu8oeuasasadfvcsd"
        content={props.takerSide}
        {...props}
      />
      <TD
        className="dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew rfu8oeuasasadfvcsd"
        content={props.volume}
        {...props}
      />
      <TD
        className="dhfjkdhajksdhakjss fehuidshdasasrsdas hduisehuaksjaskl fjhrueiisjidsjiods fhukdhkjasorwueioaes fgnhjkfshiuohjdiassafssd"
        content={props.lastPrice}
        {...props}
      />
      <TD
        className="dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew rfu8oeuasasadfvcsd"
        content={moment.utc((props.time_created)).zone("+07:00").format("HH:mm:ss")}
        {...props}
      />
    </tr>
  );
};

export default TR;
