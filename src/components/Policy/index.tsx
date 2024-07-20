import { Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Policy = () => {
  const router = useRouter()
  const handleHome = () => {
    router.push('/')
  }
  return (
    <Flex
      width={"100%"}
      minH={"100vh"}
      bg={"#000"}
      padding={"0 80px"}
      flexDirection={"column"}
    >
      <Flex height={"80px"} alignItems={"center"} cursor={"pointer"} onClick={handleHome}>
        <Image
          w={"260px"}
          height={"40px"}
          src="/assets/images/logo_citiverse.png"
          alt="icon_city"
        />
      </Flex>
      <Flex
        textTransform={"uppercase"}
        fontSize={"32px"}
        lineHeight={"52px"}
        fontWeight={400}
        justifyContent={"center"}
        textAlign={"center"}
      >
        PRIVACY POLICY
      </Flex>
      <Flex flexDirection={"column"} gap={"20px"}>
        <Flex fontStyle={"italic"} fontSize={"14px"}>
          Effective August 31, 2021. Last Revised Jun 5, 2023.
        </Flex>
        <Flex fontSize={"14px"} fontWeight={700}>
          1. Introduction
        </Flex>
        <Flex fontSize={"14px"}>
          CITIVERSE is a Cloud-Based 3D/VR/AR Content Creation platform that can
          be used to create web VR/AR content by anyone be you an amateur or a
          professional. It is available on Windows and MacOSX. The term
          “CITIVERSE”,” we”, “our”, “us” refers to CITIVERSE Limited liability
          company, a legal entity incorporated and existing under the laws of
          The Socialist Republic of Vietnam with its registered addresses at No
          298 Cau Giay street, Hanoi and its affiliates.
        </Flex>
        <Flex fontSize={"14px"}>
          In the course of its operations, CITIVERSE needs to process some of your
          personal data (like your email address and Phone number) to enable you
          to use our Citiverse Editor, Citiverse Cloud Services and other services
          attached to it. We will principally use your personal data for
          creating a user account for you which gives you access to the Citiverse
          Platforms and services (including the Citiverse Editor interface Citiverse
          Cloud Services and our eCommerce Platform), and other new features
          that would be added in the future. We do not share your personal data
          with third parties or use it for third-party commercial messages.
        </Flex>
        <Flex fontSize={"14px"}>
          By using our services, you agree with this Privacy Policy.
        </Flex>
        <Flex fontSize={"14px"}>
          Citiverse VR/AR has its Head office at No 298 Cau Giay street, Hanoi.
        </Flex>
        <Flex fontSize={"14px"} fontWeight={700}>
          2. Personal Data
        </Flex>
        <Flex fontSize={"14px"}>
          At Citiverse VR/AR, your privacy is important to us. We are dedicated to
          keeping your data private and secure at all times.
        </Flex>
        <Flex fontSize={"14px"}>
          We are also committed to transparency, so we want you to understand
          the information we may collect from you and why we collect it. We aim
          to process as little personal data as necessary. To sign up for an
          account your email address, a password and username are needed. To
          make your next visit easier we install a cookie that remembers the
          email address you enter for yourself. If you use our service, Citiverse
          furthermore stores your designs with their file names. Citiverse stores
          this data for the term you make use of our services. Furthermore,
          Citiverse makes use of analytical cookies for improving its services
          (You can find more details on the cookies actually stored and used on
          this page).
        </Flex>
        <Flex fontSize={"14px"} fontWeight={700}>
          3. Purpose
        </Flex>
        <Flex fontSize={"14px"} flexDirection={"column"}>
          Citiverse processes personal data for the purpose of
          <Flex fontSize={"14px"}>
            - Establishing a contract with you for the use of our Citiverse Editor
            and Citiverse Cloud Services and/or websites, and other related
            services.
          </Flex>
          <Flex fontSize={"14px"}>
            - Providing follow up on services (i.e. emails and newsletters
            Training materials and updates) and your service requests. CITIVERSE 
            does not sell or otherwise distribute your personal data to third
            parties and will not use your personal data for any other purposes
            than stated above.
          </Flex>
        </Flex>
        <Flex fontSize={"14px"} fontWeight={700}>
          4. Revisions to the Privacy Policy
        </Flex>
        <Flex fontSize={"14px"}>
          Please note that Citiverse may revise this Privacy Policy from time to
          time. Each revised version shall be dated and posted on the website.
          We will inform you upfront by email and/or newsletters about any
          changes.
        </Flex>
        <Flex fontSize={"14px"} fontWeight={700}>
          5. Privacy Policy Acceptance
        </Flex>
        <Flex fontSize={"14px"}>
          If you do not agree with the Privacy Policy, you should not or no
          longer access or use the Citiverse Editor and Citiverse Cloud Services
          and/or websites or other services associated with Citiverse. By using
          and continuing to use of the Citiverse Editor and Citiverse Cloud Services
          and/or websites or other services associated with Citiverse. you accept
          the Privacy Policy and any changes made to the Privacy Policy.
        </Flex>
        <Flex fontSize={"14px"} fontWeight={700}>
          6. Questions?
        </Flex>
        <Flex fontSize={"14px"}>
          For any question about the way CITIVERSE processes your personal data or
          the personal information CITIVERSE stores about you, please contact
          CITIVERSE by sending an email with your question to support@CITIVERSE.com
        </Flex>
        <Flex fontSize={"14px"} mb={"40px"} height={"40px"} borderBottom={"1px solid #313133"}>We speak English.</Flex>
        <Flex justifyContent={"center"} fontWeight={500} fontSize={"14px"} height={"80px"} lineHeight={"18px"} opacity={"60%"}>© 2024 Citiverse. All rights reserved</Flex>
      </Flex>
    </Flex>
  );
};

export default Policy;
