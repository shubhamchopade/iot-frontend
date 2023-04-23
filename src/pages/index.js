import ButtonGroup from "../components/ButtonGroup";
import React from "react";
import farmer1Img from "../../public/assets/farmer1.jpeg";
import farmer2Img from "../../public/assets/farmer2.jpeg";
import farmer3Img from "../../public/assets/farmer3.jpeg";
import { ArticleCardImage } from "../components/Card";
import Loader from "../components/Loader";
import { Loader as MantineLoader } from '@mantine/core';
import { Button } from "@mantine/core";
import ThingsBoard from "../components/ThingsBoard";
import Image from "next/image";

export default function Home() {
  const [currentFarmer, setCurrentFarmer] = React.useState("farmer1");
  const [isLoading, setIsLoading] = React.useState(false);

  const [data, setData] = React.useState(null);

  function predict(farmer) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    setIsLoading(true)
    fetch(`http://localhost:3005/predict/${farmer}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const json = JSON.parse(result);
        setData(json.data);
        setIsLoading(false)
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      {/* <ThingsBoard /> */}
      <ButtonGroup
        currentFarmer={currentFarmer}
        setCurrentFarmer={setCurrentFarmer}
        data={data}
        setData={setData}
      />
      {currentFarmer === "farmer1" && (
        <div>
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=62.84179687500001%2C22.167057857886153%2C88.98925781250001%2C36.19109202182454&amp;layer=mapnik&amp;marker=29.420460341013158%2C75.91552734375"
            ></iframe>
            <br />
          </div>
          {Predict("farmer1")}
        </div>
      )}
      {currentFarmer === "farmer2" && (
        <div>
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=60.20507812500001%2C10.509416700845861%2C86.3525390625%2C25.780107118422244&amp;layer=mapnik&amp;marker=18.312810846425457%2C73.27880859375"
            ></iframe>
            <br />
          </div>
          {Predict("farmer2")}
        </div>
      )}
      {currentFarmer === "farmer3" && (
        <div>
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=65.61035156250001%2C4.631179340411012%2C91.7578125%2C20.324023603422518&amp;layer=mapnik&amp;marker=12.597454504832005%2C78.68408203125"
            ></iframe>
            <br />
          </div>
          {Predict("farmer3")}
        </div>
      )}
    </div>
  );

  function Predict(farmer) {
    return <div style={{ margin: "0 auto", textAlign: "center" }}>
      <Button onClick={() => predict(farmer)}>Which crop should I plant? {isLoading && <MantineLoader style={{ marginLeft: "1rem" }} variant="dots" color="white" />}</Button>
      {isLoading ? <Loader /> : <div style={{ diplay: "flex" }}>
        {data && data[0].map((crop) => <div>
          <p>{crop}</p>
          <Image style={{
            borderRadius: "50%",
            objectFit: "cover",
          }} src={crops[crop]} width={200} height={200} alt="crop" />
        </div>
        )}
      </div>}
    </div>;
  }
}

// ['apple', 'banana', 'blackgram', 'chickpea', 'coconut', 'coffee', 'cotton', 'grapes', 'jute', 'kidneybeans', 'lentil', 'maize', 'mango', 'mothbeans', 'mungbean', 'muskmelon', 'orange', 'papaya', 'pigeonpeas', 'pomegranate', 'rice', 'watermelon']
const chickpea = "https://img.freepik.com/free-photo/top-view-chickpeas-beans-concept_23-2148648493.jpg?w=1800&t=st=1682277211~exp=1682277811~hmac=32d7ae733136ff47ee048b46eeecfb9319bde31933543d4950d215b6d7f0bffe"
const banana = "https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?w=360"
const apple = "https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1800&t=st=1682277288~exp=1682277888~hmac=1920491c4a400d3b62168b158bec7d874f9d4d6ee37d0845644f0a3e26634319"
const blackgram = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Black_gram.jpg"
const coconut = "https://images.heb.com/is/image/HEBGrocery/000375273"
const coffee = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/1200px-Roasted_coffee_beans.jpg"
const cotton = "https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2014/11/cotton.png/7c098280951a28c0f2aa4291f179ae42.png"
const grapes = "https://img.imageboss.me/fourwinds/width/425/dpr:2/s/files/1/2336/3219/products/blackmonukka.jpg?v=1538780984"
const jute = "https://upload.wikimedia.org/wikipedia/commons/8/84/Jute_-_Kolkata_2003-10-31_00538.JPG"
const kidneybeans = "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/kidney-beans-1296x728-feature.jpg?w=1155&h=1528"
const lentil = "https://cdn.britannica.com/14/157214-050-3A82D9CD/kinds-lentils.jpg"
const maize = "https://b3n8a3n8.rocketcdn.me/wp-content/uploads/2021/06/corn-vs-maize-02.jpg"
const mango = "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"
const mothbeans = "https://files.recipetips.com/images/glossary/m/moth_beans.jpg"
const mungbean = "https://media.greenmatters.com/brand-img/cQRyf2EmU/0x0/what-are-mungbean-1664394250512.jpg"
const muskmelon = "https://www.mashed.com/img/gallery/heres-the-difference-between-muskmelon-and-cantaloupe/l-intro-1618842756.jpg"
const orange = "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg"
const papaya = "https://cdn.britannica.com/31/157531-050-25D8087E/Papaya-fruit.jpg"
const pigeonpeas = "https://www.tropicalpermaculture.com/images/pigeon-pea6.jpg"
const pomegranate = "https://cdn.britannica.com/35/183135-050-721E667B/arils-pomegranate-seeds.jpg"
const rice = "https://cf-images.us-east-1.prod.boltdns.net/v1/static/507936866/f936391e-9328-4690-887e-d327ffc0a433/29040a0e-90c3-4c63-9705-387fdb7384d8/1800x1012/match/image.jpg"
const watermelon = "https://snaped.fns.usda.gov/sites/default/files/seasonal-produce/2018-05/watermelon.jpg"

const crops = {
  chickpea,
  banana,
  apple,
  blackgram,
  coconut,
  coffee,
  cotton,
  grapes,
  jute,
  kidneybeans,
  lentil,
  maize,
  mango,
  mothbeans,
  mungbean,
  muskmelon,
  orange,
  papaya,
  pigeonpeas,
  pomegranate,
  rice,
  watermelon,
}
