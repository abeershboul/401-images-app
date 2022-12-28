
import React, { useState } from "react";
import ImageCard from './image_cards'
import images from "./imge.json";
import Row from "react-bootstrap/Row";

function Parent() {
  let [totalLikes, setTotalLikes] = useState(0);

  const TotallImagesLikes = () => {
    setTotalLikes(totalLikes + 1);
  };
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
         <h6 style={{ margin: 15, alignSelf: 'center' }}> totall number of likes : {totalLikes}</h6></div>
      <Row xs={1} md={3} className="g-4" style={{marginLeft:'2rem'}}>
        {images.map((image) => {
          return (
            <div>
              <ImageCard
                image_url={image.image_url}
                title={image.title}
                likes={image.likes}
                Totall_ikes={TotallImagesLikes}
              />
            </div>
          );
        })}
      </Row>
    </>
  );
}

export default Parent;
