import { useMutation } from '@apollo/client'
import { EDIT_CHARA } from '../../queries'

import { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'

const someStyling = () => ({
    form: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "14px 22px"
    },

    formItem: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: 0
    },

    flex: {
        marginBottom: "4px",
        marginTop: "10px",
        gridArea: "4 / 1 / 5 / 3",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "center",
        gridGap: "0 22px"
    },

    footerBtns: {
        width: "100%"
    }
})

const EditCharaForm = (props) => {
    let { id, firstName, lastName } = props;
	const [form] = Form.useForm();
	const [, forceUpdate] = useState();
	const [editChara] = useMutation(EDIT_CHARA);

    useEffect(() => {
        forceUpdate()
    }, [])

    const styles = someStyling();

    // SAVE CHANGES
    const saveCharaEdits = (values) => {
        const { firstName, lastName } = values;

        editChara({
            variables: {
                id,
                firstName,
                lastName
            }
        })

        props.onBtnClick()
    }

    

    return (
        <Form
            form={form}
            name="edit-chara-form"
            layout="vertical"
            size="large"
            style={styles.form}
            initialValues={{
				id, firstName, lastName
			}}
            onFinish={saveCharaEdits}
        >
            {/*----- INPUT: FIRST NAME -----*/}
            <Form.Item
                style={styles.formItem}
                label="First name:"
                name="firstName"
                rules={[{ required: true, message: "First name must not be empty" }]}
            >
                <Input placeholder="First name"/>
            </Form.Item>

            {/*----- INPUT: LAST NAME -----*/}
            <Form.Item
                style={styles.formItem}
                label="Last name:"
                name="lastName"
                rules={[{ required: true, message: "Last name must not be empty." }]}
            >
                <Input placeholder="Last name"/>
            </Form.Item>

            {/*----- BUTTONS: SUBMIT & CANCEL -----*/}
            <div style={styles.flex}>            
                <Form.Item
                    shouldUpdate={true}
                    style={{ marginBottom: 0 }}
                >
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={styles.footerBtns}
                            disabled={
                                (
                                    !form.isFieldTouched("id") &&
                                    !form.isFieldTouched("firstName") &&
                                    !form.isFieldTouched("lastName")
                                ) ||
                                form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >Save Changes</Button>
                    )}
                </Form.Item>

                <Button
                    onClick={() => props.onBtnClick()}
                    style={styles.footerBtns}
                >
                    Cancel
                </Button>
            </div>
        </Form>
    )
}

export default EditCharaForm