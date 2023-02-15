import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const DropDownList = ({dropdown}) => (
  <Dropdown
    menu={{
      dropdown,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropDownList;
