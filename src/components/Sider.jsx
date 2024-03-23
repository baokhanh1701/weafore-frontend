import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Sider = () => {
    const navigate = useNavigate()

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            // onBreakpoint={(broken) => {
            //     console.log(broken);
            // }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['0']}
                items={
                    [
                        { label: "Dashboard", key: "/home" },
                        { label: "Control Panel", key: "/control-panel" },
                        { label: "Schedule", key: "/schedule" }
                    ]
                }
                onClick={({ key }) => {
                    if (key === "signout") {
                        //TODO: SignOut
                    }
                    else {
                        //TODO: Navigate
                        navigate(key)
                    }
                }}
            />
        </Sider>
    )
}

export default Sider;