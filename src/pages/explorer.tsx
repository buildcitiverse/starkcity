import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import MetaCityMap from "../components/MetaCityMap";
import { Meta } from "../containers/Meta";


const MetaCity = () => {
    return (
        <Flex>
            <Meta title={"City Explorer"} description={""}/>
            <MetaCityMap />
        </Flex>
    );
};

MetaCity.getLayout = (page: ReactNode) => <>{page}</>;

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 60 * 60 * 24, // In days
    };
}

export default MetaCity;