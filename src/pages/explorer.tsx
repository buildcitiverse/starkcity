import { Flex, useMediaQuery } from "@chakra-ui/react";
import { ReactNode } from "react";
import MetaCityMap from "../components/MetaCityMap";
import { Meta } from "../containers/Meta";
import MapMobile from "../components/MetaCityMap/MapMobile";


const MetaCity = () => {
    // single media query with no options
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')

    return (
        <Flex>
            <Meta title={"City Explorer"} description={"A virtual city inside Citiverse with 50+ 3D/VR NFTs built by designers & architects from Citiverse Professional Network, on Starknet blockchain"}/>
            {isLargerThan1200 ? <MetaCityMap /> : <MapMobile/> }
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