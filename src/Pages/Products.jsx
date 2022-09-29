import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import data from "../db.json"
import { Box ,Grid,Text, GridItem, Image} from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../AuthContext/AuthcontextProvider"

export default function Products(){
const {state, dispatch } = useContext(AppContext)

   
    return (
        <>
        <Box>
            <Box>
                <Grid templateColumns="repeat(4,1fr)" gap={5}>
                    {
                        state.data?.map((el)=>
                             <GridItem>
                                <Image src={el.image}/>
                                <Box>
                                    <Text>{el.title}</Text>
                                </Box>
                             </GridItem>
                        )
                    }

                </Grid>
            </Box>

        </Box>
        </>
    )
}