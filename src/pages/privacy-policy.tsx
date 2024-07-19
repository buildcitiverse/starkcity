import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Meta } from "../containers/Meta";
import Policy from "../components/Policy";


const PrivacyPolicy = () => {
    return (
        <Flex>
            <Meta title={"Privacy Policy"} description={""}/>
            <Policy/>
        </Flex>
    );
};

PrivacyPolicy.getLayout = (page: ReactNode) => <>{page}</>;

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 60 * 60 * 24, // In days
    };
}

export default PrivacyPolicy;
