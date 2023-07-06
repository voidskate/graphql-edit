import { useState } from "react";
import { Card } from "antd";

import { EditOutlined } from "@ant-design/icons";

import EditCharaForm from "../forms/EditCharaForm";

const someStyling = () => ({
    card: {
        width: "500px"
    }
})

const Chara = (props) => {
    const {id, firstName, lastName} = props;
    const [editMode, setEditMode] = useState(false);

    const styles = someStyling();

    const editClick = () => {
        setEditMode(!editMode);
    }

    return (
        <>
            {editMode ? (
                <EditCharaForm
                    onBtnClick={editClick}
                    id={id}
                    firstName={firstName}
                    lastName={lastName}
                />
            ):
            
            (
                <Card
                    style={styles.card}
                    actions={[
                        <EditOutlined key="edit" onClick={editClick}/>
                    ]}
                >
                    {firstName} {lastName}
                </Card>
            )}
        </>
    )
}

export default Chara