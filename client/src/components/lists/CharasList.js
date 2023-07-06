import { useQuery } from "@apollo/client";
import { GET_CHARAS } from "../../queries";
import { List } from "antd"

import Chara from "../listItems/Chara";

const someStyling = () => ({
    list: {
        display: "flex",
        justifyContent: "center",
        marginTop: "25vh"
    }
})

const CharasList = () => {
    const styles = someStyling();

    const { loading, error, data } = useQuery(GET_CHARAS);

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`

    console.log("data", data);

    return (
        <List
            grid={{ gutter: 20, column: 1}}
            style={styles.list}
        >
            { data.allCharas.map(({ id, firstName, lastName }) => (
                <List.Item key={id}>
                    <Chara id={id} firstName={firstName} lastName={lastName}/>
                </List.Item>
            ))}
        </List>
    )
}

export default CharasList