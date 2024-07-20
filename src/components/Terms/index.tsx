import { Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Terms = () => {
  const router = useRouter()
  const handleHome = () => {
    router.push('/')
  }
  return (
    <Flex
      minH={"100vh"}
      w={"100%"}
      p={"0 80px"}
      bg={"#000"}
      flexDirection={"column"}
      gap={"20px"}
      
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
        Terms and Conditions
      </Flex>
      <Flex flexDirection={"column"} gap={"20px"}>
        <Flex fontStyle={"italic"} fontSize={"14px"}>
          Effective August 31, 2021. Last Revised Jun 5, 2023.
        </Flex>
        <Flex fontSize={"14px"}>
          These Terms of Service (“Terms”) govern your use of the Citiverse
          platform and all services connected to the Citiverse platform,
          including, but not limited to the Citiverse Platform and all sub
          Applications, Citiverse Cloud and Rendering services, Citiverse eCommerce
          platform and Citiverse websites and all related mobile applications.
          (“Services”), provided by the Citiverse Team,
        </Flex>
        <Flex fontWeight={700} fontSize={"14px"}>
          ACCEPTANCE OF TERMS
        </Flex>
        <Flex fontSize={"14px"}>
          This Terms of Service document is an agreement you must accept in
          order to use Citiverse. net’s Services. This is a legal agreement
          (“Agreement”) between You and Citiverse (“Company”), for use of the
          Citiverse services, Citiverse, (“Services”) which You selected or
          initiated. “You” refers to the individual who registered and/or
          provided in the Citiverse website his or her credit card or other
          payment mechanism for the Services or, if the Services are being
          purchased on behalf of an entity by an individual authorized to
          purchase the Services on behalf of such entity, then “You” refers to
          such entity.
        </Flex>
        <Flex fontSize={"14px"}>
          If you are entering into this TOS agreement on behalf of a company or
          other legal entity, you represent that you have the authority to bind
          such entity to this TOS. In that case, the terms “you” or “your” shall
          also refer to such entity, its staff and its affiliates, as
          applicable. If you do not have such authority, or if you do not agree
          with this TOS, you may not use the Service. You acknowledge that this
          TOS is a contract between you and Citiverse, even though it is
          electronic and is not physically signed by you and Citiverse, but it
          governs your use of the Service.
        </Flex>
        <Flex fontSize={"14px"}>
        Violation of any of the terms of service may result in the termination
        of your account.
      </Flex>
      <Flex fontWeight={700} fontSize={"14px"}>
        SERVICES
      </Flex>
      <Flex fontSize={"14px"}>
        The Company may at its sole discretion modify the features of the
        Services from time to time without prior notice. Citiverse reserves the
        right at any time and from time to time to modify or discontinue,
        temporarily or permanently, the Service (or any part thereof) with or
        without notice. You agree that Citiverse shall not be liable to you or to
        any third party for any modification, suspension or discontinuance of
        the Service.
      </Flex>
      <Flex fontSize={"14px"}>
        If any users send us any feedback or suggestions regarding the Service,
        you grant Citiverse an unlimited, irrevocable, perpetual, free license to
        use any such feedback or suggestions for any purpose without any
        obligation to you.
      </Flex>
      <Flex fontWeight={700} fontSize={"14px"}>
        ACCEPTANCE OF TERMS
      </Flex>
      <Flex fontStyle={"14px"}>
        You will receive a password and account designation upon completing the
        Service’s registration process. You are responsible for maintaining the
        confidentiality of the password and account and are fully responsible
        for all activities that occur under your password or account. You agree
        to (a) immediately notify Citiverse of any unauthorized use of your
        password or account or any other breach of security; and (b) ensure that
        you exit from your account at the end of each session.
      </Flex>
      <Flex fontStyle={"14px"}>
        You may not use the service for any purpose which is illegal or violates
        any laws in your jurisdiction, in the jurisdiction of The Socialist
        Republic of Vietnam or in any way that intentionally or unintentionally
        violates any applicable local, state, national or international law.
      </Flex>
      <Flex fontStyle={"14px"}>
        Any software associated with the Services is protected by copyright laws
        and international copyright treaties, as well as other intellectual
        property laws and treaties.
      </Flex>
      <Flex fontWeight={700} fontSize={"14px"}>
        YOUR CONTENT AND DATA
      </Flex>
      <Flex fontStyle={"14px"}>
        We claim no intellectual property rights over the data and material you
        provide to the Service. All materials uploaded remain yours.
      </Flex>
      <Flex fontStyle={"14px"}>
        “Data” means any data and content you upload, post, transmit or
        otherwise make available via the Services including messages you send,
        files you upload, comments you make on files, profile information and
        anything else you enter or upload into the Service. Citiverse will make
        commercially reasonable efforts to ensure that all facilities used to
        store and process Your Data meet a high standard for security.
      </Flex>
      <Flex fontStyle={"14px"}>
        In order for us to provide services to you, we require that you grant us
        certain rights with respect to your Data. For example, we need to be
        able to transmit, store and copy your Data in order to display it to you
        and your colleagues, to index it so you are able to search it, to make
        backups to prevent data loss, and so on. Your acceptance of this TOS
        gives us the permission to do so and grants us any such rights necessary
        to provide the service to you, only for the purpose of providing the
        service (and for no other purpose). This permission includes allowing us
        to use third-party service providers (for example Amazon Web Services)
        in the operation and administration of the Service and the rights
        granted to us are extended to these third parties to the degree
        necessary in order for the Service to be provided. Depending on the
        service, this may involve moving your data across jurisdictional lines,
        or across country borders.
      </Flex>
      <Flex fontStyle={"14px"}>
        The Company will not share, disclose, sell, lease, modify, delete or
        distribute any Data provided by you in any manner. The Company will also
        not view the Data provided by you except when given permission by you
        for the purpose of support.
      </Flex>
      <Flex fontStyle={"14px"}>
        You agree that Citiverse may include your business name in a list of
        Citiverse’s customers online and in print and electronic marketing
        materials in an appropriate fashion. If you’d prefer to not have your
        details included please email us at marketing@Citiverse.com
      </Flex>
      <Flex fontSize={"14px"}>CONDUCT ON Citiverse Platform</Flex>
      <Flex fontSize={"14px"}>You may not use the Citiverse Platform to:</Flex>
      <Flex fontSize={"14px"}>
        Upload, post, transmit, or otherwise make available any of Your Data
        that is unlawful, harmful, threatening, abusive, harassing, tortious,
        defamatory, vulgar, obscene, libellous, invasive of another’s privacy,
        hateful, or racially, ethnically, or otherwise objectionable
      </Flex>
      <Flex fontSize={"14px"}>
        Upload or transmit images that contain nudity, weapons, violence or
        drugs
      </Flex>
      <Flex fontSize={"14px"}>
        Impersonate, or misrepresent your relationship with, any person or
        entity
      </Flex>
      <Flex fontSize={"14px"}>
        Upload or transmit any Content that you do not have a right to make
        available, or that infringes any patent, trademark, trade secret,
        copyright, privacy, or other proprietary rights of any party;y
      </Flex>
      <Flex fontSize={"14px"}>
        You are solely liable and responsible for your interactions with other
        users. We reserve the right to monitor disputes between you and other
        users, but we have no obligation to do so.
      </Flex>
      <Flex fontSize={"14px"}>
        We reserve the right to terminate any account that is in breach of these
        terms
      </Flex>
      <Flex fontSize={"14px"} fontWeight={700}>
        BILLING
      </Flex>
      <Flex fontSize={"14px"}>
        You are not obligated to purchase any of the Services. if You elect to
        purchase Service packages or additional Services, you may elect to
        provide a credit card or other payment mechanism selected by You.
      </Flex>
      <Flex fontSize={"14px"}>
        You agree that the Company may charge to Your credit card or other
        payment mechanism selected by You and approved by the Company for Your
        Prepaid Account (“Your Account”) and all amounts due and owing for the
        Services, including service fees, subscription fees or any other fee or
        charge associated with Your use of the Services. if there are any
        annual, monthly or similar periodic fees for Your subscription, these
        fees will be billed automatically to the credit card designated during
        the registration process for the Services, or subsequently designated to
        the Company at the start of the subscription period and at the start of
        each renewal period, unless You terminate Your subscription before the
        relevant period begins.
      </Flex>
      <Flex fontSize={"14px"}>
        Prices of all Services are subject to change at any time. The company
        will strive wherever possible to give advance notice. Such notice may be
        provided at any time by posting the changes to the Citiverse website or
        the Service itself.
      </Flex>
      <Flex fontSize={"14px"}>
        All payments authorized by you into our account are final. There is no
        refunding of your payments regardless of whether you use the Services or
        not.
      </Flex>
      <Flex fontSize={"14px"}>
        In connection with your purchase and/or use of the Service you may be
        subject to taxes, including, without limitation, sales and use taxes, by
        any authority which has jurisdiction to impose such taxes. You agree
        that the obligation and payment of any such taxes shall be your sole and
        absolute responsibility, and you agree to indemnify Citiverse to the
        extent that Citiverse incurs any obligations or other liabilities in
        connection with such taxes.
      </Flex>
      <Flex fontSize={"14px"} fontWeight={700}>
        CHANGING YOUR SERVICE LEVEL
      </Flex>
      <Flex fontSize={"14px"}>
        Some services provided by Citiverse allow you to upgrade or downgrade your
        service levels.
      </Flex>
      <Flex fontSize={"14px"}>
        If you upgrade your service level from one package to a higher priced
        package, the Company will charge you thus: 1) if you pay monthly, your
        first payment will be the difference between the higher priced package
        and your current package price, whereby monies received by Company for
        your current package price is pro-rated based on the actual number of
        days until your scheduled monthly payment date. Your regularly scheduled
        monthly payment date will remain the same as your initial purchase date,
        with subsequent monthly charges at the higher package price.
      </Flex>
      <Flex fontSize={"14px"}>
        If you purchase or upgrade additional services that are charged on a
        monthly basis, your first payment for those additional services will be
        the price of the additional services pro-rated based on the actual
        number of days until your next monthly payment date. Your scheduled
        monthly payment date will remain the same as your initial purchase date,
        with the full price of the additional services reflected in subsequent
        monthly charges. If you purchase additional services that are charged on
        an annual basis, your first payment for those additional services will
        be the full price of the additional service. The renewal date for such
        annual additional services will be the date of upgrade the subsequent
        year.
      </Flex>
      <Flex fontSize={"14px"}>
        There are limited package downgrade options available and no refunds.
        Subscribers that wish to move from a higher priced package to a
        lower-priced package must let the current service level expire then
        repurchase at the desired service level (or use the Free version if
        available).
      </Flex>
      <Flex fontSize={"14px"}>
        Subscribers that wish to remove additional services from their account
        must let the current additional services expire first then repurchase
        any desired additional services. No refunds available
      </Flex>
      <Flex fontSize={"14px"}>
        There are limited package downgrade options available and no refunds.
        Subscribers that wish to move from a higher priced package to a
        lower-priced package must let the current service level expire then
        repurchase at the desired service level (or use the Free version if
        available).
      </Flex>
      <Flex fontSize={"14px"} fontWeight={700}>
        CANCELLATION OF ACCOUNT
      </Flex>
      <Flex fontSize={"14px"}>
        You are solely responsible for properly cancelling your account. An
        email or phone request to cancel your account is not considered
        cancellation. You can cancel your account at any time by accessing the
        subscription settings panel in your settings page.
      </Flex>
      <Flex fontSize={"14px"}>
        All of your content will immediately be inaccessible from the Service
        upon cancellation. Within 30 days, all this content will be permanently
        deleted from all backups and logs. This information cannot be recovered
        once it has been permanently deleted.
      </Flex>
      <Flex fontSize={"14px"}>
        The Company, in its sole discretion, has the right to suspend or
        terminate your account and refuse any and all current or future use of
        the Service for any reason at any time. Such termination of the Service
        will result in the deactivation or deletion of your Account or your
        access to your Account, and the forfeiture and relinquishment of all
        content in your account. The Company reserves the right to refuse
        service to anyone for any reason at any time.
      </Flex>
      <Flex fontSize={"14px"} fontWeight={700}>
        ABUSE OF FEATURES
      </Flex>
      <Flex fontSize={"14px"}>
        The features made available through the Citiverse services are intended
        for the normal use of the software. Abuse of features may result in a
        ban or removal of service. (E.g: Do not use reply-by-email address in
        automated systems such as Google Alerts etc. Do not auto-direct emails
        to a specific reply-by-email Citiverse email address) RSS feeds used where
        Citiverse data is published publicly may be disabled. RSS feeds are
        intended for private consumption only.
      </Flex>
      <Flex fontSize={"14px"}>
        In extreme cases, we reserve the right to temporarily suspend your
        account if your usage significantly exceeds the average usage of other
        Service customers and/or there’s a danger that your usage of the
        services is causing disruption to other users. We’ll always attempt to
        reach out to the account owner before taking any action except in rare
        cases where the level of use may negatively, immediately impact the
        performance of the Service for other customers.
      </Flex>
      <Flex fontSize={"14px"} fontWeight={700}>
        NO RESELLING OR USE OUTSIDE OF PERMITTED TERMS
      </Flex>
      <Flex fontSize={"14px"}>
        Other than using the Services as permitted under the terms and
        conditions of this Agreement or other written agreements between you and
        the Company, “You” may not resell, distribute, make any commercial use
        of, or use on a time-share or service bureau basis.
      </Flex>
      <Flex fontSize={"14px"} fontWeight={700}>
        USE OF THIRD PARTY APPLICATIONS AND API ACCESS
      </Flex>
      <Flex fontSize={"14px"}>
        If you elect to utilize any third-party application in connection with
        your use of the Service, by doing so you are consenting to your Content
        being shared with such third-party application. To understand how such
        third party application provider utilizes your Content and other
        information, you should review their privacy policy. You expressly
        understand and agree that the Company shall not be liable for any
        damages or losses resulting from your use of the API or third-party
        products that access data via the API.
      </Flex>
      <Flex fontSize={"14px"}>
        Abuse or excessively frequent requests to the Service via the API may
        result in the temporary or permanent suspension of your account’s access
        to the API. The Company, in its sole discretion, will determine abuse or
        excessive usage of the API. The Company will make a reasonable attempt
        via email to warn the account owner prior to suspension.
      </Flex>
      <Flex fontSize={"14px"} fontWeight={700}>
        PROPRIETARY RIGHTS
      </Flex>
      <Flex fontSize={"14px"}>
        The Company and/or its suppliers, as applicable, retain ownership of all
        proprietary rights in the Services and in all trade names, trademarks
        and servicemarks associated or displayed with the Services. You will not
        remove, deface or obscure any of the Company’s or its suppliers’
        copyright or trademark notices and/or legends or other proprietary
        notices on, incorporated therein or associated with the Services. You
        may not reverse engineer, reverse compile or otherwise reduce to human
        readable form any software associated with the Services.
      </Flex>
      <Flex fontSize={"14px"}>DISCLAIMER; limitation of liability</Flex>
      <Flex fontSize={"14px"}>
        Disclaimer. Neither any opinion, advice or statement of us or our
        affiliates, licensors, suppliers, agents or visitors, whether made on
        our website or otherwise nor the results of any operation of the Service
        by you constitute representations or warranties of us or give rise to
        any rights of reliance or otherwise for the benefit of you or any third
        party. You are responsible for implementing sufficient procedures and
        checkpoints to satisfy your particular requirements for accuracy of data
        input and output, and for maintaining a means external to this website
        for the reconstruction of any lost data. We do not assume any
        responsibility or risk for your use of our Service and the Internet. ANY
        AND ALL SERVICES PROVIDED BY US TO YOU ARE PROVIDED “AS IS”, WITHOUT
        WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SATISFACTORY
        QUALITY AND NONINFRINGEMENT AND ALL WARRANTIES THAT MAY ARISE FROM
        COURSE OF DEALING, COURSE OF PERFORMANCE OR USAGE OF TRADE. Applicable
        law may not allow the exclusion of implied warranties, so the above
        exclusions may not apply to you. WE AND OUR AFFILIATES, LICENSORS,
        SUPPLIERS, AND AGENTS DO NOT WARRANT THAT YOUR USE OF OUR WEBSITE OR
        MATERIALS WILL BE UNINTERRUPTED, ERROR-FREE OR SECURE, THAT DEFECTS WILL
        BE CORRECTED OR THAT OUR WEBSITE, THE SERVER(S) ON WHICH OUR WEBSITE IS
        HOSTED OR OUR MATERIALS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
        Without limiting the generality of the foregoing, we hereby disclaim any
        and all liability for any damage to or other impact on your equipment,
        hardware, software, data or other information or materials, whether or
        not caused by or related to (either directly or indirectly) your use of
        the Service, including but not limited to claims relating to faulty,
        malfunctioning or inoperable Service.
      </Flex>
      <Flex fontSize={"14px"}>
        Limitation of Liability. IN NO EVENT WILL WE NOR ANY OF OUR AFFILIATES,
        LICENSORS SUPPLIERS OR AGENTS, NOR OUR OR THEIR DIRECTORS, OFFICERS,
        EMPLOYEES, CONSULTANTS, AGENTS OR OTHER REPRESENTATIVES (“INDEMNIFIED
        PARTIES”), BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL OR PUNITIVE DAMAGES OR DAMAGES FOR LOSS OF PROFITS,
        REVENUE, BUSINESS, SAVINGS, DATA, USE OR COST OF SUBSTITUTE PROCUREMENT,
        INCURRED BY YOU OR ANY THIRD PARTY, WHETHER IN AN ACTION IN CONTRACT,
        TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED
        OF THE POSSIBILITY OF SUCH DAMAGES OR IF SUCH DAMAGES ARE FORESEEABLE.
        YOUR SOLE REMEDY FOR DISSATISFACTION WITH OUR WEBSITE, MATERIALS OR ANY
        LINKED SITE IS TO STOP USING THEM. THE SOLE AND EXCLUSIVE MAXIMUM
        LIABILITY OF ALL INDEMNIFIED PARTIES COLLECTIVELY FOR ALL DAMAGES,
        LOSSES AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING
        NEGLIGENCE) OR OTHERWISE, SHALL BE THE TOTAL AMOUNT PAID BY YOU, IF ANY,
        TO ACCESS OR use OUR WEBSITE OR OUR MATERIALS. YOUR USE OF OUR WEBSITE
        AND ANY MATERIALS PROVIDED THROUGH OUR WEBSITE IS ENTIRELY AT YOUR OWN
        RISK. You acknowledge that the limitations of liability in these Terms
        and the allocation of risk herein are an essential element of the
        bargain between you and us, without which we would not have provided the
        Service. Our pricing reflects this allocation of risk and the limitation
        of liability specified herein.
      </Flex>
      <Flex fontSize={"14px"} borderBottom={"1px solid #313133"} mb={"40px"} height={"40px"}>
        If you have any questions regarding this Agreement or if you wish to
        discuss the terms of service contained herein please contact Citiverse by
        email support@Citiverse.com
      </Flex>
      </Flex>
      <Flex>
      {/* <Image
          w={"260px"}
          height={"40px"}
          src="/assets/images/logo_citiverse.png"
          alt="icon_city"
        /> */}
      </Flex>
        <Flex justifyContent={"center"} fontWeight={500} fontSize={"14px"} height={"80px"} lineHeight={"18px"} opacity={"60%"}>© 2024 Citiverse. All rights reserved</Flex>
    </Flex>

  );
};

export default Terms;


