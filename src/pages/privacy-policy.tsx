import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Meta } from "../containers/Meta";
import Policy from "../components/Policy";


const PrivacyPolicy = () => {
    return (
        <Flex>
            <Meta title={"Privacy Policy"} description={"A virtual city inside Citiverse with 50+ 3D/VR NFTs built by designers & architects from Citiverse Professional Network, on Starknet blockchain"}/>
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
