import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import MetaCityMap from "../components/MetaCityMap";


const MetaCity = () => {
    return (
        <Flex>
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