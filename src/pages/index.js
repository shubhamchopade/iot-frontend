import ButtonGroup from "../components/ButtonGroup";
import React from "react";
import farmer1Img from "../../public/assets/farmer1.jpeg";
import farmer2Img from "../../public/assets/farmer2.jpeg";
import farmer3Img from "../../public/assets/farmer3.jpeg";
import { ArticleCardImage } from "../components/Card";
import Loader from "../components/Loader";
import { Button } from "@mantine/core";

export default function Home() {
  const [currentFarmer, setCurrentFarmer] = React.useState("farmer1");
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <div style={{ marginTop: "2rem" }}>
      {/* <ThingsBoard /> */}
      <ButtonGroup
        currentFarmer={currentFarmer}
        setCurrentFarmer={setCurrentFarmer}
      />
      {currentFarmer === "farmer1" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArticleCardImage
            image={farmer1Img}
            title="Farmer 1"
            category="New Delhi"
          />
          <iframe
            width="425"
            height="350"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=62.84179687500001%2C22.167057857886153%2C88.98925781250001%2C36.19109202182454&amp;layer=mapnik&amp;marker=29.420460341013158%2C75.91552734375"
          ></iframe>
          <br />
        </div>
      )}
      {currentFarmer === "farmer2" && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <ArticleCardImage
            image={farmer2Img}
            title="Farmer 2"
            category="Maharashtra"
          />
          <iframe
            width="425"
            height="350"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=60.20507812500001%2C10.509416700845861%2C86.3525390625%2C25.780107118422244&amp;layer=mapnik&amp;marker=18.312810846425457%2C73.27880859375"
          ></iframe>
          <br />
        </div>
      )}
      {currentFarmer === "farmer3" && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <ArticleCardImage
            image={farmer3Img}
            title="Farmer 3"
            category="Karnataka"
          />
          <iframe
            width="425"
            height="350"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=65.61035156250001%2C4.631179340411012%2C91.7578125%2C20.324023603422518&amp;layer=mapnik&amp;marker=12.597454504832005%2C78.68408203125"
          ></iframe>
          <br />
        </div>
      )}

      <div style={{ margin: "0 auto", textAlign: "center" }}>
        <Button onClick={() => setIsLoading(!isLoading)}>Which crop should I plant?</Button>
      </div>

      {isLoading && <Loader />}
    </div>
  );
}
