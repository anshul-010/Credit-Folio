import React from "react";
import CibilScore from "../components/UserDetails/CibilScore";
import Offers from "../components/UserDetails/Offers";
import Cards from "../components/UserDetails/Cards";
import { CreditOffer } from "./CreditOffer";
import { Footer } from "../components/Footer";
import { HStack, Text } from "@chakra-ui/react";

const UserDetail = () => {
  return (
    <div>
      <CibilScore />
      <Offers />
      <CreditOffer />
      <br />
      <CreditOffer />

      <Cards />
      <Text as='p' p='1rem'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus, harum
        aut ipsa ipsum nihil necessitatibus nesciunt eligendi corrupti animi
        vero commodi? Inventore est adipisci vero minus sapiente quibusdam
        cupiditate. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Obcaecati facilis quisquam nihil sed labore voluptates sapiente fugiat
        blanditiis repudiandae vero?
      </Text>
      <br />
      <Text as='p' p='1rem' mb='3rem'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quo
        harum quos placeat consequatur eveniet provident recusandae architecto
        dolore dolor? Quibusdam ratione repellat dolor eos ipsa excepturi quam
        ipsum suscipit? ipsum dolor sit amet consectetur adipisicing elit. Dolor
        reiciendis quasi mollitia odit vitae eum sint eaque ex, nemo architecto
        omnis ad, quisquam repudiandae corrupti sed aliquam blanditiis numquam
        exercitationem?
      </Text>

      <HStack mb='4rem'>
        <Text as='p' p='1rem'>
          Vero minus sapiente quibusdam cupiditate. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Obcaecati facilis quisquam nihil sed
          labore voluptates sapiente fugiat blanditiis repudiandae vero?
        </Text>

        <Text as='p' p='1rem'>
          Vero minus sapiente quibusdam cupiditate. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Obcaecati facilis quisquam nihil sed
          labore voluptates sapiente fugiat blanditiis repudiandae vero?
        </Text>

      </HStack>
      <hr style={{ backgroundColor: "#0094e96f", height: "2px", margin: '1rem auto 2rem auto', width: '90%'}} />
      <Footer />
    </div>
  );
};

export default UserDetail;
